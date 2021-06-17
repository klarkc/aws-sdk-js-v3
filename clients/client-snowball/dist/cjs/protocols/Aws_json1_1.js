"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateLongTermPricingCommand = exports.deserializeAws_json1_1UpdateJobShipmentStateCommand = exports.deserializeAws_json1_1UpdateJobCommand = exports.deserializeAws_json1_1UpdateClusterCommand = exports.deserializeAws_json1_1ListLongTermPricingCommand = exports.deserializeAws_json1_1ListJobsCommand = exports.deserializeAws_json1_1ListCompatibleImagesCommand = exports.deserializeAws_json1_1ListClustersCommand = exports.deserializeAws_json1_1ListClusterJobsCommand = exports.deserializeAws_json1_1GetSoftwareUpdatesCommand = exports.deserializeAws_json1_1GetSnowballUsageCommand = exports.deserializeAws_json1_1GetJobUnlockCodeCommand = exports.deserializeAws_json1_1GetJobManifestCommand = exports.deserializeAws_json1_1DescribeReturnShippingLabelCommand = exports.deserializeAws_json1_1DescribeJobCommand = exports.deserializeAws_json1_1DescribeClusterCommand = exports.deserializeAws_json1_1DescribeAddressesCommand = exports.deserializeAws_json1_1DescribeAddressCommand = exports.deserializeAws_json1_1CreateReturnShippingLabelCommand = exports.deserializeAws_json1_1CreateLongTermPricingCommand = exports.deserializeAws_json1_1CreateJobCommand = exports.deserializeAws_json1_1CreateClusterCommand = exports.deserializeAws_json1_1CreateAddressCommand = exports.deserializeAws_json1_1CancelJobCommand = exports.deserializeAws_json1_1CancelClusterCommand = exports.serializeAws_json1_1UpdateLongTermPricingCommand = exports.serializeAws_json1_1UpdateJobShipmentStateCommand = exports.serializeAws_json1_1UpdateJobCommand = exports.serializeAws_json1_1UpdateClusterCommand = exports.serializeAws_json1_1ListLongTermPricingCommand = exports.serializeAws_json1_1ListJobsCommand = exports.serializeAws_json1_1ListCompatibleImagesCommand = exports.serializeAws_json1_1ListClustersCommand = exports.serializeAws_json1_1ListClusterJobsCommand = exports.serializeAws_json1_1GetSoftwareUpdatesCommand = exports.serializeAws_json1_1GetSnowballUsageCommand = exports.serializeAws_json1_1GetJobUnlockCodeCommand = exports.serializeAws_json1_1GetJobManifestCommand = exports.serializeAws_json1_1DescribeReturnShippingLabelCommand = exports.serializeAws_json1_1DescribeJobCommand = exports.serializeAws_json1_1DescribeClusterCommand = exports.serializeAws_json1_1DescribeAddressesCommand = exports.serializeAws_json1_1DescribeAddressCommand = exports.serializeAws_json1_1CreateReturnShippingLabelCommand = exports.serializeAws_json1_1CreateLongTermPricingCommand = exports.serializeAws_json1_1CreateJobCommand = exports.serializeAws_json1_1CreateClusterCommand = exports.serializeAws_json1_1CreateAddressCommand = exports.serializeAws_json1_1CancelJobCommand = exports.serializeAws_json1_1CancelClusterCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CancelClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CancelCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelClusterCommand = serializeAws_json1_1CancelClusterCommand;
const serializeAws_json1_1CancelJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CancelJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelJobCommand = serializeAws_json1_1CancelJobCommand;
const serializeAws_json1_1CreateAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CreateAddress",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAddressCommand = serializeAws_json1_1CreateAddressCommand;
const serializeAws_json1_1CreateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CreateCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
const serializeAws_json1_1CreateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CreateJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateJobCommand = serializeAws_json1_1CreateJobCommand;
const serializeAws_json1_1CreateLongTermPricingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CreateLongTermPricing",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLongTermPricingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLongTermPricingCommand = serializeAws_json1_1CreateLongTermPricingCommand;
const serializeAws_json1_1CreateReturnShippingLabelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.CreateReturnShippingLabel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReturnShippingLabelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateReturnShippingLabelCommand = serializeAws_json1_1CreateReturnShippingLabelCommand;
const serializeAws_json1_1DescribeAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddress",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAddressCommand = serializeAws_json1_1DescribeAddressCommand;
const serializeAws_json1_1DescribeAddressesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddresses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAddressesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAddressesCommand = serializeAws_json1_1DescribeAddressesCommand;
const serializeAws_json1_1DescribeClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.DescribeCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeClusterCommand = serializeAws_json1_1DescribeClusterCommand;
const serializeAws_json1_1DescribeJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.DescribeJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeJobCommand = serializeAws_json1_1DescribeJobCommand;
const serializeAws_json1_1DescribeReturnShippingLabelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.DescribeReturnShippingLabel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReturnShippingLabelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReturnShippingLabelCommand = serializeAws_json1_1DescribeReturnShippingLabelCommand;
const serializeAws_json1_1GetJobManifestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.GetJobManifest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobManifestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobManifestCommand = serializeAws_json1_1GetJobManifestCommand;
const serializeAws_json1_1GetJobUnlockCodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.GetJobUnlockCode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobUnlockCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobUnlockCodeCommand = serializeAws_json1_1GetJobUnlockCodeCommand;
const serializeAws_json1_1GetSnowballUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.GetSnowballUsage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSnowballUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSnowballUsageCommand = serializeAws_json1_1GetSnowballUsageCommand;
const serializeAws_json1_1GetSoftwareUpdatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.GetSoftwareUpdates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSoftwareUpdatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSoftwareUpdatesCommand = serializeAws_json1_1GetSoftwareUpdatesCommand;
const serializeAws_json1_1ListClusterJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.ListClusterJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClusterJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListClusterJobsCommand = serializeAws_json1_1ListClusterJobsCommand;
const serializeAws_json1_1ListClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.ListClusters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListClustersCommand = serializeAws_json1_1ListClustersCommand;
const serializeAws_json1_1ListCompatibleImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.ListCompatibleImages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCompatibleImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCompatibleImagesCommand = serializeAws_json1_1ListCompatibleImagesCommand;
const serializeAws_json1_1ListJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.ListJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListJobsCommand = serializeAws_json1_1ListJobsCommand;
const serializeAws_json1_1ListLongTermPricingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.ListLongTermPricing",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLongTermPricingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLongTermPricingCommand = serializeAws_json1_1ListLongTermPricingCommand;
const serializeAws_json1_1UpdateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.UpdateCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateClusterCommand = serializeAws_json1_1UpdateClusterCommand;
const serializeAws_json1_1UpdateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.UpdateJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateJobCommand = serializeAws_json1_1UpdateJobCommand;
const serializeAws_json1_1UpdateJobShipmentStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.UpdateJobShipmentState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateJobShipmentStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateJobShipmentStateCommand = serializeAws_json1_1UpdateJobShipmentStateCommand;
const serializeAws_json1_1UpdateLongTermPricingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSIESnowballJobManagementService.UpdateLongTermPricing",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLongTermPricingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLongTermPricingCommand = serializeAws_json1_1UpdateLongTermPricingCommand;
const deserializeAws_json1_1CancelClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelClusterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelClusterCommand = deserializeAws_json1_1CancelClusterCommand;
const deserializeAws_json1_1CancelClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = {
                ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelJobCommand = deserializeAws_json1_1CancelJobCommand;
const deserializeAws_json1_1CancelJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = {
                ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAddressResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAddressCommand = deserializeAws_json1_1CreateAddressCommand;
const deserializeAws_json1_1CreateAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAddressException":
        case "com.amazonaws.snowball#InvalidAddressException":
            response = {
                ...(await deserializeAws_json1_1InvalidAddressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAddressException":
        case "com.amazonaws.snowball#UnsupportedAddressException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAddressExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResult(data, context);
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
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = {
                ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = {
                ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateJobCommand = deserializeAws_json1_1CreateJobCommand;
const deserializeAws_json1_1CreateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterLimitExceededException":
        case "com.amazonaws.snowball#ClusterLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = {
                ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = {
                ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLongTermPricingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLongTermPricingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLongTermPricingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLongTermPricingCommand = deserializeAws_json1_1CreateLongTermPricingCommand;
const deserializeAws_json1_1CreateLongTermPricingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateReturnShippingLabelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateReturnShippingLabelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReturnShippingLabelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateReturnShippingLabelCommand = deserializeAws_json1_1CreateReturnShippingLabelCommand;
const deserializeAws_json1_1CreateReturnShippingLabelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.snowball#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReturnShippingLabelAlreadyExistsException":
        case "com.amazonaws.snowball#ReturnShippingLabelAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAddressResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAddressCommand = deserializeAws_json1_1DescribeAddressCommand;
const deserializeAws_json1_1DescribeAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAddressesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAddressesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAddressesCommand = deserializeAws_json1_1DescribeAddressesCommand;
const deserializeAws_json1_1DescribeAddressesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClusterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeClusterCommand = deserializeAws_json1_1DescribeClusterCommand;
const deserializeAws_json1_1DescribeClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeJobCommand = deserializeAws_json1_1DescribeJobCommand;
const deserializeAws_json1_1DescribeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReturnShippingLabelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReturnShippingLabelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReturnShippingLabelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReturnShippingLabelCommand = deserializeAws_json1_1DescribeReturnShippingLabelCommand;
const deserializeAws_json1_1DescribeReturnShippingLabelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.snowball#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobManifestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobManifestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobManifestResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobManifestCommand = deserializeAws_json1_1GetJobManifestCommand;
const deserializeAws_json1_1GetJobManifestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobUnlockCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobUnlockCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobUnlockCodeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobUnlockCodeCommand = deserializeAws_json1_1GetJobUnlockCodeCommand;
const deserializeAws_json1_1GetJobUnlockCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSnowballUsageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSnowballUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSnowballUsageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSnowballUsageCommand = deserializeAws_json1_1GetSnowballUsageCommand;
const deserializeAws_json1_1GetSnowballUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1GetSoftwareUpdatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSoftwareUpdatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSoftwareUpdatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSoftwareUpdatesCommand = deserializeAws_json1_1GetSoftwareUpdatesCommand;
const deserializeAws_json1_1GetSoftwareUpdatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListClusterJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListClusterJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListClusterJobsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListClusterJobsCommand = deserializeAws_json1_1ListClusterJobsCommand;
const deserializeAws_json1_1ListClusterJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListClustersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListClustersCommand = deserializeAws_json1_1ListClustersCommand;
const deserializeAws_json1_1ListClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCompatibleImagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCompatibleImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCompatibleImagesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCompatibleImagesCommand = deserializeAws_json1_1ListCompatibleImagesCommand;
const deserializeAws_json1_1ListCompatibleImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = {
                ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListJobsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListJobsCommand = deserializeAws_json1_1ListJobsCommand;
const deserializeAws_json1_1ListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLongTermPricingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLongTermPricingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLongTermPricingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLongTermPricingCommand = deserializeAws_json1_1ListLongTermPricingCommand;
const deserializeAws_json1_1ListLongTermPricingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1UpdateClusterResult(data, context);
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
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = {
                ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = {
                ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateJobCommand = deserializeAws_json1_1UpdateJobCommand;
const deserializeAws_json1_1UpdateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterLimitExceededException":
        case "com.amazonaws.snowball#ClusterLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = {
                ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = {
                ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateJobShipmentStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateJobShipmentStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateJobShipmentStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateJobShipmentStateCommand = deserializeAws_json1_1UpdateJobShipmentStateCommand;
const deserializeAws_json1_1UpdateJobShipmentStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLongTermPricingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLongTermPricingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLongTermPricingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLongTermPricingCommand = deserializeAws_json1_1UpdateLongTermPricingCommand;
const deserializeAws_json1_1UpdateLongTermPricingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ClusterLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterLimitExceededException(body, context);
    const contents = {
        name: "ClusterLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1Ec2RequestFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1Ec2RequestFailedException(body, context);
    const contents = {
        name: "Ec2RequestFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAddressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAddressException(body, context);
    const contents = {
        name: "InvalidAddressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputCombinationException(body, context);
    const contents = {
        name: "InvalidInputCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobStateException(body, context);
    const contents = {
        name: "InvalidJobStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceException(body, context);
    const contents = {
        name: "InvalidResourceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSRequestFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSRequestFailedException(body, context);
    const contents = {
        name: "KMSRequestFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException(body, context);
    const contents = {
        name: "ReturnShippingLabelAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedAddressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedAddressException(body, context);
    const contents = {
        name: "UnsupportedAddressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1Address = (input, context) => {
    return {
        ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
        ...(input.City !== undefined && input.City !== null && { City: input.City }),
        ...(input.Company !== undefined && input.Company !== null && { Company: input.Company }),
        ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
        ...(input.IsRestricted !== undefined && input.IsRestricted !== null && { IsRestricted: input.IsRestricted }),
        ...(input.Landmark !== undefined && input.Landmark !== null && { Landmark: input.Landmark }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
        ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
        ...(input.PrefectureOrDistrict !== undefined &&
            input.PrefectureOrDistrict !== null && { PrefectureOrDistrict: input.PrefectureOrDistrict }),
        ...(input.StateOrProvince !== undefined &&
            input.StateOrProvince !== null && { StateOrProvince: input.StateOrProvince }),
        ...(input.Street1 !== undefined && input.Street1 !== null && { Street1: input.Street1 }),
        ...(input.Street2 !== undefined && input.Street2 !== null && { Street2: input.Street2 }),
        ...(input.Street3 !== undefined && input.Street3 !== null && { Street3: input.Street3 }),
    };
};
const serializeAws_json1_1CancelClusterRequest = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    };
};
const serializeAws_json1_1CancelJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1CreateAddressRequest = (input, context) => {
    return {
        ...(input.Address !== undefined &&
            input.Address !== null && { Address: serializeAws_json1_1Address(input.Address, context) }),
    };
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    return {
        ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ForwardingAddressId !== undefined &&
            input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
        ...(input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType }),
        ...(input.KmsKeyARN !== undefined && input.KmsKeyARN !== null && { KmsKeyARN: input.KmsKeyARN }),
        ...(input.Notification !== undefined &&
            input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
        ...(input.ShippingOption !== undefined &&
            input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
        ...(input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }),
        ...(input.TaxDocuments !== undefined &&
            input.TaxDocuments !== null && { TaxDocuments: serializeAws_json1_1TaxDocuments(input.TaxDocuments, context) }),
    };
};
const serializeAws_json1_1CreateJobRequest = (input, context) => {
    return {
        ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DeviceConfiguration !== undefined &&
            input.DeviceConfiguration !== null && {
            DeviceConfiguration: serializeAws_json1_1DeviceConfiguration(input.DeviceConfiguration, context),
        }),
        ...(input.ForwardingAddressId !== undefined &&
            input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
        ...(input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType }),
        ...(input.KmsKeyARN !== undefined && input.KmsKeyARN !== null && { KmsKeyARN: input.KmsKeyARN }),
        ...(input.LongTermPricingId !== undefined &&
            input.LongTermPricingId !== null && { LongTermPricingId: input.LongTermPricingId }),
        ...(input.Notification !== undefined &&
            input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
        ...(input.ShippingOption !== undefined &&
            input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
        ...(input.SnowballCapacityPreference !== undefined &&
            input.SnowballCapacityPreference !== null && { SnowballCapacityPreference: input.SnowballCapacityPreference }),
        ...(input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }),
        ...(input.TaxDocuments !== undefined &&
            input.TaxDocuments !== null && { TaxDocuments: serializeAws_json1_1TaxDocuments(input.TaxDocuments, context) }),
    };
};
const serializeAws_json1_1CreateLongTermPricingRequest = (input, context) => {
    return {
        ...(input.IsLongTermPricingAutoRenew !== undefined &&
            input.IsLongTermPricingAutoRenew !== null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew }),
        ...(input.LongTermPricingType !== undefined &&
            input.LongTermPricingType !== null && { LongTermPricingType: input.LongTermPricingType }),
        ...(input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }),
    };
};
const serializeAws_json1_1CreateReturnShippingLabelRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.ShippingOption !== undefined &&
            input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
    };
};
const serializeAws_json1_1DescribeAddressesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAddressRequest = (input, context) => {
    return {
        ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
    };
};
const serializeAws_json1_1DescribeClusterRequest = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    };
};
const serializeAws_json1_1DescribeJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1DescribeReturnShippingLabelRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1DeviceConfiguration = (input, context) => {
    return {
        ...(input.SnowconeDeviceConfiguration !== undefined &&
            input.SnowconeDeviceConfiguration !== null && {
            SnowconeDeviceConfiguration: serializeAws_json1_1SnowconeDeviceConfiguration(input.SnowconeDeviceConfiguration, context),
        }),
    };
};
const serializeAws_json1_1Ec2AmiResource = (input, context) => {
    return {
        ...(input.AmiId !== undefined && input.AmiId !== null && { AmiId: input.AmiId }),
        ...(input.SnowballAmiId !== undefined && input.SnowballAmiId !== null && { SnowballAmiId: input.SnowballAmiId }),
    };
};
const serializeAws_json1_1Ec2AmiResourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Ec2AmiResource(entry, context);
    });
};
const serializeAws_json1_1EventTriggerDefinition = (input, context) => {
    return {
        ...(input.EventResourceARN !== undefined &&
            input.EventResourceARN !== null && { EventResourceARN: input.EventResourceARN }),
    };
};
const serializeAws_json1_1EventTriggerDefinitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventTriggerDefinition(entry, context);
    });
};
const serializeAws_json1_1GetJobManifestRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1GetJobUnlockCodeRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1GetSnowballUsageRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetSoftwareUpdatesRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1INDTaxDocuments = (input, context) => {
    return {
        ...(input.GSTIN !== undefined && input.GSTIN !== null && { GSTIN: input.GSTIN }),
    };
};
const serializeAws_json1_1JobResource = (input, context) => {
    return {
        ...(input.Ec2AmiResources !== undefined &&
            input.Ec2AmiResources !== null && {
            Ec2AmiResources: serializeAws_json1_1Ec2AmiResourceList(input.Ec2AmiResources, context),
        }),
        ...(input.LambdaResources !== undefined &&
            input.LambdaResources !== null && {
            LambdaResources: serializeAws_json1_1LambdaResourceList(input.LambdaResources, context),
        }),
        ...(input.S3Resources !== undefined &&
            input.S3Resources !== null && { S3Resources: serializeAws_json1_1S3ResourceList(input.S3Resources, context) }),
    };
};
const serializeAws_json1_1JobStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1KeyRange = (input, context) => {
    return {
        ...(input.BeginMarker !== undefined && input.BeginMarker !== null && { BeginMarker: input.BeginMarker }),
        ...(input.EndMarker !== undefined && input.EndMarker !== null && { EndMarker: input.EndMarker }),
    };
};
const serializeAws_json1_1LambdaResource = (input, context) => {
    return {
        ...(input.EventTriggers !== undefined &&
            input.EventTriggers !== null && {
            EventTriggers: serializeAws_json1_1EventTriggerDefinitionList(input.EventTriggers, context),
        }),
        ...(input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }),
    };
};
const serializeAws_json1_1LambdaResourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LambdaResource(entry, context);
    });
};
const serializeAws_json1_1ListClusterJobsRequest = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListClustersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCompatibleImagesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListJobsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLongTermPricingRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1Notification = (input, context) => {
    return {
        ...(input.JobStatesToNotify !== undefined &&
            input.JobStatesToNotify !== null && {
            JobStatesToNotify: serializeAws_json1_1JobStateList(input.JobStatesToNotify, context),
        }),
        ...(input.NotifyAll !== undefined && input.NotifyAll !== null && { NotifyAll: input.NotifyAll }),
        ...(input.SnsTopicARN !== undefined && input.SnsTopicARN !== null && { SnsTopicARN: input.SnsTopicARN }),
    };
};
const serializeAws_json1_1S3Resource = (input, context) => {
    return {
        ...(input.BucketArn !== undefined && input.BucketArn !== null && { BucketArn: input.BucketArn }),
        ...(input.KeyRange !== undefined &&
            input.KeyRange !== null && { KeyRange: serializeAws_json1_1KeyRange(input.KeyRange, context) }),
    };
};
const serializeAws_json1_1S3ResourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3Resource(entry, context);
    });
};
const serializeAws_json1_1SnowconeDeviceConfiguration = (input, context) => {
    return {
        ...(input.WirelessConnection !== undefined &&
            input.WirelessConnection !== null && {
            WirelessConnection: serializeAws_json1_1WirelessConnection(input.WirelessConnection, context),
        }),
    };
};
const serializeAws_json1_1TaxDocuments = (input, context) => {
    return {
        ...(input.IND !== undefined &&
            input.IND !== null && { IND: serializeAws_json1_1INDTaxDocuments(input.IND, context) }),
    };
};
const serializeAws_json1_1UpdateClusterRequest = (input, context) => {
    return {
        ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ForwardingAddressId !== undefined &&
            input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
        ...(input.Notification !== undefined &&
            input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
        ...(input.ShippingOption !== undefined &&
            input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
    };
};
const serializeAws_json1_1UpdateJobRequest = (input, context) => {
    return {
        ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ForwardingAddressId !== undefined &&
            input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.Notification !== undefined &&
            input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
        ...(input.ShippingOption !== undefined &&
            input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
        ...(input.SnowballCapacityPreference !== undefined &&
            input.SnowballCapacityPreference !== null && { SnowballCapacityPreference: input.SnowballCapacityPreference }),
    };
};
const serializeAws_json1_1UpdateJobShipmentStateRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.ShipmentState !== undefined && input.ShipmentState !== null && { ShipmentState: input.ShipmentState }),
    };
};
const serializeAws_json1_1UpdateLongTermPricingRequest = (input, context) => {
    return {
        ...(input.IsLongTermPricingAutoRenew !== undefined &&
            input.IsLongTermPricingAutoRenew !== null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew }),
        ...(input.LongTermPricingId !== undefined &&
            input.LongTermPricingId !== null && { LongTermPricingId: input.LongTermPricingId }),
        ...(input.ReplacementJob !== undefined &&
            input.ReplacementJob !== null && { ReplacementJob: input.ReplacementJob }),
    };
};
const serializeAws_json1_1WirelessConnection = (input, context) => {
    return {
        ...(input.IsWifiEnabled !== undefined && input.IsWifiEnabled !== null && { IsWifiEnabled: input.IsWifiEnabled }),
    };
};
const deserializeAws_json1_1Address = (output, context) => {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        Company: output.Company !== undefined && output.Company !== null ? output.Company : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        IsRestricted: output.IsRestricted !== undefined && output.IsRestricted !== null ? output.IsRestricted : undefined,
        Landmark: output.Landmark !== undefined && output.Landmark !== null ? output.Landmark : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
        PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
        PrefectureOrDistrict: output.PrefectureOrDistrict !== undefined && output.PrefectureOrDistrict !== null
            ? output.PrefectureOrDistrict
            : undefined,
        StateOrProvince: output.StateOrProvince !== undefined && output.StateOrProvince !== null ? output.StateOrProvince : undefined,
        Street1: output.Street1 !== undefined && output.Street1 !== null ? output.Street1 : undefined,
        Street2: output.Street2 !== undefined && output.Street2 !== null ? output.Street2 : undefined,
        Street3: output.Street3 !== undefined && output.Street3 !== null ? output.Street3 : undefined,
    };
};
const deserializeAws_json1_1AddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Address(entry, context);
    });
};
const deserializeAws_json1_1CancelClusterResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CancelJobResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ClusterLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ClusterListEntry = (output, context) => {
    return {
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        ClusterState: output.ClusterState !== undefined && output.ClusterState !== null ? output.ClusterState : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    };
};
const deserializeAws_json1_1ClusterListEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClusterListEntry(entry, context);
    });
};
const deserializeAws_json1_1ClusterMetadata = (output, context) => {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        ClusterState: output.ClusterState !== undefined && output.ClusterState !== null ? output.ClusterState : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ForwardingAddressId: output.ForwardingAddressId !== undefined && output.ForwardingAddressId !== null
            ? output.ForwardingAddressId
            : undefined,
        JobType: output.JobType !== undefined && output.JobType !== null ? output.JobType : undefined,
        KmsKeyARN: output.KmsKeyARN !== undefined && output.KmsKeyARN !== null ? output.KmsKeyARN : undefined,
        Notification: output.Notification !== undefined && output.Notification !== null
            ? deserializeAws_json1_1Notification(output.Notification, context)
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1JobResource(output.Resources, context)
            : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        ShippingOption: output.ShippingOption !== undefined && output.ShippingOption !== null ? output.ShippingOption : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
        TaxDocuments: output.TaxDocuments !== undefined && output.TaxDocuments !== null
            ? deserializeAws_json1_1TaxDocuments(output.TaxDocuments, context)
            : undefined,
    };
};
const deserializeAws_json1_1CompatibleImage = (output, context) => {
    return {
        AmiId: output.AmiId !== undefined && output.AmiId !== null ? output.AmiId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CompatibleImageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CompatibleImage(entry, context);
    });
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        ConflictResource: output.ConflictResource !== undefined && output.ConflictResource !== null ? output.ConflictResource : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateAddressResult = (output, context) => {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
    };
};
const deserializeAws_json1_1CreateClusterResult = (output, context) => {
    return {
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
    };
};
const deserializeAws_json1_1CreateJobResult = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1CreateLongTermPricingResult = (output, context) => {
    return {
        LongTermPricingId: output.LongTermPricingId !== undefined && output.LongTermPricingId !== null
            ? output.LongTermPricingId
            : undefined,
    };
};
const deserializeAws_json1_1CreateReturnShippingLabelResult = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DataTransfer = (output, context) => {
    return {
        BytesTransferred: output.BytesTransferred !== undefined && output.BytesTransferred !== null ? output.BytesTransferred : undefined,
        ObjectsTransferred: output.ObjectsTransferred !== undefined && output.ObjectsTransferred !== null
            ? output.ObjectsTransferred
            : undefined,
        TotalBytes: output.TotalBytes !== undefined && output.TotalBytes !== null ? output.TotalBytes : undefined,
        TotalObjects: output.TotalObjects !== undefined && output.TotalObjects !== null ? output.TotalObjects : undefined,
    };
};
const deserializeAws_json1_1DescribeAddressesResult = (output, context) => {
    return {
        Addresses: output.Addresses !== undefined && output.Addresses !== null
            ? deserializeAws_json1_1AddressList(output.Addresses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeAddressResult = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null
            ? deserializeAws_json1_1Address(output.Address, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeClusterResult = (output, context) => {
    return {
        ClusterMetadata: output.ClusterMetadata !== undefined && output.ClusterMetadata !== null
            ? deserializeAws_json1_1ClusterMetadata(output.ClusterMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeJobResult = (output, context) => {
    return {
        JobMetadata: output.JobMetadata !== undefined && output.JobMetadata !== null
            ? deserializeAws_json1_1JobMetadata(output.JobMetadata, context)
            : undefined,
        SubJobMetadata: output.SubJobMetadata !== undefined && output.SubJobMetadata !== null
            ? deserializeAws_json1_1JobMetadataList(output.SubJobMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReturnShippingLabelResult = (output, context) => {
    return {
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? new Date(Math.round(output.ExpirationDate * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeviceConfiguration = (output, context) => {
    return {
        SnowconeDeviceConfiguration: output.SnowconeDeviceConfiguration !== undefined && output.SnowconeDeviceConfiguration !== null
            ? deserializeAws_json1_1SnowconeDeviceConfiguration(output.SnowconeDeviceConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1Ec2AmiResource = (output, context) => {
    return {
        AmiId: output.AmiId !== undefined && output.AmiId !== null ? output.AmiId : undefined,
        SnowballAmiId: output.SnowballAmiId !== undefined && output.SnowballAmiId !== null ? output.SnowballAmiId : undefined,
    };
};
const deserializeAws_json1_1Ec2AmiResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Ec2AmiResource(entry, context);
    });
};
const deserializeAws_json1_1Ec2RequestFailedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EventTriggerDefinition = (output, context) => {
    return {
        EventResourceARN: output.EventResourceARN !== undefined && output.EventResourceARN !== null ? output.EventResourceARN : undefined,
    };
};
const deserializeAws_json1_1EventTriggerDefinitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventTriggerDefinition(entry, context);
    });
};
const deserializeAws_json1_1GetJobManifestResult = (output, context) => {
    return {
        ManifestURI: output.ManifestURI !== undefined && output.ManifestURI !== null ? output.ManifestURI : undefined,
    };
};
const deserializeAws_json1_1GetJobUnlockCodeResult = (output, context) => {
    return {
        UnlockCode: output.UnlockCode !== undefined && output.UnlockCode !== null ? output.UnlockCode : undefined,
    };
};
const deserializeAws_json1_1GetSnowballUsageResult = (output, context) => {
    return {
        SnowballLimit: output.SnowballLimit !== undefined && output.SnowballLimit !== null ? output.SnowballLimit : undefined,
        SnowballsInUse: output.SnowballsInUse !== undefined && output.SnowballsInUse !== null ? output.SnowballsInUse : undefined,
    };
};
const deserializeAws_json1_1GetSoftwareUpdatesResult = (output, context) => {
    return {
        UpdatesURI: output.UpdatesURI !== undefined && output.UpdatesURI !== null ? output.UpdatesURI : undefined,
    };
};
const deserializeAws_json1_1INDTaxDocuments = (output, context) => {
    return {
        GSTIN: output.GSTIN !== undefined && output.GSTIN !== null ? output.GSTIN : undefined,
    };
};
const deserializeAws_json1_1InvalidAddressException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputCombinationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidJobStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1JobListEntry = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsMaster: output.IsMaster !== undefined && output.IsMaster !== null ? output.IsMaster : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobState: output.JobState !== undefined && output.JobState !== null ? output.JobState : undefined,
        JobType: output.JobType !== undefined && output.JobType !== null ? output.JobType : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
    };
};
const deserializeAws_json1_1JobListEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobListEntry(entry, context);
    });
};
const deserializeAws_json1_1JobLogs = (output, context) => {
    return {
        JobCompletionReportURI: output.JobCompletionReportURI !== undefined && output.JobCompletionReportURI !== null
            ? output.JobCompletionReportURI
            : undefined,
        JobFailureLogURI: output.JobFailureLogURI !== undefined && output.JobFailureLogURI !== null ? output.JobFailureLogURI : undefined,
        JobSuccessLogURI: output.JobSuccessLogURI !== undefined && output.JobSuccessLogURI !== null ? output.JobSuccessLogURI : undefined,
    };
};
const deserializeAws_json1_1JobMetadata = (output, context) => {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        DataTransferProgress: output.DataTransferProgress !== undefined && output.DataTransferProgress !== null
            ? deserializeAws_json1_1DataTransfer(output.DataTransferProgress, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DeviceConfiguration: output.DeviceConfiguration !== undefined && output.DeviceConfiguration !== null
            ? deserializeAws_json1_1DeviceConfiguration(output.DeviceConfiguration, context)
            : undefined,
        ForwardingAddressId: output.ForwardingAddressId !== undefined && output.ForwardingAddressId !== null
            ? output.ForwardingAddressId
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobLogInfo: output.JobLogInfo !== undefined && output.JobLogInfo !== null
            ? deserializeAws_json1_1JobLogs(output.JobLogInfo, context)
            : undefined,
        JobState: output.JobState !== undefined && output.JobState !== null ? output.JobState : undefined,
        JobType: output.JobType !== undefined && output.JobType !== null ? output.JobType : undefined,
        KmsKeyARN: output.KmsKeyARN !== undefined && output.KmsKeyARN !== null ? output.KmsKeyARN : undefined,
        LongTermPricingId: output.LongTermPricingId !== undefined && output.LongTermPricingId !== null
            ? output.LongTermPricingId
            : undefined,
        Notification: output.Notification !== undefined && output.Notification !== null
            ? deserializeAws_json1_1Notification(output.Notification, context)
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1JobResource(output.Resources, context)
            : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        ShippingDetails: output.ShippingDetails !== undefined && output.ShippingDetails !== null
            ? deserializeAws_json1_1ShippingDetails(output.ShippingDetails, context)
            : undefined,
        SnowballCapacityPreference: output.SnowballCapacityPreference !== undefined && output.SnowballCapacityPreference !== null
            ? output.SnowballCapacityPreference
            : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
        TaxDocuments: output.TaxDocuments !== undefined && output.TaxDocuments !== null
            ? deserializeAws_json1_1TaxDocuments(output.TaxDocuments, context)
            : undefined,
    };
};
const deserializeAws_json1_1JobMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobMetadata(entry, context);
    });
};
const deserializeAws_json1_1JobResource = (output, context) => {
    return {
        Ec2AmiResources: output.Ec2AmiResources !== undefined && output.Ec2AmiResources !== null
            ? deserializeAws_json1_1Ec2AmiResourceList(output.Ec2AmiResources, context)
            : undefined,
        LambdaResources: output.LambdaResources !== undefined && output.LambdaResources !== null
            ? deserializeAws_json1_1LambdaResourceList(output.LambdaResources, context)
            : undefined,
        S3Resources: output.S3Resources !== undefined && output.S3Resources !== null
            ? deserializeAws_json1_1S3ResourceList(output.S3Resources, context)
            : undefined,
    };
};
const deserializeAws_json1_1JobStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1KeyRange = (output, context) => {
    return {
        BeginMarker: output.BeginMarker !== undefined && output.BeginMarker !== null ? output.BeginMarker : undefined,
        EndMarker: output.EndMarker !== undefined && output.EndMarker !== null ? output.EndMarker : undefined,
    };
};
const deserializeAws_json1_1KMSRequestFailedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LambdaResource = (output, context) => {
    return {
        EventTriggers: output.EventTriggers !== undefined && output.EventTriggers !== null
            ? deserializeAws_json1_1EventTriggerDefinitionList(output.EventTriggers, context)
            : undefined,
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
    };
};
const deserializeAws_json1_1LambdaResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LambdaResource(entry, context);
    });
};
const deserializeAws_json1_1ListClusterJobsResult = (output, context) => {
    return {
        JobListEntries: output.JobListEntries !== undefined && output.JobListEntries !== null
            ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListClustersResult = (output, context) => {
    return {
        ClusterListEntries: output.ClusterListEntries !== undefined && output.ClusterListEntries !== null
            ? deserializeAws_json1_1ClusterListEntryList(output.ClusterListEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCompatibleImagesResult = (output, context) => {
    return {
        CompatibleImages: output.CompatibleImages !== undefined && output.CompatibleImages !== null
            ? deserializeAws_json1_1CompatibleImageList(output.CompatibleImages, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListJobsResult = (output, context) => {
    return {
        JobListEntries: output.JobListEntries !== undefined && output.JobListEntries !== null
            ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLongTermPricingResult = (output, context) => {
    return {
        LongTermPricingEntries: output.LongTermPricingEntries !== undefined && output.LongTermPricingEntries !== null
            ? deserializeAws_json1_1LongTermPricingEntryList(output.LongTermPricingEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1LongTermPricingAssociatedJobIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LongTermPricingEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LongTermPricingListEntry(entry, context);
    });
};
const deserializeAws_json1_1LongTermPricingListEntry = (output, context) => {
    return {
        CurrentActiveJob: output.CurrentActiveJob !== undefined && output.CurrentActiveJob !== null ? output.CurrentActiveJob : undefined,
        IsLongTermPricingAutoRenew: output.IsLongTermPricingAutoRenew !== undefined && output.IsLongTermPricingAutoRenew !== null
            ? output.IsLongTermPricingAutoRenew
            : undefined,
        JobIds: output.JobIds !== undefined && output.JobIds !== null
            ? deserializeAws_json1_1LongTermPricingAssociatedJobIdList(output.JobIds, context)
            : undefined,
        LongTermPricingEndDate: output.LongTermPricingEndDate !== undefined && output.LongTermPricingEndDate !== null
            ? new Date(Math.round(output.LongTermPricingEndDate * 1000))
            : undefined,
        LongTermPricingId: output.LongTermPricingId !== undefined && output.LongTermPricingId !== null
            ? output.LongTermPricingId
            : undefined,
        LongTermPricingStartDate: output.LongTermPricingStartDate !== undefined && output.LongTermPricingStartDate !== null
            ? new Date(Math.round(output.LongTermPricingStartDate * 1000))
            : undefined,
        LongTermPricingStatus: output.LongTermPricingStatus !== undefined && output.LongTermPricingStatus !== null
            ? output.LongTermPricingStatus
            : undefined,
        LongTermPricingType: output.LongTermPricingType !== undefined && output.LongTermPricingType !== null
            ? output.LongTermPricingType
            : undefined,
        ReplacementJob: output.ReplacementJob !== undefined && output.ReplacementJob !== null ? output.ReplacementJob : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
    };
};
const deserializeAws_json1_1Notification = (output, context) => {
    return {
        JobStatesToNotify: output.JobStatesToNotify !== undefined && output.JobStatesToNotify !== null
            ? deserializeAws_json1_1JobStateList(output.JobStatesToNotify, context)
            : undefined,
        NotifyAll: output.NotifyAll !== undefined && output.NotifyAll !== null ? output.NotifyAll : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
    };
};
const deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1S3Resource = (output, context) => {
    return {
        BucketArn: output.BucketArn !== undefined && output.BucketArn !== null ? output.BucketArn : undefined,
        KeyRange: output.KeyRange !== undefined && output.KeyRange !== null
            ? deserializeAws_json1_1KeyRange(output.KeyRange, context)
            : undefined,
    };
};
const deserializeAws_json1_1S3ResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1S3Resource(entry, context);
    });
};
const deserializeAws_json1_1Shipment = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TrackingNumber: output.TrackingNumber !== undefined && output.TrackingNumber !== null ? output.TrackingNumber : undefined,
    };
};
const deserializeAws_json1_1ShippingDetails = (output, context) => {
    return {
        InboundShipment: output.InboundShipment !== undefined && output.InboundShipment !== null
            ? deserializeAws_json1_1Shipment(output.InboundShipment, context)
            : undefined,
        OutboundShipment: output.OutboundShipment !== undefined && output.OutboundShipment !== null
            ? deserializeAws_json1_1Shipment(output.OutboundShipment, context)
            : undefined,
        ShippingOption: output.ShippingOption !== undefined && output.ShippingOption !== null ? output.ShippingOption : undefined,
    };
};
const deserializeAws_json1_1SnowconeDeviceConfiguration = (output, context) => {
    return {
        WirelessConnection: output.WirelessConnection !== undefined && output.WirelessConnection !== null
            ? deserializeAws_json1_1WirelessConnection(output.WirelessConnection, context)
            : undefined,
    };
};
const deserializeAws_json1_1TaxDocuments = (output, context) => {
    return {
        IND: output.IND !== undefined && output.IND !== null
            ? deserializeAws_json1_1INDTaxDocuments(output.IND, context)
            : undefined,
    };
};
const deserializeAws_json1_1UnsupportedAddressException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UpdateClusterResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateJobResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateJobShipmentStateResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLongTermPricingResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1WirelessConnection = (output, context) => {
    return {
        IsWifiEnabled: output.IsWifiEnabled !== undefined && output.IsWifiEnabled !== null ? output.IsWifiEnabled : undefined,
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