"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DeleteQualificationTypeCommand = exports.deserializeAws_json1_1DeleteHITCommand = exports.deserializeAws_json1_1CreateWorkerBlockCommand = exports.deserializeAws_json1_1CreateQualificationTypeCommand = exports.deserializeAws_json1_1CreateHITWithHITTypeCommand = exports.deserializeAws_json1_1CreateHITTypeCommand = exports.deserializeAws_json1_1CreateHITCommand = exports.deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = exports.deserializeAws_json1_1AssociateQualificationWithWorkerCommand = exports.deserializeAws_json1_1ApproveAssignmentCommand = exports.deserializeAws_json1_1AcceptQualificationRequestCommand = exports.serializeAws_json1_1UpdateQualificationTypeCommand = exports.serializeAws_json1_1UpdateNotificationSettingsCommand = exports.serializeAws_json1_1UpdateHITTypeOfHITCommand = exports.serializeAws_json1_1UpdateHITReviewStatusCommand = exports.serializeAws_json1_1UpdateExpirationForHITCommand = exports.serializeAws_json1_1SendTestEventNotificationCommand = exports.serializeAws_json1_1SendBonusCommand = exports.serializeAws_json1_1RejectQualificationRequestCommand = exports.serializeAws_json1_1RejectAssignmentCommand = exports.serializeAws_json1_1NotifyWorkersCommand = exports.serializeAws_json1_1ListWorkersWithQualificationTypeCommand = exports.serializeAws_json1_1ListWorkerBlocksCommand = exports.serializeAws_json1_1ListReviewPolicyResultsForHITCommand = exports.serializeAws_json1_1ListReviewableHITsCommand = exports.serializeAws_json1_1ListQualificationTypesCommand = exports.serializeAws_json1_1ListQualificationRequestsCommand = exports.serializeAws_json1_1ListHITsForQualificationTypeCommand = exports.serializeAws_json1_1ListHITsCommand = exports.serializeAws_json1_1ListBonusPaymentsCommand = exports.serializeAws_json1_1ListAssignmentsForHITCommand = exports.serializeAws_json1_1GetQualificationTypeCommand = exports.serializeAws_json1_1GetQualificationScoreCommand = exports.serializeAws_json1_1GetHITCommand = exports.serializeAws_json1_1GetFileUploadURLCommand = exports.serializeAws_json1_1GetAssignmentCommand = exports.serializeAws_json1_1GetAccountBalanceCommand = exports.serializeAws_json1_1DisassociateQualificationFromWorkerCommand = exports.serializeAws_json1_1DeleteWorkerBlockCommand = exports.serializeAws_json1_1DeleteQualificationTypeCommand = exports.serializeAws_json1_1DeleteHITCommand = exports.serializeAws_json1_1CreateWorkerBlockCommand = exports.serializeAws_json1_1CreateQualificationTypeCommand = exports.serializeAws_json1_1CreateHITWithHITTypeCommand = exports.serializeAws_json1_1CreateHITTypeCommand = exports.serializeAws_json1_1CreateHITCommand = exports.serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = exports.serializeAws_json1_1AssociateQualificationWithWorkerCommand = exports.serializeAws_json1_1ApproveAssignmentCommand = exports.serializeAws_json1_1AcceptQualificationRequestCommand = void 0;
exports.deserializeAws_json1_1UpdateQualificationTypeCommand = exports.deserializeAws_json1_1UpdateNotificationSettingsCommand = exports.deserializeAws_json1_1UpdateHITTypeOfHITCommand = exports.deserializeAws_json1_1UpdateHITReviewStatusCommand = exports.deserializeAws_json1_1UpdateExpirationForHITCommand = exports.deserializeAws_json1_1SendTestEventNotificationCommand = exports.deserializeAws_json1_1SendBonusCommand = exports.deserializeAws_json1_1RejectQualificationRequestCommand = exports.deserializeAws_json1_1RejectAssignmentCommand = exports.deserializeAws_json1_1NotifyWorkersCommand = exports.deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = exports.deserializeAws_json1_1ListWorkerBlocksCommand = exports.deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = exports.deserializeAws_json1_1ListReviewableHITsCommand = exports.deserializeAws_json1_1ListQualificationTypesCommand = exports.deserializeAws_json1_1ListQualificationRequestsCommand = exports.deserializeAws_json1_1ListHITsForQualificationTypeCommand = exports.deserializeAws_json1_1ListHITsCommand = exports.deserializeAws_json1_1ListBonusPaymentsCommand = exports.deserializeAws_json1_1ListAssignmentsForHITCommand = exports.deserializeAws_json1_1GetQualificationTypeCommand = exports.deserializeAws_json1_1GetQualificationScoreCommand = exports.deserializeAws_json1_1GetHITCommand = exports.deserializeAws_json1_1GetFileUploadURLCommand = exports.deserializeAws_json1_1GetAssignmentCommand = exports.deserializeAws_json1_1GetAccountBalanceCommand = exports.deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = exports.deserializeAws_json1_1DeleteWorkerBlockCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptQualificationRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptQualificationRequestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptQualificationRequestCommand = serializeAws_json1_1AcceptQualificationRequestCommand;
const serializeAws_json1_1ApproveAssignmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ApproveAssignment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ApproveAssignmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ApproveAssignmentCommand = serializeAws_json1_1ApproveAssignmentCommand;
const serializeAws_json1_1AssociateQualificationWithWorkerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateQualificationWithWorkerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateQualificationWithWorkerCommand = serializeAws_json1_1AssociateQualificationWithWorkerCommand;
const serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand;
const serializeAws_json1_1CreateHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.CreateHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHITCommand = serializeAws_json1_1CreateHITCommand;
const serializeAws_json1_1CreateHITTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.CreateHITType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHITTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHITTypeCommand = serializeAws_json1_1CreateHITTypeCommand;
const serializeAws_json1_1CreateHITWithHITTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.CreateHITWithHITType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHITWithHITTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHITWithHITTypeCommand = serializeAws_json1_1CreateHITWithHITTypeCommand;
const serializeAws_json1_1CreateQualificationTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.CreateQualificationType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateQualificationTypeCommand = serializeAws_json1_1CreateQualificationTypeCommand;
const serializeAws_json1_1CreateWorkerBlockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.CreateWorkerBlock",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkerBlockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWorkerBlockCommand = serializeAws_json1_1CreateWorkerBlockCommand;
const serializeAws_json1_1DeleteHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.DeleteHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteHITCommand = serializeAws_json1_1DeleteHITCommand;
const serializeAws_json1_1DeleteQualificationTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.DeleteQualificationType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteQualificationTypeCommand = serializeAws_json1_1DeleteQualificationTypeCommand;
const serializeAws_json1_1DeleteWorkerBlockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.DeleteWorkerBlock",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkerBlockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWorkerBlockCommand = serializeAws_json1_1DeleteWorkerBlockCommand;
const serializeAws_json1_1DisassociateQualificationFromWorkerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateQualificationFromWorkerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateQualificationFromWorkerCommand = serializeAws_json1_1DisassociateQualificationFromWorkerCommand;
const serializeAws_json1_1GetAccountBalanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.GetAccountBalance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccountBalanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAccountBalanceCommand = serializeAws_json1_1GetAccountBalanceCommand;
const serializeAws_json1_1GetAssignmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.GetAssignment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAssignmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAssignmentCommand = serializeAws_json1_1GetAssignmentCommand;
const serializeAws_json1_1GetFileUploadURLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.GetFileUploadURL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFileUploadURLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFileUploadURLCommand = serializeAws_json1_1GetFileUploadURLCommand;
const serializeAws_json1_1GetHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.GetHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetHITCommand = serializeAws_json1_1GetHITCommand;
const serializeAws_json1_1GetQualificationScoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.GetQualificationScore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQualificationScoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetQualificationScoreCommand = serializeAws_json1_1GetQualificationScoreCommand;
const serializeAws_json1_1GetQualificationTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.GetQualificationType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetQualificationTypeCommand = serializeAws_json1_1GetQualificationTypeCommand;
const serializeAws_json1_1ListAssignmentsForHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListAssignmentsForHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssignmentsForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssignmentsForHITCommand = serializeAws_json1_1ListAssignmentsForHITCommand;
const serializeAws_json1_1ListBonusPaymentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListBonusPayments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBonusPaymentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBonusPaymentsCommand = serializeAws_json1_1ListBonusPaymentsCommand;
const serializeAws_json1_1ListHITsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListHITs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHITsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListHITsCommand = serializeAws_json1_1ListHITsCommand;
const serializeAws_json1_1ListHITsForQualificationTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListHITsForQualificationType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHITsForQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListHITsForQualificationTypeCommand = serializeAws_json1_1ListHITsForQualificationTypeCommand;
const serializeAws_json1_1ListQualificationRequestsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListQualificationRequests",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListQualificationRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListQualificationRequestsCommand = serializeAws_json1_1ListQualificationRequestsCommand;
const serializeAws_json1_1ListQualificationTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListQualificationTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListQualificationTypesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListQualificationTypesCommand = serializeAws_json1_1ListQualificationTypesCommand;
const serializeAws_json1_1ListReviewableHITsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListReviewableHITs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReviewableHITsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReviewableHITsCommand = serializeAws_json1_1ListReviewableHITsCommand;
const serializeAws_json1_1ListReviewPolicyResultsForHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReviewPolicyResultsForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReviewPolicyResultsForHITCommand = serializeAws_json1_1ListReviewPolicyResultsForHITCommand;
const serializeAws_json1_1ListWorkerBlocksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListWorkerBlocks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkerBlocksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWorkerBlocksCommand = serializeAws_json1_1ListWorkerBlocksCommand;
const serializeAws_json1_1ListWorkersWithQualificationTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkersWithQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWorkersWithQualificationTypeCommand = serializeAws_json1_1ListWorkersWithQualificationTypeCommand;
const serializeAws_json1_1NotifyWorkersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.NotifyWorkers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyWorkersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1NotifyWorkersCommand = serializeAws_json1_1NotifyWorkersCommand;
const serializeAws_json1_1RejectAssignmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.RejectAssignment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectAssignmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectAssignmentCommand = serializeAws_json1_1RejectAssignmentCommand;
const serializeAws_json1_1RejectQualificationRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.RejectQualificationRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectQualificationRequestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectQualificationRequestCommand = serializeAws_json1_1RejectQualificationRequestCommand;
const serializeAws_json1_1SendBonusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.SendBonus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendBonusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendBonusCommand = serializeAws_json1_1SendBonusCommand;
const serializeAws_json1_1SendTestEventNotificationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.SendTestEventNotification",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendTestEventNotificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendTestEventNotificationCommand = serializeAws_json1_1SendTestEventNotificationCommand;
const serializeAws_json1_1UpdateExpirationForHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.UpdateExpirationForHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateExpirationForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateExpirationForHITCommand = serializeAws_json1_1UpdateExpirationForHITCommand;
const serializeAws_json1_1UpdateHITReviewStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.UpdateHITReviewStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateHITReviewStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateHITReviewStatusCommand = serializeAws_json1_1UpdateHITReviewStatusCommand;
const serializeAws_json1_1UpdateHITTypeOfHITCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateHITTypeOfHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateHITTypeOfHITCommand = serializeAws_json1_1UpdateHITTypeOfHITCommand;
const serializeAws_json1_1UpdateNotificationSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.UpdateNotificationSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNotificationSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateNotificationSettingsCommand = serializeAws_json1_1UpdateNotificationSettingsCommand;
const serializeAws_json1_1UpdateQualificationTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MTurkRequesterServiceV20170117.UpdateQualificationType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateQualificationTypeCommand = serializeAws_json1_1UpdateQualificationTypeCommand;
const deserializeAws_json1_1AcceptQualificationRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptQualificationRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptQualificationRequestResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptQualificationRequestCommand = deserializeAws_json1_1AcceptQualificationRequestCommand;
const deserializeAws_json1_1AcceptQualificationRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ApproveAssignmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ApproveAssignmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ApproveAssignmentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ApproveAssignmentCommand = deserializeAws_json1_1ApproveAssignmentCommand;
const deserializeAws_json1_1ApproveAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateQualificationWithWorkerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateQualificationWithWorkerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateQualificationWithWorkerCommand = deserializeAws_json1_1AssociateQualificationWithWorkerCommand;
const deserializeAws_json1_1AssociateQualificationWithWorkerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand;
const deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHITCommand = deserializeAws_json1_1CreateHITCommand;
const deserializeAws_json1_1CreateHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateHITTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHITTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHITTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHITTypeCommand = deserializeAws_json1_1CreateHITTypeCommand;
const deserializeAws_json1_1CreateHITTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateHITWithHITTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHITWithHITTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHITWithHITTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHITWithHITTypeCommand = deserializeAws_json1_1CreateHITWithHITTypeCommand;
const deserializeAws_json1_1CreateHITWithHITTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateQualificationTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateQualificationTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateQualificationTypeCommand = deserializeAws_json1_1CreateQualificationTypeCommand;
const deserializeAws_json1_1CreateQualificationTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateWorkerBlockCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWorkerBlockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkerBlockResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWorkerBlockCommand = deserializeAws_json1_1CreateWorkerBlockCommand;
const deserializeAws_json1_1CreateWorkerBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteHITCommand = deserializeAws_json1_1DeleteHITCommand;
const deserializeAws_json1_1DeleteHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteQualificationTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteQualificationTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteQualificationTypeCommand = deserializeAws_json1_1DeleteQualificationTypeCommand;
const deserializeAws_json1_1DeleteQualificationTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteWorkerBlockCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWorkerBlockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkerBlockResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWorkerBlockCommand = deserializeAws_json1_1DeleteWorkerBlockCommand;
const deserializeAws_json1_1DeleteWorkerBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateQualificationFromWorkerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = deserializeAws_json1_1DisassociateQualificationFromWorkerCommand;
const deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAccountBalanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAccountBalanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccountBalanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAccountBalanceCommand = deserializeAws_json1_1GetAccountBalanceCommand;
const deserializeAws_json1_1GetAccountBalanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAssignmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAssignmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAssignmentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAssignmentCommand = deserializeAws_json1_1GetAssignmentCommand;
const deserializeAws_json1_1GetAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFileUploadURLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFileUploadURLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFileUploadURLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFileUploadURLCommand = deserializeAws_json1_1GetFileUploadURLCommand;
const deserializeAws_json1_1GetFileUploadURLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetHITCommand = deserializeAws_json1_1GetHITCommand;
const deserializeAws_json1_1GetHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetQualificationScoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetQualificationScoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQualificationScoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetQualificationScoreCommand = deserializeAws_json1_1GetQualificationScoreCommand;
const deserializeAws_json1_1GetQualificationScoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetQualificationTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQualificationTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetQualificationTypeCommand = deserializeAws_json1_1GetQualificationTypeCommand;
const deserializeAws_json1_1GetQualificationTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAssignmentsForHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssignmentsForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssignmentsForHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssignmentsForHITCommand = deserializeAws_json1_1ListAssignmentsForHITCommand;
const deserializeAws_json1_1ListAssignmentsForHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBonusPaymentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBonusPaymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBonusPaymentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBonusPaymentsCommand = deserializeAws_json1_1ListBonusPaymentsCommand;
const deserializeAws_json1_1ListBonusPaymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListHITsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListHITsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHITsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListHITsCommand = deserializeAws_json1_1ListHITsCommand;
const deserializeAws_json1_1ListHITsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListHITsForQualificationTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListHITsForQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHITsForQualificationTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListHITsForQualificationTypeCommand = deserializeAws_json1_1ListHITsForQualificationTypeCommand;
const deserializeAws_json1_1ListHITsForQualificationTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListQualificationRequestsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListQualificationRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListQualificationRequestsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListQualificationRequestsCommand = deserializeAws_json1_1ListQualificationRequestsCommand;
const deserializeAws_json1_1ListQualificationRequestsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListQualificationTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListQualificationTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListQualificationTypesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListQualificationTypesCommand = deserializeAws_json1_1ListQualificationTypesCommand;
const deserializeAws_json1_1ListQualificationTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReviewableHITsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReviewableHITsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReviewableHITsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReviewableHITsCommand = deserializeAws_json1_1ListReviewableHITsCommand;
const deserializeAws_json1_1ListReviewableHITsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReviewPolicyResultsForHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = deserializeAws_json1_1ListReviewPolicyResultsForHITCommand;
const deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListWorkerBlocksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListWorkerBlocksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkerBlocksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListWorkerBlocksCommand = deserializeAws_json1_1ListWorkerBlocksCommand;
const deserializeAws_json1_1ListWorkerBlocksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkersWithQualificationTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = deserializeAws_json1_1ListWorkersWithQualificationTypeCommand;
const deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1NotifyWorkersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1NotifyWorkersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyWorkersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1NotifyWorkersCommand = deserializeAws_json1_1NotifyWorkersCommand;
const deserializeAws_json1_1NotifyWorkersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RejectAssignmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RejectAssignmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectAssignmentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectAssignmentCommand = deserializeAws_json1_1RejectAssignmentCommand;
const deserializeAws_json1_1RejectAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RejectQualificationRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RejectQualificationRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectQualificationRequestResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectQualificationRequestCommand = deserializeAws_json1_1RejectQualificationRequestCommand;
const deserializeAws_json1_1RejectQualificationRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SendBonusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendBonusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendBonusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendBonusCommand = deserializeAws_json1_1SendBonusCommand;
const deserializeAws_json1_1SendBonusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SendTestEventNotificationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendTestEventNotificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendTestEventNotificationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendTestEventNotificationCommand = deserializeAws_json1_1SendTestEventNotificationCommand;
const deserializeAws_json1_1SendTestEventNotificationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateExpirationForHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateExpirationForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateExpirationForHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateExpirationForHITCommand = deserializeAws_json1_1UpdateExpirationForHITCommand;
const deserializeAws_json1_1UpdateExpirationForHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateHITReviewStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateHITReviewStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateHITReviewStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateHITReviewStatusCommand = deserializeAws_json1_1UpdateHITReviewStatusCommand;
const deserializeAws_json1_1UpdateHITReviewStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateHITTypeOfHITCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateHITTypeOfHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateHITTypeOfHITResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateHITTypeOfHITCommand = deserializeAws_json1_1UpdateHITTypeOfHITCommand;
const deserializeAws_json1_1UpdateHITTypeOfHITCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateNotificationSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateNotificationSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNotificationSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateNotificationSettingsCommand = deserializeAws_json1_1UpdateNotificationSettingsCommand;
const deserializeAws_json1_1UpdateNotificationSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateQualificationTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateQualificationTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateQualificationTypeCommand = deserializeAws_json1_1UpdateQualificationTypeCommand;
const deserializeAws_json1_1UpdateQualificationTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.mturk#RequestError":
            response = {
                ...(await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFault":
        case "com.amazonaws.mturk#ServiceFault":
            response = {
                ...(await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RequestErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestError(body, context);
    const contents = {
        name: "RequestError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceFault(body, context);
    const contents = {
        name: "ServiceFault",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptQualificationRequestRequest = (input, context) => {
    return {
        ...(input.IntegerValue !== undefined && input.IntegerValue !== null && { IntegerValue: input.IntegerValue }),
        ...(input.QualificationRequestId !== undefined &&
            input.QualificationRequestId !== null && { QualificationRequestId: input.QualificationRequestId }),
    };
};
const serializeAws_json1_1ApproveAssignmentRequest = (input, context) => {
    return {
        ...(input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }),
        ...(input.OverrideRejection !== undefined &&
            input.OverrideRejection !== null && { OverrideRejection: input.OverrideRejection }),
        ...(input.RequesterFeedback !== undefined &&
            input.RequesterFeedback !== null && { RequesterFeedback: input.RequesterFeedback }),
    };
};
const serializeAws_json1_1AssignmentStatusList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssociateQualificationWithWorkerRequest = (input, context) => {
    return {
        ...(input.IntegerValue !== undefined && input.IntegerValue !== null && { IntegerValue: input.IntegerValue }),
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
        ...(input.SendNotification !== undefined &&
            input.SendNotification !== null && { SendNotification: input.SendNotification }),
        ...(input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }),
    };
};
const serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest = (input, context) => {
    return {
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
        ...(input.NumberOfAdditionalAssignments !== undefined &&
            input.NumberOfAdditionalAssignments !== null && {
            NumberOfAdditionalAssignments: input.NumberOfAdditionalAssignments,
        }),
        ...(input.UniqueRequestToken !== undefined &&
            input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }),
    };
};
const serializeAws_json1_1CreateHITRequest = (input, context) => {
    return {
        ...(input.AssignmentDurationInSeconds !== undefined &&
            input.AssignmentDurationInSeconds !== null && { AssignmentDurationInSeconds: input.AssignmentDurationInSeconds }),
        ...(input.AssignmentReviewPolicy !== undefined &&
            input.AssignmentReviewPolicy !== null && {
            AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context),
        }),
        ...(input.AutoApprovalDelayInSeconds !== undefined &&
            input.AutoApprovalDelayInSeconds !== null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.HITLayoutId !== undefined && input.HITLayoutId !== null && { HITLayoutId: input.HITLayoutId }),
        ...(input.HITLayoutParameters !== undefined &&
            input.HITLayoutParameters !== null && {
            HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context),
        }),
        ...(input.HITReviewPolicy !== undefined &&
            input.HITReviewPolicy !== null && {
            HITReviewPolicy: serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context),
        }),
        ...(input.Keywords !== undefined && input.Keywords !== null && { Keywords: input.Keywords }),
        ...(input.LifetimeInSeconds !== undefined &&
            input.LifetimeInSeconds !== null && { LifetimeInSeconds: input.LifetimeInSeconds }),
        ...(input.MaxAssignments !== undefined &&
            input.MaxAssignments !== null && { MaxAssignments: input.MaxAssignments }),
        ...(input.QualificationRequirements !== undefined &&
            input.QualificationRequirements !== null && {
            QualificationRequirements: serializeAws_json1_1QualificationRequirementList(input.QualificationRequirements, context),
        }),
        ...(input.Question !== undefined && input.Question !== null && { Question: input.Question }),
        ...(input.RequesterAnnotation !== undefined &&
            input.RequesterAnnotation !== null && { RequesterAnnotation: input.RequesterAnnotation }),
        ...(input.Reward !== undefined && input.Reward !== null && { Reward: input.Reward }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.UniqueRequestToken !== undefined &&
            input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }),
    };
};
const serializeAws_json1_1CreateHITTypeRequest = (input, context) => {
    return {
        ...(input.AssignmentDurationInSeconds !== undefined &&
            input.AssignmentDurationInSeconds !== null && { AssignmentDurationInSeconds: input.AssignmentDurationInSeconds }),
        ...(input.AutoApprovalDelayInSeconds !== undefined &&
            input.AutoApprovalDelayInSeconds !== null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Keywords !== undefined && input.Keywords !== null && { Keywords: input.Keywords }),
        ...(input.QualificationRequirements !== undefined &&
            input.QualificationRequirements !== null && {
            QualificationRequirements: serializeAws_json1_1QualificationRequirementList(input.QualificationRequirements, context),
        }),
        ...(input.Reward !== undefined && input.Reward !== null && { Reward: input.Reward }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    };
};
const serializeAws_json1_1CreateHITWithHITTypeRequest = (input, context) => {
    return {
        ...(input.AssignmentReviewPolicy !== undefined &&
            input.AssignmentReviewPolicy !== null && {
            AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context),
        }),
        ...(input.HITLayoutId !== undefined && input.HITLayoutId !== null && { HITLayoutId: input.HITLayoutId }),
        ...(input.HITLayoutParameters !== undefined &&
            input.HITLayoutParameters !== null && {
            HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context),
        }),
        ...(input.HITReviewPolicy !== undefined &&
            input.HITReviewPolicy !== null && {
            HITReviewPolicy: serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context),
        }),
        ...(input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId }),
        ...(input.LifetimeInSeconds !== undefined &&
            input.LifetimeInSeconds !== null && { LifetimeInSeconds: input.LifetimeInSeconds }),
        ...(input.MaxAssignments !== undefined &&
            input.MaxAssignments !== null && { MaxAssignments: input.MaxAssignments }),
        ...(input.Question !== undefined && input.Question !== null && { Question: input.Question }),
        ...(input.RequesterAnnotation !== undefined &&
            input.RequesterAnnotation !== null && { RequesterAnnotation: input.RequesterAnnotation }),
        ...(input.UniqueRequestToken !== undefined &&
            input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }),
    };
};
const serializeAws_json1_1CreateQualificationTypeRequest = (input, context) => {
    return {
        ...(input.AnswerKey !== undefined && input.AnswerKey !== null && { AnswerKey: input.AnswerKey }),
        ...(input.AutoGranted !== undefined && input.AutoGranted !== null && { AutoGranted: input.AutoGranted }),
        ...(input.AutoGrantedValue !== undefined &&
            input.AutoGrantedValue !== null && { AutoGrantedValue: input.AutoGrantedValue }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Keywords !== undefined && input.Keywords !== null && { Keywords: input.Keywords }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.QualificationTypeStatus !== undefined &&
            input.QualificationTypeStatus !== null && { QualificationTypeStatus: input.QualificationTypeStatus }),
        ...(input.RetryDelayInSeconds !== undefined &&
            input.RetryDelayInSeconds !== null && { RetryDelayInSeconds: input.RetryDelayInSeconds }),
        ...(input.Test !== undefined && input.Test !== null && { Test: input.Test }),
        ...(input.TestDurationInSeconds !== undefined &&
            input.TestDurationInSeconds !== null && { TestDurationInSeconds: input.TestDurationInSeconds }),
    };
};
const serializeAws_json1_1CreateWorkerBlockRequest = (input, context) => {
    return {
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
        ...(input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }),
    };
};
const serializeAws_json1_1CustomerIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteHITRequest = (input, context) => {
    return {
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
    };
};
const serializeAws_json1_1DeleteQualificationTypeRequest = (input, context) => {
    return {
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
    };
};
const serializeAws_json1_1DeleteWorkerBlockRequest = (input, context) => {
    return {
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
        ...(input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }),
    };
};
const serializeAws_json1_1DisassociateQualificationFromWorkerRequest = (input, context) => {
    return {
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
        ...(input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }),
    };
};
const serializeAws_json1_1EventTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetAccountBalanceRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetAssignmentRequest = (input, context) => {
    return {
        ...(input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }),
    };
};
const serializeAws_json1_1GetFileUploadURLRequest = (input, context) => {
    return {
        ...(input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }),
        ...(input.QuestionIdentifier !== undefined &&
            input.QuestionIdentifier !== null && { QuestionIdentifier: input.QuestionIdentifier }),
    };
};
const serializeAws_json1_1GetHITRequest = (input, context) => {
    return {
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
    };
};
const serializeAws_json1_1GetQualificationScoreRequest = (input, context) => {
    return {
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
        ...(input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }),
    };
};
const serializeAws_json1_1GetQualificationTypeRequest = (input, context) => {
    return {
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
    };
};
const serializeAws_json1_1HITLayoutParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1HITLayoutParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HITLayoutParameter(entry, context);
    });
};
const serializeAws_json1_1IntegerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListAssignmentsForHITRequest = (input, context) => {
    return {
        ...(input.AssignmentStatuses !== undefined &&
            input.AssignmentStatuses !== null && {
            AssignmentStatuses: serializeAws_json1_1AssignmentStatusList(input.AssignmentStatuses, context),
        }),
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListBonusPaymentsRequest = (input, context) => {
    return {
        ...(input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }),
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListHITsForQualificationTypeRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
    };
};
const serializeAws_json1_1ListHITsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListQualificationRequestsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
    };
};
const serializeAws_json1_1ListQualificationTypesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MustBeOwnedByCaller !== undefined &&
            input.MustBeOwnedByCaller !== null && { MustBeOwnedByCaller: input.MustBeOwnedByCaller }),
        ...(input.MustBeRequestable !== undefined &&
            input.MustBeRequestable !== null && { MustBeRequestable: input.MustBeRequestable }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Query !== undefined && input.Query !== null && { Query: input.Query }),
    };
};
const serializeAws_json1_1ListReviewableHITsRequest = (input, context) => {
    return {
        ...(input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListReviewPolicyResultsForHITRequest = (input, context) => {
    return {
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PolicyLevels !== undefined &&
            input.PolicyLevels !== null && {
            PolicyLevels: serializeAws_json1_1ReviewPolicyLevelList(input.PolicyLevels, context),
        }),
        ...(input.RetrieveActions !== undefined &&
            input.RetrieveActions !== null && { RetrieveActions: input.RetrieveActions }),
        ...(input.RetrieveResults !== undefined &&
            input.RetrieveResults !== null && { RetrieveResults: input.RetrieveResults }),
    };
};
const serializeAws_json1_1ListWorkerBlocksRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListWorkersWithQualificationTypeRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1Locale = (input, context) => {
    return {
        ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
        ...(input.Subdivision !== undefined && input.Subdivision !== null && { Subdivision: input.Subdivision }),
    };
};
const serializeAws_json1_1LocaleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Locale(entry, context);
    });
};
const serializeAws_json1_1NotificationSpecification = (input, context) => {
    return {
        ...(input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }),
        ...(input.EventTypes !== undefined &&
            input.EventTypes !== null && { EventTypes: serializeAws_json1_1EventTypeList(input.EventTypes, context) }),
        ...(input.Transport !== undefined && input.Transport !== null && { Transport: input.Transport }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1NotifyWorkersRequest = (input, context) => {
    return {
        ...(input.MessageText !== undefined && input.MessageText !== null && { MessageText: input.MessageText }),
        ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
        ...(input.WorkerIds !== undefined &&
            input.WorkerIds !== null && { WorkerIds: serializeAws_json1_1CustomerIdList(input.WorkerIds, context) }),
    };
};
const serializeAws_json1_1ParameterMapEntry = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1StringList(input.Values, context) }),
    };
};
const serializeAws_json1_1ParameterMapEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterMapEntry(entry, context);
    });
};
const serializeAws_json1_1PolicyParameter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.MapEntries !== undefined &&
            input.MapEntries !== null && {
            MapEntries: serializeAws_json1_1ParameterMapEntryList(input.MapEntries, context),
        }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1StringList(input.Values, context) }),
    };
};
const serializeAws_json1_1PolicyParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PolicyParameter(entry, context);
    });
};
const serializeAws_json1_1QualificationRequirement = (input, context) => {
    return {
        ...(input.ActionsGuarded !== undefined &&
            input.ActionsGuarded !== null && { ActionsGuarded: input.ActionsGuarded }),
        ...(input.Comparator !== undefined && input.Comparator !== null && { Comparator: input.Comparator }),
        ...(input.IntegerValues !== undefined &&
            input.IntegerValues !== null && { IntegerValues: serializeAws_json1_1IntegerList(input.IntegerValues, context) }),
        ...(input.LocaleValues !== undefined &&
            input.LocaleValues !== null && { LocaleValues: serializeAws_json1_1LocaleList(input.LocaleValues, context) }),
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
        ...(input.RequiredToPreview !== undefined &&
            input.RequiredToPreview !== null && { RequiredToPreview: input.RequiredToPreview }),
    };
};
const serializeAws_json1_1QualificationRequirementList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1QualificationRequirement(entry, context);
    });
};
const serializeAws_json1_1RejectAssignmentRequest = (input, context) => {
    return {
        ...(input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }),
        ...(input.RequesterFeedback !== undefined &&
            input.RequesterFeedback !== null && { RequesterFeedback: input.RequesterFeedback }),
    };
};
const serializeAws_json1_1RejectQualificationRequestRequest = (input, context) => {
    return {
        ...(input.QualificationRequestId !== undefined &&
            input.QualificationRequestId !== null && { QualificationRequestId: input.QualificationRequestId }),
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
    };
};
const serializeAws_json1_1ReviewPolicy = (input, context) => {
    return {
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1PolicyParameterList(input.Parameters, context) }),
        ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    };
};
const serializeAws_json1_1ReviewPolicyLevelList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SendBonusRequest = (input, context) => {
    return {
        ...(input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }),
        ...(input.BonusAmount !== undefined && input.BonusAmount !== null && { BonusAmount: input.BonusAmount }),
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
        ...(input.UniqueRequestToken !== undefined &&
            input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }),
        ...(input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }),
    };
};
const serializeAws_json1_1SendTestEventNotificationRequest = (input, context) => {
    return {
        ...(input.Notification !== undefined &&
            input.Notification !== null && {
            Notification: serializeAws_json1_1NotificationSpecification(input.Notification, context),
        }),
        ...(input.TestEventType !== undefined && input.TestEventType !== null && { TestEventType: input.TestEventType }),
    };
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UpdateExpirationForHITRequest = (input, context) => {
    return {
        ...(input.ExpireAt !== undefined &&
            input.ExpireAt !== null && { ExpireAt: Math.round(input.ExpireAt.getTime() / 1000) }),
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
    };
};
const serializeAws_json1_1UpdateHITReviewStatusRequest = (input, context) => {
    return {
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
        ...(input.Revert !== undefined && input.Revert !== null && { Revert: input.Revert }),
    };
};
const serializeAws_json1_1UpdateHITTypeOfHITRequest = (input, context) => {
    return {
        ...(input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }),
        ...(input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId }),
    };
};
const serializeAws_json1_1UpdateNotificationSettingsRequest = (input, context) => {
    return {
        ...(input.Active !== undefined && input.Active !== null && { Active: input.Active }),
        ...(input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId }),
        ...(input.Notification !== undefined &&
            input.Notification !== null && {
            Notification: serializeAws_json1_1NotificationSpecification(input.Notification, context),
        }),
    };
};
const serializeAws_json1_1UpdateQualificationTypeRequest = (input, context) => {
    return {
        ...(input.AnswerKey !== undefined && input.AnswerKey !== null && { AnswerKey: input.AnswerKey }),
        ...(input.AutoGranted !== undefined && input.AutoGranted !== null && { AutoGranted: input.AutoGranted }),
        ...(input.AutoGrantedValue !== undefined &&
            input.AutoGrantedValue !== null && { AutoGrantedValue: input.AutoGrantedValue }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.QualificationTypeId !== undefined &&
            input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }),
        ...(input.QualificationTypeStatus !== undefined &&
            input.QualificationTypeStatus !== null && { QualificationTypeStatus: input.QualificationTypeStatus }),
        ...(input.RetryDelayInSeconds !== undefined &&
            input.RetryDelayInSeconds !== null && { RetryDelayInSeconds: input.RetryDelayInSeconds }),
        ...(input.Test !== undefined && input.Test !== null && { Test: input.Test }),
        ...(input.TestDurationInSeconds !== undefined &&
            input.TestDurationInSeconds !== null && { TestDurationInSeconds: input.TestDurationInSeconds }),
    };
};
const deserializeAws_json1_1AcceptQualificationRequestResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ApproveAssignmentResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Assignment = (output, context) => {
    return {
        AcceptTime: output.AcceptTime !== undefined && output.AcceptTime !== null
            ? new Date(Math.round(output.AcceptTime * 1000))
            : undefined,
        Answer: output.Answer !== undefined && output.Answer !== null ? output.Answer : undefined,
        ApprovalTime: output.ApprovalTime !== undefined && output.ApprovalTime !== null
            ? new Date(Math.round(output.ApprovalTime * 1000))
            : undefined,
        AssignmentId: output.AssignmentId !== undefined && output.AssignmentId !== null ? output.AssignmentId : undefined,
        AssignmentStatus: output.AssignmentStatus !== undefined && output.AssignmentStatus !== null ? output.AssignmentStatus : undefined,
        AutoApprovalTime: output.AutoApprovalTime !== undefined && output.AutoApprovalTime !== null
            ? new Date(Math.round(output.AutoApprovalTime * 1000))
            : undefined,
        Deadline: output.Deadline !== undefined && output.Deadline !== null
            ? new Date(Math.round(output.Deadline * 1000))
            : undefined,
        HITId: output.HITId !== undefined && output.HITId !== null ? output.HITId : undefined,
        RejectionTime: output.RejectionTime !== undefined && output.RejectionTime !== null
            ? new Date(Math.round(output.RejectionTime * 1000))
            : undefined,
        RequesterFeedback: output.RequesterFeedback !== undefined && output.RequesterFeedback !== null
            ? output.RequesterFeedback
            : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
const deserializeAws_json1_1AssignmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Assignment(entry, context);
    });
};
const deserializeAws_json1_1AssociateQualificationWithWorkerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1BonusPayment = (output, context) => {
    return {
        AssignmentId: output.AssignmentId !== undefined && output.AssignmentId !== null ? output.AssignmentId : undefined,
        BonusAmount: output.BonusAmount !== undefined && output.BonusAmount !== null ? output.BonusAmount : undefined,
        GrantTime: output.GrantTime !== undefined && output.GrantTime !== null
            ? new Date(Math.round(output.GrantTime * 1000))
            : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
const deserializeAws_json1_1BonusPaymentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BonusPayment(entry, context);
    });
};
const deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateHITResponse = (output, context) => {
    return {
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
const deserializeAws_json1_1CreateHITTypeResponse = (output, context) => {
    return {
        HITTypeId: output.HITTypeId !== undefined && output.HITTypeId !== null ? output.HITTypeId : undefined,
    };
};
const deserializeAws_json1_1CreateHITWithHITTypeResponse = (output, context) => {
    return {
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
const deserializeAws_json1_1CreateQualificationTypeResponse = (output, context) => {
    return {
        QualificationType: output.QualificationType !== undefined && output.QualificationType !== null
            ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateWorkerBlockResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteHITResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteQualificationTypeResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteWorkerBlockResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateQualificationFromWorkerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1GetAccountBalanceResponse = (output, context) => {
    return {
        AvailableBalance: output.AvailableBalance !== undefined && output.AvailableBalance !== null ? output.AvailableBalance : undefined,
        OnHoldBalance: output.OnHoldBalance !== undefined && output.OnHoldBalance !== null ? output.OnHoldBalance : undefined,
    };
};
const deserializeAws_json1_1GetAssignmentResponse = (output, context) => {
    return {
        Assignment: output.Assignment !== undefined && output.Assignment !== null
            ? deserializeAws_json1_1Assignment(output.Assignment, context)
            : undefined,
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
const deserializeAws_json1_1GetFileUploadURLResponse = (output, context) => {
    return {
        FileUploadURL: output.FileUploadURL !== undefined && output.FileUploadURL !== null ? output.FileUploadURL : undefined,
    };
};
const deserializeAws_json1_1GetHITResponse = (output, context) => {
    return {
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
const deserializeAws_json1_1GetQualificationScoreResponse = (output, context) => {
    return {
        Qualification: output.Qualification !== undefined && output.Qualification !== null
            ? deserializeAws_json1_1Qualification(output.Qualification, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetQualificationTypeResponse = (output, context) => {
    return {
        QualificationType: output.QualificationType !== undefined && output.QualificationType !== null
            ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
            : undefined,
    };
};
const deserializeAws_json1_1HIT = (output, context) => {
    return {
        AssignmentDurationInSeconds: output.AssignmentDurationInSeconds !== undefined && output.AssignmentDurationInSeconds !== null
            ? output.AssignmentDurationInSeconds
            : undefined,
        AutoApprovalDelayInSeconds: output.AutoApprovalDelayInSeconds !== undefined && output.AutoApprovalDelayInSeconds !== null
            ? output.AutoApprovalDelayInSeconds
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Expiration: output.Expiration !== undefined && output.Expiration !== null
            ? new Date(Math.round(output.Expiration * 1000))
            : undefined,
        HITGroupId: output.HITGroupId !== undefined && output.HITGroupId !== null ? output.HITGroupId : undefined,
        HITId: output.HITId !== undefined && output.HITId !== null ? output.HITId : undefined,
        HITLayoutId: output.HITLayoutId !== undefined && output.HITLayoutId !== null ? output.HITLayoutId : undefined,
        HITReviewStatus: output.HITReviewStatus !== undefined && output.HITReviewStatus !== null ? output.HITReviewStatus : undefined,
        HITStatus: output.HITStatus !== undefined && output.HITStatus !== null ? output.HITStatus : undefined,
        HITTypeId: output.HITTypeId !== undefined && output.HITTypeId !== null ? output.HITTypeId : undefined,
        Keywords: output.Keywords !== undefined && output.Keywords !== null ? output.Keywords : undefined,
        MaxAssignments: output.MaxAssignments !== undefined && output.MaxAssignments !== null ? output.MaxAssignments : undefined,
        NumberOfAssignmentsAvailable: output.NumberOfAssignmentsAvailable !== undefined && output.NumberOfAssignmentsAvailable !== null
            ? output.NumberOfAssignmentsAvailable
            : undefined,
        NumberOfAssignmentsCompleted: output.NumberOfAssignmentsCompleted !== undefined && output.NumberOfAssignmentsCompleted !== null
            ? output.NumberOfAssignmentsCompleted
            : undefined,
        NumberOfAssignmentsPending: output.NumberOfAssignmentsPending !== undefined && output.NumberOfAssignmentsPending !== null
            ? output.NumberOfAssignmentsPending
            : undefined,
        QualificationRequirements: output.QualificationRequirements !== undefined && output.QualificationRequirements !== null
            ? deserializeAws_json1_1QualificationRequirementList(output.QualificationRequirements, context)
            : undefined,
        Question: output.Question !== undefined && output.Question !== null ? output.Question : undefined,
        RequesterAnnotation: output.RequesterAnnotation !== undefined && output.RequesterAnnotation !== null
            ? output.RequesterAnnotation
            : undefined,
        Reward: output.Reward !== undefined && output.Reward !== null ? output.Reward : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    };
};
const deserializeAws_json1_1HITList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HIT(entry, context);
    });
};
const deserializeAws_json1_1IntegerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ListAssignmentsForHITResponse = (output, context) => {
    return {
        Assignments: output.Assignments !== undefined && output.Assignments !== null
            ? deserializeAws_json1_1AssignmentList(output.Assignments, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
const deserializeAws_json1_1ListBonusPaymentsResponse = (output, context) => {
    return {
        BonusPayments: output.BonusPayments !== undefined && output.BonusPayments !== null
            ? deserializeAws_json1_1BonusPaymentList(output.BonusPayments, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
const deserializeAws_json1_1ListHITsForQualificationTypeResponse = (output, context) => {
    return {
        HITs: output.HITs !== undefined && output.HITs !== null
            ? deserializeAws_json1_1HITList(output.HITs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
const deserializeAws_json1_1ListHITsResponse = (output, context) => {
    return {
        HITs: output.HITs !== undefined && output.HITs !== null
            ? deserializeAws_json1_1HITList(output.HITs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
const deserializeAws_json1_1ListQualificationRequestsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        QualificationRequests: output.QualificationRequests !== undefined && output.QualificationRequests !== null
            ? deserializeAws_json1_1QualificationRequestList(output.QualificationRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListQualificationTypesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        QualificationTypes: output.QualificationTypes !== undefined && output.QualificationTypes !== null
            ? deserializeAws_json1_1QualificationTypeList(output.QualificationTypes, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListReviewableHITsResponse = (output, context) => {
    return {
        HITs: output.HITs !== undefined && output.HITs !== null
            ? deserializeAws_json1_1HITList(output.HITs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
const deserializeAws_json1_1ListReviewPolicyResultsForHITResponse = (output, context) => {
    return {
        AssignmentReviewPolicy: output.AssignmentReviewPolicy !== undefined && output.AssignmentReviewPolicy !== null
            ? deserializeAws_json1_1ReviewPolicy(output.AssignmentReviewPolicy, context)
            : undefined,
        AssignmentReviewReport: output.AssignmentReviewReport !== undefined && output.AssignmentReviewReport !== null
            ? deserializeAws_json1_1ReviewReport(output.AssignmentReviewReport, context)
            : undefined,
        HITId: output.HITId !== undefined && output.HITId !== null ? output.HITId : undefined,
        HITReviewPolicy: output.HITReviewPolicy !== undefined && output.HITReviewPolicy !== null
            ? deserializeAws_json1_1ReviewPolicy(output.HITReviewPolicy, context)
            : undefined,
        HITReviewReport: output.HITReviewReport !== undefined && output.HITReviewReport !== null
            ? deserializeAws_json1_1ReviewReport(output.HITReviewReport, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListWorkerBlocksResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        WorkerBlocks: output.WorkerBlocks !== undefined && output.WorkerBlocks !== null
            ? deserializeAws_json1_1WorkerBlockList(output.WorkerBlocks, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListWorkersWithQualificationTypeResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        Qualifications: output.Qualifications !== undefined && output.Qualifications !== null
            ? deserializeAws_json1_1QualificationList(output.Qualifications, context)
            : undefined,
    };
};
const deserializeAws_json1_1Locale = (output, context) => {
    return {
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        Subdivision: output.Subdivision !== undefined && output.Subdivision !== null ? output.Subdivision : undefined,
    };
};
const deserializeAws_json1_1LocaleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Locale(entry, context);
    });
};
const deserializeAws_json1_1NotifyWorkersFailureStatus = (output, context) => {
    return {
        NotifyWorkersFailureCode: output.NotifyWorkersFailureCode !== undefined && output.NotifyWorkersFailureCode !== null
            ? output.NotifyWorkersFailureCode
            : undefined,
        NotifyWorkersFailureMessage: output.NotifyWorkersFailureMessage !== undefined && output.NotifyWorkersFailureMessage !== null
            ? output.NotifyWorkersFailureMessage
            : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
const deserializeAws_json1_1NotifyWorkersFailureStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NotifyWorkersFailureStatus(entry, context);
    });
};
const deserializeAws_json1_1NotifyWorkersResponse = (output, context) => {
    return {
        NotifyWorkersFailureStatuses: output.NotifyWorkersFailureStatuses !== undefined && output.NotifyWorkersFailureStatuses !== null
            ? deserializeAws_json1_1NotifyWorkersFailureStatusList(output.NotifyWorkersFailureStatuses, context)
            : undefined,
    };
};
const deserializeAws_json1_1ParameterMapEntry = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1StringList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1ParameterMapEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterMapEntry(entry, context);
    });
};
const deserializeAws_json1_1PolicyParameter = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MapEntries: output.MapEntries !== undefined && output.MapEntries !== null
            ? deserializeAws_json1_1ParameterMapEntryList(output.MapEntries, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1StringList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1PolicyParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicyParameter(entry, context);
    });
};
const deserializeAws_json1_1Qualification = (output, context) => {
    return {
        GrantTime: output.GrantTime !== undefined && output.GrantTime !== null
            ? new Date(Math.round(output.GrantTime * 1000))
            : undefined,
        IntegerValue: output.IntegerValue !== undefined && output.IntegerValue !== null ? output.IntegerValue : undefined,
        LocaleValue: output.LocaleValue !== undefined && output.LocaleValue !== null
            ? deserializeAws_json1_1Locale(output.LocaleValue, context)
            : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
const deserializeAws_json1_1QualificationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Qualification(entry, context);
    });
};
const deserializeAws_json1_1QualificationRequest = (output, context) => {
    return {
        Answer: output.Answer !== undefined && output.Answer !== null ? output.Answer : undefined,
        QualificationRequestId: output.QualificationRequestId !== undefined && output.QualificationRequestId !== null
            ? output.QualificationRequestId
            : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
        Test: output.Test !== undefined && output.Test !== null ? output.Test : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
const deserializeAws_json1_1QualificationRequestList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QualificationRequest(entry, context);
    });
};
const deserializeAws_json1_1QualificationRequirement = (output, context) => {
    return {
        ActionsGuarded: output.ActionsGuarded !== undefined && output.ActionsGuarded !== null ? output.ActionsGuarded : undefined,
        Comparator: output.Comparator !== undefined && output.Comparator !== null ? output.Comparator : undefined,
        IntegerValues: output.IntegerValues !== undefined && output.IntegerValues !== null
            ? deserializeAws_json1_1IntegerList(output.IntegerValues, context)
            : undefined,
        LocaleValues: output.LocaleValues !== undefined && output.LocaleValues !== null
            ? deserializeAws_json1_1LocaleList(output.LocaleValues, context)
            : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        RequiredToPreview: output.RequiredToPreview !== undefined && output.RequiredToPreview !== null
            ? output.RequiredToPreview
            : undefined,
    };
};
const deserializeAws_json1_1QualificationRequirementList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QualificationRequirement(entry, context);
    });
};
const deserializeAws_json1_1QualificationType = (output, context) => {
    return {
        AnswerKey: output.AnswerKey !== undefined && output.AnswerKey !== null ? output.AnswerKey : undefined,
        AutoGranted: output.AutoGranted !== undefined && output.AutoGranted !== null ? output.AutoGranted : undefined,
        AutoGrantedValue: output.AutoGrantedValue !== undefined && output.AutoGrantedValue !== null ? output.AutoGrantedValue : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsRequestable: output.IsRequestable !== undefined && output.IsRequestable !== null ? output.IsRequestable : undefined,
        Keywords: output.Keywords !== undefined && output.Keywords !== null ? output.Keywords : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        QualificationTypeStatus: output.QualificationTypeStatus !== undefined && output.QualificationTypeStatus !== null
            ? output.QualificationTypeStatus
            : undefined,
        RetryDelayInSeconds: output.RetryDelayInSeconds !== undefined && output.RetryDelayInSeconds !== null
            ? output.RetryDelayInSeconds
            : undefined,
        Test: output.Test !== undefined && output.Test !== null ? output.Test : undefined,
        TestDurationInSeconds: output.TestDurationInSeconds !== undefined && output.TestDurationInSeconds !== null
            ? output.TestDurationInSeconds
            : undefined,
    };
};
const deserializeAws_json1_1QualificationTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QualificationType(entry, context);
    });
};
const deserializeAws_json1_1RejectAssignmentResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1RejectQualificationRequestResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1RequestError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        TurkErrorCode: output.TurkErrorCode !== undefined && output.TurkErrorCode !== null ? output.TurkErrorCode : undefined,
    };
};
const deserializeAws_json1_1ReviewActionDetail = (output, context) => {
    return {
        ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
        ActionName: output.ActionName !== undefined && output.ActionName !== null ? output.ActionName : undefined,
        CompleteTime: output.CompleteTime !== undefined && output.CompleteTime !== null
            ? new Date(Math.round(output.CompleteTime * 1000))
            : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Result: output.Result !== undefined && output.Result !== null ? output.Result : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
        TargetType: output.TargetType !== undefined && output.TargetType !== null ? output.TargetType : undefined,
    };
};
const deserializeAws_json1_1ReviewActionDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReviewActionDetail(entry, context);
    });
};
const deserializeAws_json1_1ReviewPolicy = (output, context) => {
    return {
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1PolicyParameterList(output.Parameters, context)
            : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
const deserializeAws_json1_1ReviewReport = (output, context) => {
    return {
        ReviewActions: output.ReviewActions !== undefined && output.ReviewActions !== null
            ? deserializeAws_json1_1ReviewActionDetailList(output.ReviewActions, context)
            : undefined,
        ReviewResults: output.ReviewResults !== undefined && output.ReviewResults !== null
            ? deserializeAws_json1_1ReviewResultDetailList(output.ReviewResults, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReviewResultDetail = (output, context) => {
    return {
        ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        QuestionId: output.QuestionId !== undefined && output.QuestionId !== null ? output.QuestionId : undefined,
        SubjectId: output.SubjectId !== undefined && output.SubjectId !== null ? output.SubjectId : undefined,
        SubjectType: output.SubjectType !== undefined && output.SubjectType !== null ? output.SubjectType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ReviewResultDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReviewResultDetail(entry, context);
    });
};
const deserializeAws_json1_1SendBonusResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1SendTestEventNotificationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ServiceFault = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        TurkErrorCode: output.TurkErrorCode !== undefined && output.TurkErrorCode !== null ? output.TurkErrorCode : undefined,
    };
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1UpdateExpirationForHITResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateHITReviewStatusResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateHITTypeOfHITResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateNotificationSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateQualificationTypeResponse = (output, context) => {
    return {
        QualificationType: output.QualificationType !== undefined && output.QualificationType !== null
            ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkerBlock = (output, context) => {
    return {
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
const deserializeAws_json1_1WorkerBlockList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkerBlock(entry, context);
    });
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