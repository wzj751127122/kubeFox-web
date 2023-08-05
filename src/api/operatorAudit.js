import request from "@/utils/request";



// export function getSysOperationRecordList (query) {
//     console.log("Sending request to /api/operation/get_operations with query:", query);
//     return request({
//         url: "/api/operation/get_operations",
//         method: "get",
//         params: query,
//     }).then(response => {
//         console.log("Received response:", response);
//         return response;
//     });
// }
export function getSysOperationRecordList(query){
    return request({
        url: "/api/operation/get_operations",
        method: "get",
        params: query,
    });
}

export function deleteSysOperationRecord (id) {
    return request({
        url: `/api/operation/${id}/delete_operation`,
        method: "delete",
    });
}

export function deleteSysOperationRecordByIds (data) {
    return request({
        url: "/api/operation/delete_operations",
        method: "post",
        data,
    });
}
