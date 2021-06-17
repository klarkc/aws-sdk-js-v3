"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateSubnetGroupCommand = exports.deserializeAws_json1_1UpdateParameterGroupCommand = exports.deserializeAws_json1_1UpdateClusterCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1RebootNodeCommand = exports.deserializeAws_json1_1ListTagsCommand = exports.deserializeAws_json1_1IncreaseReplicationFactorCommand = exports.deserializeAws_json1_1DescribeSubnetGroupsCommand = exports.deserializeAws_json1_1DescribeParametersCommand = exports.deserializeAws_json1_1DescribeParameterGroupsCommand = exports.deserializeAws_json1_1DescribeEventsCommand = exports.deserializeAws_json1_1DescribeDefaultParametersCommand = exports.deserializeAws_json1_1DescribeClustersCommand = exports.deserializeAws_json1_1DeleteSubnetGroupCommand = exports.deserializeAws_json1_1DeleteParameterGroupCommand = exports.deserializeAws_json1_1DeleteClusterCommand = exports.deserializeAws_json1_1DecreaseReplicationFactorCommand = exports.deserializeAws_json1_1CreateSubnetGroupCommand = exports.deserializeAws_json1_1CreateParameterGroupCommand = exports.deserializeAws_json1_1CreateClusterCommand = exports.serializeAws_json1_1UpdateSubnetGroupCommand = exports.serializeAws_json1_1UpdateParameterGroupCommand = exports.serializeAws_json1_1UpdateClusterCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1RebootNodeCommand = exports.serializeAws_json1_1ListTagsCommand = exports.serializeAws_json1_1IncreaseReplicationFactorCommand = exports.serializeAws_json1_1DescribeSubnetGroupsCommand = exports.serializeAws_json1_1DescribeParametersCommand = exports.serializeAws_json1_1DescribeParameterGroupsCommand = exports.serializeAws_json1_1DescribeEventsCommand = exports.serializeAws_json1_1DescribeDefaultParametersCommand = exports.serializeAws_json1_1DescribeClustersCommand = exports.serializeAws_json1_1DeleteSubnetGroupCommand = exports.serializeAws_json1_1DeleteParameterGroupCommand = exports.serializeAws_json1_1DeleteClusterCommand = exports.serializeAws_json1_1DecreaseReplicationFactorCommand = exports.serializeAws_json1_1CreateSubnetGroupCommand = exports.serializeAws_json1_1CreateParameterGroupCommand = exports.serializeAws_json1_1CreateClusterCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.CreateCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
const serializeAws_json1_1CreateParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.CreateParameterGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateParameterGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateParameterGroupCommand = serializeAws_json1_1CreateParameterGroupCommand;
const serializeAws_json1_1CreateSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.CreateSubnetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSubnetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSubnetGroupCommand = serializeAws_json1_1CreateSubnetGroupCommand;
const serializeAws_json1_1DecreaseReplicationFactorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DecreaseReplicationFactor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DecreaseReplicationFactorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DecreaseReplicationFactorCommand = serializeAws_json1_1DecreaseReplicationFactorCommand;
const serializeAws_json1_1DeleteClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DeleteCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteClusterCommand = serializeAws_json1_1DeleteClusterCommand;
const serializeAws_json1_1DeleteParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DeleteParameterGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteParameterGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteParameterGroupCommand = serializeAws_json1_1DeleteParameterGroupCommand;
const serializeAws_json1_1DeleteSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DeleteSubnetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubnetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSubnetGroupCommand = serializeAws_json1_1DeleteSubnetGroupCommand;
const serializeAws_json1_1DescribeClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DescribeClusters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeClustersCommand = serializeAws_json1_1DescribeClustersCommand;
const serializeAws_json1_1DescribeDefaultParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DescribeDefaultParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDefaultParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDefaultParametersCommand = serializeAws_json1_1DescribeDefaultParametersCommand;
const serializeAws_json1_1DescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DescribeEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
const serializeAws_json1_1DescribeParameterGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DescribeParameterGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeParameterGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeParameterGroupsCommand = serializeAws_json1_1DescribeParameterGroupsCommand;
const serializeAws_json1_1DescribeParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DescribeParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeParametersCommand = serializeAws_json1_1DescribeParametersCommand;
const serializeAws_json1_1DescribeSubnetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.DescribeSubnetGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubnetGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSubnetGroupsCommand = serializeAws_json1_1DescribeSubnetGroupsCommand;
const serializeAws_json1_1IncreaseReplicationFactorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.IncreaseReplicationFactor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1IncreaseReplicationFactorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1IncreaseReplicationFactorCommand = serializeAws_json1_1IncreaseReplicationFactorCommand;
const serializeAws_json1_1ListTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.ListTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
const serializeAws_json1_1RebootNodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.RebootNode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootNodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebootNodeCommand = serializeAws_json1_1RebootNodeCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.UpdateCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateClusterCommand = serializeAws_json1_1UpdateClusterCommand;
const serializeAws_json1_1UpdateParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.UpdateParameterGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateParameterGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateParameterGroupCommand = serializeAws_json1_1UpdateParameterGroupCommand;
const serializeAws_json1_1UpdateSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDAXV3.UpdateSubnetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSubnetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSubnetGroupCommand = serializeAws_json1_1UpdateSubnetGroupCommand;
const deserializeAws_json1_1CreateClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateClusterCommand = deserializeAws_json1_1CreateClusterCommand;
const deserializeAws_json1_1CreateClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterAlreadyExistsFault":
        case "com.amazonaws.dax#ClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterQuotaForCustomerExceededFault":
        case "com.amazonaws.dax#ClusterQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.dax#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterGroupStateFault":
        case "com.amazonaws.dax#InvalidParameterGroupStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForClusterExceededFault":
        case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
            response = {
                ...(await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupNotFoundFault":
        case "com.amazonaws.dax#ParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupNotFoundFault":
        case "com.amazonaws.dax#SubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateParameterGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateParameterGroupCommand = deserializeAws_json1_1CreateParameterGroupCommand;
const deserializeAws_json1_1CreateParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterGroupStateFault":
        case "com.amazonaws.dax#InvalidParameterGroupStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupAlreadyExistsFault":
        case "com.amazonaws.dax#ParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupQuotaExceededFault":
        case "com.amazonaws.dax#ParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSubnetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSubnetGroupCommand = deserializeAws_json1_1CreateSubnetGroupCommand;
const deserializeAws_json1_1CreateSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidSubnet":
        case "com.amazonaws.dax#InvalidSubnet":
            response = {
                ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupAlreadyExistsFault":
        case "com.amazonaws.dax#SubnetGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupQuotaExceededFault":
        case "com.amazonaws.dax#SubnetGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetQuotaExceededFault":
        case "com.amazonaws.dax#SubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DecreaseReplicationFactorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DecreaseReplicationFactorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DecreaseReplicationFactorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DecreaseReplicationFactorCommand = deserializeAws_json1_1DecreaseReplicationFactorCommand;
const deserializeAws_json1_1DecreaseReplicationFactorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeNotFoundFault":
        case "com.amazonaws.dax#NodeNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteClusterCommand = deserializeAws_json1_1DeleteClusterCommand;
const deserializeAws_json1_1DeleteClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteParameterGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteParameterGroupCommand = deserializeAws_json1_1DeleteParameterGroupCommand;
const deserializeAws_json1_1DeleteParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterGroupStateFault":
        case "com.amazonaws.dax#InvalidParameterGroupStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupNotFoundFault":
        case "com.amazonaws.dax#ParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSubnetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSubnetGroupCommand = deserializeAws_json1_1DeleteSubnetGroupCommand;
const deserializeAws_json1_1DeleteSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupInUseFault":
        case "com.amazonaws.dax#SubnetGroupInUseFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupInUseFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupNotFoundFault":
        case "com.amazonaws.dax#SubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeClustersCommand = deserializeAws_json1_1DescribeClustersCommand;
const deserializeAws_json1_1DescribeClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDefaultParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDefaultParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDefaultParametersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDefaultParametersCommand = deserializeAws_json1_1DescribeDefaultParametersCommand;
const deserializeAws_json1_1DescribeDefaultParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
const deserializeAws_json1_1DescribeEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeParameterGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeParameterGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeParameterGroupsCommand = deserializeAws_json1_1DescribeParameterGroupsCommand;
const deserializeAws_json1_1DescribeParameterGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupNotFoundFault":
        case "com.amazonaws.dax#ParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeParametersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeParametersCommand = deserializeAws_json1_1DescribeParametersCommand;
const deserializeAws_json1_1DescribeParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupNotFoundFault":
        case "com.amazonaws.dax#ParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeSubnetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubnetGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSubnetGroupsCommand = deserializeAws_json1_1DescribeSubnetGroupsCommand;
const deserializeAws_json1_1DescribeSubnetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupNotFoundFault":
        case "com.amazonaws.dax#SubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1IncreaseReplicationFactorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1IncreaseReplicationFactorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IncreaseReplicationFactorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1IncreaseReplicationFactorCommand = deserializeAws_json1_1IncreaseReplicationFactorCommand;
const deserializeAws_json1_1IncreaseReplicationFactorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.dax#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForClusterExceededFault":
        case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
            response = {
                ...(await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
const deserializeAws_json1_1ListTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidARNFault":
        case "com.amazonaws.dax#InvalidARNFault":
            response = {
                ...(await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RebootNodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebootNodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootNodeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebootNodeCommand = deserializeAws_json1_1RebootNodeCommand;
const deserializeAws_json1_1RebootNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeNotFoundFault":
        case "com.amazonaws.dax#NodeNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidARNFault":
        case "com.amazonaws.dax#InvalidARNFault":
            response = {
                ...(await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidARNFault":
        case "com.amazonaws.dax#InvalidARNFault":
            response = {
                ...(await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagNotFoundFault":
        case "com.amazonaws.dax#TagNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1TagNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateClusterCommand = deserializeAws_json1_1UpdateClusterCommand;
const deserializeAws_json1_1UpdateClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.dax#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.dax#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterGroupStateFault":
        case "com.amazonaws.dax#InvalidParameterGroupStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupNotFoundFault":
        case "com.amazonaws.dax#ParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateParameterGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateParameterGroupCommand = deserializeAws_json1_1UpdateParameterGroupCommand;
const deserializeAws_json1_1UpdateParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.dax#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterGroupStateFault":
        case "com.amazonaws.dax#InvalidParameterGroupStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.dax#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParameterGroupNotFoundFault":
        case "com.amazonaws.dax#ParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSubnetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSubnetGroupCommand = deserializeAws_json1_1UpdateSubnetGroupCommand;
const deserializeAws_json1_1UpdateSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidSubnet":
        case "com.amazonaws.dax#InvalidSubnet":
            response = {
                ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetGroupNotFoundFault":
        case "com.amazonaws.dax#SubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetInUse":
        case "com.amazonaws.dax#SubnetInUse":
            response = {
                ...(await deserializeAws_json1_1SubnetInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetQuotaExceededFault":
        case "com.amazonaws.dax#SubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterAlreadyExistsFault(body, context);
    const contents = {
        name: "ClusterAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterNotFoundFault(body, context);
    const contents = {
        name: "ClusterNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(body, context);
    const contents = {
        name: "ClusterQuotaForCustomerExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientClusterCapacityFault(body, context);
    const contents = {
        name: "InsufficientClusterCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidARNFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidARNFault(body, context);
    const contents = {
        name: "InvalidARNFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClusterStateFault(body, context);
    const contents = {
        name: "InvalidClusterStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
    const contents = {
        name: "InvalidParameterCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterGroupStateFault(body, context);
    const contents = {
        name: "InvalidParameterGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSubnet(body, context);
    const contents = {
        name: "InvalidSubnet",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidVPCNetworkStateFault(body, context);
    const contents = {
        name: "InvalidVPCNetworkStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NodeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NodeNotFoundFault(body, context);
    const contents = {
        name: "NodeNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NodeQuotaForClusterExceededFault(body, context);
    const contents = {
        name: "NodeQuotaForClusterExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(body, context);
    const contents = {
        name: "NodeQuotaForCustomerExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(body, context);
    const contents = {
        name: "ParameterGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterGroupNotFoundFault(body, context);
    const contents = {
        name: "ParameterGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterGroupQuotaExceededFault(body, context);
    const contents = {
        name: "ParameterGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(body, context);
    const contents = {
        name: "ServiceLinkedRoleNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(body, context);
    const contents = {
        name: "SubnetGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupInUseFault(body, context);
    const contents = {
        name: "SubnetGroupInUseFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupNotFoundFault(body, context);
    const contents = {
        name: "SubnetGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupQuotaExceededFault(body, context);
    const contents = {
        name: "SubnetGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetInUse(body, context);
    const contents = {
        name: "SubnetInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetQuotaExceededFault(body, context);
    const contents = {
        name: "SubnetQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagNotFoundFault(body, context);
    const contents = {
        name: "TagNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagQuotaPerResourceExceeded(body, context);
    const contents = {
        name: "TagQuotaPerResourceExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AvailabilityZoneList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ClusterNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    return {
        ...(input.AvailabilityZones !== undefined &&
            input.AvailabilityZones !== null && {
            AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
        }),
        ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
        ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
        ...(input.NotificationTopicArn !== undefined &&
            input.NotificationTopicArn !== null && { NotificationTopicArn: input.NotificationTopicArn }),
        ...(input.ParameterGroupName !== undefined &&
            input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
        ...(input.PreferredMaintenanceWindow !== undefined &&
            input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
        ...(input.ReplicationFactor !== undefined &&
            input.ReplicationFactor !== null && { ReplicationFactor: input.ReplicationFactor }),
        ...(input.SSESpecification !== undefined &&
            input.SSESpecification !== null && {
            SSESpecification: serializeAws_json1_1SSESpecification(input.SSESpecification, context),
        }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetGroupName !== undefined &&
            input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateParameterGroupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ParameterGroupName !== undefined &&
            input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    };
};
const serializeAws_json1_1CreateSubnetGroupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.SubnetGroupName !== undefined &&
            input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
    };
};
const serializeAws_json1_1DecreaseReplicationFactorRequest = (input, context) => {
    return {
        ...(input.AvailabilityZones !== undefined &&
            input.AvailabilityZones !== null && {
            AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
        }),
        ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
        ...(input.NewReplicationFactor !== undefined &&
            input.NewReplicationFactor !== null && { NewReplicationFactor: input.NewReplicationFactor }),
        ...(input.NodeIdsToRemove !== undefined &&
            input.NodeIdsToRemove !== null && {
            NodeIdsToRemove: serializeAws_json1_1NodeIdentifierList(input.NodeIdsToRemove, context),
        }),
    };
};
const serializeAws_json1_1DeleteClusterRequest = (input, context) => {
    return {
        ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    };
};
const serializeAws_json1_1DeleteParameterGroupRequest = (input, context) => {
    return {
        ...(input.ParameterGroupName !== undefined &&
            input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    };
};
const serializeAws_json1_1DeleteSubnetGroupRequest = (input, context) => {
    return {
        ...(input.SubnetGroupName !== undefined &&
            input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
    };
};
const serializeAws_json1_1DescribeClustersRequest = (input, context) => {
    return {
        ...(input.ClusterNames !== undefined &&
            input.ClusterNames !== null && {
            ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeDefaultParametersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeEventsRequest = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SourceName !== undefined && input.SourceName !== null && { SourceName: input.SourceName }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1DescribeParameterGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParameterGroupNames !== undefined &&
            input.ParameterGroupNames !== null && {
            ParameterGroupNames: serializeAws_json1_1ParameterGroupNameList(input.ParameterGroupNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeParametersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParameterGroupName !== undefined &&
            input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    };
};
const serializeAws_json1_1DescribeSubnetGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SubnetGroupNames !== undefined &&
            input.SubnetGroupNames !== null && {
            SubnetGroupNames: serializeAws_json1_1SubnetGroupNameList(input.SubnetGroupNames, context),
        }),
    };
};
const serializeAws_json1_1IncreaseReplicationFactorRequest = (input, context) => {
    return {
        ...(input.AvailabilityZones !== undefined &&
            input.AvailabilityZones !== null && {
            AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
        }),
        ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
        ...(input.NewReplicationFactor !== undefined &&
            input.NewReplicationFactor !== null && { NewReplicationFactor: input.NewReplicationFactor }),
    };
};
const serializeAws_json1_1KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
    };
};
const serializeAws_json1_1NodeIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ParameterGroupNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ParameterNameValue = (input, context) => {
    return {
        ...(input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName }),
        ...(input.ParameterValue !== undefined &&
            input.ParameterValue !== null && { ParameterValue: input.ParameterValue }),
    };
};
const serializeAws_json1_1ParameterNameValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterNameValue(entry, context);
    });
};
const serializeAws_json1_1RebootNodeRequest = (input, context) => {
    return {
        ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
        ...(input.NodeId !== undefined && input.NodeId !== null && { NodeId: input.NodeId }),
    };
};
const serializeAws_json1_1SecurityGroupIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SSESpecification = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_json1_1SubnetGroupNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SubnetIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateClusterRequest = (input, context) => {
    return {
        ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.NotificationTopicArn !== undefined &&
            input.NotificationTopicArn !== null && { NotificationTopicArn: input.NotificationTopicArn }),
        ...(input.NotificationTopicStatus !== undefined &&
            input.NotificationTopicStatus !== null && { NotificationTopicStatus: input.NotificationTopicStatus }),
        ...(input.ParameterGroupName !== undefined &&
            input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
        ...(input.PreferredMaintenanceWindow !== undefined &&
            input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context),
        }),
    };
};
const serializeAws_json1_1UpdateParameterGroupRequest = (input, context) => {
    return {
        ...(input.ParameterGroupName !== undefined &&
            input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
        ...(input.ParameterNameValues !== undefined &&
            input.ParameterNameValues !== null && {
            ParameterNameValues: serializeAws_json1_1ParameterNameValueList(input.ParameterNameValues, context),
        }),
    };
};
const serializeAws_json1_1UpdateSubnetGroupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.SubnetGroupName !== undefined &&
            input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
    };
};
const deserializeAws_json1_1Cluster = (output, context) => {
    return {
        ActiveNodes: output.ActiveNodes !== undefined && output.ActiveNodes !== null ? output.ActiveNodes : undefined,
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        ClusterDiscoveryEndpoint: output.ClusterDiscoveryEndpoint !== undefined && output.ClusterDiscoveryEndpoint !== null
            ? deserializeAws_json1_1Endpoint(output.ClusterDiscoveryEndpoint, context)
            : undefined,
        ClusterName: output.ClusterName !== undefined && output.ClusterName !== null ? output.ClusterName : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
        NodeIdsToRemove: output.NodeIdsToRemove !== undefined && output.NodeIdsToRemove !== null
            ? deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToRemove, context)
            : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        Nodes: output.Nodes !== undefined && output.Nodes !== null
            ? deserializeAws_json1_1NodeList(output.Nodes, context)
            : undefined,
        NotificationConfiguration: output.NotificationConfiguration !== undefined && output.NotificationConfiguration !== null
            ? deserializeAws_json1_1NotificationConfiguration(output.NotificationConfiguration, context)
            : undefined,
        ParameterGroup: output.ParameterGroup !== undefined && output.ParameterGroup !== null
            ? deserializeAws_json1_1ParameterGroupStatus(output.ParameterGroup, context)
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        SSEDescription: output.SSEDescription !== undefined && output.SSEDescription !== null
            ? deserializeAws_json1_1SSEDescription(output.SSEDescription, context)
            : undefined,
        SecurityGroups: output.SecurityGroups !== undefined && output.SecurityGroups !== null
            ? deserializeAws_json1_1SecurityGroupMembershipList(output.SecurityGroups, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetGroup: output.SubnetGroup !== undefined && output.SubnetGroup !== null ? output.SubnetGroup : undefined,
        TotalNodes: output.TotalNodes !== undefined && output.TotalNodes !== null ? output.TotalNodes : undefined,
    };
};
const deserializeAws_json1_1ClusterAlreadyExistsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ClusterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Cluster(entry, context);
    });
};
const deserializeAws_json1_1ClusterNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CreateClusterResponse = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateParameterGroupResponse = (output, context) => {
    return {
        ParameterGroup: output.ParameterGroup !== undefined && output.ParameterGroup !== null
            ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateSubnetGroupResponse = (output, context) => {
    return {
        SubnetGroup: output.SubnetGroup !== undefined && output.SubnetGroup !== null
            ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DecreaseReplicationFactorResponse = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteClusterResponse = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteParameterGroupResponse = (output, context) => {
    return {
        DeletionMessage: output.DeletionMessage !== undefined && output.DeletionMessage !== null ? output.DeletionMessage : undefined,
    };
};
const deserializeAws_json1_1DeleteSubnetGroupResponse = (output, context) => {
    return {
        DeletionMessage: output.DeletionMessage !== undefined && output.DeletionMessage !== null ? output.DeletionMessage : undefined,
    };
};
const deserializeAws_json1_1DescribeClustersResponse = (output, context) => {
    return {
        Clusters: output.Clusters !== undefined && output.Clusters !== null
            ? deserializeAws_json1_1ClusterList(output.Clusters, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDefaultParametersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterList(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventList(output.Events, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeParameterGroupsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ParameterGroups: output.ParameterGroups !== undefined && output.ParameterGroups !== null
            ? deserializeAws_json1_1ParameterGroupList(output.ParameterGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeParametersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterList(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSubnetGroupsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SubnetGroups: output.SubnetGroups !== undefined && output.SubnetGroups !== null
            ? deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1Endpoint = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_json1_1Event = (output, context) => {
    return {
        Date: output.Date !== undefined && output.Date !== null ? new Date(Math.round(output.Date * 1000)) : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        SourceName: output.SourceName !== undefined && output.SourceName !== null ? output.SourceName : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
const deserializeAws_json1_1IncreaseReplicationFactorResponse = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1InsufficientClusterCapacityFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidARNFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidClusterStateFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterCombinationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterGroupStateFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSubnet = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidVPCNetworkStateFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1Node = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
        NodeCreateTime: output.NodeCreateTime !== undefined && output.NodeCreateTime !== null
            ? new Date(Math.round(output.NodeCreateTime * 1000))
            : undefined,
        NodeId: output.NodeId !== undefined && output.NodeId !== null ? output.NodeId : undefined,
        NodeStatus: output.NodeStatus !== undefined && output.NodeStatus !== null ? output.NodeStatus : undefined,
        ParameterGroupStatus: output.ParameterGroupStatus !== undefined && output.ParameterGroupStatus !== null
            ? output.ParameterGroupStatus
            : undefined,
    };
};
const deserializeAws_json1_1NodeIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Node(entry, context);
    });
};
const deserializeAws_json1_1NodeNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NodeQuotaForClusterExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NodeQuotaForCustomerExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NodeTypeSpecificValue = (output, context) => {
    return {
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1NodeTypeSpecificValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NodeTypeSpecificValue(entry, context);
    });
};
const deserializeAws_json1_1NotificationConfiguration = (output, context) => {
    return {
        TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
        TopicStatus: output.TopicStatus !== undefined && output.TopicStatus !== null ? output.TopicStatus : undefined,
    };
};
const deserializeAws_json1_1Parameter = (output, context) => {
    return {
        AllowedValues: output.AllowedValues !== undefined && output.AllowedValues !== null ? output.AllowedValues : undefined,
        ChangeType: output.ChangeType !== undefined && output.ChangeType !== null ? output.ChangeType : undefined,
        DataType: output.DataType !== undefined && output.DataType !== null ? output.DataType : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsModifiable: output.IsModifiable !== undefined && output.IsModifiable !== null ? output.IsModifiable : undefined,
        NodeTypeSpecificValues: output.NodeTypeSpecificValues !== undefined && output.NodeTypeSpecificValues !== null
            ? deserializeAws_json1_1NodeTypeSpecificValueList(output.NodeTypeSpecificValues, context)
            : undefined,
        ParameterName: output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
        ParameterType: output.ParameterType !== undefined && output.ParameterType !== null ? output.ParameterType : undefined,
        ParameterValue: output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
    };
};
const deserializeAws_json1_1ParameterGroup = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ParameterGroupName: output.ParameterGroupName !== undefined && output.ParameterGroupName !== null
            ? output.ParameterGroupName
            : undefined,
    };
};
const deserializeAws_json1_1ParameterGroupAlreadyExistsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParameterGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterGroup(entry, context);
    });
};
const deserializeAws_json1_1ParameterGroupNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParameterGroupQuotaExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParameterGroupStatus = (output, context) => {
    return {
        NodeIdsToReboot: output.NodeIdsToReboot !== undefined && output.NodeIdsToReboot !== null
            ? deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToReboot, context)
            : undefined,
        ParameterApplyStatus: output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
            ? output.ParameterApplyStatus
            : undefined,
        ParameterGroupName: output.ParameterGroupName !== undefined && output.ParameterGroupName !== null
            ? output.ParameterGroupName
            : undefined,
    };
};
const deserializeAws_json1_1ParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Parameter(entry, context);
    });
};
const deserializeAws_json1_1RebootNodeResponse = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupMembership = (output, context) => {
    return {
        SecurityGroupIdentifier: output.SecurityGroupIdentifier !== undefined && output.SecurityGroupIdentifier !== null
            ? output.SecurityGroupIdentifier
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityGroupMembership(entry, context);
    });
};
const deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SSEDescription = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1Subnet = (output, context) => {
    return {
        SubnetAvailabilityZone: output.SubnetAvailabilityZone !== undefined && output.SubnetAvailabilityZone !== null
            ? output.SubnetAvailabilityZone
            : undefined,
        SubnetIdentifier: output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null ? output.SubnetIdentifier : undefined,
    };
};
const deserializeAws_json1_1SubnetGroup = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        SubnetGroupName: output.SubnetGroupName !== undefined && output.SubnetGroupName !== null ? output.SubnetGroupName : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_json1_1SubnetList(output.Subnets, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1SubnetGroupAlreadyExistsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubnetGroupInUseFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubnetGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SubnetGroup(entry, context);
    });
};
const deserializeAws_json1_1SubnetGroupNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubnetGroupQuotaExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubnetInUse = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubnetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subnet(entry, context);
    });
};
const deserializeAws_json1_1SubnetQuotaExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TagQuotaPerResourceExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateClusterResponse = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateParameterGroupResponse = (output, context) => {
    return {
        ParameterGroup: output.ParameterGroup !== undefined && output.ParameterGroup !== null
            ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateSubnetGroupResponse = (output, context) => {
    return {
        SubnetGroup: output.SubnetGroup !== undefined && output.SubnetGroup !== null
            ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
            : undefined,
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map