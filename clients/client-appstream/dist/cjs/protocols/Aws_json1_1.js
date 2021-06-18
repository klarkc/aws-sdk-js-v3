"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1BatchAssociateUserStackCommand =
  exports.deserializeAws_json1_1AssociateFleetCommand =
  exports.serializeAws_json1_1UpdateStackCommand =
  exports.serializeAws_json1_1UpdateImagePermissionsCommand =
  exports.serializeAws_json1_1UpdateFleetCommand =
  exports.serializeAws_json1_1UpdateDirectoryConfigCommand =
  exports.serializeAws_json1_1UntagResourceCommand =
  exports.serializeAws_json1_1TagResourceCommand =
  exports.serializeAws_json1_1StopImageBuilderCommand =
  exports.serializeAws_json1_1StopFleetCommand =
  exports.serializeAws_json1_1StartImageBuilderCommand =
  exports.serializeAws_json1_1StartFleetCommand =
  exports.serializeAws_json1_1ListTagsForResourceCommand =
  exports.serializeAws_json1_1ListAssociatedStacksCommand =
  exports.serializeAws_json1_1ListAssociatedFleetsCommand =
  exports.serializeAws_json1_1ExpireSessionCommand =
  exports.serializeAws_json1_1EnableUserCommand =
  exports.serializeAws_json1_1DisassociateFleetCommand =
  exports.serializeAws_json1_1DisableUserCommand =
  exports.serializeAws_json1_1DescribeUserStackAssociationsCommand =
  exports.serializeAws_json1_1DescribeUsersCommand =
  exports.serializeAws_json1_1DescribeUsageReportSubscriptionsCommand =
  exports.serializeAws_json1_1DescribeStacksCommand =
  exports.serializeAws_json1_1DescribeSessionsCommand =
  exports.serializeAws_json1_1DescribeImagesCommand =
  exports.serializeAws_json1_1DescribeImagePermissionsCommand =
  exports.serializeAws_json1_1DescribeImageBuildersCommand =
  exports.serializeAws_json1_1DescribeFleetsCommand =
  exports.serializeAws_json1_1DescribeDirectoryConfigsCommand =
  exports.serializeAws_json1_1DeleteUserCommand =
  exports.serializeAws_json1_1DeleteUsageReportSubscriptionCommand =
  exports.serializeAws_json1_1DeleteStackCommand =
  exports.serializeAws_json1_1DeleteImagePermissionsCommand =
  exports.serializeAws_json1_1DeleteImageBuilderCommand =
  exports.serializeAws_json1_1DeleteImageCommand =
  exports.serializeAws_json1_1DeleteFleetCommand =
  exports.serializeAws_json1_1DeleteDirectoryConfigCommand =
  exports.serializeAws_json1_1CreateUserCommand =
  exports.serializeAws_json1_1CreateUsageReportSubscriptionCommand =
  exports.serializeAws_json1_1CreateUpdatedImageCommand =
  exports.serializeAws_json1_1CreateStreamingURLCommand =
  exports.serializeAws_json1_1CreateStackCommand =
  exports.serializeAws_json1_1CreateImageBuilderStreamingURLCommand =
  exports.serializeAws_json1_1CreateImageBuilderCommand =
  exports.serializeAws_json1_1CreateFleetCommand =
  exports.serializeAws_json1_1CreateDirectoryConfigCommand =
  exports.serializeAws_json1_1CopyImageCommand =
  exports.serializeAws_json1_1BatchDisassociateUserStackCommand =
  exports.serializeAws_json1_1BatchAssociateUserStackCommand =
  exports.serializeAws_json1_1AssociateFleetCommand =
    void 0;
exports.deserializeAws_json1_1UpdateStackCommand =
  exports.deserializeAws_json1_1UpdateImagePermissionsCommand =
  exports.deserializeAws_json1_1UpdateFleetCommand =
  exports.deserializeAws_json1_1UpdateDirectoryConfigCommand =
  exports.deserializeAws_json1_1UntagResourceCommand =
  exports.deserializeAws_json1_1TagResourceCommand =
  exports.deserializeAws_json1_1StopImageBuilderCommand =
  exports.deserializeAws_json1_1StopFleetCommand =
  exports.deserializeAws_json1_1StartImageBuilderCommand =
  exports.deserializeAws_json1_1StartFleetCommand =
  exports.deserializeAws_json1_1ListTagsForResourceCommand =
  exports.deserializeAws_json1_1ListAssociatedStacksCommand =
  exports.deserializeAws_json1_1ListAssociatedFleetsCommand =
  exports.deserializeAws_json1_1ExpireSessionCommand =
  exports.deserializeAws_json1_1EnableUserCommand =
  exports.deserializeAws_json1_1DisassociateFleetCommand =
  exports.deserializeAws_json1_1DisableUserCommand =
  exports.deserializeAws_json1_1DescribeUserStackAssociationsCommand =
  exports.deserializeAws_json1_1DescribeUsersCommand =
  exports.deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand =
  exports.deserializeAws_json1_1DescribeStacksCommand =
  exports.deserializeAws_json1_1DescribeSessionsCommand =
  exports.deserializeAws_json1_1DescribeImagesCommand =
  exports.deserializeAws_json1_1DescribeImagePermissionsCommand =
  exports.deserializeAws_json1_1DescribeImageBuildersCommand =
  exports.deserializeAws_json1_1DescribeFleetsCommand =
  exports.deserializeAws_json1_1DescribeDirectoryConfigsCommand =
  exports.deserializeAws_json1_1DeleteUserCommand =
  exports.deserializeAws_json1_1DeleteUsageReportSubscriptionCommand =
  exports.deserializeAws_json1_1DeleteStackCommand =
  exports.deserializeAws_json1_1DeleteImagePermissionsCommand =
  exports.deserializeAws_json1_1DeleteImageBuilderCommand =
  exports.deserializeAws_json1_1DeleteImageCommand =
  exports.deserializeAws_json1_1DeleteFleetCommand =
  exports.deserializeAws_json1_1DeleteDirectoryConfigCommand =
  exports.deserializeAws_json1_1CreateUserCommand =
  exports.deserializeAws_json1_1CreateUsageReportSubscriptionCommand =
  exports.deserializeAws_json1_1CreateUpdatedImageCommand =
  exports.deserializeAws_json1_1CreateStreamingURLCommand =
  exports.deserializeAws_json1_1CreateStackCommand =
  exports.deserializeAws_json1_1CreateImageBuilderStreamingURLCommand =
  exports.deserializeAws_json1_1CreateImageBuilderCommand =
  exports.deserializeAws_json1_1CreateFleetCommand =
  exports.deserializeAws_json1_1CreateDirectoryConfigCommand =
  exports.deserializeAws_json1_1CopyImageCommand =
  exports.deserializeAws_json1_1BatchDisassociateUserStackCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateFleetCommand = serializeAws_json1_1AssociateFleetCommand;
const serializeAws_json1_1BatchAssociateUserStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.BatchAssociateUserStack",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1BatchAssociateUserStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchAssociateUserStackCommand = serializeAws_json1_1BatchAssociateUserStackCommand;
const serializeAws_json1_1BatchDisassociateUserStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.BatchDisassociateUserStack",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1BatchDisassociateUserStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDisassociateUserStackCommand = serializeAws_json1_1BatchDisassociateUserStackCommand;
const serializeAws_json1_1CopyImageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CopyImage",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CopyImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CopyImageCommand = serializeAws_json1_1CopyImageCommand;
const serializeAws_json1_1CreateDirectoryConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateDirectoryConfig",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDirectoryConfigCommand = serializeAws_json1_1CreateDirectoryConfigCommand;
const serializeAws_json1_1CreateFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFleetCommand = serializeAws_json1_1CreateFleetCommand;
const serializeAws_json1_1CreateImageBuilderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateImageBuilder",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateImageBuilderCommand = serializeAws_json1_1CreateImageBuilderCommand;
const serializeAws_json1_1CreateImageBuilderStreamingURLCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateImageBuilderStreamingURL",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateImageBuilderStreamingURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateImageBuilderStreamingURLCommand =
  serializeAws_json1_1CreateImageBuilderStreamingURLCommand;
