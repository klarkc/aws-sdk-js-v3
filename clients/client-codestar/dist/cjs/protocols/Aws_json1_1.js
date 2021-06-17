"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateUserProfileCommand = exports.deserializeAws_json1_1UpdateTeamMemberCommand = exports.deserializeAws_json1_1UpdateProjectCommand = exports.deserializeAws_json1_1UntagProjectCommand = exports.deserializeAws_json1_1TagProjectCommand = exports.deserializeAws_json1_1ListUserProfilesCommand = exports.deserializeAws_json1_1ListTeamMembersCommand = exports.deserializeAws_json1_1ListTagsForProjectCommand = exports.deserializeAws_json1_1ListResourcesCommand = exports.deserializeAws_json1_1ListProjectsCommand = exports.deserializeAws_json1_1DisassociateTeamMemberCommand = exports.deserializeAws_json1_1DescribeUserProfileCommand = exports.deserializeAws_json1_1DescribeProjectCommand = exports.deserializeAws_json1_1DeleteUserProfileCommand = exports.deserializeAws_json1_1DeleteProjectCommand = exports.deserializeAws_json1_1CreateUserProfileCommand = exports.deserializeAws_json1_1CreateProjectCommand = exports.deserializeAws_json1_1AssociateTeamMemberCommand = exports.serializeAws_json1_1UpdateUserProfileCommand = exports.serializeAws_json1_1UpdateTeamMemberCommand = exports.serializeAws_json1_1UpdateProjectCommand = exports.serializeAws_json1_1UntagProjectCommand = exports.serializeAws_json1_1TagProjectCommand = exports.serializeAws_json1_1ListUserProfilesCommand = exports.serializeAws_json1_1ListTeamMembersCommand = exports.serializeAws_json1_1ListTagsForProjectCommand = exports.serializeAws_json1_1ListResourcesCommand = exports.serializeAws_json1_1ListProjectsCommand = exports.serializeAws_json1_1DisassociateTeamMemberCommand = exports.serializeAws_json1_1DescribeUserProfileCommand = exports.serializeAws_json1_1DescribeProjectCommand = exports.serializeAws_json1_1DeleteUserProfileCommand = exports.serializeAws_json1_1DeleteProjectCommand = exports.serializeAws_json1_1CreateUserProfileCommand = exports.serializeAws_json1_1CreateProjectCommand = exports.serializeAws_json1_1AssociateTeamMemberCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateTeamMemberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.AssociateTeamMember",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateTeamMemberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateTeamMemberCommand = serializeAws_json1_1AssociateTeamMemberCommand;
const serializeAws_json1_1CreateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.CreateProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
const serializeAws_json1_1CreateUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.CreateUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserProfileCommand = serializeAws_json1_1CreateUserProfileCommand;
const serializeAws_json1_1DeleteProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.DeleteProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProjectCommand = serializeAws_json1_1DeleteProjectCommand;
const serializeAws_json1_1DeleteUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.DeleteUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserProfileCommand = serializeAws_json1_1DeleteUserProfileCommand;
const serializeAws_json1_1DescribeProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.DescribeProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProjectCommand = serializeAws_json1_1DescribeProjectCommand;
const serializeAws_json1_1DescribeUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.DescribeUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserProfileCommand = serializeAws_json1_1DescribeUserProfileCommand;
const serializeAws_json1_1DisassociateTeamMemberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.DisassociateTeamMember",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateTeamMemberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateTeamMemberCommand = serializeAws_json1_1DisassociateTeamMemberCommand;
const serializeAws_json1_1ListProjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.ListProjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProjectsCommand = serializeAws_json1_1ListProjectsCommand;
const serializeAws_json1_1ListResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.ListResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesCommand = serializeAws_json1_1ListResourcesCommand;
const serializeAws_json1_1ListTagsForProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.ListTagsForProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForProjectCommand = serializeAws_json1_1ListTagsForProjectCommand;
const serializeAws_json1_1ListTeamMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.ListTeamMembers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTeamMembersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTeamMembersCommand = serializeAws_json1_1ListTeamMembersCommand;
const serializeAws_json1_1ListUserProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.ListUserProfiles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUserProfilesCommand = serializeAws_json1_1ListUserProfilesCommand;
const serializeAws_json1_1TagProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.TagProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagProjectCommand = serializeAws_json1_1TagProjectCommand;
const serializeAws_json1_1UntagProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.UntagProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagProjectCommand = serializeAws_json1_1UntagProjectCommand;
const serializeAws_json1_1UpdateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.UpdateProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProjectCommand = serializeAws_json1_1UpdateProjectCommand;
const serializeAws_json1_1UpdateTeamMemberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.UpdateTeamMember",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTeamMemberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTeamMemberCommand = serializeAws_json1_1UpdateTeamMemberCommand;
const serializeAws_json1_1UpdateUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeStar_20170419.UpdateUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserProfileCommand = serializeAws_json1_1UpdateUserProfileCommand;
const deserializeAws_json1_1AssociateTeamMemberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateTeamMemberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateTeamMemberResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateTeamMemberCommand = deserializeAws_json1_1AssociateTeamMemberCommand;
const deserializeAws_json1_1AssociateTeamMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TeamMemberAlreadyAssociatedException":
        case "com.amazonaws.codestar#TeamMemberAlreadyAssociatedException":
            response = {
                ...(await deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProjectCommand = deserializeAws_json1_1CreateProjectCommand;
const deserializeAws_json1_1CreateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectAlreadyExistsException":
        case "com.amazonaws.codestar#ProjectAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectCreationFailedException":
        case "com.amazonaws.codestar#ProjectCreationFailedException":
            response = {
                ...(await deserializeAws_json1_1ProjectCreationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserProfileCommand = deserializeAws_json1_1CreateUserProfileCommand;
const deserializeAws_json1_1CreateUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UserProfileAlreadyExistsException":
        case "com.amazonaws.codestar#UserProfileAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProjectCommand = deserializeAws_json1_1DeleteProjectCommand;
const deserializeAws_json1_1DeleteProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserProfileCommand = deserializeAws_json1_1DeleteUserProfileCommand;
const deserializeAws_json1_1DeleteUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProjectCommand = deserializeAws_json1_1DescribeProjectCommand;
const deserializeAws_json1_1DescribeProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserProfileCommand = deserializeAws_json1_1DescribeUserProfileCommand;
const deserializeAws_json1_1DescribeUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UserProfileNotFoundException":
        case "com.amazonaws.codestar#UserProfileNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateTeamMemberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateTeamMemberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateTeamMemberResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateTeamMemberCommand = deserializeAws_json1_1DisassociateTeamMemberCommand;
const deserializeAws_json1_1DisassociateTeamMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListProjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProjectsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProjectsCommand = deserializeAws_json1_1ListProjectsCommand;
const deserializeAws_json1_1ListProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourcesCommand = deserializeAws_json1_1ListResourcesCommand;
const deserializeAws_json1_1ListResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForProjectCommand = deserializeAws_json1_1ListTagsForProjectCommand;
const deserializeAws_json1_1ListTagsForProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTeamMembersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTeamMembersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTeamMembersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTeamMembersCommand = deserializeAws_json1_1ListTeamMembersCommand;
const deserializeAws_json1_1ListTeamMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUserProfilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUserProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserProfilesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUserProfilesCommand = deserializeAws_json1_1ListUserProfilesCommand;
const deserializeAws_json1_1ListUserProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TagProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagProjectCommand = deserializeAws_json1_1TagProjectCommand;
const deserializeAws_json1_1TagProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UntagProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagProjectCommand = deserializeAws_json1_1UntagProjectCommand;
const deserializeAws_json1_1UntagProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProjectCommand = deserializeAws_json1_1UpdateProjectCommand;
const deserializeAws_json1_1UpdateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateTeamMemberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTeamMemberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTeamMemberResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTeamMemberCommand = deserializeAws_json1_1UpdateTeamMemberCommand;
const deserializeAws_json1_1UpdateTeamMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = {
                ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TeamMemberNotFoundException":
        case "com.amazonaws.codestar#TeamMemberNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TeamMemberNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserProfileCommand = deserializeAws_json1_1UpdateUserProfileCommand;
const deserializeAws_json1_1UpdateUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UserProfileNotFoundException":
        case "com.amazonaws.codestar#UserProfileNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "server",
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
const deserializeAws_json1_1InvalidServiceRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidServiceRoleException(body, context);
    const contents = {
        name: "InvalidServiceRoleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectAlreadyExistsException(body, context);
    const contents = {
        name: "ProjectAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ProjectConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectConfigurationException(body, context);
    const contents = {
        name: "ProjectConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ProjectCreationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectCreationFailedException(body, context);
    const contents = {
        name: "ProjectCreationFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ProjectNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectNotFoundException(body, context);
    const contents = {
        name: "ProjectNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TeamMemberAlreadyAssociatedException(body, context);
    const contents = {
        name: "TeamMemberAlreadyAssociatedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TeamMemberNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TeamMemberNotFoundException(body, context);
    const contents = {
        name: "TeamMemberNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserProfileAlreadyExistsException(body, context);
    const contents = {
        name: "UserProfileAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserProfileNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserProfileNotFoundException(body, context);
    const contents = {
        name: "UserProfileNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AssociateTeamMemberRequest = (input, context) => {
    return {
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
        ...(input.projectRole !== undefined && input.projectRole !== null && { projectRole: input.projectRole }),
        ...(input.remoteAccessAllowed !== undefined &&
            input.remoteAccessAllowed !== null && { remoteAccessAllowed: input.remoteAccessAllowed }),
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const serializeAws_json1_1Code = (input, context) => {
    return {
        ...(input.destination !== undefined &&
            input.destination !== null && { destination: serializeAws_json1_1CodeDestination(input.destination, context) }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_json1_1CodeSource(input.source, context) }),
    };
};
const serializeAws_json1_1CodeCommitCodeDestination = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1CodeDestination = (input, context) => {
    return {
        ...(input.codeCommit !== undefined &&
            input.codeCommit !== null && {
            codeCommit: serializeAws_json1_1CodeCommitCodeDestination(input.codeCommit, context),
        }),
        ...(input.gitHub !== undefined &&
            input.gitHub !== null && { gitHub: serializeAws_json1_1GitHubCodeDestination(input.gitHub, context) }),
    };
};
const serializeAws_json1_1CodeSource = (input, context) => {
    return {
        ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_json1_1S3Location(input.s3, context) }),
    };
};
const serializeAws_json1_1CreateProjectRequest = (input, context) => {
    return {
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.sourceCode !== undefined &&
            input.sourceCode !== null && { sourceCode: serializeAws_json1_1SourceCode(input.sourceCode, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.toolchain !== undefined &&
            input.toolchain !== null && { toolchain: serializeAws_json1_1Toolchain(input.toolchain, context) }),
    };
};
const serializeAws_json1_1CreateUserProfileRequest = (input, context) => {
    return {
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
        ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
        ...(input.sshPublicKey !== undefined && input.sshPublicKey !== null && { sshPublicKey: input.sshPublicKey }),
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const serializeAws_json1_1DeleteProjectRequest = (input, context) => {
    return {
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.deleteStack !== undefined && input.deleteStack !== null && { deleteStack: input.deleteStack }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeleteUserProfileRequest = (input, context) => {
    return {
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const serializeAws_json1_1DescribeProjectRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DescribeUserProfileRequest = (input, context) => {
    return {
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const serializeAws_json1_1DisassociateTeamMemberRequest = (input, context) => {
    return {
        ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const serializeAws_json1_1GitHubCodeDestination = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.issuesEnabled !== undefined && input.issuesEnabled !== null && { issuesEnabled: input.issuesEnabled }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
        ...(input.privateRepository !== undefined &&
            input.privateRepository !== null && { privateRepository: input.privateRepository }),
        ...(input.token !== undefined && input.token !== null && { token: input.token }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ListProjectsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListResourcesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
    };
};
const serializeAws_json1_1ListTagsForProjectRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListTeamMembersRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
    };
};
const serializeAws_json1_1ListUserProfilesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1S3Location = (input, context) => {
    return {
        ...(input.bucketKey !== undefined && input.bucketKey !== null && { bucketKey: input.bucketKey }),
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    };
};
const serializeAws_json1_1SourceCode = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Code(entry, context);
    });
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagProjectRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1TemplateParameterMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1Toolchain = (input, context) => {
    return {
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_json1_1ToolchainSource(input.source, context) }),
        ...(input.stackParameters !== undefined &&
            input.stackParameters !== null && {
            stackParameters: serializeAws_json1_1TemplateParameterMap(input.stackParameters, context),
        }),
    };
};
const serializeAws_json1_1ToolchainSource = (input, context) => {
    return {
        ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_json1_1S3Location(input.s3, context) }),
    };
};
const serializeAws_json1_1UntagProjectRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagKeys(input.tags, context) }),
    };
};
const serializeAws_json1_1UpdateProjectRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1UpdateTeamMemberRequest = (input, context) => {
    return {
        ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
        ...(input.projectRole !== undefined && input.projectRole !== null && { projectRole: input.projectRole }),
        ...(input.remoteAccessAllowed !== undefined &&
            input.remoteAccessAllowed !== null && { remoteAccessAllowed: input.remoteAccessAllowed }),
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const serializeAws_json1_1UpdateUserProfileRequest = (input, context) => {
    return {
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
        ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
        ...(input.sshPublicKey !== undefined && input.sshPublicKey !== null && { sshPublicKey: input.sshPublicKey }),
        ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
    };
};
const deserializeAws_json1_1AssociateTeamMemberResult = (output, context) => {
    return {
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CreateProjectResult = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        projectTemplateId: output.projectTemplateId !== undefined && output.projectTemplateId !== null
            ? output.projectTemplateId
            : undefined,
    };
};
const deserializeAws_json1_1CreateUserProfileResult = (output, context) => {
    return {
        createdTimestamp: output.createdTimestamp !== undefined && output.createdTimestamp !== null
            ? new Date(Math.round(output.createdTimestamp * 1000))
            : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
        lastModifiedTimestamp: output.lastModifiedTimestamp !== undefined && output.lastModifiedTimestamp !== null
            ? new Date(Math.round(output.lastModifiedTimestamp * 1000))
            : undefined,
        sshPublicKey: output.sshPublicKey !== undefined && output.sshPublicKey !== null ? output.sshPublicKey : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1DeleteProjectResult = (output, context) => {
    return {
        projectArn: output.projectArn !== undefined && output.projectArn !== null ? output.projectArn : undefined,
        stackId: output.stackId !== undefined && output.stackId !== null ? output.stackId : undefined,
    };
};
const deserializeAws_json1_1DeleteUserProfileResult = (output, context) => {
    return {
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1DescribeProjectResult = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        createdTimeStamp: output.createdTimeStamp !== undefined && output.createdTimeStamp !== null
            ? new Date(Math.round(output.createdTimeStamp * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        projectTemplateId: output.projectTemplateId !== undefined && output.projectTemplateId !== null
            ? output.projectTemplateId
            : undefined,
        stackId: output.stackId !== undefined && output.stackId !== null ? output.stackId : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_json1_1ProjectStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserProfileResult = (output, context) => {
    return {
        createdTimestamp: output.createdTimestamp !== undefined && output.createdTimestamp !== null
            ? new Date(Math.round(output.createdTimestamp * 1000))
            : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
        lastModifiedTimestamp: output.lastModifiedTimestamp !== undefined && output.lastModifiedTimestamp !== null
            ? new Date(Math.round(output.lastModifiedTimestamp * 1000))
            : undefined,
        sshPublicKey: output.sshPublicKey !== undefined && output.sshPublicKey !== null ? output.sshPublicKey : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1DisassociateTeamMemberResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidServiceRoleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListProjectsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1ProjectsList(output.projects, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourcesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        resources: output.resources !== undefined && output.resources !== null
            ? deserializeAws_json1_1ResourcesResult(output.resources, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForProjectResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1ListTeamMembersResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        teamMembers: output.teamMembers !== undefined && output.teamMembers !== null
            ? deserializeAws_json1_1TeamMemberResult(output.teamMembers, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUserProfilesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        userProfiles: output.userProfiles !== undefined && output.userProfiles !== null
            ? deserializeAws_json1_1UserProfilesList(output.userProfiles, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProjectAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ProjectConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ProjectCreationFailedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ProjectNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ProjectsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectSummary(entry, context);
    });
};
const deserializeAws_json1_1ProjectStatus = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_json1_1ProjectSummary = (output, context) => {
    return {
        projectArn: output.projectArn !== undefined && output.projectArn !== null ? output.projectArn : undefined,
        projectId: output.projectId !== undefined && output.projectId !== null ? output.projectId : undefined,
    };
};
const deserializeAws_json1_1Resource = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_json1_1ResourcesResult = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Resource(entry, context);
    });
};
const deserializeAws_json1_1TagProjectResult = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1Tags = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1TeamMember = (output, context) => {
    return {
        projectRole: output.projectRole !== undefined && output.projectRole !== null ? output.projectRole : undefined,
        remoteAccessAllowed: output.remoteAccessAllowed !== undefined && output.remoteAccessAllowed !== null
            ? output.remoteAccessAllowed
            : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1TeamMemberAlreadyAssociatedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TeamMemberNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TeamMemberResult = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TeamMember(entry, context);
    });
};
const deserializeAws_json1_1UntagProjectResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateProjectResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateTeamMemberResult = (output, context) => {
    return {
        projectRole: output.projectRole !== undefined && output.projectRole !== null ? output.projectRole : undefined,
        remoteAccessAllowed: output.remoteAccessAllowed !== undefined && output.remoteAccessAllowed !== null
            ? output.remoteAccessAllowed
            : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1UpdateUserProfileResult = (output, context) => {
    return {
        createdTimestamp: output.createdTimestamp !== undefined && output.createdTimestamp !== null
            ? new Date(Math.round(output.createdTimestamp * 1000))
            : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
        lastModifiedTimestamp: output.lastModifiedTimestamp !== undefined && output.lastModifiedTimestamp !== null
            ? new Date(Math.round(output.lastModifiedTimestamp * 1000))
            : undefined,
        sshPublicKey: output.sshPublicKey !== undefined && output.sshPublicKey !== null ? output.sshPublicKey : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1UserProfileAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserProfileNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserProfilesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserProfileSummary(entry, context);
    });
};
const deserializeAws_json1_1UserProfileSummary = (output, context) => {
    return {
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
        sshPublicKey: output.sshPublicKey !== undefined && output.sshPublicKey !== null ? output.sshPublicKey : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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