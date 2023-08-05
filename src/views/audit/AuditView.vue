<template>
    <div>
        <div class="gva-search-box">
            <el-card>
                <el-form :inline="true" :model="searchInfo">
                    <el-form-item label="请求方法">
                        <el-select v-model="searchInfo.method" placeholder="请输入请求方法">
                            <el-option v-for="(item, index) in method" :key="index" :label="item" :value="item" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请求路径">
                        <el-input v-model="searchInfo.path" placeholder="搜索条件" />
                    </el-form-item>
                    <el-form-item label="结果状态码">
                        <el-input v-model="searchInfo.status" placeholder="搜索条件" />
                    </el-form-item>
                    <el-form-item>
                        <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
                        <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
        <div class="gva-table-box mt-2">
            <el-card>
                <div>
                    <el-popover v-model="deleteVisible" placement="top" width="160">
                        <p>确定要删除吗？</p>
                        <div style="text-align: right; margin-top: 8px">
                            <el-button size="small" type="primary" link @click="deleteVisible = false">取消</el-button>
                            <el-button size="small" type="primary" @click="onDelete">确定</el-button>
                        </div>
                        <template #reference>
                            <el-button icon="delete" size="small" style="margin-left: 10px"
                                :disabled="!multipleSelection.length" @click="deleteVisible = true">删除</el-button>
                        </template>
                    </el-popover>
                </div>
                <el-table v-loading="loading" ref="multipleTable" :data="tableData" style="width: 100%"
                    tooltip-effect="dark" row-key="id" @selection-change="handleSelectionChange">
                    <el-table-column align="left" type="selection" width="55" />
                    <el-table-column align="center" label="操作人" width="200">
                        <template #default="scope">
                            <div>
                                {{ scope.row.user.userName }}({{ scope.row.user.nickName }})
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="创建时间" width="180">
                        <template #default="scope">{{
                            formatDate(scope.row.created_at)
                        }}</template>
                    </el-table-column>
                    <el-table-column align="center" label="状态码" prop="status" width="120">
                        <template #default="scope">
                            <div>
                                <el-tag type="success">{{ scope.row.status }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="left" label="请求IP" prop="ip" width="120" />
                    <el-table-column align="center" label="请求方法" prop="method" width="120" />
                    <el-table-column align="center" label="请求路径" prop="path" width="500" />
                    <el-table-column align="left" label="请求" prop="path" width="80">
                        <template #default="scope">
                            <div>
                                <el-popover v-if="scope.row.body" placement="left-start" trigger="click">
                                    <div class="popover-box">
                                        <pre>{{ fmtBody(scope.row.body) }}</pre>
                                    </div>
                                    <template #reference>
                                        <el-icon style="cursor: pointer">
                                            <warning />
                                        </el-icon>
                                    </template>
                                </el-popover>

                                <span v-else>无</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="left" label="响应" prop="path" width="80">
                        <template #default="scope">
                            <div>
                                <el-popover v-if="scope.row.resp" placement="left-start" trigger="click">
                                    <div class="popover-box">
                                        <pre>{{ fmtBody(scope.row.resp) }}</pre>
                                    </div>
                                    <template #reference>
                                        <el-icon style="cursor: pointer">
                                            <warning />
                                        </el-icon>
                                    </template>
                                </el-popover>
                                <span v-else>无</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="left" label="操作">
                        <template #default="scope">
                            <el-popover v-model="scope.row.visible" placement="top" width="160">
                                <p>确定要删除吗？</p>
                                <div style="text-align: right; margin-top: 8px">
                                    <el-button size="small" type="primary" link
                                        @click="scope.row.visible = false">取消</el-button>
                                    <el-button size="small" type="primary"
                                        @click="deleteSysOperationRecordFunc(scope.row)">确定</el-button>
                                </div>
                                <template #reference>
                                    <el-button icon="delete" size="small" type="primary" link
                                        @click="scope.row.visible = true">删除</el-button>
                                </template>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="gva-pagination mt-2">
                    <el-pagination :current-page="page" :page-size="pageSize" :page-sizes="[10, 30, 50, 100]" :total="total"
                        layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange"
                        @size-change="handleSizeChange" />
                </div>
            </el-card>
        </div>
    </div>
</template>
  
<script setup>
import {
    deleteSysOperationRecord,
    getSysOperationRecordList,
    deleteSysOperationRecordByIds,
} from "@/api/operatorAudit";
import { formatDate } from "@/utils/format";
import { ref } from "vue";
import { ElMessage } from "element-plus";

const loading = ref(true);
const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});
const method = ref(["GET", "POST", "PUT", "DELETE", "OPTIONS"]);
const onReset = () => {
    searchInfo.value = {};
    getTableData();
};
// 条件搜索前端看此方法
const onSubmit = () => {
    page.value = 1;
    pageSize.value = 10;
    if (searchInfo.value.status === "") {
        searchInfo.value.status = null;
    }
    // console.log("Sending query to getSysOperationRecordList:", searchInfo.value);
    getTableData();
};

// 分页
const handleSizeChange = (val) => {
    pageSize.value = val;
    getTableData();
};

const handleCurrentChange = (val) => {
    page.value = val;
    getTableData();
};

// 查询
const getTableData = async () => {
    loading.value = true;
    const table = await getSysOperationRecordList({
        page: page.value,
        pageSize: pageSize.value,
        ...searchInfo.value,
    });
    if (table) {
        tableData.value = table.data.list;
        total.value = table.data.total;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        loading.value = false;
    }
};

getTableData();

const deleteVisible = ref(false);
const multipleSelection = ref([]);
const handleSelectionChange = (val) => {
    multipleSelection.value = val;
};
const onDelete = async () => {
    const ids = [];
    multipleSelection.value &&
        multipleSelection.value.forEach((item) => {
            ids.push(item.id);
        });
    const res = await deleteSysOperationRecordByIds({ ids });
    if (res) {
        ElMessage({
            type: "success",
            message: "删除成功",
        });
        if (tableData.value.length === ids.length && page.value > 1) {
            page.value--;
        }
        deleteVisible.value = false;
        getTableData();
    }
};
const deleteSysOperationRecordFunc = async (row) => {
    row.visible = false;
    const res = await deleteSysOperationRecord(row.id);
    if (res) {
        ElMessage({
            type: "success",
            message: "删除成功",
        });
        if (tableData.value.length === 1 && page.value > 1) {
            page.value--;
        }
        getTableData();
    }
};
const fmtBody = (value) => {
    try {
        return JSON.parse(value);
    } catch (err) {
        return value;
    }
};
</script>
  
<script>
export default {
    name: "SysOperationRecord",
};
</script>
  
<style lang="scss">
.table-expand {
    padding-left: 60px;
    font-size: 0;

    label {
        width: 90px;
        color: #99a9bf;

        .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
            width: 50%;
        }
    }
}

.popover-box {
    background: #112435;
    color: #f08047;
    height: 600px;
    width: 420px;
    overflow: auto;
}

.popover-box::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}
</style>
  