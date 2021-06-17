"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1MergeBranchesByFastForwardCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = exports.serializeAws_json1_1ListRepositoriesCommand = exports.serializeAws_json1_1ListPullRequestsCommand = exports.serializeAws_json1_1ListBranchesCommand = exports.serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = exports.serializeAws_json1_1ListApprovalRuleTemplatesCommand = exports.serializeAws_json1_1GetRepositoryTriggersCommand = exports.serializeAws_json1_1GetRepositoryCommand = exports.serializeAws_json1_1GetPullRequestOverrideStateCommand = exports.serializeAws_json1_1GetPullRequestApprovalStatesCommand = exports.serializeAws_json1_1GetPullRequestCommand = exports.serializeAws_json1_1GetMergeOptionsCommand = exports.serializeAws_json1_1GetMergeConflictsCommand = exports.serializeAws_json1_1GetMergeCommitCommand = exports.serializeAws_json1_1GetFolderCommand = exports.serializeAws_json1_1GetFileCommand = exports.serializeAws_json1_1GetDifferencesCommand = exports.serializeAws_json1_1GetCommitCommand = exports.serializeAws_json1_1GetCommentsForPullRequestCommand = exports.serializeAws_json1_1GetCommentsForComparedCommitCommand = exports.serializeAws_json1_1GetCommentReactionsCommand = exports.serializeAws_json1_1GetCommentCommand = exports.serializeAws_json1_1GetBranchCommand = exports.serializeAws_json1_1GetBlobCommand = exports.serializeAws_json1_1GetApprovalRuleTemplateCommand = exports.serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = exports.serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = exports.serializeAws_json1_1DescribePullRequestEventsCommand = exports.serializeAws_json1_1DescribeMergeConflictsCommand = exports.serializeAws_json1_1DeleteRepositoryCommand = exports.serializeAws_json1_1DeletePullRequestApprovalRuleCommand = exports.serializeAws_json1_1DeleteFileCommand = exports.serializeAws_json1_1DeleteCommentContentCommand = exports.serializeAws_json1_1DeleteBranchCommand = exports.serializeAws_json1_1DeleteApprovalRuleTemplateCommand = exports.serializeAws_json1_1CreateUnreferencedMergeCommitCommand = exports.serializeAws_json1_1CreateRepositoryCommand = exports.serializeAws_json1_1CreatePullRequestApprovalRuleCommand = exports.serializeAws_json1_1CreatePullRequestCommand = exports.serializeAws_json1_1CreateCommitCommand = exports.serializeAws_json1_1CreateBranchCommand = exports.serializeAws_json1_1CreateApprovalRuleTemplateCommand = exports.serializeAws_json1_1BatchGetRepositoriesCommand = exports.serializeAws_json1_1BatchGetCommitsCommand = exports.serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = exports.serializeAws_json1_1BatchDescribeMergeConflictsCommand = exports.serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = exports.serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = void 0;
exports.deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = exports.deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = exports.deserializeAws_json1_1DescribePullRequestEventsCommand = exports.deserializeAws_json1_1DescribeMergeConflictsCommand = exports.deserializeAws_json1_1DeleteRepositoryCommand = exports.deserializeAws_json1_1DeletePullRequestApprovalRuleCommand = exports.deserializeAws_json1_1DeleteFileCommand = exports.deserializeAws_json1_1DeleteCommentContentCommand = exports.deserializeAws_json1_1DeleteBranchCommand = exports.deserializeAws_json1_1DeleteApprovalRuleTemplateCommand = exports.deserializeAws_json1_1CreateUnreferencedMergeCommitCommand = exports.deserializeAws_json1_1CreateRepositoryCommand = exports.deserializeAws_json1_1CreatePullRequestApprovalRuleCommand = exports.deserializeAws_json1_1CreatePullRequestCommand = exports.deserializeAws_json1_1CreateCommitCommand = exports.deserializeAws_json1_1CreateBranchCommand = exports.deserializeAws_json1_1CreateApprovalRuleTemplateCommand = exports.deserializeAws_json1_1BatchGetRepositoriesCommand = exports.deserializeAws_json1_1BatchGetCommitsCommand = exports.deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = exports.deserializeAws_json1_1BatchDescribeMergeConflictsCommand = exports.deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = exports.deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = exports.serializeAws_json1_1UpdateRepositoryNameCommand = exports.serializeAws_json1_1UpdateRepositoryDescriptionCommand = exports.serializeAws_json1_1UpdatePullRequestTitleCommand = exports.serializeAws_json1_1UpdatePullRequestStatusCommand = exports.serializeAws_json1_1UpdatePullRequestDescriptionCommand = exports.serializeAws_json1_1UpdatePullRequestApprovalStateCommand = exports.serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = exports.serializeAws_json1_1UpdateDefaultBranchCommand = exports.serializeAws_json1_1UpdateCommentCommand = exports.serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = exports.serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = exports.serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TestRepositoryTriggersCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1PutRepositoryTriggersCommand = exports.serializeAws_json1_1PutFileCommand = exports.serializeAws_json1_1PutCommentReactionCommand = exports.serializeAws_json1_1PostCommentReplyCommand = exports.serializeAws_json1_1PostCommentForPullRequestCommand = exports.serializeAws_json1_1PostCommentForComparedCommitCommand = exports.serializeAws_json1_1OverridePullRequestApprovalRulesCommand = exports.serializeAws_json1_1MergePullRequestByThreeWayCommand = exports.serializeAws_json1_1MergePullRequestBySquashCommand = exports.serializeAws_json1_1MergePullRequestByFastForwardCommand = exports.serializeAws_json1_1MergeBranchesByThreeWayCommand = exports.serializeAws_json1_1MergeBranchesBySquashCommand = void 0;
exports.deserializeAws_json1_1UpdatePullRequestDescriptionCommand = exports.deserializeAws_json1_1UpdatePullRequestApprovalStateCommand = exports.deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = exports.deserializeAws_json1_1UpdateDefaultBranchCommand = exports.deserializeAws_json1_1UpdateCommentCommand = exports.deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = exports.deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = exports.deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TestRepositoryTriggersCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1PutRepositoryTriggersCommand = exports.deserializeAws_json1_1PutFileCommand = exports.deserializeAws_json1_1PutCommentReactionCommand = exports.deserializeAws_json1_1PostCommentReplyCommand = exports.deserializeAws_json1_1PostCommentForPullRequestCommand = exports.deserializeAws_json1_1PostCommentForComparedCommitCommand = exports.deserializeAws_json1_1OverridePullRequestApprovalRulesCommand = exports.deserializeAws_json1_1MergePullRequestByThreeWayCommand = exports.deserializeAws_json1_1MergePullRequestBySquashCommand = exports.deserializeAws_json1_1MergePullRequestByFastForwardCommand = exports.deserializeAws_json1_1MergeBranchesByThreeWayCommand = exports.deserializeAws_json1_1MergeBranchesBySquashCommand = exports.deserializeAws_json1_1MergeBranchesByFastForwardCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = exports.deserializeAws_json1_1ListRepositoriesCommand = exports.deserializeAws_json1_1ListPullRequestsCommand = exports.deserializeAws_json1_1ListBranchesCommand = exports.deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = exports.deserializeAws_json1_1ListApprovalRuleTemplatesCommand = exports.deserializeAws_json1_1GetRepositoryTriggersCommand = exports.deserializeAws_json1_1GetRepositoryCommand = exports.deserializeAws_json1_1GetPullRequestOverrideStateCommand = exports.deserializeAws_json1_1GetPullRequestApprovalStatesCommand = exports.deserializeAws_json1_1GetPullRequestCommand = exports.deserializeAws_json1_1GetMergeOptionsCommand = exports.deserializeAws_json1_1GetMergeConflictsCommand = exports.deserializeAws_json1_1GetMergeCommitCommand = exports.deserializeAws_json1_1GetFolderCommand = exports.deserializeAws_json1_1GetFileCommand = exports.deserializeAws_json1_1GetDifferencesCommand = exports.deserializeAws_json1_1GetCommitCommand = exports.deserializeAws_json1_1GetCommentsForPullRequestCommand = exports.deserializeAws_json1_1GetCommentsForComparedCommitCommand = exports.deserializeAws_json1_1GetCommentReactionsCommand = exports.deserializeAws_json1_1GetCommentCommand = exports.deserializeAws_json1_1GetBranchCommand = exports.deserializeAws_json1_1GetBlobCommand = exports.deserializeAws_json1_1GetApprovalRuleTemplateCommand = void 0;
exports.deserializeAws_json1_1UpdateRepositoryNameCommand = exports.deserializeAws_json1_1UpdateRepositoryDescriptionCommand = exports.deserializeAws_json1_1UpdatePullRequestTitleCommand = exports.deserializeAws_json1_1UpdatePullRequestStatusCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand;
const serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand;
const serializeAws_json1_1BatchDescribeMergeConflictsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.BatchDescribeMergeConflicts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDescribeMergeConflictsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDescribeMergeConflictsCommand = serializeAws_json1_1BatchDescribeMergeConflictsCommand;
const serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand;
const serializeAws_json1_1BatchGetCommitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.BatchGetCommits",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetCommitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetCommitsCommand = serializeAws_json1_1BatchGetCommitsCommand;
const serializeAws_json1_1BatchGetRepositoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.BatchGetRepositories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetRepositoriesCommand = serializeAws_json1_1BatchGetRepositoriesCommand;
const serializeAws_json1_1CreateApprovalRuleTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreateApprovalRuleTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApprovalRuleTemplateCommand = serializeAws_json1_1CreateApprovalRuleTemplateCommand;
const serializeAws_json1_1CreateBranchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreateBranch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBranchCommand = serializeAws_json1_1CreateBranchCommand;
const serializeAws_json1_1CreateCommitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreateCommit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCommitCommand = serializeAws_json1_1CreateCommitCommand;
const serializeAws_json1_1CreatePullRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreatePullRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePullRequestCommand = serializeAws_json1_1CreatePullRequestCommand;
const serializeAws_json1_1CreatePullRequestApprovalRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreatePullRequestApprovalRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePullRequestApprovalRuleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePullRequestApprovalRuleCommand = serializeAws_json1_1CreatePullRequestApprovalRuleCommand;
const serializeAws_json1_1CreateRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreateRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRepositoryCommand = serializeAws_json1_1CreateRepositoryCommand;
const serializeAws_json1_1CreateUnreferencedMergeCommitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.CreateUnreferencedMergeCommit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUnreferencedMergeCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUnreferencedMergeCommitCommand = serializeAws_json1_1CreateUnreferencedMergeCommitCommand;
const serializeAws_json1_1DeleteApprovalRuleTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DeleteApprovalRuleTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApprovalRuleTemplateCommand = serializeAws_json1_1DeleteApprovalRuleTemplateCommand;
const serializeAws_json1_1DeleteBranchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DeleteBranch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBranchCommand = serializeAws_json1_1DeleteBranchCommand;
const serializeAws_json1_1DeleteCommentContentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DeleteCommentContent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCommentContentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCommentContentCommand = serializeAws_json1_1DeleteCommentContentCommand;
const serializeAws_json1_1DeleteFileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DeleteFile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFileInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFileCommand = serializeAws_json1_1DeleteFileCommand;
const serializeAws_json1_1DeletePullRequestApprovalRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DeletePullRequestApprovalRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePullRequestApprovalRuleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePullRequestApprovalRuleCommand = serializeAws_json1_1DeletePullRequestApprovalRuleCommand;
const serializeAws_json1_1DeleteRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DeleteRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRepositoryCommand = serializeAws_json1_1DeleteRepositoryCommand;
const serializeAws_json1_1DescribeMergeConflictsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DescribeMergeConflicts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMergeConflictsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMergeConflictsCommand = serializeAws_json1_1DescribeMergeConflictsCommand;
const serializeAws_json1_1DescribePullRequestEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DescribePullRequestEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePullRequestEventsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePullRequestEventsCommand = serializeAws_json1_1DescribePullRequestEventsCommand;
const serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand;
const serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.EvaluatePullRequestApprovalRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EvaluatePullRequestApprovalRulesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand;
const serializeAws_json1_1GetApprovalRuleTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetApprovalRuleTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetApprovalRuleTemplateCommand = serializeAws_json1_1GetApprovalRuleTemplateCommand;
const serializeAws_json1_1GetBlobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetBlob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBlobInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBlobCommand = serializeAws_json1_1GetBlobCommand;
const serializeAws_json1_1GetBranchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetBranch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBranchCommand = serializeAws_json1_1GetBranchCommand;
const serializeAws_json1_1GetCommentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetComment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCommentCommand = serializeAws_json1_1GetCommentCommand;
const serializeAws_json1_1GetCommentReactionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetCommentReactions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentReactionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCommentReactionsCommand = serializeAws_json1_1GetCommentReactionsCommand;
const serializeAws_json1_1GetCommentsForComparedCommitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetCommentsForComparedCommit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentsForComparedCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCommentsForComparedCommitCommand = serializeAws_json1_1GetCommentsForComparedCommitCommand;
const serializeAws_json1_1GetCommentsForPullRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetCommentsForPullRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentsForPullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCommentsForPullRequestCommand = serializeAws_json1_1GetCommentsForPullRequestCommand;
const serializeAws_json1_1GetCommitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetCommit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCommitCommand = serializeAws_json1_1GetCommitCommand;
const serializeAws_json1_1GetDifferencesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetDifferences",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDifferencesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDifferencesCommand = serializeAws_json1_1GetDifferencesCommand;
const serializeAws_json1_1GetFileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetFile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFileInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFileCommand = serializeAws_json1_1GetFileCommand;
const serializeAws_json1_1GetFolderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetFolder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFolderInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFolderCommand = serializeAws_json1_1GetFolderCommand;
const serializeAws_json1_1GetMergeCommitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetMergeCommit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMergeCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMergeCommitCommand = serializeAws_json1_1GetMergeCommitCommand;
const serializeAws_json1_1GetMergeConflictsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetMergeConflicts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMergeConflictsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMergeConflictsCommand = serializeAws_json1_1GetMergeConflictsCommand;
const serializeAws_json1_1GetMergeOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetMergeOptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMergeOptionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMergeOptionsCommand = serializeAws_json1_1GetMergeOptionsCommand;
const serializeAws_json1_1GetPullRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetPullRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPullRequestCommand = serializeAws_json1_1GetPullRequestCommand;
const serializeAws_json1_1GetPullRequestApprovalStatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetPullRequestApprovalStates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPullRequestApprovalStatesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPullRequestApprovalStatesCommand = serializeAws_json1_1GetPullRequestApprovalStatesCommand;
const serializeAws_json1_1GetPullRequestOverrideStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetPullRequestOverrideState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPullRequestOverrideStateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPullRequestOverrideStateCommand = serializeAws_json1_1GetPullRequestOverrideStateCommand;
const serializeAws_json1_1GetRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRepositoryCommand = serializeAws_json1_1GetRepositoryCommand;
const serializeAws_json1_1GetRepositoryTriggersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.GetRepositoryTriggers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryTriggersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRepositoryTriggersCommand = serializeAws_json1_1GetRepositoryTriggersCommand;
const serializeAws_json1_1ListApprovalRuleTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListApprovalRuleTemplates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApprovalRuleTemplatesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApprovalRuleTemplatesCommand = serializeAws_json1_1ListApprovalRuleTemplatesCommand;
const serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand;
const serializeAws_json1_1ListBranchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListBranches",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBranchesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBranchesCommand = serializeAws_json1_1ListBranchesCommand;
const serializeAws_json1_1ListPullRequestsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListPullRequests",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPullRequestsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPullRequestsCommand = serializeAws_json1_1ListPullRequestsCommand;
const serializeAws_json1_1ListRepositoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListRepositories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRepositoriesCommand = serializeAws_json1_1ListRepositoriesCommand;
const serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1MergeBranchesByFastForwardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.MergeBranchesByFastForward",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeBranchesByFastForwardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergeBranchesByFastForwardCommand = serializeAws_json1_1MergeBranchesByFastForwardCommand;
const serializeAws_json1_1MergeBranchesBySquashCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.MergeBranchesBySquash",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeBranchesBySquashInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergeBranchesBySquashCommand = serializeAws_json1_1MergeBranchesBySquashCommand;
const serializeAws_json1_1MergeBranchesByThreeWayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.MergeBranchesByThreeWay",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeBranchesByThreeWayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergeBranchesByThreeWayCommand = serializeAws_json1_1MergeBranchesByThreeWayCommand;
const serializeAws_json1_1MergePullRequestByFastForwardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.MergePullRequestByFastForward",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergePullRequestByFastForwardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergePullRequestByFastForwardCommand = serializeAws_json1_1MergePullRequestByFastForwardCommand;
const serializeAws_json1_1MergePullRequestBySquashCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.MergePullRequestBySquash",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergePullRequestBySquashInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergePullRequestBySquashCommand = serializeAws_json1_1MergePullRequestBySquashCommand;
const serializeAws_json1_1MergePullRequestByThreeWayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.MergePullRequestByThreeWay",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergePullRequestByThreeWayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergePullRequestByThreeWayCommand = serializeAws_json1_1MergePullRequestByThreeWayCommand;
const serializeAws_json1_1OverridePullRequestApprovalRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.OverridePullRequestApprovalRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1OverridePullRequestApprovalRulesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1OverridePullRequestApprovalRulesCommand = serializeAws_json1_1OverridePullRequestApprovalRulesCommand;
const serializeAws_json1_1PostCommentForComparedCommitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.PostCommentForComparedCommit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PostCommentForComparedCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PostCommentForComparedCommitCommand = serializeAws_json1_1PostCommentForComparedCommitCommand;
const serializeAws_json1_1PostCommentForPullRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.PostCommentForPullRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PostCommentForPullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PostCommentForPullRequestCommand = serializeAws_json1_1PostCommentForPullRequestCommand;
const serializeAws_json1_1PostCommentReplyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.PostCommentReply",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PostCommentReplyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PostCommentReplyCommand = serializeAws_json1_1PostCommentReplyCommand;
const serializeAws_json1_1PutCommentReactionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.PutCommentReaction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutCommentReactionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutCommentReactionCommand = serializeAws_json1_1PutCommentReactionCommand;
const serializeAws_json1_1PutFileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.PutFile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutFileInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutFileCommand = serializeAws_json1_1PutFileCommand;
const serializeAws_json1_1PutRepositoryTriggersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.PutRepositoryTriggers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRepositoryTriggersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRepositoryTriggersCommand = serializeAws_json1_1PutRepositoryTriggersCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1TestRepositoryTriggersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.TestRepositoryTriggers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TestRepositoryTriggersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TestRepositoryTriggersCommand = serializeAws_json1_1TestRepositoryTriggersCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateContent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateContentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand;
const serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand;
const serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateName",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateNameInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand;
const serializeAws_json1_1UpdateCommentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateComment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCommentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCommentCommand = serializeAws_json1_1UpdateCommentCommand;
const serializeAws_json1_1UpdateDefaultBranchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateDefaultBranch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDefaultBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDefaultBranchCommand = serializeAws_json1_1UpdateDefaultBranchCommand;
const serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand;
const serializeAws_json1_1UpdatePullRequestApprovalStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdatePullRequestApprovalState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestApprovalStateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePullRequestApprovalStateCommand = serializeAws_json1_1UpdatePullRequestApprovalStateCommand;
const serializeAws_json1_1UpdatePullRequestDescriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdatePullRequestDescription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestDescriptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePullRequestDescriptionCommand = serializeAws_json1_1UpdatePullRequestDescriptionCommand;
const serializeAws_json1_1UpdatePullRequestStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdatePullRequestStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePullRequestStatusCommand = serializeAws_json1_1UpdatePullRequestStatusCommand;
const serializeAws_json1_1UpdatePullRequestTitleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdatePullRequestTitle",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestTitleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePullRequestTitleCommand = serializeAws_json1_1UpdatePullRequestTitleCommand;
const serializeAws_json1_1UpdateRepositoryDescriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateRepositoryDescription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRepositoryDescriptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRepositoryDescriptionCommand = serializeAws_json1_1UpdateRepositoryDescriptionCommand;
const serializeAws_json1_1UpdateRepositoryNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeCommit_20150413.UpdateRepositoryName",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRepositoryNameInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRepositoryNameCommand = serializeAws_json1_1UpdateRepositoryNameCommand;
const deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand;
const deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumRuleTemplatesAssociatedWithRepositoryException":
        case "com.amazonaws.codecommit#MaximumRuleTemplatesAssociatedWithRepositoryException":
            response = {
                ...(await deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand;
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumRepositoryNamesExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNamesRequiredException":
        case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDescribeMergeConflictsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDescribeMergeConflictsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDescribeMergeConflictsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDescribeMergeConflictsCommand = deserializeAws_json1_1BatchDescribeMergeConflictsCommand;
const deserializeAws_json1_1BatchDescribeMergeConflictsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxConflictFilesException":
        case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxMergeHunksException":
        case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = {
                ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand;
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumRepositoryNamesExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNamesRequiredException":
        case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetCommitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetCommitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetCommitsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetCommitsCommand = deserializeAws_json1_1BatchGetCommitsCommand;
const deserializeAws_json1_1BatchGetCommitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitIdsLimitExceededException":
        case "com.amazonaws.codecommit#CommitIdsLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdsListRequiredException":
        case "com.amazonaws.codecommit#CommitIdsListRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdsListRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetRepositoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetRepositoriesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetRepositoriesCommand = deserializeAws_json1_1BatchGetRepositoriesCommand;
const deserializeAws_json1_1BatchGetRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumRepositoryNamesExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNamesRequiredException":
        case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateApprovalRuleTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApprovalRuleTemplateOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApprovalRuleTemplateCommand = deserializeAws_json1_1CreateApprovalRuleTemplateCommand;
const deserializeAws_json1_1CreateApprovalRuleTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameAlreadyExistsException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateDescriptionException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfRuleTemplatesExceededException":
        case "com.amazonaws.codecommit#NumberOfRuleTemplatesExceededException":
            response = {
                ...(await deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateBranchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBranchCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBranchCommand = deserializeAws_json1_1CreateBranchCommand;
const deserializeAws_json1_1CreateBranchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchNameExistsException":
        case "com.amazonaws.codecommit#BranchNameExistsException":
            response = {
                ...(await deserializeAws_json1_1BranchNameExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateCommitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCommitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCommitCommand = deserializeAws_json1_1CreateCommitCommand;
const deserializeAws_json1_1CreateCommitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = {
                ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryNameConflictsWithFileNameException":
        case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
            response = {
                ...(await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentAndSourceFileSpecifiedException":
        case "com.amazonaws.codecommit#FileContentAndSourceFileSpecifiedException":
            response = {
                ...(await deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileEntryRequiredException":
        case "com.amazonaws.codecommit#FileEntryRequiredException":
            response = {
                ...(await deserializeAws_json1_1FileEntryRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = {
                ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileNameConflictsWithDirectoryNameException":
        case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
            response = {
                ...(await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilePathConflictsWithSubmodulePathException":
        case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
            response = {
                ...(await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeletionParameterException":
        case "com.amazonaws.codecommit#InvalidDeletionParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParentCommitIdException":
        case "com.amazonaws.codecommit#InvalidParentCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumFileEntriesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoChangeException":
        case "com.amazonaws.codecommit#NoChangeException":
            response = {
                ...(await deserializeAws_json1_1NoChangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitDoesNotExistException":
        case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitIdOutdatedException":
        case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitIdRequiredException":
        case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PutFileEntryConflictException":
        case "com.amazonaws.codecommit#PutFileEntryConflictException":
            response = {
                ...(await deserializeAws_json1_1PutFileEntryConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RestrictedSourceFileException":
        case "com.amazonaws.codecommit#RestrictedSourceFileException":
            response = {
                ...(await deserializeAws_json1_1RestrictedSourceFileExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SamePathRequestException":
        case "com.amazonaws.codecommit#SamePathRequestException":
            response = {
                ...(await deserializeAws_json1_1SamePathRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceFileOrContentRequiredException":
        case "com.amazonaws.codecommit#SourceFileOrContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePullRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePullRequestOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePullRequestCommand = deserializeAws_json1_1CreatePullRequestCommand;
const deserializeAws_json1_1CreatePullRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = {
                ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDescriptionException":
        case "com.amazonaws.codecommit#InvalidDescriptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReferenceNameException":
        case "com.amazonaws.codecommit#InvalidReferenceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidReferenceNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetException":
        case "com.amazonaws.codecommit#InvalidTargetException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetsException":
        case "com.amazonaws.codecommit#InvalidTargetsException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTitleException":
        case "com.amazonaws.codecommit#InvalidTitleException":
            response = {
                ...(await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumOpenPullRequestsExceededException":
        case "com.amazonaws.codecommit#MaximumOpenPullRequestsExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleRepositoriesInPullRequestException":
        case "com.amazonaws.codecommit#MultipleRepositoriesInPullRequestException":
            response = {
                ...(await deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReferenceDoesNotExistException":
        case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReferenceNameRequiredException":
        case "com.amazonaws.codecommit#ReferenceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReferenceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReferenceTypeNotSupportedException":
        case "com.amazonaws.codecommit#ReferenceTypeNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceAndDestinationAreSameException":
        case "com.amazonaws.codecommit#SourceAndDestinationAreSameException":
            response = {
                ...(await deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetRequiredException":
        case "com.amazonaws.codecommit#TargetRequiredException":
            response = {
                ...(await deserializeAws_json1_1TargetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetsRequiredException":
        case "com.amazonaws.codecommit#TargetsRequiredException":
            response = {
                ...(await deserializeAws_json1_1TargetsRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TitleRequiredException":
        case "com.amazonaws.codecommit#TitleRequiredException":
            response = {
                ...(await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePullRequestApprovalRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePullRequestApprovalRuleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePullRequestApprovalRuleCommand = deserializeAws_json1_1CreatePullRequestApprovalRuleCommand;
const deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleNameAlreadyExistsException":
        case "com.amazonaws.codecommit#ApprovalRuleNameAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfRulesExceededException":
        case "com.amazonaws.codecommit#NumberOfRulesExceededException":
            response = {
                ...(await deserializeAws_json1_1NumberOfRulesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRepositoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRepositoryCommand = deserializeAws_json1_1CreateRepositoryCommand;
const deserializeAws_json1_1CreateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryDescriptionException":
        case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSystemTagUsageException":
        case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsMapException":
        case "com.amazonaws.codecommit#InvalidTagsMapException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryLimitExceededException":
        case "com.amazonaws.codecommit#RepositoryLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RepositoryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameExistsException":
        case "com.amazonaws.codecommit#RepositoryNameExistsException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.codecommit#TagPolicyException":
            response = {
                ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codecommit#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUnreferencedMergeCommitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUnreferencedMergeCommitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUnreferencedMergeCommitCommand = deserializeAws_json1_1CreateUnreferencedMergeCommitCommand;
const deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = {
                ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = {
                ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = {
                ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApprovalRuleTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApprovalRuleTemplateOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApprovalRuleTemplateCommand = deserializeAws_json1_1DeleteApprovalRuleTemplateCommand;
const deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateInUseException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateInUseException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBranchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBranchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBranchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBranchCommand = deserializeAws_json1_1DeleteBranchCommand;
const deserializeAws_json1_1DeleteBranchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DefaultBranchCannotBeDeletedException":
        case "com.amazonaws.codecommit#DefaultBranchCannotBeDeletedException":
            response = {
                ...(await deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteCommentContentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCommentContentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCommentContentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCommentContentCommand = deserializeAws_json1_1DeleteCommentContentCommand;
const deserializeAws_json1_1DeleteCommentContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = {
                ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFileOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFileCommand = deserializeAws_json1_1DeleteFileCommand;
const deserializeAws_json1_1DeleteFileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = {
                ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParentCommitIdException":
        case "com.amazonaws.codecommit#InvalidParentCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitDoesNotExistException":
        case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitIdOutdatedException":
        case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitIdRequiredException":
        case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePullRequestApprovalRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePullRequestApprovalRuleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePullRequestApprovalRuleCommand = deserializeAws_json1_1DeletePullRequestApprovalRuleCommand;
const deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CannotDeleteApprovalRuleFromTemplateException":
        case "com.amazonaws.codecommit#CannotDeleteApprovalRuleFromTemplateException":
            response = {
                ...(await deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRepositoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRepositoryCommand = deserializeAws_json1_1DeleteRepositoryCommand;
const deserializeAws_json1_1DeleteRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMergeConflictsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMergeConflictsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMergeConflictsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMergeConflictsCommand = deserializeAws_json1_1DescribeMergeConflictsCommand;
const deserializeAws_json1_1DescribeMergeConflictsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxMergeHunksException":
        case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = {
                ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribePullRequestEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePullRequestEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePullRequestEventsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePullRequestEventsCommand = deserializeAws_json1_1DescribePullRequestEventsCommand;
const deserializeAws_json1_1DescribePullRequestEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActorDoesNotExistException":
        case "com.amazonaws.codecommit#ActorDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ActorDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidActorArnException":
        case "com.amazonaws.codecommit#InvalidActorArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidActorArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestEventTypeException":
        case "com.amazonaws.codecommit#InvalidPullRequestEventTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand;
const deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand;
const deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionNotCurrentException":
        case "com.amazonaws.codecommit#RevisionNotCurrentException":
            response = {
                ...(await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetApprovalRuleTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetApprovalRuleTemplateOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetApprovalRuleTemplateCommand = deserializeAws_json1_1GetApprovalRuleTemplateCommand;
const deserializeAws_json1_1GetApprovalRuleTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetBlobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBlobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBlobOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBlobCommand = deserializeAws_json1_1GetBlobCommand;
const deserializeAws_json1_1GetBlobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BlobIdDoesNotExistException":
        case "com.amazonaws.codecommit#BlobIdDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BlobIdRequiredException":
        case "com.amazonaws.codecommit#BlobIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1BlobIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileTooLargeException":
        case "com.amazonaws.codecommit#FileTooLargeException":
            response = {
                ...(await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBlobIdException":
        case "com.amazonaws.codecommit#InvalidBlobIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidBlobIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetBranchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBranchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBranchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBranchCommand = deserializeAws_json1_1GetBranchCommand;
const deserializeAws_json1_1GetBranchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCommentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCommentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCommentCommand = deserializeAws_json1_1GetCommentCommand;
const deserializeAws_json1_1GetCommentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = {
                ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCommentReactionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCommentReactionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentReactionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCommentReactionsCommand = deserializeAws_json1_1GetCommentReactionsCommand;
const deserializeAws_json1_1GetCommentReactionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = {
                ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReactionUserArnException":
        case "com.amazonaws.codecommit#InvalidReactionUserArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidReactionUserArnExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCommentsForComparedCommitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCommentsForComparedCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentsForComparedCommitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCommentsForComparedCommitCommand = deserializeAws_json1_1GetCommentsForComparedCommitCommand;
const deserializeAws_json1_1GetCommentsForComparedCommitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCommentsForPullRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCommentsForPullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentsForPullRequestOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCommentsForPullRequestCommand = deserializeAws_json1_1GetCommentsForPullRequestCommand;
const deserializeAws_json1_1GetCommentsForPullRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCommitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCommitCommand = deserializeAws_json1_1GetCommitCommand;
const deserializeAws_json1_1GetCommitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitIdDoesNotExistException":
        case "com.amazonaws.codecommit#CommitIdDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDifferencesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDifferencesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDifferencesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDifferencesCommand = deserializeAws_json1_1GetDifferencesCommand;
const deserializeAws_json1_1GetDifferencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathDoesNotExistException":
        case "com.amazonaws.codecommit#PathDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFileOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFileCommand = deserializeAws_json1_1GetFileCommand;
const deserializeAws_json1_1GetFileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileTooLargeException":
        case "com.amazonaws.codecommit#FileTooLargeException":
            response = {
                ...(await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFolderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFolderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFolderOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFolderCommand = deserializeAws_json1_1GetFolderCommand;
const deserializeAws_json1_1GetFolderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderDoesNotExistException":
        case "com.amazonaws.codecommit#FolderDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1FolderDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMergeCommitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMergeCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMergeCommitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMergeCommitCommand = deserializeAws_json1_1GetMergeCommitCommand;
const deserializeAws_json1_1GetMergeCommitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMergeConflictsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMergeConflictsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMergeConflictsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMergeConflictsCommand = deserializeAws_json1_1GetMergeConflictsCommand;
const deserializeAws_json1_1GetMergeConflictsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDestinationCommitSpecifierException":
        case "com.amazonaws.codecommit#InvalidDestinationCommitSpecifierException":
            response = {
                ...(await deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxConflictFilesException":
        case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSourceCommitSpecifierException":
        case "com.amazonaws.codecommit#InvalidSourceCommitSpecifierException":
            response = {
                ...(await deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = {
                ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMergeOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMergeOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMergeOptionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMergeOptionsCommand = deserializeAws_json1_1GetMergeOptionsCommand;
const deserializeAws_json1_1GetMergeOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPullRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPullRequestOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPullRequestCommand = deserializeAws_json1_1GetPullRequestCommand;
const deserializeAws_json1_1GetPullRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPullRequestApprovalStatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPullRequestApprovalStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPullRequestApprovalStatesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPullRequestApprovalStatesCommand = deserializeAws_json1_1GetPullRequestApprovalStatesCommand;
const deserializeAws_json1_1GetPullRequestApprovalStatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPullRequestOverrideStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPullRequestOverrideStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPullRequestOverrideStateOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPullRequestOverrideStateCommand = deserializeAws_json1_1GetPullRequestOverrideStateCommand;
const deserializeAws_json1_1GetPullRequestOverrideStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRepositoryCommand = deserializeAws_json1_1GetRepositoryCommand;
const deserializeAws_json1_1GetRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRepositoryTriggersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRepositoryTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryTriggersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRepositoryTriggersCommand = deserializeAws_json1_1GetRepositoryTriggersCommand;
const deserializeAws_json1_1GetRepositoryTriggersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListApprovalRuleTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApprovalRuleTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApprovalRuleTemplatesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApprovalRuleTemplatesCommand = deserializeAws_json1_1ListApprovalRuleTemplatesCommand;
const deserializeAws_json1_1ListApprovalRuleTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand;
const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBranchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBranchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBranchesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBranchesCommand = deserializeAws_json1_1ListBranchesCommand;
const deserializeAws_json1_1ListBranchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPullRequestsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPullRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPullRequestsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPullRequestsCommand = deserializeAws_json1_1ListPullRequestsCommand;
const deserializeAws_json1_1ListPullRequestsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorDoesNotExistException":
        case "com.amazonaws.codecommit#AuthorDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1AuthorDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAuthorArnException":
        case "com.amazonaws.codecommit#InvalidAuthorArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidAuthorArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestStatusException":
        case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRepositoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRepositoriesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRepositoriesCommand = deserializeAws_json1_1ListRepositoriesCommand;
const deserializeAws_json1_1ListRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOrderException":
        case "com.amazonaws.codecommit#InvalidOrderException":
            response = {
                ...(await deserializeAws_json1_1InvalidOrderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSortByException":
        case "com.amazonaws.codecommit#InvalidSortByException":
            response = {
                ...(await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand;
const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceArnException":
        case "com.amazonaws.codecommit#InvalidResourceArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codecommit#ResourceArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergeBranchesByFastForwardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergeBranchesByFastForwardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeBranchesByFastForwardOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergeBranchesByFastForwardCommand = deserializeAws_json1_1MergeBranchesByFastForwardCommand;
const deserializeAws_json1_1MergeBranchesByFastForwardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = {
                ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetBranchException":
        case "com.amazonaws.codecommit#InvalidTargetBranchException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergeBranchesBySquashCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergeBranchesBySquashCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeBranchesBySquashOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergeBranchesBySquashCommand = deserializeAws_json1_1MergeBranchesBySquashCommand;
const deserializeAws_json1_1MergeBranchesBySquashCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = {
                ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = {
                ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetBranchException":
        case "com.amazonaws.codecommit#InvalidTargetBranchException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = {
                ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergeBranchesByThreeWayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergeBranchesByThreeWayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeBranchesByThreeWayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergeBranchesByThreeWayCommand = deserializeAws_json1_1MergeBranchesByThreeWayCommand;
const deserializeAws_json1_1MergeBranchesByThreeWayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = {
                ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = {
                ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetBranchException":
        case "com.amazonaws.codecommit#InvalidTargetBranchException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = {
                ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergePullRequestByFastForwardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergePullRequestByFastForwardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergePullRequestByFastForwardOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergePullRequestByFastForwardCommand = deserializeAws_json1_1MergePullRequestByFastForwardCommand;
const deserializeAws_json1_1MergePullRequestByFastForwardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestApprovalRulesNotSatisfiedException":
        case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReferenceDoesNotExistException":
        case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipOfSourceReferenceIsDifferentException":
        case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
            response = {
                ...(await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergePullRequestBySquashCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergePullRequestBySquashCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergePullRequestBySquashOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergePullRequestBySquashCommand = deserializeAws_json1_1MergePullRequestBySquashCommand;
const deserializeAws_json1_1MergePullRequestBySquashCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = {
                ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestApprovalRulesNotSatisfiedException":
        case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipOfSourceReferenceIsDifferentException":
        case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
            response = {
                ...(await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergePullRequestByThreeWayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergePullRequestByThreeWayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergePullRequestByThreeWayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergePullRequestByThreeWayCommand = deserializeAws_json1_1MergePullRequestByThreeWayCommand;
const deserializeAws_json1_1MergePullRequestByThreeWayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = {
                ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = {
                ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestApprovalRulesNotSatisfiedException":
        case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipOfSourceReferenceIsDifferentException":
        case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
            response = {
                ...(await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = {
                ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1OverridePullRequestApprovalRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1OverridePullRequestApprovalRulesCommand = deserializeAws_json1_1OverridePullRequestApprovalRulesCommand;
const deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOverrideStatusException":
        case "com.amazonaws.codecommit#InvalidOverrideStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidOverrideStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OverrideAlreadySetException":
        case "com.amazonaws.codecommit#OverrideAlreadySetException":
            response = {
                ...(await deserializeAws_json1_1OverrideAlreadySetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OverrideStatusRequiredException":
        case "com.amazonaws.codecommit#OverrideStatusRequiredException":
            response = {
                ...(await deserializeAws_json1_1OverrideStatusRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionNotCurrentException":
        case "com.amazonaws.codecommit#RevisionNotCurrentException":
            response = {
                ...(await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PostCommentForComparedCommitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PostCommentForComparedCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PostCommentForComparedCommitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PostCommentForComparedCommitCommand = deserializeAws_json1_1PostCommentForComparedCommitCommand;
const deserializeAws_json1_1PostCommentForComparedCommitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BeforeCommitIdAndAfterCommitIdAreSameException":
        case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
            response = {
                ...(await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = {
                ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileLocationException":
        case "com.amazonaws.codecommit#InvalidFileLocationException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilePositionException":
        case "com.amazonaws.codecommit#InvalidFilePositionException":
            response = {
                ...(await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRelativeFileVersionEnumException":
        case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
            response = {
                ...(await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathDoesNotExistException":
        case "com.amazonaws.codecommit#PathDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PostCommentForPullRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PostCommentForPullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PostCommentForPullRequestOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PostCommentForPullRequestCommand = deserializeAws_json1_1PostCommentForPullRequestCommand;
const deserializeAws_json1_1PostCommentForPullRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BeforeCommitIdAndAfterCommitIdAreSameException":
        case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
            response = {
                ...(await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = {
                ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileLocationException":
        case "com.amazonaws.codecommit#InvalidFileLocationException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFilePositionException":
        case "com.amazonaws.codecommit#InvalidFilePositionException":
            response = {
                ...(await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRelativeFileVersionEnumException":
        case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
            response = {
                ...(await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathDoesNotExistException":
        case "com.amazonaws.codecommit#PathDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PostCommentReplyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PostCommentReplyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PostCommentReplyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PostCommentReplyCommand = deserializeAws_json1_1PostCommentReplyCommand;
const deserializeAws_json1_1PostCommentReplyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = {
                ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutCommentReactionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutCommentReactionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutCommentReactionCommand = deserializeAws_json1_1PutCommentReactionCommand;
const deserializeAws_json1_1PutCommentReactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = {
                ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReactionValueException":
        case "com.amazonaws.codecommit#InvalidReactionValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidReactionValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReactionLimitExceededException":
        case "com.amazonaws.codecommit#ReactionLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ReactionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReactionValueRequiredException":
        case "com.amazonaws.codecommit#ReactionValueRequiredException":
            response = {
                ...(await deserializeAws_json1_1ReactionValueRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutFileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutFileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutFileOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutFileCommand = deserializeAws_json1_1PutFileCommand;
const deserializeAws_json1_1PutFileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = {
                ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryNameConflictsWithFileNameException":
        case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
            response = {
                ...(await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentRequiredException":
        case "com.amazonaws.codecommit#FileContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1FileContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileNameConflictsWithDirectoryNameException":
        case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
            response = {
                ...(await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilePathConflictsWithSubmodulePathException":
        case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
            response = {
                ...(await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeletionParameterException":
        case "com.amazonaws.codecommit#InvalidDeletionParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParentCommitIdException":
        case "com.amazonaws.codecommit#InvalidParentCommitIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = {
                ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitDoesNotExistException":
        case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitIdOutdatedException":
        case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentCommitIdRequiredException":
        case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = {
                ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SameFileContentException":
        case "com.amazonaws.codecommit#SameFileContentException":
            response = {
                ...(await deserializeAws_json1_1SameFileContentExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutRepositoryTriggersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRepositoryTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRepositoryTriggersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRepositoryTriggersCommand = deserializeAws_json1_1PutRepositoryTriggersCommand;
const deserializeAws_json1_1PutRepositoryTriggersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerBranchNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerCustomDataException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerDestinationArnException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerEventsException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerRegionException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumBranchesExceededException":
        case "com.amazonaws.codecommit#MaximumBranchesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumRepositoryTriggersExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerBranchNameListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerDestinationArnRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerEventsListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggersListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceArnException":
        case "com.amazonaws.codecommit#InvalidResourceArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSystemTagUsageException":
        case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsMapException":
        case "com.amazonaws.codecommit#InvalidTagsMapException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codecommit#ResourceArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.codecommit#TagPolicyException":
            response = {
                ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagsMapRequiredException":
        case "com.amazonaws.codecommit#TagsMapRequiredException":
            response = {
                ...(await deserializeAws_json1_1TagsMapRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codecommit#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TestRepositoryTriggersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TestRepositoryTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestRepositoryTriggersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TestRepositoryTriggersCommand = deserializeAws_json1_1TestRepositoryTriggersCommand;
const deserializeAws_json1_1TestRepositoryTriggersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerBranchNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerCustomDataException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerDestinationArnException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerEventsException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryTriggerRegionException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumBranchesExceededException":
        case "com.amazonaws.codecommit#MaximumBranchesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumRepositoryTriggersExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerBranchNameListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerDestinationArnRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerEventsListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggerNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryTriggersListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceArnException":
        case "com.amazonaws.codecommit#InvalidResourceArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSystemTagUsageException":
        case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagKeysListException":
        case "com.amazonaws.codecommit#InvalidTagKeysListException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagKeysListExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codecommit#ResourceArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagKeysListRequiredException":
        case "com.amazonaws.codecommit#TagKeysListRequiredException":
            response = {
                ...(await deserializeAws_json1_1TagKeysListRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.codecommit#TagPolicyException":
            response = {
                ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codecommit#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand;
const deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRuleContentSha256Exception":
        case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
            response = {
                ...(await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand;
const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateDescriptionException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand;
const deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameAlreadyExistsException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateCommentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCommentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCommentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCommentCommand = deserializeAws_json1_1UpdateCommentCommand;
const deserializeAws_json1_1UpdateCommentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = {
                ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CommentNotCreatedByCallerException":
        case "com.amazonaws.codecommit#CommentNotCreatedByCallerException":
            response = {
                ...(await deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDefaultBranchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDefaultBranchCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDefaultBranchCommand = deserializeAws_json1_1UpdateDefaultBranchCommand;
const deserializeAws_json1_1UpdateDefaultBranchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand;
const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalRuleContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalRuleNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CannotModifyApprovalRuleFromTemplateException":
        case "com.amazonaws.codecommit#CannotModifyApprovalRuleFromTemplateException":
            response = {
                ...(await deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalRuleNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRuleContentSha256Exception":
        case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
            response = {
                ...(await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePullRequestApprovalStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePullRequestApprovalStateCommand = deserializeAws_json1_1UpdatePullRequestApprovalStateCommand;
const deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApprovalStateRequiredException":
        case "com.amazonaws.codecommit#ApprovalStateRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApprovalStateRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalStateException":
        case "com.amazonaws.codecommit#InvalidApprovalStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumNumberOfApprovalsExceededException":
        case "com.amazonaws.codecommit#MaximumNumberOfApprovalsExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestCannotBeApprovedByAuthorException":
        case "com.amazonaws.codecommit#PullRequestCannotBeApprovedByAuthorException":
            response = {
                ...(await deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionNotCurrentException":
        case "com.amazonaws.codecommit#RevisionNotCurrentException":
            response = {
                ...(await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePullRequestDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePullRequestDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestDescriptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePullRequestDescriptionCommand = deserializeAws_json1_1UpdatePullRequestDescriptionCommand;
const deserializeAws_json1_1UpdatePullRequestDescriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidDescriptionException":
        case "com.amazonaws.codecommit#InvalidDescriptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePullRequestStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePullRequestStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestStatusOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePullRequestStatusCommand = deserializeAws_json1_1UpdatePullRequestStatusCommand;
const deserializeAws_json1_1UpdatePullRequestStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestStatusException":
        case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPullRequestStatusUpdateException":
        case "com.amazonaws.codecommit#InvalidPullRequestStatusUpdateException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestStatusRequiredException":
        case "com.amazonaws.codecommit#PullRequestStatusRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePullRequestTitleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePullRequestTitleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestTitleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePullRequestTitleCommand = deserializeAws_json1_1UpdatePullRequestTitleCommand;
const deserializeAws_json1_1UpdatePullRequestTitleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTitleException":
        case "com.amazonaws.codecommit#InvalidTitleException":
            response = {
                ...(await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = {
                ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TitleRequiredException":
        case "com.amazonaws.codecommit#TitleRequiredException":
            response = {
                ...(await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRepositoryDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRepositoryDescriptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRepositoryDescriptionCommand = deserializeAws_json1_1UpdateRepositoryDescriptionCommand;
const deserializeAws_json1_1UpdateRepositoryDescriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryDescriptionException":
        case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRepositoryNameCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRepositoryNameCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRepositoryNameCommand = deserializeAws_json1_1UpdateRepositoryNameCommand;
const deserializeAws_json1_1UpdateRepositoryNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameExistsException":
        case "com.amazonaws.codecommit#RepositoryNameExistsException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ActorDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActorDoesNotExistException(body, context);
    const contents = {
        name: "ActorDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleContentRequiredException(body, context);
    const contents = {
        name: "ApprovalRuleContentRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleDoesNotExistException(body, context);
    const contents = {
        name: "ApprovalRuleDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException(body, context);
    const contents = {
        name: "ApprovalRuleNameAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleNameRequiredException(body, context);
    const contents = {
        name: "ApprovalRuleNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException(body, context);
    const contents = {
        name: "ApprovalRuleTemplateContentRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException(body, context);
    const contents = {
        name: "ApprovalRuleTemplateDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateInUseException(body, context);
    const contents = {
        name: "ApprovalRuleTemplateInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException(body, context);
    const contents = {
        name: "ApprovalRuleTemplateNameAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException(body, context);
    const contents = {
        name: "ApprovalRuleTemplateNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalStateRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalStateRequiredException(body, context);
    const contents = {
        name: "ApprovalStateRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AuthorDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthorDoesNotExistException(body, context);
    const contents = {
        name: "AuthorDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException(body, context);
    const contents = {
        name: "BeforeCommitIdAndAfterCommitIdAreSameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BlobIdDoesNotExistException(body, context);
    const contents = {
        name: "BlobIdDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BlobIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BlobIdRequiredException(body, context);
    const contents = {
        name: "BlobIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BranchDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchDoesNotExistException(body, context);
    const contents = {
        name: "BranchDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BranchNameExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchNameExistsException(body, context);
    const contents = {
        name: "BranchNameExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BranchNameIsTagNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchNameIsTagNameException(body, context);
    const contents = {
        name: "BranchNameIsTagNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BranchNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchNameRequiredException(body, context);
    const contents = {
        name: "BranchNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException(body, context);
    const contents = {
        name: "CannotDeleteApprovalRuleFromTemplateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException(body, context);
    const contents = {
        name: "CannotModifyApprovalRuleFromTemplateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClientRequestTokenRequiredException(body, context);
    const contents = {
        name: "ClientRequestTokenRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommentContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentContentRequiredException(body, context);
    const contents = {
        name: "CommentContentRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentContentSizeLimitExceededException(body, context);
    const contents = {
        name: "CommentContentSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommentDeletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentDeletedException(body, context);
    const contents = {
        name: "CommentDeletedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommentDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentDoesNotExistException(body, context);
    const contents = {
        name: "CommentDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommentIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentIdRequiredException(body, context);
    const contents = {
        name: "CommentIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentNotCreatedByCallerException(body, context);
    const contents = {
        name: "CommentNotCreatedByCallerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitDoesNotExistException(body, context);
    const contents = {
        name: "CommitDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdDoesNotExistException(body, context);
    const contents = {
        name: "CommitIdDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdRequiredException(body, context);
    const contents = {
        name: "CommitIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdsLimitExceededException(body, context);
    const contents = {
        name: "CommitIdsLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitIdsListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdsListRequiredException(body, context);
    const contents = {
        name: "CommitIdsListRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitMessageLengthExceededException(body, context);
    const contents = {
        name: "CommitMessageLengthExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CommitRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitRequiredException(body, context);
    const contents = {
        name: "CommitRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentReferenceUpdateException(body, context);
    const contents = {
        name: "ConcurrentReferenceUpdateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DefaultBranchCannotBeDeletedException(body, context);
    const contents = {
        name: "DefaultBranchCannotBeDeletedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryNameConflictsWithFileNameException(body, context);
    const contents = {
        name: "DirectoryNameConflictsWithFileNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionIntegrityChecksFailedException(body, context);
    const contents = {
        name: "EncryptionIntegrityChecksFailedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyAccessDeniedException(body, context);
    const contents = {
        name: "EncryptionKeyAccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyDisabledException(body, context);
    const contents = {
        name: "EncryptionKeyDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyNotFoundException(body, context);
    const contents = {
        name: "EncryptionKeyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyUnavailableException(body, context);
    const contents = {
        name: "EncryptionKeyUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileContentAndSourceFileSpecifiedException(body, context);
    const contents = {
        name: "FileContentAndSourceFileSpecifiedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileContentRequiredException(body, context);
    const contents = {
        name: "FileContentRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileContentSizeLimitExceededException(body, context);
    const contents = {
        name: "FileContentSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileDoesNotExistException(body, context);
    const contents = {
        name: "FileDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileEntryRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileEntryRequiredException(body, context);
    const contents = {
        name: "FileEntryRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileModeRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileModeRequiredException(body, context);
    const contents = {
        name: "FileModeRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileNameConflictsWithDirectoryNameException(body, context);
    const contents = {
        name: "FileNameConflictsWithDirectoryNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FilePathConflictsWithSubmodulePathException(body, context);
    const contents = {
        name: "FilePathConflictsWithSubmodulePathException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileTooLargeException(body, context);
    const contents = {
        name: "FileTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FolderContentSizeLimitExceededException(body, context);
    const contents = {
        name: "FolderContentSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FolderDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FolderDoesNotExistException(body, context);
    const contents = {
        name: "FolderDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotencyParameterMismatchException(body, context);
    const contents = {
        name: "IdempotencyParameterMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidActorArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActorArnException(body, context);
    const contents = {
        name: "InvalidActorArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleContentException(body, context);
    const contents = {
        name: "InvalidApprovalRuleContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleNameException(body, context);
    const contents = {
        name: "InvalidApprovalRuleNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleTemplateContentException(body, context);
    const contents = {
        name: "InvalidApprovalRuleTemplateContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException(body, context);
    const contents = {
        name: "InvalidApprovalRuleTemplateDescriptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleTemplateNameException(body, context);
    const contents = {
        name: "InvalidApprovalRuleTemplateNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalStateException(body, context);
    const contents = {
        name: "InvalidApprovalStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAuthorArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAuthorArnException(body, context);
    const contents = {
        name: "InvalidAuthorArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidBlobIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBlobIdException(body, context);
    const contents = {
        name: "InvalidBlobIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidBranchNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBranchNameException(body, context);
    const contents = {
        name: "InvalidBranchNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClientRequestTokenException(body, context);
    const contents = {
        name: "InvalidClientRequestTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCommentIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommentIdException(body, context);
    const contents = {
        name: "InvalidCommentIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCommitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommitException(body, context);
    const contents = {
        name: "InvalidCommitException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCommitIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommitIdException(body, context);
    const contents = {
        name: "InvalidCommitIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConflictDetailLevelException(body, context);
    const contents = {
        name: "InvalidConflictDetailLevelException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidConflictResolutionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConflictResolutionException(body, context);
    const contents = {
        name: "InvalidConflictResolutionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConflictResolutionStrategyException(body, context);
    const contents = {
        name: "InvalidConflictResolutionStrategyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidContinuationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidContinuationTokenException(body, context);
    const contents = {
        name: "InvalidContinuationTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeletionParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeletionParameterException(body, context);
    const contents = {
        name: "InvalidDeletionParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDescriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDescriptionException(body, context);
    const contents = {
        name: "InvalidDescriptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDestinationCommitSpecifierException(body, context);
    const contents = {
        name: "InvalidDestinationCommitSpecifierException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEmailExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEmailException(body, context);
    const contents = {
        name: "InvalidEmailException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFileLocationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFileLocationException(body, context);
    const contents = {
        name: "InvalidFileLocationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFileModeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFileModeException(body, context);
    const contents = {
        name: "InvalidFileModeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFilePositionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilePositionException(body, context);
    const contents = {
        name: "InvalidFilePositionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxConflictFilesException(body, context);
    const contents = {
        name: "InvalidMaxConflictFilesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxMergeHunksException(body, context);
    const contents = {
        name: "InvalidMaxMergeHunksException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxResultsException(body, context);
    const contents = {
        name: "InvalidMaxResultsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMergeOptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMergeOptionException(body, context);
    const contents = {
        name: "InvalidMergeOptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOrderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOrderException(body, context);
    const contents = {
        name: "InvalidOrderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOverrideStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOverrideStatusException(body, context);
    const contents = {
        name: "InvalidOverrideStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParentCommitIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParentCommitIdException(body, context);
    const contents = {
        name: "InvalidParentCommitIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPathExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPathException(body, context);
    const contents = {
        name: "InvalidPathException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestEventTypeException(body, context);
    const contents = {
        name: "InvalidPullRequestEventTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestIdException(body, context);
    const contents = {
        name: "InvalidPullRequestIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestStatusException(body, context);
    const contents = {
        name: "InvalidPullRequestStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestStatusUpdateException(body, context);
    const contents = {
        name: "InvalidPullRequestStatusUpdateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidReactionUserArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReactionUserArnException(body, context);
    const contents = {
        name: "InvalidReactionUserArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidReactionValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReactionValueException(body, context);
    const contents = {
        name: "InvalidReactionValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidReferenceNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReferenceNameException(body, context);
    const contents = {
        name: "InvalidReferenceNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRelativeFileVersionEnumException(body, context);
    const contents = {
        name: "InvalidRelativeFileVersionEnumException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidReplacementContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReplacementContentException(body, context);
    const contents = {
        name: "InvalidReplacementContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidReplacementTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReplacementTypeException(body, context);
    const contents = {
        name: "InvalidReplacementTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryDescriptionException(body, context);
    const contents = {
        name: "InvalidRepositoryDescriptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryNameException(body, context);
    const contents = {
        name: "InvalidRepositoryNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException(body, context);
    const contents = {
        name: "InvalidRepositoryTriggerBranchNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException(body, context);
    const contents = {
        name: "InvalidRepositoryTriggerCustomDataException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException(body, context);
    const contents = {
        name: "InvalidRepositoryTriggerDestinationArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerEventsException(body, context);
    const contents = {
        name: "InvalidRepositoryTriggerEventsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerNameException(body, context);
    const contents = {
        name: "InvalidRepositoryTriggerNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerRegionException(body, context);
    const contents = {
        name: "InvalidRepositoryTriggerRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceArnException(body, context);
    const contents = {
        name: "InvalidResourceArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRevisionIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRevisionIdException(body, context);
    const contents = {
        name: "InvalidRevisionIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRuleContentSha256Exception(body, context);
    const contents = {
        name: "InvalidRuleContentSha256Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSortByExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSortByException(body, context);
    const contents = {
        name: "InvalidSortByException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSourceCommitSpecifierException(body, context);
    const contents = {
        name: "InvalidSourceCommitSpecifierException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSystemTagUsageException(body, context);
    const contents = {
        name: "InvalidSystemTagUsageException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagKeysListExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagKeysListException(body, context);
    const contents = {
        name: "InvalidTagKeysListException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagsMapExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagsMapException(body, context);
    const contents = {
        name: "InvalidTagsMapException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetBranchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetBranchException(body, context);
    const contents = {
        name: "InvalidTargetBranchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetException(body, context);
    const contents = {
        name: "InvalidTargetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetsException(body, context);
    const contents = {
        name: "InvalidTargetsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTitleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTitleException(body, context);
    const contents = {
        name: "InvalidTitleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ManualMergeRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ManualMergeRequiredException(body, context);
    const contents = {
        name: "ManualMergeRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumBranchesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumBranchesExceededException(body, context);
    const contents = {
        name: "MaximumBranchesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException(body, context);
    const contents = {
        name: "MaximumConflictResolutionEntriesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumFileContentToLoadExceededException(body, context);
    const contents = {
        name: "MaximumFileContentToLoadExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumFileEntriesExceededException(body, context);
    const contents = {
        name: "MaximumFileEntriesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumItemsToCompareExceededException(body, context);
    const contents = {
        name: "MaximumItemsToCompareExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumNumberOfApprovalsExceededException(body, context);
    const contents = {
        name: "MaximumNumberOfApprovalsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumOpenPullRequestsExceededException(body, context);
    const contents = {
        name: "MaximumOpenPullRequestsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumRepositoryNamesExceededException(body, context);
    const contents = {
        name: "MaximumRepositoryNamesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumRepositoryTriggersExceededException(body, context);
    const contents = {
        name: "MaximumRepositoryTriggersExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException(body, context);
    const contents = {
        name: "MaximumRuleTemplatesAssociatedWithRepositoryException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MergeOptionRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MergeOptionRequiredException(body, context);
    const contents = {
        name: "MergeOptionRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MultipleConflictResolutionEntriesException(body, context);
    const contents = {
        name: "MultipleConflictResolutionEntriesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MultipleRepositoriesInPullRequestException(body, context);
    const contents = {
        name: "MultipleRepositoriesInPullRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NameLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NameLengthExceededException(body, context);
    const contents = {
        name: "NameLengthExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoChangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoChangeException(body, context);
    const contents = {
        name: "NoChangeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NumberOfRulesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NumberOfRulesExceededException(body, context);
    const contents = {
        name: "NumberOfRulesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NumberOfRuleTemplatesExceededException(body, context);
    const contents = {
        name: "NumberOfRuleTemplatesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OverrideAlreadySetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OverrideAlreadySetException(body, context);
    const contents = {
        name: "OverrideAlreadySetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OverrideStatusRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OverrideStatusRequiredException(body, context);
    const contents = {
        name: "OverrideStatusRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentCommitDoesNotExistException(body, context);
    const contents = {
        name: "ParentCommitDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentCommitIdOutdatedException(body, context);
    const contents = {
        name: "ParentCommitIdOutdatedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentCommitIdRequiredException(body, context);
    const contents = {
        name: "ParentCommitIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PathDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PathDoesNotExistException(body, context);
    const contents = {
        name: "PathDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PathRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PathRequiredException(body, context);
    const contents = {
        name: "PathRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestAlreadyClosedException(body, context);
    const contents = {
        name: "PullRequestAlreadyClosedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException(body, context);
    const contents = {
        name: "PullRequestApprovalRulesNotSatisfiedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException(body, context);
    const contents = {
        name: "PullRequestCannotBeApprovedByAuthorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestDoesNotExistException(body, context);
    const contents = {
        name: "PullRequestDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PullRequestIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestIdRequiredException(body, context);
    const contents = {
        name: "PullRequestIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestStatusRequiredException(body, context);
    const contents = {
        name: "PullRequestStatusRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PutFileEntryConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PutFileEntryConflictException(body, context);
    const contents = {
        name: "PutFileEntryConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReactionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReactionLimitExceededException(body, context);
    const contents = {
        name: "ReactionLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReactionValueRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReactionValueRequiredException(body, context);
    const contents = {
        name: "ReactionValueRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferenceDoesNotExistException(body, context);
    const contents = {
        name: "ReferenceDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReferenceNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferenceNameRequiredException(body, context);
    const contents = {
        name: "ReferenceNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferenceTypeNotSupportedException(body, context);
    const contents = {
        name: "ReferenceTypeNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReplacementContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplacementContentRequiredException(body, context);
    const contents = {
        name: "ReplacementContentRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplacementTypeRequiredException(body, context);
    const contents = {
        name: "ReplacementTypeRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryDoesNotExistException(body, context);
    const contents = {
        name: "RepositoryDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryLimitExceededException(body, context);
    const contents = {
        name: "RepositoryLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryNameExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNameExistsException(body, context);
    const contents = {
        name: "RepositoryNameExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNameRequiredException(body, context);
    const contents = {
        name: "RepositoryNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNamesRequiredException(body, context);
    const contents = {
        name: "RepositoryNamesRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException(body, context);
    const contents = {
        name: "RepositoryNotAssociatedWithPullRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException(body, context);
    const contents = {
        name: "RepositoryTriggerBranchNameListRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException(body, context);
    const contents = {
        name: "RepositoryTriggerDestinationArnRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerEventsListRequiredException(body, context);
    const contents = {
        name: "RepositoryTriggerEventsListRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerNameRequiredException(body, context);
    const contents = {
        name: "RepositoryTriggerNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggersListRequiredException(body, context);
    const contents = {
        name: "RepositoryTriggersListRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceArnRequiredException(body, context);
    const contents = {
        name: "ResourceArnRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RestrictedSourceFileExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RestrictedSourceFileException(body, context);
    const contents = {
        name: "RestrictedSourceFileException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RevisionIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionIdRequiredException(body, context);
    const contents = {
        name: "RevisionIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RevisionNotCurrentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionNotCurrentException(body, context);
    const contents = {
        name: "RevisionNotCurrentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SameFileContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SameFileContentException(body, context);
    const contents = {
        name: "SameFileContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SamePathRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SamePathRequestException(body, context);
    const contents = {
        name: "SamePathRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceAndDestinationAreSameException(body, context);
    const contents = {
        name: "SourceAndDestinationAreSameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceFileOrContentRequiredException(body, context);
    const contents = {
        name: "SourceFileOrContentRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagKeysListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagKeysListRequiredException(body, context);
    const contents = {
        name: "TagKeysListRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagPolicyException(body, context);
    const contents = {
        name: "TagPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagsMapRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagsMapRequiredException(body, context);
    const contents = {
        name: "TagsMapRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetRequiredException(body, context);
    const contents = {
        name: "TargetRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetsRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetsRequiredException(body, context);
    const contents = {
        name: "TargetsRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TipOfSourceReferenceIsDifferentException(body, context);
    const contents = {
        name: "TipOfSourceReferenceIsDifferentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TipsDivergenceExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TipsDivergenceExceededException(body, context);
    const contents = {
        name: "TipsDivergenceExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TitleRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TitleRequiredException(body, context);
    const contents = {
        name: "TitleRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
        ...(input.repositoryNames !== undefined &&
            input.repositoryNames !== null && {
            repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
        }),
    };
};
const serializeAws_json1_1BatchDescribeMergeConflictsInput = (input, context) => {
    return {
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.filePaths !== undefined &&
            input.filePaths !== null && { filePaths: serializeAws_json1_1FilePaths(input.filePaths, context) }),
        ...(input.maxConflictFiles !== undefined &&
            input.maxConflictFiles !== null && { maxConflictFiles: input.maxConflictFiles }),
        ...(input.maxMergeHunks !== undefined && input.maxMergeHunks !== null && { maxMergeHunks: input.maxMergeHunks }),
        ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    };
};
const serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
        ...(input.repositoryNames !== undefined &&
            input.repositoryNames !== null && {
            repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
        }),
    };
};
const serializeAws_json1_1BatchGetCommitsInput = (input, context) => {
    return {
        ...(input.commitIds !== undefined &&
            input.commitIds !== null && { commitIds: serializeAws_json1_1CommitIdsInputList(input.commitIds, context) }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1BatchGetRepositoriesInput = (input, context) => {
    return {
        ...(input.repositoryNames !== undefined &&
            input.repositoryNames !== null && {
            repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
        }),
    };
};
const serializeAws_json1_1BranchNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CommitIdsInputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConflictResolution = (input, context) => {
    return {
        ...(input.deleteFiles !== undefined &&
            input.deleteFiles !== null && { deleteFiles: serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context) }),
        ...(input.replaceContents !== undefined &&
            input.replaceContents !== null && {
            replaceContents: serializeAws_json1_1ReplaceContentEntries(input.replaceContents, context),
        }),
        ...(input.setFileModes !== undefined &&
            input.setFileModes !== null && {
            setFileModes: serializeAws_json1_1SetFileModeEntries(input.setFileModes, context),
        }),
    };
};
const serializeAws_json1_1CreateApprovalRuleTemplateInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateContent !== undefined &&
            input.approvalRuleTemplateContent !== null && { approvalRuleTemplateContent: input.approvalRuleTemplateContent }),
        ...(input.approvalRuleTemplateDescription !== undefined &&
            input.approvalRuleTemplateDescription !== null && {
            approvalRuleTemplateDescription: input.approvalRuleTemplateDescription,
        }),
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    };
};
const serializeAws_json1_1CreateBranchInput = (input, context) => {
    return {
        ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
        ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1CreateCommitInput = (input, context) => {
    return {
        ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
        ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.deleteFiles !== undefined &&
            input.deleteFiles !== null && { deleteFiles: serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context) }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.parentCommitId !== undefined &&
            input.parentCommitId !== null && { parentCommitId: input.parentCommitId }),
        ...(input.putFiles !== undefined &&
            input.putFiles !== null && { putFiles: serializeAws_json1_1PutFileEntries(input.putFiles, context) }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.setFileModes !== undefined &&
            input.setFileModes !== null && {
            setFileModes: serializeAws_json1_1SetFileModeEntries(input.setFileModes, context),
        }),
    };
};
const serializeAws_json1_1CreatePullRequestApprovalRuleInput = (input, context) => {
    return {
        ...(input.approvalRuleContent !== undefined &&
            input.approvalRuleContent !== null && { approvalRuleContent: input.approvalRuleContent }),
        ...(input.approvalRuleName !== undefined &&
            input.approvalRuleName !== null && { approvalRuleName: input.approvalRuleName }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    };
};
const serializeAws_json1_1CreatePullRequestInput = (input, context) => {
    var _a;
    return {
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.targets !== undefined &&
            input.targets !== null && { targets: serializeAws_json1_1TargetList(input.targets, context) }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
    };
};
const serializeAws_json1_1CreateRepositoryInput = (input, context) => {
    return {
        ...(input.repositoryDescription !== undefined &&
            input.repositoryDescription !== null && { repositoryDescription: input.repositoryDescription }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagsMap(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateUnreferencedMergeCommitInput = (input, context) => {
    return {
        ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolution !== undefined &&
            input.conflictResolution !== null && {
            conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
        }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    };
};
const serializeAws_json1_1DeleteApprovalRuleTemplateInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    };
};
const serializeAws_json1_1DeleteBranchInput = (input, context) => {
    return {
        ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DeleteCommentContentInput = (input, context) => {
    return {
        ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
    };
};
const serializeAws_json1_1DeleteFileEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DeleteFileEntry(entry, context);
    });
};
const serializeAws_json1_1DeleteFileEntry = (input, context) => {
    return {
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    };
};
const serializeAws_json1_1DeleteFileInput = (input, context) => {
    return {
        ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.parentCommitId !== undefined &&
            input.parentCommitId !== null && { parentCommitId: input.parentCommitId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DeletePullRequestApprovalRuleInput = (input, context) => {
    return {
        ...(input.approvalRuleName !== undefined &&
            input.approvalRuleName !== null && { approvalRuleName: input.approvalRuleName }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    };
};
const serializeAws_json1_1DeleteRepositoryInput = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DescribeMergeConflictsInput = (input, context) => {
    return {
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.maxMergeHunks !== undefined && input.maxMergeHunks !== null && { maxMergeHunks: input.maxMergeHunks }),
        ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    };
};
const serializeAws_json1_1DescribePullRequestEventsInput = (input, context) => {
    return {
        ...(input.actorArn !== undefined && input.actorArn !== null && { actorArn: input.actorArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.pullRequestEventType !== undefined &&
            input.pullRequestEventType !== null && { pullRequestEventType: input.pullRequestEventType }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    };
};
const serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1EvaluatePullRequestApprovalRulesInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    };
};
const serializeAws_json1_1FilePaths = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetApprovalRuleTemplateInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    };
};
const serializeAws_json1_1GetBlobInput = (input, context) => {
    return {
        ...(input.blobId !== undefined && input.blobId !== null && { blobId: input.blobId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetBranchInput = (input, context) => {
    return {
        ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetCommentInput = (input, context) => {
    return {
        ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
    };
};
const serializeAws_json1_1GetCommentReactionsInput = (input, context) => {
    return {
        ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.reactionUserArn !== undefined &&
            input.reactionUserArn !== null && { reactionUserArn: input.reactionUserArn }),
    };
};
const serializeAws_json1_1GetCommentsForComparedCommitInput = (input, context) => {
    return {
        ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
        ...(input.beforeCommitId !== undefined &&
            input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetCommentsForPullRequestInput = (input, context) => {
    return {
        ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
        ...(input.beforeCommitId !== undefined &&
            input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetCommitInput = (input, context) => {
    return {
        ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetDifferencesInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.afterCommitSpecifier !== undefined &&
            input.afterCommitSpecifier !== null && { afterCommitSpecifier: input.afterCommitSpecifier }),
        ...(input.afterPath !== undefined && input.afterPath !== null && { afterPath: input.afterPath }),
        ...(input.beforeCommitSpecifier !== undefined &&
            input.beforeCommitSpecifier !== null && { beforeCommitSpecifier: input.beforeCommitSpecifier }),
        ...(input.beforePath !== undefined && input.beforePath !== null && { beforePath: input.beforePath }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetFileInput = (input, context) => {
    return {
        ...(input.commitSpecifier !== undefined &&
            input.commitSpecifier !== null && { commitSpecifier: input.commitSpecifier }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetFolderInput = (input, context) => {
    return {
        ...(input.commitSpecifier !== undefined &&
            input.commitSpecifier !== null && { commitSpecifier: input.commitSpecifier }),
        ...(input.folderPath !== undefined && input.folderPath !== null && { folderPath: input.folderPath }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetMergeCommitInput = (input, context) => {
    return {
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    };
};
const serializeAws_json1_1GetMergeConflictsInput = (input, context) => {
    return {
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.maxConflictFiles !== undefined &&
            input.maxConflictFiles !== null && { maxConflictFiles: input.maxConflictFiles }),
        ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    };
};
const serializeAws_json1_1GetMergeOptionsInput = (input, context) => {
    return {
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    };
};
const serializeAws_json1_1GetPullRequestApprovalStatesInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    };
};
const serializeAws_json1_1GetPullRequestInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    };
};
const serializeAws_json1_1GetPullRequestOverrideStateInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    };
};
const serializeAws_json1_1GetRepositoryInput = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetRepositoryTriggersInput = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1ListApprovalRuleTemplatesInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1ListBranchesInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1ListPullRequestsInput = (input, context) => {
    return {
        ...(input.authorArn !== undefined && input.authorArn !== null && { authorArn: input.authorArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.pullRequestStatus !== undefined &&
            input.pullRequestStatus !== null && { pullRequestStatus: input.pullRequestStatus }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListRepositoriesInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1Location = (input, context) => {
    return {
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.filePosition !== undefined && input.filePosition !== null && { filePosition: input.filePosition }),
        ...(input.relativeFileVersion !== undefined &&
            input.relativeFileVersion !== null && { relativeFileVersion: input.relativeFileVersion }),
    };
};
const serializeAws_json1_1MergeBranchesByFastForwardInput = (input, context) => {
    return {
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
        ...(input.targetBranch !== undefined && input.targetBranch !== null && { targetBranch: input.targetBranch }),
    };
};
const serializeAws_json1_1MergeBranchesBySquashInput = (input, context) => {
    return {
        ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolution !== undefined &&
            input.conflictResolution !== null && {
            conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
        }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
        ...(input.targetBranch !== undefined && input.targetBranch !== null && { targetBranch: input.targetBranch }),
    };
};
const serializeAws_json1_1MergeBranchesByThreeWayInput = (input, context) => {
    return {
        ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolution !== undefined &&
            input.conflictResolution !== null && {
            conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
        }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.destinationCommitSpecifier !== undefined &&
            input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitSpecifier !== undefined &&
            input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
        ...(input.targetBranch !== undefined && input.targetBranch !== null && { targetBranch: input.targetBranch }),
    };
};
const serializeAws_json1_1MergePullRequestByFastForwardInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitId !== undefined &&
            input.sourceCommitId !== null && { sourceCommitId: input.sourceCommitId }),
    };
};
const serializeAws_json1_1MergePullRequestBySquashInput = (input, context) => {
    return {
        ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolution !== undefined &&
            input.conflictResolution !== null && {
            conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
        }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitId !== undefined &&
            input.sourceCommitId !== null && { sourceCommitId: input.sourceCommitId }),
    };
};
const serializeAws_json1_1MergePullRequestByThreeWayInput = (input, context) => {
    return {
        ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.conflictDetailLevel !== undefined &&
            input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
        ...(input.conflictResolution !== undefined &&
            input.conflictResolution !== null && {
            conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
        }),
        ...(input.conflictResolutionStrategy !== undefined &&
            input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.keepEmptyFolders !== undefined &&
            input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceCommitId !== undefined &&
            input.sourceCommitId !== null && { sourceCommitId: input.sourceCommitId }),
    };
};
const serializeAws_json1_1OverridePullRequestApprovalRulesInput = (input, context) => {
    return {
        ...(input.overrideStatus !== undefined &&
            input.overrideStatus !== null && { overrideStatus: input.overrideStatus }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    };
};
const serializeAws_json1_1PostCommentForComparedCommitInput = (input, context) => {
    var _a;
    return {
        ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
        ...(input.beforeCommitId !== undefined &&
            input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.content !== undefined && input.content !== null && { content: input.content }),
        ...(input.location !== undefined &&
            input.location !== null && { location: serializeAws_json1_1Location(input.location, context) }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1PostCommentForPullRequestInput = (input, context) => {
    var _a;
    return {
        ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
        ...(input.beforeCommitId !== undefined &&
            input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.content !== undefined && input.content !== null && { content: input.content }),
        ...(input.location !== undefined &&
            input.location !== null && { location: serializeAws_json1_1Location(input.location, context) }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1PostCommentReplyInput = (input, context) => {
    var _a;
    return {
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.content !== undefined && input.content !== null && { content: input.content }),
        ...(input.inReplyTo !== undefined && input.inReplyTo !== null && { inReplyTo: input.inReplyTo }),
    };
};
const serializeAws_json1_1PutCommentReactionInput = (input, context) => {
    return {
        ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
        ...(input.reactionValue !== undefined && input.reactionValue !== null && { reactionValue: input.reactionValue }),
    };
};
const serializeAws_json1_1PutFileEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PutFileEntry(entry, context);
    });
};
const serializeAws_json1_1PutFileEntry = (input, context) => {
    return {
        ...(input.fileContent !== undefined &&
            input.fileContent !== null && { fileContent: context.base64Encoder(input.fileContent) }),
        ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.sourceFile !== undefined &&
            input.sourceFile !== null && { sourceFile: serializeAws_json1_1SourceFileSpecifier(input.sourceFile, context) }),
    };
};
const serializeAws_json1_1PutFileInput = (input, context) => {
    return {
        ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
        ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
        ...(input.fileContent !== undefined &&
            input.fileContent !== null && { fileContent: context.base64Encoder(input.fileContent) }),
        ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.parentCommitId !== undefined &&
            input.parentCommitId !== null && { parentCommitId: input.parentCommitId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1PutRepositoryTriggersInput = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.triggers !== undefined &&
            input.triggers !== null && { triggers: serializeAws_json1_1RepositoryTriggersList(input.triggers, context) }),
    };
};
const serializeAws_json1_1ReplaceContentEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ReplaceContentEntry(entry, context);
    });
};
const serializeAws_json1_1ReplaceContentEntry = (input, context) => {
    return {
        ...(input.content !== undefined && input.content !== null && { content: context.base64Encoder(input.content) }),
        ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.replacementType !== undefined &&
            input.replacementType !== null && { replacementType: input.replacementType }),
    };
};
const serializeAws_json1_1RepositoryNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RepositoryTrigger = (input, context) => {
    return {
        ...(input.branches !== undefined &&
            input.branches !== null && { branches: serializeAws_json1_1BranchNameList(input.branches, context) }),
        ...(input.customData !== undefined && input.customData !== null && { customData: input.customData }),
        ...(input.destinationArn !== undefined &&
            input.destinationArn !== null && { destinationArn: input.destinationArn }),
        ...(input.events !== undefined &&
            input.events !== null && { events: serializeAws_json1_1RepositoryTriggerEventList(input.events, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1RepositoryTriggerEventList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RepositoryTriggersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RepositoryTrigger(entry, context);
    });
};
const serializeAws_json1_1SetFileModeEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SetFileModeEntry(entry, context);
    });
};
const serializeAws_json1_1SetFileModeEntry = (input, context) => {
    return {
        ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    };
};
const serializeAws_json1_1SourceFileSpecifier = (input, context) => {
    return {
        ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
        ...(input.isMove !== undefined && input.isMove !== null && { isMove: input.isMove }),
    };
};
const serializeAws_json1_1TagKeysList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagsMap(input.tags, context) }),
    };
};
const serializeAws_json1_1TagsMap = (input, context) => {
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
const serializeAws_json1_1Target = (input, context) => {
    return {
        ...(input.destinationReference !== undefined &&
            input.destinationReference !== null && { destinationReference: input.destinationReference }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.sourceReference !== undefined &&
            input.sourceReference !== null && { sourceReference: input.sourceReference }),
    };
};
const serializeAws_json1_1TargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Target(entry, context);
    });
};
const serializeAws_json1_1TestRepositoryTriggersInput = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.triggers !== undefined &&
            input.triggers !== null && { triggers: serializeAws_json1_1RepositoryTriggersList(input.triggers, context) }),
    };
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeysList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateApprovalRuleTemplateContentInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
        ...(input.existingRuleContentSha256 !== undefined &&
            input.existingRuleContentSha256 !== null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
        ...(input.newRuleContent !== undefined &&
            input.newRuleContent !== null && { newRuleContent: input.newRuleContent }),
    };
};
const serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput = (input, context) => {
    return {
        ...(input.approvalRuleTemplateDescription !== undefined &&
            input.approvalRuleTemplateDescription !== null && {
            approvalRuleTemplateDescription: input.approvalRuleTemplateDescription,
        }),
        ...(input.approvalRuleTemplateName !== undefined &&
            input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    };
};
const serializeAws_json1_1UpdateApprovalRuleTemplateNameInput = (input, context) => {
    return {
        ...(input.newApprovalRuleTemplateName !== undefined &&
            input.newApprovalRuleTemplateName !== null && { newApprovalRuleTemplateName: input.newApprovalRuleTemplateName }),
        ...(input.oldApprovalRuleTemplateName !== undefined &&
            input.oldApprovalRuleTemplateName !== null && { oldApprovalRuleTemplateName: input.oldApprovalRuleTemplateName }),
    };
};
const serializeAws_json1_1UpdateCommentInput = (input, context) => {
    return {
        ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
        ...(input.content !== undefined && input.content !== null && { content: input.content }),
    };
};
const serializeAws_json1_1UpdateDefaultBranchInput = (input, context) => {
    return {
        ...(input.defaultBranchName !== undefined &&
            input.defaultBranchName !== null && { defaultBranchName: input.defaultBranchName }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput = (input, context) => {
    return {
        ...(input.approvalRuleName !== undefined &&
            input.approvalRuleName !== null && { approvalRuleName: input.approvalRuleName }),
        ...(input.existingRuleContentSha256 !== undefined &&
            input.existingRuleContentSha256 !== null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
        ...(input.newRuleContent !== undefined &&
            input.newRuleContent !== null && { newRuleContent: input.newRuleContent }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    };
};
const serializeAws_json1_1UpdatePullRequestApprovalStateInput = (input, context) => {
    return {
        ...(input.approvalState !== undefined && input.approvalState !== null && { approvalState: input.approvalState }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    };
};
const serializeAws_json1_1UpdatePullRequestDescriptionInput = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    };
};
const serializeAws_json1_1UpdatePullRequestStatusInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.pullRequestStatus !== undefined &&
            input.pullRequestStatus !== null && { pullRequestStatus: input.pullRequestStatus }),
    };
};
const serializeAws_json1_1UpdatePullRequestTitleInput = (input, context) => {
    return {
        ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
    };
};
const serializeAws_json1_1UpdateRepositoryDescriptionInput = (input, context) => {
    return {
        ...(input.repositoryDescription !== undefined &&
            input.repositoryDescription !== null && { repositoryDescription: input.repositoryDescription }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1UpdateRepositoryNameInput = (input, context) => {
    return {
        ...(input.newName !== undefined && input.newName !== null && { newName: input.newName }),
        ...(input.oldName !== undefined && input.oldName !== null && { oldName: input.oldName }),
    };
};
const deserializeAws_json1_1ActorDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Approval = (output, context) => {
    return {
        approvalState: output.approvalState !== undefined && output.approvalState !== null ? output.approvalState : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_json1_1ApprovalList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Approval(entry, context);
    });
};
const deserializeAws_json1_1ApprovalRule = (output, context) => {
    return {
        approvalRuleContent: output.approvalRuleContent !== undefined && output.approvalRuleContent !== null
            ? output.approvalRuleContent
            : undefined,
        approvalRuleId: output.approvalRuleId !== undefined && output.approvalRuleId !== null ? output.approvalRuleId : undefined,
        approvalRuleName: output.approvalRuleName !== undefined && output.approvalRuleName !== null ? output.approvalRuleName : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        lastModifiedDate: output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
            ? new Date(Math.round(output.lastModifiedDate * 1000))
            : undefined,
        lastModifiedUser: output.lastModifiedUser !== undefined && output.lastModifiedUser !== null ? output.lastModifiedUser : undefined,
        originApprovalRuleTemplate: output.originApprovalRuleTemplate !== undefined && output.originApprovalRuleTemplate !== null
            ? deserializeAws_json1_1OriginApprovalRuleTemplate(output.originApprovalRuleTemplate, context)
            : undefined,
        ruleContentSha256: output.ruleContentSha256 !== undefined && output.ruleContentSha256 !== null
            ? output.ruleContentSha256
            : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleContentRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleEventMetadata = (output, context) => {
    return {
        approvalRuleContent: output.approvalRuleContent !== undefined && output.approvalRuleContent !== null
            ? output.approvalRuleContent
            : undefined,
        approvalRuleId: output.approvalRuleId !== undefined && output.approvalRuleId !== null ? output.approvalRuleId : undefined,
        approvalRuleName: output.approvalRuleName !== undefined && output.approvalRuleName !== null ? output.approvalRuleName : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata = (output, context) => {
    return {
        overrideStatus: output.overrideStatus !== undefined && output.overrideStatus !== null ? output.overrideStatus : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
    };
};
const deserializeAws_json1_1ApprovalRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApprovalRule(entry, context);
    });
};
const deserializeAws_json1_1ApprovalRulesNotSatisfiedList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ApprovalRulesSatisfiedList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ApprovalRuleTemplate = (output, context) => {
    return {
        approvalRuleTemplateContent: output.approvalRuleTemplateContent !== undefined && output.approvalRuleTemplateContent !== null
            ? output.approvalRuleTemplateContent
            : undefined,
        approvalRuleTemplateDescription: output.approvalRuleTemplateDescription !== undefined && output.approvalRuleTemplateDescription !== null
            ? output.approvalRuleTemplateDescription
            : undefined,
        approvalRuleTemplateId: output.approvalRuleTemplateId !== undefined && output.approvalRuleTemplateId !== null
            ? output.approvalRuleTemplateId
            : undefined,
        approvalRuleTemplateName: output.approvalRuleTemplateName !== undefined && output.approvalRuleTemplateName !== null
            ? output.approvalRuleTemplateName
            : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        lastModifiedDate: output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
            ? new Date(Math.round(output.lastModifiedDate * 1000))
            : undefined,
        lastModifiedUser: output.lastModifiedUser !== undefined && output.lastModifiedUser !== null ? output.lastModifiedUser : undefined,
        ruleContentSha256: output.ruleContentSha256 !== undefined && output.ruleContentSha256 !== null
            ? output.ruleContentSha256
            : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleTemplateInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalRuleTemplateNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApprovalStateChangedEventMetadata = (output, context) => {
    return {
        approvalStatus: output.approvalStatus !== undefined && output.approvalStatus !== null ? output.approvalStatus : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
    };
};
const deserializeAws_json1_1ApprovalStateRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AuthorDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError(entry, context);
    });
};
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = (output, context) => {
    return {
        associatedRepositoryNames: output.associatedRepositoryNames !== undefined && output.associatedRepositoryNames !== null
            ? deserializeAws_json1_1RepositoryNameList(output.associatedRepositoryNames, context)
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList(output.errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDescribeMergeConflictsError = (output, context) => {
    return {
        exceptionName: output.exceptionName !== undefined && output.exceptionName !== null ? output.exceptionName : undefined,
        filePath: output.filePath !== undefined && output.filePath !== null ? output.filePath : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BatchDescribeMergeConflictsErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchDescribeMergeConflictsError(entry, context);
    });
};
const deserializeAws_json1_1BatchDescribeMergeConflictsOutput = (output, context) => {
    return {
        baseCommitId: output.baseCommitId !== undefined && output.baseCommitId !== null ? output.baseCommitId : undefined,
        conflicts: output.conflicts !== undefined && output.conflicts !== null
            ? deserializeAws_json1_1Conflicts(output.conflicts, context)
            : undefined,
        destinationCommitId: output.destinationCommitId !== undefined && output.destinationCommitId !== null
            ? output.destinationCommitId
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1BatchDescribeMergeConflictsErrors(output.errors, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        sourceCommitId: output.sourceCommitId !== undefined && output.sourceCommitId !== null ? output.sourceCommitId : undefined,
    };
};
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError(entry, context);
    });
};
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = (output, context) => {
    return {
        disassociatedRepositoryNames: output.disassociatedRepositoryNames !== undefined && output.disassociatedRepositoryNames !== null
            ? deserializeAws_json1_1RepositoryNameList(output.disassociatedRepositoryNames, context)
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList(output.errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetCommitsError = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
const deserializeAws_json1_1BatchGetCommitsErrorsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchGetCommitsError(entry, context);
    });
};
const deserializeAws_json1_1BatchGetCommitsOutput = (output, context) => {
    return {
        commits: output.commits !== undefined && output.commits !== null
            ? deserializeAws_json1_1CommitObjectsList(output.commits, context)
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1BatchGetCommitsErrorsList(output.errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetRepositoriesOutput = (output, context) => {
    return {
        repositories: output.repositories !== undefined && output.repositories !== null
            ? deserializeAws_json1_1RepositoryMetadataList(output.repositories, context)
            : undefined,
        repositoriesNotFound: output.repositoriesNotFound !== undefined && output.repositoriesNotFound !== null
            ? deserializeAws_json1_1RepositoryNotFoundList(output.repositoriesNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BlobIdDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BlobIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BlobMetadata = (output, context) => {
    return {
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
const deserializeAws_json1_1BranchDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BranchInfo = (output, context) => {
    return {
        branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
    };
};
const deserializeAws_json1_1BranchNameExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BranchNameIsTagNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BranchNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BranchNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CallerReactions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ClientRequestTokenRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Comment = (output, context) => {
    return {
        authorArn: output.authorArn !== undefined && output.authorArn !== null ? output.authorArn : undefined,
        callerReactions: output.callerReactions !== undefined && output.callerReactions !== null
            ? deserializeAws_json1_1CallerReactions(output.callerReactions, context)
            : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        commentId: output.commentId !== undefined && output.commentId !== null ? output.commentId : undefined,
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        deleted: output.deleted !== undefined && output.deleted !== null ? output.deleted : undefined,
        inReplyTo: output.inReplyTo !== undefined && output.inReplyTo !== null ? output.inReplyTo : undefined,
        lastModifiedDate: output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
            ? new Date(Math.round(output.lastModifiedDate * 1000))
            : undefined,
        reactionCounts: output.reactionCounts !== undefined && output.reactionCounts !== null
            ? deserializeAws_json1_1ReactionCountsMap(output.reactionCounts, context)
            : undefined,
    };
};
const deserializeAws_json1_1CommentContentRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommentContentSizeLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommentDeletedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommentDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommentIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommentNotCreatedByCallerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Comments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Comment(entry, context);
    });
};
const deserializeAws_json1_1CommentsForComparedCommit = (output, context) => {
    return {
        afterBlobId: output.afterBlobId !== undefined && output.afterBlobId !== null ? output.afterBlobId : undefined,
        afterCommitId: output.afterCommitId !== undefined && output.afterCommitId !== null ? output.afterCommitId : undefined,
        beforeBlobId: output.beforeBlobId !== undefined && output.beforeBlobId !== null ? output.beforeBlobId : undefined,
        beforeCommitId: output.beforeCommitId !== undefined && output.beforeCommitId !== null ? output.beforeCommitId : undefined,
        comments: output.comments !== undefined && output.comments !== null
            ? deserializeAws_json1_1Comments(output.comments, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1Location(output.location, context)
            : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1CommentsForComparedCommitData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CommentsForComparedCommit(entry, context);
    });
};
const deserializeAws_json1_1CommentsForPullRequest = (output, context) => {
    return {
        afterBlobId: output.afterBlobId !== undefined && output.afterBlobId !== null ? output.afterBlobId : undefined,
        afterCommitId: output.afterCommitId !== undefined && output.afterCommitId !== null ? output.afterCommitId : undefined,
        beforeBlobId: output.beforeBlobId !== undefined && output.beforeBlobId !== null ? output.beforeBlobId : undefined,
        beforeCommitId: output.beforeCommitId !== undefined && output.beforeCommitId !== null ? output.beforeCommitId : undefined,
        comments: output.comments !== undefined && output.comments !== null
            ? deserializeAws_json1_1Comments(output.comments, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1Location(output.location, context)
            : undefined,
        pullRequestId: output.pullRequestId !== undefined && output.pullRequestId !== null ? output.pullRequestId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1CommentsForPullRequestData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CommentsForPullRequest(entry, context);
    });
};
const deserializeAws_json1_1Commit = (output, context) => {
    return {
        additionalData: output.additionalData !== undefined && output.additionalData !== null ? output.additionalData : undefined,
        author: output.author !== undefined && output.author !== null
            ? deserializeAws_json1_1UserInfo(output.author, context)
            : undefined,
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        committer: output.committer !== undefined && output.committer !== null
            ? deserializeAws_json1_1UserInfo(output.committer, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        parents: output.parents !== undefined && output.parents !== null
            ? deserializeAws_json1_1ParentList(output.parents, context)
            : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1CommitDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommitIdDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommitIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommitIdsLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommitIdsListRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommitMessageLengthExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CommitObjectsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Commit(entry, context);
    });
};
const deserializeAws_json1_1CommitRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ConcurrentReferenceUpdateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Conflict = (output, context) => {
    return {
        conflictMetadata: output.conflictMetadata !== undefined && output.conflictMetadata !== null
            ? deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context)
            : undefined,
        mergeHunks: output.mergeHunks !== undefined && output.mergeHunks !== null
            ? deserializeAws_json1_1MergeHunks(output.mergeHunks, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConflictMetadata = (output, context) => {
    return {
        contentConflict: output.contentConflict !== undefined && output.contentConflict !== null ? output.contentConflict : undefined,
        fileModeConflict: output.fileModeConflict !== undefined && output.fileModeConflict !== null ? output.fileModeConflict : undefined,
        fileModes: output.fileModes !== undefined && output.fileModes !== null
            ? deserializeAws_json1_1FileModes(output.fileModes, context)
            : undefined,
        filePath: output.filePath !== undefined && output.filePath !== null ? output.filePath : undefined,
        fileSizes: output.fileSizes !== undefined && output.fileSizes !== null
            ? deserializeAws_json1_1FileSizes(output.fileSizes, context)
            : undefined,
        isBinaryFile: output.isBinaryFile !== undefined && output.isBinaryFile !== null
            ? deserializeAws_json1_1IsBinaryFile(output.isBinaryFile, context)
            : undefined,
        mergeOperations: output.mergeOperations !== undefined && output.mergeOperations !== null
            ? deserializeAws_json1_1MergeOperations(output.mergeOperations, context)
            : undefined,
        numberOfConflicts: output.numberOfConflicts !== undefined && output.numberOfConflicts !== null
            ? output.numberOfConflicts
            : undefined,
        objectTypeConflict: output.objectTypeConflict !== undefined && output.objectTypeConflict !== null
            ? output.objectTypeConflict
            : undefined,
        objectTypes: output.objectTypes !== undefined && output.objectTypes !== null
            ? deserializeAws_json1_1ObjectTypes(output.objectTypes, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConflictMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConflictMetadata(entry, context);
    });
};
const deserializeAws_json1_1Conflicts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Conflict(entry, context);
    });
};
const deserializeAws_json1_1CreateApprovalRuleTemplateOutput = (output, context) => {
    return {
        approvalRuleTemplate: output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
            ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateCommitOutput = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        filesAdded: output.filesAdded !== undefined && output.filesAdded !== null
            ? deserializeAws_json1_1FilesMetadata(output.filesAdded, context)
            : undefined,
        filesDeleted: output.filesDeleted !== undefined && output.filesDeleted !== null
            ? deserializeAws_json1_1FilesMetadata(output.filesDeleted, context)
            : undefined,
        filesUpdated: output.filesUpdated !== undefined && output.filesUpdated !== null
            ? deserializeAws_json1_1FilesMetadata(output.filesUpdated, context)
            : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1CreatePullRequestApprovalRuleOutput = (output, context) => {
    return {
        approvalRule: output.approvalRule !== undefined && output.approvalRule !== null
            ? deserializeAws_json1_1ApprovalRule(output.approvalRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreatePullRequestOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRepositoryOutput = (output, context) => {
    return {
        repositoryMetadata: output.repositoryMetadata !== undefined && output.repositoryMetadata !== null
            ? deserializeAws_json1_1RepositoryMetadata(output.repositoryMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateUnreferencedMergeCommitOutput = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1DefaultBranchCannotBeDeletedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeleteApprovalRuleTemplateOutput = (output, context) => {
    return {
        approvalRuleTemplateId: output.approvalRuleTemplateId !== undefined && output.approvalRuleTemplateId !== null
            ? output.approvalRuleTemplateId
            : undefined,
    };
};
const deserializeAws_json1_1DeleteBranchOutput = (output, context) => {
    return {
        deletedBranch: output.deletedBranch !== undefined && output.deletedBranch !== null
            ? deserializeAws_json1_1BranchInfo(output.deletedBranch, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteCommentContentOutput = (output, context) => {
    return {
        comment: output.comment !== undefined && output.comment !== null
            ? deserializeAws_json1_1Comment(output.comment, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFileOutput = (output, context) => {
    return {
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        filePath: output.filePath !== undefined && output.filePath !== null ? output.filePath : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1DeletePullRequestApprovalRuleOutput = (output, context) => {
    return {
        approvalRuleId: output.approvalRuleId !== undefined && output.approvalRuleId !== null ? output.approvalRuleId : undefined,
    };
};
const deserializeAws_json1_1DeleteRepositoryOutput = (output, context) => {
    return {
        repositoryId: output.repositoryId !== undefined && output.repositoryId !== null ? output.repositoryId : undefined,
    };
};
const deserializeAws_json1_1DescribeMergeConflictsOutput = (output, context) => {
    return {
        baseCommitId: output.baseCommitId !== undefined && output.baseCommitId !== null ? output.baseCommitId : undefined,
        conflictMetadata: output.conflictMetadata !== undefined && output.conflictMetadata !== null
            ? deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context)
            : undefined,
        destinationCommitId: output.destinationCommitId !== undefined && output.destinationCommitId !== null
            ? output.destinationCommitId
            : undefined,
        mergeHunks: output.mergeHunks !== undefined && output.mergeHunks !== null
            ? deserializeAws_json1_1MergeHunks(output.mergeHunks, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        sourceCommitId: output.sourceCommitId !== undefined && output.sourceCommitId !== null ? output.sourceCommitId : undefined,
    };
};
const deserializeAws_json1_1DescribePullRequestEventsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        pullRequestEvents: output.pullRequestEvents !== undefined && output.pullRequestEvents !== null
            ? deserializeAws_json1_1PullRequestEventList(output.pullRequestEvents, context)
            : undefined,
    };
};
const deserializeAws_json1_1Difference = (output, context) => {
    return {
        afterBlob: output.afterBlob !== undefined && output.afterBlob !== null
            ? deserializeAws_json1_1BlobMetadata(output.afterBlob, context)
            : undefined,
        beforeBlob: output.beforeBlob !== undefined && output.beforeBlob !== null
            ? deserializeAws_json1_1BlobMetadata(output.beforeBlob, context)
            : undefined,
        changeType: output.changeType !== undefined && output.changeType !== null ? output.changeType : undefined,
    };
};
const deserializeAws_json1_1DifferenceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Difference(entry, context);
    });
};
const deserializeAws_json1_1DirectoryNameConflictsWithFileNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EncryptionIntegrityChecksFailedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EncryptionKeyAccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EncryptionKeyDisabledException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EncryptionKeyNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EncryptionKeyUnavailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput = (output, context) => {
    return {
        evaluation: output.evaluation !== undefined && output.evaluation !== null
            ? deserializeAws_json1_1Evaluation(output.evaluation, context)
            : undefined,
    };
};
const deserializeAws_json1_1Evaluation = (output, context) => {
    return {
        approvalRulesNotSatisfied: output.approvalRulesNotSatisfied !== undefined && output.approvalRulesNotSatisfied !== null
            ? deserializeAws_json1_1ApprovalRulesNotSatisfiedList(output.approvalRulesNotSatisfied, context)
            : undefined,
        approvalRulesSatisfied: output.approvalRulesSatisfied !== undefined && output.approvalRulesSatisfied !== null
            ? deserializeAws_json1_1ApprovalRulesSatisfiedList(output.approvalRulesSatisfied, context)
            : undefined,
        approved: output.approved !== undefined && output.approved !== null ? output.approved : undefined,
        overridden: output.overridden !== undefined && output.overridden !== null ? output.overridden : undefined,
    };
};
const deserializeAws_json1_1File = (output, context) => {
    return {
        absolutePath: output.absolutePath !== undefined && output.absolutePath !== null ? output.absolutePath : undefined,
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        fileMode: output.fileMode !== undefined && output.fileMode !== null ? output.fileMode : undefined,
        relativePath: output.relativePath !== undefined && output.relativePath !== null ? output.relativePath : undefined,
    };
};
const deserializeAws_json1_1FileContentAndSourceFileSpecifiedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileContentRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileContentSizeLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileEntryRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1File(entry, context);
    });
};
const deserializeAws_json1_1FileMetadata = (output, context) => {
    return {
        absolutePath: output.absolutePath !== undefined && output.absolutePath !== null ? output.absolutePath : undefined,
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        fileMode: output.fileMode !== undefined && output.fileMode !== null ? output.fileMode : undefined,
    };
};
const deserializeAws_json1_1FileModeRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileModes = (output, context) => {
    return {
        base: output.base !== undefined && output.base !== null ? output.base : undefined,
        destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
    };
};
const deserializeAws_json1_1FileNameConflictsWithDirectoryNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FilePathConflictsWithSubmodulePathException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FileSizes = (output, context) => {
    return {
        base: output.base !== undefined && output.base !== null ? output.base : undefined,
        destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
    };
};
const deserializeAws_json1_1FilesMetadata = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileMetadata(entry, context);
    });
};
const deserializeAws_json1_1FileTooLargeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Folder = (output, context) => {
    return {
        absolutePath: output.absolutePath !== undefined && output.absolutePath !== null ? output.absolutePath : undefined,
        relativePath: output.relativePath !== undefined && output.relativePath !== null ? output.relativePath : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1FolderContentSizeLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FolderDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1FolderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Folder(entry, context);
    });
};
const deserializeAws_json1_1GetApprovalRuleTemplateOutput = (output, context) => {
    return {
        approvalRuleTemplate: output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
            ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetBlobOutput = (output, context) => {
    return {
        content: output.content !== undefined && output.content !== null ? context.base64Decoder(output.content) : undefined,
    };
};
const deserializeAws_json1_1GetBranchOutput = (output, context) => {
    return {
        branch: output.branch !== undefined && output.branch !== null
            ? deserializeAws_json1_1BranchInfo(output.branch, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCommentOutput = (output, context) => {
    return {
        comment: output.comment !== undefined && output.comment !== null
            ? deserializeAws_json1_1Comment(output.comment, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCommentReactionsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reactionsForComment: output.reactionsForComment !== undefined && output.reactionsForComment !== null
            ? deserializeAws_json1_1ReactionsForCommentList(output.reactionsForComment, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCommentsForComparedCommitOutput = (output, context) => {
    return {
        commentsForComparedCommitData: output.commentsForComparedCommitData !== undefined && output.commentsForComparedCommitData !== null
            ? deserializeAws_json1_1CommentsForComparedCommitData(output.commentsForComparedCommitData, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetCommentsForPullRequestOutput = (output, context) => {
    return {
        commentsForPullRequestData: output.commentsForPullRequestData !== undefined && output.commentsForPullRequestData !== null
            ? deserializeAws_json1_1CommentsForPullRequestData(output.commentsForPullRequestData, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetCommitOutput = (output, context) => {
    return {
        commit: output.commit !== undefined && output.commit !== null
            ? deserializeAws_json1_1Commit(output.commit, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDifferencesOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        differences: output.differences !== undefined && output.differences !== null
            ? deserializeAws_json1_1DifferenceList(output.differences, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetFileOutput = (output, context) => {
    return {
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        fileContent: output.fileContent !== undefined && output.fileContent !== null
            ? context.base64Decoder(output.fileContent)
            : undefined,
        fileMode: output.fileMode !== undefined && output.fileMode !== null ? output.fileMode : undefined,
        filePath: output.filePath !== undefined && output.filePath !== null ? output.filePath : undefined,
        fileSize: output.fileSize !== undefined && output.fileSize !== null ? output.fileSize : undefined,
    };
};
const deserializeAws_json1_1GetFolderOutput = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        files: output.files !== undefined && output.files !== null
            ? deserializeAws_json1_1FileList(output.files, context)
            : undefined,
        folderPath: output.folderPath !== undefined && output.folderPath !== null ? output.folderPath : undefined,
        subFolders: output.subFolders !== undefined && output.subFolders !== null
            ? deserializeAws_json1_1FolderList(output.subFolders, context)
            : undefined,
        subModules: output.subModules !== undefined && output.subModules !== null
            ? deserializeAws_json1_1SubModuleList(output.subModules, context)
            : undefined,
        symbolicLinks: output.symbolicLinks !== undefined && output.symbolicLinks !== null
            ? deserializeAws_json1_1SymbolicLinkList(output.symbolicLinks, context)
            : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1GetMergeCommitOutput = (output, context) => {
    return {
        baseCommitId: output.baseCommitId !== undefined && output.baseCommitId !== null ? output.baseCommitId : undefined,
        destinationCommitId: output.destinationCommitId !== undefined && output.destinationCommitId !== null
            ? output.destinationCommitId
            : undefined,
        mergedCommitId: output.mergedCommitId !== undefined && output.mergedCommitId !== null ? output.mergedCommitId : undefined,
        sourceCommitId: output.sourceCommitId !== undefined && output.sourceCommitId !== null ? output.sourceCommitId : undefined,
    };
};
const deserializeAws_json1_1GetMergeConflictsOutput = (output, context) => {
    return {
        baseCommitId: output.baseCommitId !== undefined && output.baseCommitId !== null ? output.baseCommitId : undefined,
        conflictMetadataList: output.conflictMetadataList !== undefined && output.conflictMetadataList !== null
            ? deserializeAws_json1_1ConflictMetadataList(output.conflictMetadataList, context)
            : undefined,
        destinationCommitId: output.destinationCommitId !== undefined && output.destinationCommitId !== null
            ? output.destinationCommitId
            : undefined,
        mergeable: output.mergeable !== undefined && output.mergeable !== null ? output.mergeable : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        sourceCommitId: output.sourceCommitId !== undefined && output.sourceCommitId !== null ? output.sourceCommitId : undefined,
    };
};
const deserializeAws_json1_1GetMergeOptionsOutput = (output, context) => {
    return {
        baseCommitId: output.baseCommitId !== undefined && output.baseCommitId !== null ? output.baseCommitId : undefined,
        destinationCommitId: output.destinationCommitId !== undefined && output.destinationCommitId !== null
            ? output.destinationCommitId
            : undefined,
        mergeOptions: output.mergeOptions !== undefined && output.mergeOptions !== null
            ? deserializeAws_json1_1MergeOptions(output.mergeOptions, context)
            : undefined,
        sourceCommitId: output.sourceCommitId !== undefined && output.sourceCommitId !== null ? output.sourceCommitId : undefined,
    };
};
const deserializeAws_json1_1GetPullRequestApprovalStatesOutput = (output, context) => {
    return {
        approvals: output.approvals !== undefined && output.approvals !== null
            ? deserializeAws_json1_1ApprovalList(output.approvals, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPullRequestOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPullRequestOverrideStateOutput = (output, context) => {
    return {
        overridden: output.overridden !== undefined && output.overridden !== null ? output.overridden : undefined,
        overrider: output.overrider !== undefined && output.overrider !== null ? output.overrider : undefined,
    };
};
const deserializeAws_json1_1GetRepositoryOutput = (output, context) => {
    return {
        repositoryMetadata: output.repositoryMetadata !== undefined && output.repositoryMetadata !== null
            ? deserializeAws_json1_1RepositoryMetadata(output.repositoryMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRepositoryTriggersOutput = (output, context) => {
    return {
        configurationId: output.configurationId !== undefined && output.configurationId !== null ? output.configurationId : undefined,
        triggers: output.triggers !== undefined && output.triggers !== null
            ? deserializeAws_json1_1RepositoryTriggersList(output.triggers, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdempotencyParameterMismatchException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidActorArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalRuleContentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalRuleNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateContentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidAuthorArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidBlobIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidBranchNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidClientRequestTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCommentIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCommitException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCommitIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidConflictDetailLevelException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidConflictResolutionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidConflictResolutionStrategyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidContinuationTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeletionParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDescriptionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDestinationCommitSpecifierException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidEmailException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidFileLocationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidFileModeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidFilePositionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidMaxConflictFilesException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidMaxMergeHunksException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidMaxResultsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidMergeOptionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOrderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOverrideStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParentCommitIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPathException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPullRequestEventTypeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPullRequestIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPullRequestStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPullRequestStatusUpdateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidReactionUserArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidReactionValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidReferenceNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRelativeFileVersionEnumException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidReplacementContentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidReplacementTypeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryDescriptionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryTriggerEventsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryTriggerNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRepositoryTriggerRegionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRevisionIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRuleContentSha256Exception = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSortByException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSourceCommitSpecifierException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSystemTagUsageException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagKeysListException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagsMapException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetBranchException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTitleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IsBinaryFile = (output, context) => {
    return {
        base: output.base !== undefined && output.base !== null ? output.base : undefined,
        destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
    };
};
const deserializeAws_json1_1ListApprovalRuleTemplatesOutput = (output, context) => {
    return {
        approvalRuleTemplateNames: output.approvalRuleTemplateNames !== undefined && output.approvalRuleTemplateNames !== null
            ? deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput = (output, context) => {
    return {
        approvalRuleTemplateNames: output.approvalRuleTemplateNames !== undefined && output.approvalRuleTemplateNames !== null
            ? deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListBranchesOutput = (output, context) => {
    return {
        branches: output.branches !== undefined && output.branches !== null
            ? deserializeAws_json1_1BranchNameList(output.branches, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListPullRequestsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        pullRequestIds: output.pullRequestIds !== undefined && output.pullRequestIds !== null
            ? deserializeAws_json1_1PullRequestIdList(output.pullRequestIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        repositoryNames: output.repositoryNames !== undefined && output.repositoryNames !== null
            ? deserializeAws_json1_1RepositoryNameList(output.repositoryNames, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRepositoriesOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        repositories: output.repositories !== undefined && output.repositories !== null
            ? deserializeAws_json1_1RepositoryNameIdPairList(output.repositories, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagsMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1Location = (output, context) => {
    return {
        filePath: output.filePath !== undefined && output.filePath !== null ? output.filePath : undefined,
        filePosition: output.filePosition !== undefined && output.filePosition !== null ? output.filePosition : undefined,
        relativeFileVersion: output.relativeFileVersion !== undefined && output.relativeFileVersion !== null
            ? output.relativeFileVersion
            : undefined,
    };
};
const deserializeAws_json1_1ManualMergeRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumBranchesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumFileContentToLoadExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumFileEntriesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumItemsToCompareExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumNumberOfApprovalsExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumOpenPullRequestsExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumRepositoryNamesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumRepositoryTriggersExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MergeBranchesByFastForwardOutput = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1MergeBranchesBySquashOutput = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1MergeBranchesByThreeWayOutput = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1MergeHunk = (output, context) => {
    return {
        base: output.base !== undefined && output.base !== null
            ? deserializeAws_json1_1MergeHunkDetail(output.base, context)
            : undefined,
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_json1_1MergeHunkDetail(output.destination, context)
            : undefined,
        isConflict: output.isConflict !== undefined && output.isConflict !== null ? output.isConflict : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1MergeHunkDetail(output.source, context)
            : undefined,
    };
};
const deserializeAws_json1_1MergeHunkDetail = (output, context) => {
    return {
        endLine: output.endLine !== undefined && output.endLine !== null ? output.endLine : undefined,
        hunkContent: output.hunkContent !== undefined && output.hunkContent !== null ? output.hunkContent : undefined,
        startLine: output.startLine !== undefined && output.startLine !== null ? output.startLine : undefined,
    };
};
const deserializeAws_json1_1MergeHunks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MergeHunk(entry, context);
    });
};
const deserializeAws_json1_1MergeMetadata = (output, context) => {
    return {
        isMerged: output.isMerged !== undefined && output.isMerged !== null ? output.isMerged : undefined,
        mergeCommitId: output.mergeCommitId !== undefined && output.mergeCommitId !== null ? output.mergeCommitId : undefined,
        mergeOption: output.mergeOption !== undefined && output.mergeOption !== null ? output.mergeOption : undefined,
        mergedBy: output.mergedBy !== undefined && output.mergedBy !== null ? output.mergedBy : undefined,
    };
};
const deserializeAws_json1_1MergeOperations = (output, context) => {
    return {
        destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
    };
};
const deserializeAws_json1_1MergeOptionRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MergeOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1MergePullRequestByFastForwardOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1MergePullRequestBySquashOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1MergePullRequestByThreeWayOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1MultipleConflictResolutionEntriesException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MultipleRepositoriesInPullRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NameLengthExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoChangeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NumberOfRulesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NumberOfRuleTemplatesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ObjectTypes = (output, context) => {
    return {
        base: output.base !== undefined && output.base !== null ? output.base : undefined,
        destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
    };
};
const deserializeAws_json1_1OriginApprovalRuleTemplate = (output, context) => {
    return {
        approvalRuleTemplateId: output.approvalRuleTemplateId !== undefined && output.approvalRuleTemplateId !== null
            ? output.approvalRuleTemplateId
            : undefined,
        approvalRuleTemplateName: output.approvalRuleTemplateName !== undefined && output.approvalRuleTemplateName !== null
            ? output.approvalRuleTemplateName
            : undefined,
    };
};
const deserializeAws_json1_1OverrideAlreadySetException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OverrideStatusRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParentCommitDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParentCommitIdOutdatedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParentCommitIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ParentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PathDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PathRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PostCommentForComparedCommitOutput = (output, context) => {
    return {
        afterBlobId: output.afterBlobId !== undefined && output.afterBlobId !== null ? output.afterBlobId : undefined,
        afterCommitId: output.afterCommitId !== undefined && output.afterCommitId !== null ? output.afterCommitId : undefined,
        beforeBlobId: output.beforeBlobId !== undefined && output.beforeBlobId !== null ? output.beforeBlobId : undefined,
        beforeCommitId: output.beforeCommitId !== undefined && output.beforeCommitId !== null ? output.beforeCommitId : undefined,
        comment: output.comment !== undefined && output.comment !== null
            ? deserializeAws_json1_1Comment(output.comment, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1Location(output.location, context)
            : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1PostCommentForPullRequestOutput = (output, context) => {
    return {
        afterBlobId: output.afterBlobId !== undefined && output.afterBlobId !== null ? output.afterBlobId : undefined,
        afterCommitId: output.afterCommitId !== undefined && output.afterCommitId !== null ? output.afterCommitId : undefined,
        beforeBlobId: output.beforeBlobId !== undefined && output.beforeBlobId !== null ? output.beforeBlobId : undefined,
        beforeCommitId: output.beforeCommitId !== undefined && output.beforeCommitId !== null ? output.beforeCommitId : undefined,
        comment: output.comment !== undefined && output.comment !== null
            ? deserializeAws_json1_1Comment(output.comment, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1Location(output.location, context)
            : undefined,
        pullRequestId: output.pullRequestId !== undefined && output.pullRequestId !== null ? output.pullRequestId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1PostCommentReplyOutput = (output, context) => {
    return {
        comment: output.comment !== undefined && output.comment !== null
            ? deserializeAws_json1_1Comment(output.comment, context)
            : undefined,
    };
};
const deserializeAws_json1_1PullRequest = (output, context) => {
    return {
        approvalRules: output.approvalRules !== undefined && output.approvalRules !== null
            ? deserializeAws_json1_1ApprovalRulesList(output.approvalRules, context)
            : undefined,
        authorArn: output.authorArn !== undefined && output.authorArn !== null ? output.authorArn : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastActivityDate: output.lastActivityDate !== undefined && output.lastActivityDate !== null
            ? new Date(Math.round(output.lastActivityDate * 1000))
            : undefined,
        pullRequestId: output.pullRequestId !== undefined && output.pullRequestId !== null ? output.pullRequestId : undefined,
        pullRequestStatus: output.pullRequestStatus !== undefined && output.pullRequestStatus !== null
            ? output.pullRequestStatus
            : undefined,
        pullRequestTargets: output.pullRequestTargets !== undefined && output.pullRequestTargets !== null
            ? deserializeAws_json1_1PullRequestTargetList(output.pullRequestTargets, context)
            : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_json1_1PullRequestAlreadyClosedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PullRequestCreatedEventMetadata = (output, context) => {
    return {
        destinationCommitId: output.destinationCommitId !== undefined && output.destinationCommitId !== null
            ? output.destinationCommitId
            : undefined,
        mergeBase: output.mergeBase !== undefined && output.mergeBase !== null ? output.mergeBase : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        sourceCommitId: output.sourceCommitId !== undefined && output.sourceCommitId !== null ? output.sourceCommitId : undefined,
    };
};
const deserializeAws_json1_1PullRequestDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PullRequestEvent = (output, context) => {
    return {
        actorArn: output.actorArn !== undefined && output.actorArn !== null ? output.actorArn : undefined,
        approvalRuleEventMetadata: output.approvalRuleEventMetadata !== undefined && output.approvalRuleEventMetadata !== null
            ? deserializeAws_json1_1ApprovalRuleEventMetadata(output.approvalRuleEventMetadata, context)
            : undefined,
        approvalRuleOverriddenEventMetadata: output.approvalRuleOverriddenEventMetadata !== undefined && output.approvalRuleOverriddenEventMetadata !== null
            ? deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata(output.approvalRuleOverriddenEventMetadata, context)
            : undefined,
        approvalStateChangedEventMetadata: output.approvalStateChangedEventMetadata !== undefined && output.approvalStateChangedEventMetadata !== null
            ? deserializeAws_json1_1ApprovalStateChangedEventMetadata(output.approvalStateChangedEventMetadata, context)
            : undefined,
        eventDate: output.eventDate !== undefined && output.eventDate !== null
            ? new Date(Math.round(output.eventDate * 1000))
            : undefined,
        pullRequestCreatedEventMetadata: output.pullRequestCreatedEventMetadata !== undefined && output.pullRequestCreatedEventMetadata !== null
            ? deserializeAws_json1_1PullRequestCreatedEventMetadata(output.pullRequestCreatedEventMetadata, context)
            : undefined,
        pullRequestEventType: output.pullRequestEventType !== undefined && output.pullRequestEventType !== null
            ? output.pullRequestEventType
            : undefined,
        pullRequestId: output.pullRequestId !== undefined && output.pullRequestId !== null ? output.pullRequestId : undefined,
        pullRequestMergedStateChangedEventMetadata: output.pullRequestMergedStateChangedEventMetadata !== undefined &&
            output.pullRequestMergedStateChangedEventMetadata !== null
            ? deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata(output.pullRequestMergedStateChangedEventMetadata, context)
            : undefined,
        pullRequestSourceReferenceUpdatedEventMetadata: output.pullRequestSourceReferenceUpdatedEventMetadata !== undefined &&
            output.pullRequestSourceReferenceUpdatedEventMetadata !== null
            ? deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata(output.pullRequestSourceReferenceUpdatedEventMetadata, context)
            : undefined,
        pullRequestStatusChangedEventMetadata: output.pullRequestStatusChangedEventMetadata !== undefined &&
            output.pullRequestStatusChangedEventMetadata !== null
            ? deserializeAws_json1_1PullRequestStatusChangedEventMetadata(output.pullRequestStatusChangedEventMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1PullRequestEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PullRequestEvent(entry, context);
    });
};
const deserializeAws_json1_1PullRequestIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PullRequestIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata = (output, context) => {
    return {
        destinationReference: output.destinationReference !== undefined && output.destinationReference !== null
            ? output.destinationReference
            : undefined,
        mergeMetadata: output.mergeMetadata !== undefined && output.mergeMetadata !== null
            ? deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context)
            : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata = (output, context) => {
    return {
        afterCommitId: output.afterCommitId !== undefined && output.afterCommitId !== null ? output.afterCommitId : undefined,
        beforeCommitId: output.beforeCommitId !== undefined && output.beforeCommitId !== null ? output.beforeCommitId : undefined,
        mergeBase: output.mergeBase !== undefined && output.mergeBase !== null ? output.mergeBase : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1PullRequestStatusChangedEventMetadata = (output, context) => {
    return {
        pullRequestStatus: output.pullRequestStatus !== undefined && output.pullRequestStatus !== null
            ? output.pullRequestStatus
            : undefined,
    };
};
const deserializeAws_json1_1PullRequestStatusRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PullRequestTarget = (output, context) => {
    return {
        destinationCommit: output.destinationCommit !== undefined && output.destinationCommit !== null
            ? output.destinationCommit
            : undefined,
        destinationReference: output.destinationReference !== undefined && output.destinationReference !== null
            ? output.destinationReference
            : undefined,
        mergeBase: output.mergeBase !== undefined && output.mergeBase !== null ? output.mergeBase : undefined,
        mergeMetadata: output.mergeMetadata !== undefined && output.mergeMetadata !== null
            ? deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context)
            : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        sourceCommit: output.sourceCommit !== undefined && output.sourceCommit !== null ? output.sourceCommit : undefined,
        sourceReference: output.sourceReference !== undefined && output.sourceReference !== null ? output.sourceReference : undefined,
    };
};
const deserializeAws_json1_1PullRequestTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PullRequestTarget(entry, context);
    });
};
const deserializeAws_json1_1PutFileEntryConflictException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PutFileOutput = (output, context) => {
    return {
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        treeId: output.treeId !== undefined && output.treeId !== null ? output.treeId : undefined,
    };
};
const deserializeAws_json1_1PutRepositoryTriggersOutput = (output, context) => {
    return {
        configurationId: output.configurationId !== undefined && output.configurationId !== null ? output.configurationId : undefined,
    };
};
const deserializeAws_json1_1ReactionCountsMap = (output, context) => {
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
const deserializeAws_json1_1ReactionForComment = (output, context) => {
    return {
        reaction: output.reaction !== undefined && output.reaction !== null
            ? deserializeAws_json1_1ReactionValueFormats(output.reaction, context)
            : undefined,
        reactionUsers: output.reactionUsers !== undefined && output.reactionUsers !== null
            ? deserializeAws_json1_1ReactionUsersList(output.reactionUsers, context)
            : undefined,
        reactionsFromDeletedUsersCount: output.reactionsFromDeletedUsersCount !== undefined && output.reactionsFromDeletedUsersCount !== null
            ? output.reactionsFromDeletedUsersCount
            : undefined,
    };
};
const deserializeAws_json1_1ReactionLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReactionsForCommentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReactionForComment(entry, context);
    });
};
const deserializeAws_json1_1ReactionUsersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReactionValueFormats = (output, context) => {
    return {
        emoji: output.emoji !== undefined && output.emoji !== null ? output.emoji : undefined,
        shortCode: output.shortCode !== undefined && output.shortCode !== null ? output.shortCode : undefined,
        unicode: output.unicode !== undefined && output.unicode !== null ? output.unicode : undefined,
    };
};
const deserializeAws_json1_1ReactionValueRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReferenceDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReferenceNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReferenceTypeNotSupportedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReplacementContentRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReplacementTypeRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryMetadata = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        cloneUrlHttp: output.cloneUrlHttp !== undefined && output.cloneUrlHttp !== null ? output.cloneUrlHttp : undefined,
        cloneUrlSsh: output.cloneUrlSsh !== undefined && output.cloneUrlSsh !== null ? output.cloneUrlSsh : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        defaultBranch: output.defaultBranch !== undefined && output.defaultBranch !== null ? output.defaultBranch : undefined,
        lastModifiedDate: output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
            ? new Date(Math.round(output.lastModifiedDate * 1000))
            : undefined,
        repositoryDescription: output.repositoryDescription !== undefined && output.repositoryDescription !== null
            ? output.repositoryDescription
            : undefined,
        repositoryId: output.repositoryId !== undefined && output.repositoryId !== null ? output.repositoryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1RepositoryMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RepositoryMetadata(entry, context);
    });
};
const deserializeAws_json1_1RepositoryNameExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryNameIdPair = (output, context) => {
    return {
        repositoryId: output.repositoryId !== undefined && output.repositoryId !== null ? output.repositoryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1RepositoryNameIdPairList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RepositoryNameIdPair(entry, context);
    });
};
const deserializeAws_json1_1RepositoryNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RepositoryNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryNamesRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryNotFoundList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RepositoryTrigger = (output, context) => {
    return {
        branches: output.branches !== undefined && output.branches !== null
            ? deserializeAws_json1_1BranchNameList(output.branches, context)
            : undefined,
        customData: output.customData !== undefined && output.customData !== null ? output.customData : undefined,
        destinationArn: output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1RepositoryTriggerEventList(output.events, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryTriggerEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RepositoryTriggerEventsListRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryTriggerExecutionFailure = (output, context) => {
    return {
        failureMessage: output.failureMessage !== undefined && output.failureMessage !== null ? output.failureMessage : undefined,
        trigger: output.trigger !== undefined && output.trigger !== null ? output.trigger : undefined,
    };
};
const deserializeAws_json1_1RepositoryTriggerExecutionFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RepositoryTriggerExecutionFailure(entry, context);
    });
};
const deserializeAws_json1_1RepositoryTriggerNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RepositoryTriggerNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryTriggersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RepositoryTrigger(entry, context);
    });
};
const deserializeAws_json1_1RepositoryTriggersListRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceArnRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RestrictedSourceFileException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RevisionIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RevisionNotCurrentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SameFileContentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SamePathRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SourceAndDestinationAreSameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SourceFileOrContentRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubModule = (output, context) => {
    return {
        absolutePath: output.absolutePath !== undefined && output.absolutePath !== null ? output.absolutePath : undefined,
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        relativePath: output.relativePath !== undefined && output.relativePath !== null ? output.relativePath : undefined,
    };
};
const deserializeAws_json1_1SubModuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SubModule(entry, context);
    });
};
const deserializeAws_json1_1SymbolicLink = (output, context) => {
    return {
        absolutePath: output.absolutePath !== undefined && output.absolutePath !== null ? output.absolutePath : undefined,
        blobId: output.blobId !== undefined && output.blobId !== null ? output.blobId : undefined,
        fileMode: output.fileMode !== undefined && output.fileMode !== null ? output.fileMode : undefined,
        relativePath: output.relativePath !== undefined && output.relativePath !== null ? output.relativePath : undefined,
    };
};
const deserializeAws_json1_1SymbolicLinkList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SymbolicLink(entry, context);
    });
};
const deserializeAws_json1_1TagKeysListRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TagPolicyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TagsMap = (output, context) => {
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
const deserializeAws_json1_1TagsMapRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TargetRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TargetsRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TestRepositoryTriggersOutput = (output, context) => {
    return {
        failedExecutions: output.failedExecutions !== undefined && output.failedExecutions !== null
            ? deserializeAws_json1_1RepositoryTriggerExecutionFailureList(output.failedExecutions, context)
            : undefined,
        successfulExecutions: output.successfulExecutions !== undefined && output.successfulExecutions !== null
            ? deserializeAws_json1_1RepositoryTriggerNameList(output.successfulExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1TipOfSourceReferenceIsDifferentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TipsDivergenceExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TitleRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput = (output, context) => {
    return {
        approvalRuleTemplate: output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
            ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput = (output, context) => {
    return {
        approvalRuleTemplate: output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
            ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput = (output, context) => {
    return {
        approvalRuleTemplate: output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
            ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateCommentOutput = (output, context) => {
    return {
        comment: output.comment !== undefined && output.comment !== null
            ? deserializeAws_json1_1Comment(output.comment, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput = (output, context) => {
    return {
        approvalRule: output.approvalRule !== undefined && output.approvalRule !== null
            ? deserializeAws_json1_1ApprovalRule(output.approvalRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdatePullRequestDescriptionOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdatePullRequestStatusOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdatePullRequestTitleOutput = (output, context) => {
    return {
        pullRequest: output.pullRequest !== undefined && output.pullRequest !== null
            ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1UserInfo = (output, context) => {
    return {
        date: output.date !== undefined && output.date !== null ? output.date : undefined,
        email: output.email !== undefined && output.email !== null ? output.email : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
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