const serializeAws_json1_1CreateStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateStack",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStackCommand = serializeAws_json1_1CreateStackCommand;
const serializeAws_json1_1CreateStreamingURLCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateStreamingURL",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateStreamingURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStreamingURLCommand = serializeAws_json1_1CreateStreamingURLCommand;
const serializeAws_json1_1CreateUpdatedImageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUpdatedImage",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateUpdatedImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUpdatedImageCommand = serializeAws_json1_1CreateUpdatedImageCommand;
const serializeAws_json1_1CreateUsageReportSubscriptionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUsageReportSubscription",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateUsageReportSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUsageReportSubscriptionCommand =
  serializeAws_json1_1CreateUsageReportSubscriptionCommand;
const serializeAws_json1_1CreateUserCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUser",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
const serializeAws_json1_1DeleteDirectoryConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteDirectoryConfig",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDirectoryConfigCommand = serializeAws_json1_1DeleteDirectoryConfigCommand;
const serializeAws_json1_1DeleteFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFleetCommand = serializeAws_json1_1DeleteFleetCommand;
const serializeAws_json1_1DeleteImageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImage",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteImageCommand = serializeAws_json1_1DeleteImageCommand;
const serializeAws_json1_1DeleteImageBuilderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImageBuilder",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteImageBuilderCommand = serializeAws_json1_1DeleteImageBuilderCommand;
const serializeAws_json1_1DeleteImagePermissionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImagePermissions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteImagePermissionsCommand = serializeAws_json1_1DeleteImagePermissionsCommand;
const serializeAws_json1_1DeleteStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteStack",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteStackCommand = serializeAws_json1_1DeleteStackCommand;
const serializeAws_json1_1DeleteUsageReportSubscriptionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteUsageReportSubscription",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteUsageReportSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUsageReportSubscriptionCommand =
  serializeAws_json1_1DeleteUsageReportSubscriptionCommand;
const serializeAws_json1_1DeleteUserCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteUser",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
const serializeAws_json1_1DescribeDirectoryConfigsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeDirectoryConfigs",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectoryConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDirectoryConfigsCommand = serializeAws_json1_1DescribeDirectoryConfigsCommand;
const serializeAws_json1_1DescribeFleetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeFleets",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetsCommand = serializeAws_json1_1DescribeFleetsCommand;
const serializeAws_json1_1DescribeImageBuildersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImageBuilders",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeImageBuildersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeImageBuildersCommand = serializeAws_json1_1DescribeImageBuildersCommand;
const serializeAws_json1_1DescribeImagePermissionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImagePermissions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeImagePermissionsCommand = serializeAws_json1_1DescribeImagePermissionsCommand;
const serializeAws_json1_1DescribeImagesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImages",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeImagesCommand = serializeAws_json1_1DescribeImagesCommand;
const serializeAws_json1_1DescribeSessionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeSessions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSessionsCommand = serializeAws_json1_1DescribeSessionsCommand;
const serializeAws_json1_1DescribeStacksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeStacks",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStacksCommand = serializeAws_json1_1DescribeStacksCommand;
const serializeAws_json1_1DescribeUsageReportSubscriptionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUsageReportSubscriptions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeUsageReportSubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUsageReportSubscriptionsCommand =
  serializeAws_json1_1DescribeUsageReportSubscriptionsCommand;
const serializeAws_json1_1DescribeUsersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUsers",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUsersCommand = serializeAws_json1_1DescribeUsersCommand;
const serializeAws_json1_1DescribeUserStackAssociationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUserStackAssociations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeUserStackAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserStackAssociationsCommand =
  serializeAws_json1_1DescribeUserStackAssociationsCommand;
const serializeAws_json1_1DisableUserCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisableUser",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableUserCommand = serializeAws_json1_1DisableUserCommand;
const serializeAws_json1_1DisassociateFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateFleetCommand = serializeAws_json1_1DisassociateFleetCommand;
const serializeAws_json1_1EnableUserCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.EnableUser",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1EnableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableUserCommand = serializeAws_json1_1EnableUserCommand;
const serializeAws_json1_1ExpireSessionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ExpireSession",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ExpireSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExpireSessionCommand = serializeAws_json1_1ExpireSessionCommand;
const serializeAws_json1_1ListAssociatedFleetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListAssociatedFleets",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListAssociatedFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssociatedFleetsCommand = serializeAws_json1_1ListAssociatedFleetsCommand;
const serializeAws_json1_1ListAssociatedStacksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListAssociatedStacks",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListAssociatedStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssociatedStacksCommand = serializeAws_json1_1ListAssociatedStacksCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListTagsForResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1StartFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StartFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartFleetCommand = serializeAws_json1_1StartFleetCommand;
const serializeAws_json1_1StartImageBuilderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StartImageBuilder",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartImageBuilderCommand = serializeAws_json1_1StartImageBuilderCommand;
const serializeAws_json1_1StopFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StopFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StopFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopFleetCommand = serializeAws_json1_1StopFleetCommand;
const serializeAws_json1_1StopImageBuilderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StopImageBuilder",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StopImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopImageBuilderCommand = serializeAws_json1_1StopImageBuilderCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.TagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UntagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateDirectoryConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateDirectoryConfig",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDirectoryConfigCommand = serializeAws_json1_1UpdateDirectoryConfigCommand;
const serializeAws_json1_1UpdateFleetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateFleet",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFleetCommand = serializeAws_json1_1UpdateFleetCommand;
const serializeAws_json1_1UpdateImagePermissionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateImagePermissions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateImagePermissionsCommand = serializeAws_json1_1UpdateImagePermissionsCommand;
const serializeAws_json1_1UpdateStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateStack",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateStackCommand = serializeAws_json1_1UpdateStackCommand;
const deserializeAws_json1_1AssociateFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateFleetCommand = deserializeAws_json1_1AssociateFleetCommand;
const deserializeAws_json1_1AssociateFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchAssociateUserStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchAssociateUserStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1BatchAssociateUserStackResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchAssociateUserStackCommand = deserializeAws_json1_1BatchAssociateUserStackCommand;
const deserializeAws_json1_1BatchAssociateUserStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDisassociateUserStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDisassociateUserStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1BatchDisassociateUserStackResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDisassociateUserStackCommand =
  deserializeAws_json1_1BatchDisassociateUserStackCommand;
const deserializeAws_json1_1BatchDisassociateUserStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CopyImageCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyImageCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CopyImageResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CopyImageCommand = deserializeAws_json1_1CopyImageCommand;
const deserializeAws_json1_1CopyImageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDirectoryConfigCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDirectoryConfigCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateDirectoryConfigResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDirectoryConfigCommand = deserializeAws_json1_1CreateDirectoryConfigCommand;
const deserializeAws_json1_1CreateDirectoryConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFleetCommand = deserializeAws_json1_1CreateFleetCommand;
const deserializeAws_json1_1CreateFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateImageBuilderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateImageBuilderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateImageBuilderResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateImageBuilderCommand = deserializeAws_json1_1CreateImageBuilderCommand;
const deserializeAws_json1_1CreateImageBuilderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateImageBuilderStreamingURLCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateImageBuilderStreamingURLResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateImageBuilderStreamingURLCommand =
  deserializeAws_json1_1CreateImageBuilderStreamingURLCommand;
const deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateStackResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStackCommand = deserializeAws_json1_1CreateStackCommand;
const deserializeAws_json1_1CreateStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateStreamingURLCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStreamingURLCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateStreamingURLResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStreamingURLCommand = deserializeAws_json1_1CreateStreamingURLCommand;
const deserializeAws_json1_1CreateStreamingURLCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUpdatedImageCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUpdatedImageCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateUpdatedImageResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUpdatedImageCommand = deserializeAws_json1_1CreateUpdatedImageCommand;
const deserializeAws_json1_1CreateUpdatedImageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUsageReportSubscriptionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateUsageReportSubscriptionResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUsageReportSubscriptionCommand =
  deserializeAws_json1_1CreateUsageReportSubscriptionCommand;
const deserializeAws_json1_1CreateUsageReportSubscriptionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateUserResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserCommand = deserializeAws_json1_1CreateUserCommand;
const deserializeAws_json1_1CreateUserCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDirectoryConfigCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDirectoryConfigCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteDirectoryConfigResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDirectoryConfigCommand = deserializeAws_json1_1DeleteDirectoryConfigCommand;
const deserializeAws_json1_1DeleteDirectoryConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFleetCommand = deserializeAws_json1_1DeleteFleetCommand;
const deserializeAws_json1_1DeleteFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteImageCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImageCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteImageResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteImageCommand = deserializeAws_json1_1DeleteImageCommand;
const deserializeAws_json1_1DeleteImageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteImageBuilderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImageBuilderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteImageBuilderResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteImageBuilderCommand = deserializeAws_json1_1DeleteImageBuilderCommand;
const deserializeAws_json1_1DeleteImageBuilderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteImagePermissionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImagePermissionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteImagePermissionsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteImagePermissionsCommand = deserializeAws_json1_1DeleteImagePermissionsCommand;
const deserializeAws_json1_1DeleteImagePermissionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteStackResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteStackCommand = deserializeAws_json1_1DeleteStackCommand;
const deserializeAws_json1_1DeleteStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUsageReportSubscriptionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteUsageReportSubscriptionResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUsageReportSubscriptionCommand =
  deserializeAws_json1_1DeleteUsageReportSubscriptionCommand;
const deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteUserResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
const deserializeAws_json1_1DeleteUserCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDirectoryConfigsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDirectoryConfigsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeDirectoryConfigsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDirectoryConfigsCommand = deserializeAws_json1_1DescribeDirectoryConfigsCommand;
const deserializeAws_json1_1DescribeDirectoryConfigsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeFleetsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetsCommand = deserializeAws_json1_1DescribeFleetsCommand;
const deserializeAws_json1_1DescribeFleetsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeImageBuildersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImageBuildersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeImageBuildersResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeImageBuildersCommand = deserializeAws_json1_1DescribeImageBuildersCommand;
const deserializeAws_json1_1DescribeImageBuildersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeImagePermissionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImagePermissionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeImagePermissionsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeImagePermissionsCommand = deserializeAws_json1_1DescribeImagePermissionsCommand;
const deserializeAws_json1_1DescribeImagePermissionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeImagesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImagesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeImagesResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeImagesCommand = deserializeAws_json1_1DescribeImagesCommand;
const deserializeAws_json1_1DescribeImagesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSessionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeSessionsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSessionsCommand = deserializeAws_json1_1DescribeSessionsCommand;
const deserializeAws_json1_1DescribeSessionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStacksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStacksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeStacksResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStacksCommand = deserializeAws_json1_1DescribeStacksCommand;
const deserializeAws_json1_1DescribeStacksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeUsageReportSubscriptionsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand =
  deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand;
const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUsersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUsersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeUsersResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUsersCommand = deserializeAws_json1_1DescribeUsersCommand;
const deserializeAws_json1_1DescribeUsersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserStackAssociationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserStackAssociationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeUserStackAssociationsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserStackAssociationsCommand =
  deserializeAws_json1_1DescribeUserStackAssociationsCommand;
const deserializeAws_json1_1DescribeUserStackAssociationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableUserCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableUserCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisableUserResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableUserCommand = deserializeAws_json1_1DisableUserCommand;
const deserializeAws_json1_1DisableUserCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateFleetCommand = deserializeAws_json1_1DisassociateFleetCommand;
const deserializeAws_json1_1DisassociateFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableUserCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableUserCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1EnableUserResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableUserCommand = deserializeAws_json1_1EnableUserCommand;
const deserializeAws_json1_1EnableUserCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ExpireSessionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExpireSessionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ExpireSessionResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExpireSessionCommand = deserializeAws_json1_1ExpireSessionCommand;
const deserializeAws_json1_1ExpireSessionCommandError = async (output, context) => {
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
const deserializeAws_json1_1ListAssociatedFleetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociatedFleetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListAssociatedFleetsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssociatedFleetsCommand = deserializeAws_json1_1ListAssociatedFleetsCommand;
const deserializeAws_json1_1ListAssociatedFleetsCommandError = async (output, context) => {
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
const deserializeAws_json1_1ListAssociatedStacksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociatedStacksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListAssociatedStacksResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssociatedStacksCommand = deserializeAws_json1_1ListAssociatedStacksCommand;
const deserializeAws_json1_1ListAssociatedStacksCommandError = async (output, context) => {
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartFleetCommand = deserializeAws_json1_1StartFleetCommand;
const deserializeAws_json1_1StartFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartImageBuilderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImageBuilderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartImageBuilderResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartImageBuilderCommand = deserializeAws_json1_1StartImageBuilderCommand;
const deserializeAws_json1_1StartImageBuilderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StopFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopFleetCommand = deserializeAws_json1_1StopFleetCommand;
const deserializeAws_json1_1StopFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopImageBuilderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopImageBuilderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StopImageBuilderResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopImageBuilderCommand = deserializeAws_json1_1StopImageBuilderCommand;
const deserializeAws_json1_1StopImageBuilderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDirectoryConfigCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDirectoryConfigCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateDirectoryConfigResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDirectoryConfigCommand = deserializeAws_json1_1UpdateDirectoryConfigCommand;
const deserializeAws_json1_1UpdateDirectoryConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFleetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFleetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateFleetResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFleetCommand = deserializeAws_json1_1UpdateFleetCommand;
const deserializeAws_json1_1UpdateFleetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateImagePermissionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateImagePermissionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateImagePermissionsResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateImagePermissionsCommand = deserializeAws_json1_1UpdateImagePermissionsCommand;
const deserializeAws_json1_1UpdateImagePermissionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateStackResult(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateStackCommand = deserializeAws_json1_1UpdateStackCommand;
const deserializeAws_json1_1UpdateStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1IncompatibleImageExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1IncompatibleImageException(body, context);
  const contents = {
    name: "IncompatibleImageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidAccountStatusExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidAccountStatusException(body, context);
  const contents = {
    name: "InvalidAccountStatusException",
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
const deserializeAws_json1_1InvalidRoleExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
  const contents = {
    name: "InvalidRoleException",
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
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
  const contents = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1RequestLimitExceededExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1RequestLimitExceededException(body, context);
  const contents = {
    name: "RequestLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceNotAvailableExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceNotAvailableException(body, context);
  const contents = {
    name: "ResourceNotAvailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_1AccessEndpoint = (input, context) => {
  return {
    ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
    ...(input.VpceId !== undefined && input.VpceId !== null && { VpceId: input.VpceId }),
  };
};
const serializeAws_json1_1AccessEndpointList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1AccessEndpoint(entry, context);
    });
};
const serializeAws_json1_1ApplicationSettings = (input, context) => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.SettingsGroup !== undefined && input.SettingsGroup !== null && { SettingsGroup: input.SettingsGroup }),
  };
};
const serializeAws_json1_1ArnList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1AssociateFleetRequest = (input, context) => {
  return {
    ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
  };
};
const serializeAws_json1_1AwsAccountIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1BatchAssociateUserStackRequest = (input, context) => {
  return {
    ...(input.UserStackAssociations !== undefined &&
      input.UserStackAssociations !== null && {
        UserStackAssociations: serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context),
      }),
  };
};
const serializeAws_json1_1BatchDisassociateUserStackRequest = (input, context) => {
  return {
    ...(input.UserStackAssociations !== undefined &&
      input.UserStackAssociations !== null && {
        UserStackAssociations: serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context),
      }),
  };
};
const serializeAws_json1_1ComputeCapacity = (input, context) => {
  return {
    ...(input.DesiredInstances !== undefined &&
      input.DesiredInstances !== null && { DesiredInstances: input.DesiredInstances }),
  };
};
const serializeAws_json1_1CopyImageRequest = (input, context) => {
  return {
    ...(input.DestinationImageDescription !== undefined &&
      input.DestinationImageDescription !== null && { DestinationImageDescription: input.DestinationImageDescription }),
    ...(input.DestinationImageName !== undefined &&
      input.DestinationImageName !== null && { DestinationImageName: input.DestinationImageName }),
    ...(input.DestinationRegion !== undefined &&
      input.DestinationRegion !== null && { DestinationRegion: input.DestinationRegion }),
    ...(input.SourceImageName !== undefined &&
      input.SourceImageName !== null && { SourceImageName: input.SourceImageName }),
  };
};
const serializeAws_json1_1CreateDirectoryConfigRequest = (input, context) => {
  return {
    ...(input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedNames !== undefined &&
      input.OrganizationalUnitDistinguishedNames !== null && {
        OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
          input.OrganizationalUnitDistinguishedNames,
          context
        ),
      }),
    ...(input.ServiceAccountCredentials !== undefined &&
      input.ServiceAccountCredentials !== null && {
        ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
          input.ServiceAccountCredentials,
          context
        ),
      }),
  };
};
const serializeAws_json1_1CreateFleetRequest = (input, context) => {
  return {
    ...(input.ComputeCapacity !== undefined &&
      input.ComputeCapacity !== null && {
        ComputeCapacity: serializeAws_json1_1ComputeCapacity(input.ComputeCapacity, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds !== undefined &&
      input.DisconnectTimeoutInSeconds !== null && { DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo !== undefined &&
      input.DomainJoinInfo !== null && {
        DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
      }),
    ...(input.EnableDefaultInternetAccess !== undefined &&
      input.EnableDefaultInternetAccess !== null && { EnableDefaultInternetAccess: input.EnableDefaultInternetAccess }),
    ...(input.FleetType !== undefined && input.FleetType !== null && { FleetType: input.FleetType }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdleDisconnectTimeoutInSeconds !== undefined &&
      input.IdleDisconnectTimeoutInSeconds !== null && {
        IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds,
      }),
    ...(input.ImageArn !== undefined && input.ImageArn !== null && { ImageArn: input.ImageArn }),
    ...(input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.MaxUserDurationInSeconds !== undefined &&
      input.MaxUserDurationInSeconds !== null && { MaxUserDurationInSeconds: input.MaxUserDurationInSeconds }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.StreamView !== undefined && input.StreamView !== null && { StreamView: input.StreamView }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};
const serializeAws_json1_1CreateImageBuilderRequest = (input, context) => {
  return {
    ...(input.AccessEndpoints !== undefined &&
      input.AccessEndpoints !== null && {
        AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
      }),
    ...(input.AppstreamAgentVersion !== undefined &&
      input.AppstreamAgentVersion !== null && { AppstreamAgentVersion: input.AppstreamAgentVersion }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo !== undefined &&
      input.DomainJoinInfo !== null && {
        DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
      }),
    ...(input.EnableDefaultInternetAccess !== undefined &&
      input.EnableDefaultInternetAccess !== null && { EnableDefaultInternetAccess: input.EnableDefaultInternetAccess }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ImageArn !== undefined && input.ImageArn !== null && { ImageArn: input.ImageArn }),
    ...(input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};
const serializeAws_json1_1CreateImageBuilderStreamingURLRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Validity !== undefined && input.Validity !== null && { Validity: input.Validity }),
  };
};
const serializeAws_json1_1CreateStackRequest = (input, context) => {
  return {
    ...(input.AccessEndpoints !== undefined &&
      input.AccessEndpoints !== null && {
        AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
      }),
    ...(input.ApplicationSettings !== undefined &&
      input.ApplicationSettings !== null && {
        ApplicationSettings: serializeAws_json1_1ApplicationSettings(input.ApplicationSettings, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains !== undefined &&
      input.EmbedHostDomains !== null && {
        EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context),
      }),
    ...(input.FeedbackURL !== undefined && input.FeedbackURL !== null && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RedirectURL !== undefined && input.RedirectURL !== null && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors !== undefined &&
      input.StorageConnectors !== null && {
        StorageConnectors: serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.UserSettings !== undefined &&
      input.UserSettings !== null && {
        UserSettings: serializeAws_json1_1UserSettingList(input.UserSettings, context),
      }),
  };
};
const serializeAws_json1_1CreateStreamingURLRequest = (input, context) => {
  return {
    ...(input.ApplicationId !== undefined && input.ApplicationId !== null && { ApplicationId: input.ApplicationId }),
    ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    ...(input.SessionContext !== undefined &&
      input.SessionContext !== null && { SessionContext: input.SessionContext }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    ...(input.Validity !== undefined && input.Validity !== null && { Validity: input.Validity }),
  };
};
const serializeAws_json1_1CreateUpdatedImageRequest = (input, context) => {
  return {
    ...(input.dryRun !== undefined && input.dryRun !== null && { dryRun: input.dryRun }),
    ...(input.existingImageName !== undefined &&
      input.existingImageName !== null && { existingImageName: input.existingImageName }),
    ...(input.newImageDescription !== undefined &&
      input.newImageDescription !== null && { newImageDescription: input.newImageDescription }),
    ...(input.newImageDisplayName !== undefined &&
      input.newImageDisplayName !== null && { newImageDisplayName: input.newImageDisplayName }),
    ...(input.newImageName !== undefined && input.newImageName !== null && { newImageName: input.newImageName }),
    ...(input.newImageTags !== undefined &&
      input.newImageTags !== null && { newImageTags: serializeAws_json1_1Tags(input.newImageTags, context) }),
  };
};
const serializeAws_json1_1CreateUsageReportSubscriptionRequest = (input, context) => {
  return {};
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.MessageAction !== undefined && input.MessageAction !== null && { MessageAction: input.MessageAction }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};
const serializeAws_json1_1DeleteDirectoryConfigRequest = (input, context) => {
  return {
    ...(input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }),
  };
};
const serializeAws_json1_1DeleteFleetRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1DeleteImageBuilderRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1DeleteImagePermissionsRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SharedAccountId !== undefined &&
      input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }),
  };
};
const serializeAws_json1_1DeleteImageRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1DeleteStackRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1DeleteUsageReportSubscriptionRequest = (input, context) => {
  return {};
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};
const serializeAws_json1_1DescribeDirectoryConfigsRequest = (input, context) => {
  return {
    ...(input.DirectoryNames !== undefined &&
      input.DirectoryNames !== null && {
        DirectoryNames: serializeAws_json1_1DirectoryNameList(input.DirectoryNames, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeFleetsRequest = (input, context) => {
  return {
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeImageBuildersRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeImagePermissionsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SharedAwsAccountIds !== undefined &&
      input.SharedAwsAccountIds !== null && {
        SharedAwsAccountIds: serializeAws_json1_1AwsAccountIdList(input.SharedAwsAccountIds, context),
      }),
  };
};
const serializeAws_json1_1DescribeImagesRequest = (input, context) => {
  return {
    ...(input.Arns !== undefined && input.Arns !== null && { Arns: serializeAws_json1_1ArnList(input.Arns, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_json1_1DescribeSessionsRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};
const serializeAws_json1_1DescribeStacksRequest = (input, context) => {
  return {
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeUsageReportSubscriptionsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeUsersRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeUserStackAssociationsRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};
const serializeAws_json1_1DirectoryNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1DisableUserRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};
const serializeAws_json1_1DisassociateFleetRequest = (input, context) => {
  return {
    ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
  };
};
const serializeAws_json1_1DomainJoinInfo = (input, context) => {
  return {
    ...(input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedName !== undefined &&
      input.OrganizationalUnitDistinguishedName !== null && {
        OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
      }),
  };
};
const serializeAws_json1_1DomainList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1EmbedHostDomains = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1EnableUserRequest = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};
const serializeAws_json1_1ExpireSessionRequest = (input, context) => {
  return {
    ...(input.SessionId !== undefined && input.SessionId !== null && { SessionId: input.SessionId }),
  };
};
const serializeAws_json1_1FleetAttributes = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ImagePermissions = (input, context) => {
  return {
    ...(input.allowFleet !== undefined && input.allowFleet !== null && { allowFleet: input.allowFleet }),
    ...(input.allowImageBuilder !== undefined &&
      input.allowImageBuilder !== null && { allowImageBuilder: input.allowImageBuilder }),
  };
};
const serializeAws_json1_1ListAssociatedFleetsRequest = (input, context) => {
  return {
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
  };
};
const serializeAws_json1_1ListAssociatedStacksRequest = (input, context) => {
  return {
    ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};
const serializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1SecurityGroupIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ServiceAccountCredentials = (input, context) => {
  return {
    ...(input.AccountName !== undefined && input.AccountName !== null && { AccountName: input.AccountName }),
    ...(input.AccountPassword !== undefined &&
      input.AccountPassword !== null && { AccountPassword: input.AccountPassword }),
  };
};
const serializeAws_json1_1StackAttributes = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1StartFleetRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1StartImageBuilderRequest = (input, context) => {
  return {
    ...(input.AppstreamAgentVersion !== undefined &&
      input.AppstreamAgentVersion !== null && { AppstreamAgentVersion: input.AppstreamAgentVersion }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1StopFleetRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1StopImageBuilderRequest = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1StorageConnector = (input, context) => {
  return {
    ...(input.ConnectorType !== undefined && input.ConnectorType !== null && { ConnectorType: input.ConnectorType }),
    ...(input.Domains !== undefined &&
      input.Domains !== null && { Domains: serializeAws_json1_1DomainList(input.Domains, context) }),
    ...(input.ResourceIdentifier !== undefined &&
      input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier }),
  };
};
const serializeAws_json1_1StorageConnectorList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1StorageConnector(entry, context);
    });
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
const serializeAws_json1_1SubnetIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1TagKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
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
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};
const serializeAws_json1_1UpdateDirectoryConfigRequest = (input, context) => {
  return {
    ...(input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedNames !== undefined &&
      input.OrganizationalUnitDistinguishedNames !== null && {
        OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
          input.OrganizationalUnitDistinguishedNames,
          context
        ),
      }),
    ...(input.ServiceAccountCredentials !== undefined &&
      input.ServiceAccountCredentials !== null && {
        ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
          input.ServiceAccountCredentials,
          context
        ),
      }),
  };
};
const serializeAws_json1_1UpdateFleetRequest = (input, context) => {
  return {
    ...(input.AttributesToDelete !== undefined &&
      input.AttributesToDelete !== null && {
        AttributesToDelete: serializeAws_json1_1FleetAttributes(input.AttributesToDelete, context),
      }),
    ...(input.ComputeCapacity !== undefined &&
      input.ComputeCapacity !== null && {
        ComputeCapacity: serializeAws_json1_1ComputeCapacity(input.ComputeCapacity, context),
      }),
    ...(input.DeleteVpcConfig !== undefined &&
      input.DeleteVpcConfig !== null && { DeleteVpcConfig: input.DeleteVpcConfig }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds !== undefined &&
      input.DisconnectTimeoutInSeconds !== null && { DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo !== undefined &&
      input.DomainJoinInfo !== null && {
        DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
      }),
    ...(input.EnableDefaultInternetAccess !== undefined &&
      input.EnableDefaultInternetAccess !== null && { EnableDefaultInternetAccess: input.EnableDefaultInternetAccess }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdleDisconnectTimeoutInSeconds !== undefined &&
      input.IdleDisconnectTimeoutInSeconds !== null && {
        IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds,
      }),
    ...(input.ImageArn !== undefined && input.ImageArn !== null && { ImageArn: input.ImageArn }),
    ...(input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.MaxUserDurationInSeconds !== undefined &&
      input.MaxUserDurationInSeconds !== null && { MaxUserDurationInSeconds: input.MaxUserDurationInSeconds }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.StreamView !== undefined && input.StreamView !== null && { StreamView: input.StreamView }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};
const serializeAws_json1_1UpdateImagePermissionsRequest = (input, context) => {
  return {
    ...(input.ImagePermissions !== undefined &&
      input.ImagePermissions !== null && {
        ImagePermissions: serializeAws_json1_1ImagePermissions(input.ImagePermissions, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SharedAccountId !== undefined &&
      input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }),
  };
};
const serializeAws_json1_1UpdateStackRequest = (input, context) => {
  return {
    ...(input.AccessEndpoints !== undefined &&
      input.AccessEndpoints !== null && {
        AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
      }),
    ...(input.ApplicationSettings !== undefined &&
      input.ApplicationSettings !== null && {
        ApplicationSettings: serializeAws_json1_1ApplicationSettings(input.ApplicationSettings, context),
      }),
    ...(input.AttributesToDelete !== undefined &&
      input.AttributesToDelete !== null && {
        AttributesToDelete: serializeAws_json1_1StackAttributes(input.AttributesToDelete, context),
      }),
    ...(input.DeleteStorageConnectors !== undefined &&
      input.DeleteStorageConnectors !== null && { DeleteStorageConnectors: input.DeleteStorageConnectors }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains !== undefined &&
      input.EmbedHostDomains !== null && {
        EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context),
      }),
    ...(input.FeedbackURL !== undefined && input.FeedbackURL !== null && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RedirectURL !== undefined && input.RedirectURL !== null && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors !== undefined &&
      input.StorageConnectors !== null && {
        StorageConnectors: serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context),
      }),
    ...(input.UserSettings !== undefined &&
      input.UserSettings !== null && {
        UserSettings: serializeAws_json1_1UserSettingList(input.UserSettings, context),
      }),
  };
};
const serializeAws_json1_1UserSetting = (input, context) => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Permission !== undefined && input.Permission !== null && { Permission: input.Permission }),
  };
};
const serializeAws_json1_1UserSettingList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1UserSetting(entry, context);
    });
};
const serializeAws_json1_1UserStackAssociation = (input, context) => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.SendEmailNotification !== undefined &&
      input.SendEmailNotification !== null && { SendEmailNotification: input.SendEmailNotification }),
    ...(input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};
const serializeAws_json1_1UserStackAssociationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1UserStackAssociation(entry, context);
    });
};
const serializeAws_json1_1VpcConfig = (input, context) => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};
const deserializeAws_json1_1AccessEndpoint = (output, context) => {
  return {
    EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
    VpceId: output.VpceId !== undefined && output.VpceId !== null ? output.VpceId : undefined,
  };
};
const deserializeAws_json1_1AccessEndpointList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AccessEndpoint(entry, context);
    });
};
const deserializeAws_json1_1Application = (output, context) => {
  return {
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    IconURL: output.IconURL !== undefined && output.IconURL !== null ? output.IconURL : undefined,
    LaunchParameters:
      output.LaunchParameters !== undefined && output.LaunchParameters !== null ? output.LaunchParameters : undefined,
    LaunchPath: output.LaunchPath !== undefined && output.LaunchPath !== null ? output.LaunchPath : undefined,
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1Metadata(output.Metadata, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
const deserializeAws_json1_1Applications = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Application(entry, context);
    });
};
const deserializeAws_json1_1ApplicationSettingsResponse = (output, context) => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    SettingsGroup:
      output.SettingsGroup !== undefined && output.SettingsGroup !== null ? output.SettingsGroup : undefined,
  };
};
const deserializeAws_json1_1AssociateFleetResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1BatchAssociateUserStackResult = (output, context) => {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context)
        : undefined,
  };
};
const deserializeAws_json1_1BatchDisassociateUserStackResult = (output, context) => {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context)
        : undefined,
  };
};
const deserializeAws_json1_1ComputeCapacityStatus = (output, context) => {
  return {
    Available: output.Available !== undefined && output.Available !== null ? output.Available : undefined,
    Desired: output.Desired !== undefined && output.Desired !== null ? output.Desired : undefined,
    InUse: output.InUse !== undefined && output.InUse !== null ? output.InUse : undefined,
    Running: output.Running !== undefined && output.Running !== null ? output.Running : undefined,
  };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1CopyImageResponse = (output, context) => {
  return {
    DestinationImageName:
      output.DestinationImageName !== undefined && output.DestinationImageName !== null
        ? output.DestinationImageName
        : undefined,
  };
};
const deserializeAws_json1_1CreateDirectoryConfigResult = (output, context) => {
  return {
    DirectoryConfig:
      output.DirectoryConfig !== undefined && output.DirectoryConfig !== null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined,
  };
};
const deserializeAws_json1_1CreateFleetResult = (output, context) => {
  return {
    Fleet:
      output.Fleet !== undefined && output.Fleet !== null
        ? deserializeAws_json1_1Fleet(output.Fleet, context)
        : undefined,
  };
};
const deserializeAws_json1_1CreateImageBuilderResult = (output, context) => {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
const deserializeAws_json1_1CreateImageBuilderStreamingURLResult = (output, context) => {
  return {
    Expires:
      output.Expires !== undefined && output.Expires !== null ? new Date(Math.round(output.Expires * 1000)) : undefined,
    StreamingURL: output.StreamingURL !== undefined && output.StreamingURL !== null ? output.StreamingURL : undefined,
  };
};
const deserializeAws_json1_1CreateStackResult = (output, context) => {
  return {
    Stack:
      output.Stack !== undefined && output.Stack !== null
        ? deserializeAws_json1_1Stack(output.Stack, context)
        : undefined,
  };
};
const deserializeAws_json1_1CreateStreamingURLResult = (output, context) => {
  return {
    Expires:
      output.Expires !== undefined && output.Expires !== null ? new Date(Math.round(output.Expires * 1000)) : undefined,
    StreamingURL: output.StreamingURL !== undefined && output.StreamingURL !== null ? output.StreamingURL : undefined,
  };
};
const deserializeAws_json1_1CreateUpdatedImageResult = (output, context) => {
  return {
    canUpdateImage:
      output.canUpdateImage !== undefined && output.canUpdateImage !== null ? output.canUpdateImage : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? deserializeAws_json1_1Image(output.image, context)
        : undefined,
  };
};
const deserializeAws_json1_1CreateUsageReportSubscriptionResult = (output, context) => {
  return {
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
  };
};
const deserializeAws_json1_1CreateUserResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteDirectoryConfigResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteFleetResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteImageBuilderResult = (output, context) => {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
const deserializeAws_json1_1DeleteImagePermissionsResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteImageResult = (output, context) => {
  return {
    Image:
      output.Image !== undefined && output.Image !== null
        ? deserializeAws_json1_1Image(output.Image, context)
        : undefined,
  };
};
const deserializeAws_json1_1DeleteStackResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteUsageReportSubscriptionResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteUserResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DescribeDirectoryConfigsResult = (output, context) => {
  return {
    DirectoryConfigs:
      output.DirectoryConfigs !== undefined && output.DirectoryConfigs !== null
        ? deserializeAws_json1_1DirectoryConfigList(output.DirectoryConfigs, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeFleetsResult = (output, context) => {
  return {
    Fleets:
      output.Fleets !== undefined && output.Fleets !== null
        ? deserializeAws_json1_1FleetList(output.Fleets, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeImageBuildersResult = (output, context) => {
  return {
    ImageBuilders:
      output.ImageBuilders !== undefined && output.ImageBuilders !== null
        ? deserializeAws_json1_1ImageBuilderList(output.ImageBuilders, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeImagePermissionsResult = (output, context) => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SharedImagePermissionsList:
      output.SharedImagePermissionsList !== undefined && output.SharedImagePermissionsList !== null
        ? deserializeAws_json1_1SharedImagePermissionsList(output.SharedImagePermissionsList, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeImagesResult = (output, context) => {
  return {
    Images:
      output.Images !== undefined && output.Images !== null
        ? deserializeAws_json1_1ImageList(output.Images, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeSessionsResult = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Sessions:
      output.Sessions !== undefined && output.Sessions !== null
        ? deserializeAws_json1_1SessionList(output.Sessions, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeStacksResult = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Stacks:
      output.Stacks !== undefined && output.Stacks !== null
        ? deserializeAws_json1_1StackList(output.Stacks, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeUsageReportSubscriptionsResult = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    UsageReportSubscriptions:
      output.UsageReportSubscriptions !== undefined && output.UsageReportSubscriptions !== null
        ? deserializeAws_json1_1UsageReportSubscriptionList(output.UsageReportSubscriptions, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeUsersResult = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserList(output.Users, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeUserStackAssociationsResult = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    UserStackAssociations:
      output.UserStackAssociations !== undefined && output.UserStackAssociations !== null
        ? deserializeAws_json1_1UserStackAssociationList(output.UserStackAssociations, context)
        : undefined,
  };
};
const deserializeAws_json1_1DirectoryConfig = (output, context) => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null ? output.DirectoryName : undefined,
    OrganizationalUnitDistinguishedNames:
      output.OrganizationalUnitDistinguishedNames !== undefined && output.OrganizationalUnitDistinguishedNames !== null
        ? deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
            output.OrganizationalUnitDistinguishedNames,
            context
          )
        : undefined,
    ServiceAccountCredentials:
      output.ServiceAccountCredentials !== undefined && output.ServiceAccountCredentials !== null
        ? deserializeAws_json1_1ServiceAccountCredentials(output.ServiceAccountCredentials, context)
        : undefined,
  };
};
const deserializeAws_json1_1DirectoryConfigList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DirectoryConfig(entry, context);
    });
};
const deserializeAws_json1_1DisableUserResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DisassociateFleetResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1DomainJoinInfo = (output, context) => {
  return {
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null ? output.DirectoryName : undefined,
    OrganizationalUnitDistinguishedName:
      output.OrganizationalUnitDistinguishedName !== undefined && output.OrganizationalUnitDistinguishedName !== null
        ? output.OrganizationalUnitDistinguishedName
        : undefined,
  };
};
const deserializeAws_json1_1DomainList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1EmbedHostDomains = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1EnableUserResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1ExpireSessionResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1Fleet = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    ComputeCapacityStatus:
      output.ComputeCapacityStatus !== undefined && output.ComputeCapacityStatus !== null
        ? deserializeAws_json1_1ComputeCapacityStatus(output.ComputeCapacityStatus, context)
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisconnectTimeoutInSeconds:
      output.DisconnectTimeoutInSeconds !== undefined && output.DisconnectTimeoutInSeconds !== null
        ? output.DisconnectTimeoutInSeconds
        : undefined,
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    DomainJoinInfo:
      output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null
        ? deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context)
        : undefined,
    EnableDefaultInternetAccess:
      output.EnableDefaultInternetAccess !== undefined && output.EnableDefaultInternetAccess !== null
        ? output.EnableDefaultInternetAccess
        : undefined,
    FleetErrors:
      output.FleetErrors !== undefined && output.FleetErrors !== null
        ? deserializeAws_json1_1FleetErrors(output.FleetErrors, context)
        : undefined,
    FleetType: output.FleetType !== undefined && output.FleetType !== null ? output.FleetType : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    IdleDisconnectTimeoutInSeconds:
      output.IdleDisconnectTimeoutInSeconds !== undefined && output.IdleDisconnectTimeoutInSeconds !== null
        ? output.IdleDisconnectTimeoutInSeconds
        : undefined,
    ImageArn: output.ImageArn !== undefined && output.ImageArn !== null ? output.ImageArn : undefined,
    ImageName: output.ImageName !== undefined && output.ImageName !== null ? output.ImageName : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    MaxUserDurationInSeconds:
      output.MaxUserDurationInSeconds !== undefined && output.MaxUserDurationInSeconds !== null
        ? output.MaxUserDurationInSeconds
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StreamView: output.StreamView !== undefined && output.StreamView !== null ? output.StreamView : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  };
};
const deserializeAws_json1_1FleetError = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  };
};
const deserializeAws_json1_1FleetErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1FleetError(entry, context);
    });
};
const deserializeAws_json1_1FleetList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Fleet(entry, context);
    });
};
const deserializeAws_json1_1Image = (output, context) => {
  return {
    Applications:
      output.Applications !== undefined && output.Applications !== null
        ? deserializeAws_json1_1Applications(output.Applications, context)
        : undefined,
    AppstreamAgentVersion:
      output.AppstreamAgentVersion !== undefined && output.AppstreamAgentVersion !== null
        ? output.AppstreamAgentVersion
        : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    BaseImageArn: output.BaseImageArn !== undefined && output.BaseImageArn !== null ? output.BaseImageArn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    ImageBuilderName:
      output.ImageBuilderName !== undefined && output.ImageBuilderName !== null ? output.ImageBuilderName : undefined,
    ImageBuilderSupported:
      output.ImageBuilderSupported !== undefined && output.ImageBuilderSupported !== null
        ? output.ImageBuilderSupported
        : undefined,
    ImageErrors:
      output.ImageErrors !== undefined && output.ImageErrors !== null
        ? deserializeAws_json1_1ResourceErrors(output.ImageErrors, context)
        : undefined,
    ImagePermissions:
      output.ImagePermissions !== undefined && output.ImagePermissions !== null
        ? deserializeAws_json1_1ImagePermissions(output.ImagePermissions, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    PublicBaseImageReleasedDate:
      output.PublicBaseImageReleasedDate !== undefined && output.PublicBaseImageReleasedDate !== null
        ? new Date(Math.round(output.PublicBaseImageReleasedDate * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1ImageStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Visibility: output.Visibility !== undefined && output.Visibility !== null ? output.Visibility : undefined,
  };
};
const deserializeAws_json1_1ImageBuilder = (output, context) => {
  return {
    AccessEndpoints:
      output.AccessEndpoints !== undefined && output.AccessEndpoints !== null
        ? deserializeAws_json1_1AccessEndpointList(output.AccessEndpoints, context)
        : undefined,
    AppstreamAgentVersion:
      output.AppstreamAgentVersion !== undefined && output.AppstreamAgentVersion !== null
        ? output.AppstreamAgentVersion
        : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    DomainJoinInfo:
      output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null
        ? deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context)
        : undefined,
    EnableDefaultInternetAccess:
      output.EnableDefaultInternetAccess !== undefined && output.EnableDefaultInternetAccess !== null
        ? output.EnableDefaultInternetAccess
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    ImageArn: output.ImageArn !== undefined && output.ImageArn !== null ? output.ImageArn : undefined,
    ImageBuilderErrors:
      output.ImageBuilderErrors !== undefined && output.ImageBuilderErrors !== null
        ? deserializeAws_json1_1ResourceErrors(output.ImageBuilderErrors, context)
        : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration !== undefined && output.NetworkAccessConfiguration !== null
        ? deserializeAws_json1_1NetworkAccessConfiguration(output.NetworkAccessConfiguration, context)
        : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1ImageBuilderStateChangeReason(output.StateChangeReason, context)
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  };
};
const deserializeAws_json1_1ImageBuilderList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ImageBuilder(entry, context);
    });
};
const deserializeAws_json1_1ImageBuilderStateChangeReason = (output, context) => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ImageList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Image(entry, context);
    });
};
const deserializeAws_json1_1ImagePermissions = (output, context) => {
  return {
    allowFleet: output.allowFleet !== undefined && output.allowFleet !== null ? output.allowFleet : undefined,
    allowImageBuilder:
      output.allowImageBuilder !== undefined && output.allowImageBuilder !== null
        ? output.allowImageBuilder
        : undefined,
  };
};
const deserializeAws_json1_1ImageStateChangeReason = (output, context) => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1IncompatibleImageException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidAccountStatusException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidParameterCombinationException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidRoleException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1LastReportGenerationExecutionError = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  };
};
const deserializeAws_json1_1LastReportGenerationExecutionErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1LastReportGenerationExecutionError(entry, context);
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ListAssociatedFleetsResult = (output, context) => {
  return {
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_json1_1StringList(output.Names, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListAssociatedStacksResult = (output, context) => {
  return {
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_json1_1StringList(output.Names, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  };
};
const deserializeAws_json1_1Metadata = (output, context) => {
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
const deserializeAws_json1_1NetworkAccessConfiguration = (output, context) => {
  return {
    EniId: output.EniId !== undefined && output.EniId !== null ? output.EniId : undefined,
    EniPrivateIpAddress:
      output.EniPrivateIpAddress !== undefined && output.EniPrivateIpAddress !== null
        ? output.EniPrivateIpAddress
        : undefined,
  };
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1RequestLimitExceededException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ResourceError = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    ErrorTimestamp:
      output.ErrorTimestamp !== undefined && output.ErrorTimestamp !== null
        ? new Date(Math.round(output.ErrorTimestamp * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1ResourceErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ResourceError(entry, context);
    });
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ResourceNotAvailableException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1SecurityGroupIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1ServiceAccountCredentials = (output, context) => {
  return {
    AccountName: output.AccountName !== undefined && output.AccountName !== null ? output.AccountName : undefined,
    AccountPassword:
      output.AccountPassword !== undefined && output.AccountPassword !== null ? output.AccountPassword : undefined,
  };
};
const deserializeAws_json1_1Session = (output, context) => {
  return {
    AuthenticationType:
      output.AuthenticationType !== undefined && output.AuthenticationType !== null
        ? output.AuthenticationType
        : undefined,
    ConnectionState:
      output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
    FleetName: output.FleetName !== undefined && output.FleetName !== null ? output.FleetName : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    MaxExpirationTime:
      output.MaxExpirationTime !== undefined && output.MaxExpirationTime !== null
        ? new Date(Math.round(output.MaxExpirationTime * 1000))
        : undefined,
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration !== undefined && output.NetworkAccessConfiguration !== null
        ? deserializeAws_json1_1NetworkAccessConfiguration(output.NetworkAccessConfiguration, context)
        : undefined,
    StackName: output.StackName !== undefined && output.StackName !== null ? output.StackName : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
  };
};
const deserializeAws_json1_1SessionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Session(entry, context);
    });
};
const deserializeAws_json1_1SharedImagePermissions = (output, context) => {
  return {
    imagePermissions:
      output.imagePermissions !== undefined && output.imagePermissions !== null
        ? deserializeAws_json1_1ImagePermissions(output.imagePermissions, context)
        : undefined,
    sharedAccountId:
      output.sharedAccountId !== undefined && output.sharedAccountId !== null ? output.sharedAccountId : undefined,
  };
};
const deserializeAws_json1_1SharedImagePermissionsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SharedImagePermissions(entry, context);
    });
};
const deserializeAws_json1_1Stack = (output, context) => {
  return {
    AccessEndpoints:
      output.AccessEndpoints !== undefined && output.AccessEndpoints !== null
        ? deserializeAws_json1_1AccessEndpointList(output.AccessEndpoints, context)
        : undefined,
    ApplicationSettings:
      output.ApplicationSettings !== undefined && output.ApplicationSettings !== null
        ? deserializeAws_json1_1ApplicationSettingsResponse(output.ApplicationSettings, context)
        : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    EmbedHostDomains:
      output.EmbedHostDomains !== undefined && output.EmbedHostDomains !== null
        ? deserializeAws_json1_1EmbedHostDomains(output.EmbedHostDomains, context)
        : undefined,
    FeedbackURL: output.FeedbackURL !== undefined && output.FeedbackURL !== null ? output.FeedbackURL : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RedirectURL: output.RedirectURL !== undefined && output.RedirectURL !== null ? output.RedirectURL : undefined,
    StackErrors:
      output.StackErrors !== undefined && output.StackErrors !== null
        ? deserializeAws_json1_1StackErrors(output.StackErrors, context)
        : undefined,
    StorageConnectors:
      output.StorageConnectors !== undefined && output.StorageConnectors !== null
        ? deserializeAws_json1_1StorageConnectorList(output.StorageConnectors, context)
        : undefined,
    UserSettings:
      output.UserSettings !== undefined && output.UserSettings !== null
        ? deserializeAws_json1_1UserSettingList(output.UserSettings, context)
        : undefined,
  };
};
const deserializeAws_json1_1StackError = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  };
};
const deserializeAws_json1_1StackErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1StackError(entry, context);
    });
};
const deserializeAws_json1_1StackList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Stack(entry, context);
    });
};
const deserializeAws_json1_1StartFleetResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1StartImageBuilderResult = (output, context) => {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
const deserializeAws_json1_1StopFleetResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1StopImageBuilderResult = (output, context) => {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
const deserializeAws_json1_1StorageConnector = (output, context) => {
  return {
    ConnectorType:
      output.ConnectorType !== undefined && output.ConnectorType !== null ? output.ConnectorType : undefined,
    Domains:
      output.Domains !== undefined && output.Domains !== null
        ? deserializeAws_json1_1DomainList(output.Domains, context)
        : undefined,
    ResourceIdentifier:
      output.ResourceIdentifier !== undefined && output.ResourceIdentifier !== null
        ? output.ResourceIdentifier
        : undefined,
  };
};
const deserializeAws_json1_1StorageConnectorList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1StorageConnector(entry, context);
    });
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
const deserializeAws_json1_1SubnetIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
  return {};
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
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateDirectoryConfigResult = (output, context) => {
  return {
    DirectoryConfig:
      output.DirectoryConfig !== undefined && output.DirectoryConfig !== null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined,
  };
};
const deserializeAws_json1_1UpdateFleetResult = (output, context) => {
  return {
    Fleet:
      output.Fleet !== undefined && output.Fleet !== null
        ? deserializeAws_json1_1Fleet(output.Fleet, context)
        : undefined,
  };
};
const deserializeAws_json1_1UpdateImagePermissionsResult = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateStackResult = (output, context) => {
  return {
    Stack:
      output.Stack !== undefined && output.Stack !== null
        ? deserializeAws_json1_1Stack(output.Stack, context)
        : undefined,
  };
};
const deserializeAws_json1_1UsageReportSubscription = (output, context) => {
  return {
    LastGeneratedReportDate:
      output.LastGeneratedReportDate !== undefined && output.LastGeneratedReportDate !== null
        ? new Date(Math.round(output.LastGeneratedReportDate * 1000))
        : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
    SubscriptionErrors:
      output.SubscriptionErrors !== undefined && output.SubscriptionErrors !== null
        ? deserializeAws_json1_1LastReportGenerationExecutionErrors(output.SubscriptionErrors, context)
        : undefined,
  };
};
const deserializeAws_json1_1UsageReportSubscriptionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UsageReportSubscription(entry, context);
    });
};
const deserializeAws_json1_1User = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    AuthenticationType:
      output.AuthenticationType !== undefined && output.AuthenticationType !== null
        ? output.AuthenticationType
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
    LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
  };
};
const deserializeAws_json1_1UserList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1User(entry, context);
    });
};
const deserializeAws_json1_1UserSetting = (output, context) => {
  return {
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    Permission: output.Permission !== undefined && output.Permission !== null ? output.Permission : undefined,
  };
};
const deserializeAws_json1_1UserSettingList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserSetting(entry, context);
    });
};
const deserializeAws_json1_1UserStackAssociation = (output, context) => {
  return {
    AuthenticationType:
      output.AuthenticationType !== undefined && output.AuthenticationType !== null
        ? output.AuthenticationType
        : undefined,
    SendEmailNotification:
      output.SendEmailNotification !== undefined && output.SendEmailNotification !== null
        ? output.SendEmailNotification
        : undefined,
    StackName: output.StackName !== undefined && output.StackName !== null ? output.StackName : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
  };
};
const deserializeAws_json1_1UserStackAssociationError = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    UserStackAssociation:
      output.UserStackAssociation !== undefined && output.UserStackAssociation !== null
        ? deserializeAws_json1_1UserStackAssociation(output.UserStackAssociation, context)
        : undefined,
  };
};
const deserializeAws_json1_1UserStackAssociationErrorList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserStackAssociationError(entry, context);
    });
};
const deserializeAws_json1_1UserStackAssociationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserStackAssociation(entry, context);
    });
};
const deserializeAws_json1_1VpcConfig = (output, context) => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
        : undefined,
  };
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
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
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
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
