import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AssociateFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.AssociateFleet",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1BatchAssociateUserStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.BatchAssociateUserStack",
      };
      body = JSON.stringify(serializeAws_json1_1BatchAssociateUserStackRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1BatchDisassociateUserStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.BatchDisassociateUserStack",
      };
      body = JSON.stringify(serializeAws_json1_1BatchDisassociateUserStackRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CopyImageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CopyImage",
      };
      body = JSON.stringify(serializeAws_json1_1CopyImageRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateDirectoryConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateDirectoryConfig",
      };
      body = JSON.stringify(serializeAws_json1_1CreateDirectoryConfigRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateFleet",
      };
      body = JSON.stringify(serializeAws_json1_1CreateFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateImageBuilderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateImageBuilder",
      };
      body = JSON.stringify(serializeAws_json1_1CreateImageBuilderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateImageBuilderStreamingURLCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateImageBuilderStreamingURL",
      };
      body = JSON.stringify(serializeAws_json1_1CreateImageBuilderStreamingURLRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateStack",
      };
      body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateStreamingURLCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateStreamingURL",
      };
      body = JSON.stringify(serializeAws_json1_1CreateStreamingURLRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateUpdatedImageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateUpdatedImage",
      };
      body = JSON.stringify(serializeAws_json1_1CreateUpdatedImageRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateUsageReportSubscriptionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateUsageReportSubscription",
      };
      body = JSON.stringify(serializeAws_json1_1CreateUsageReportSubscriptionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateUserCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.CreateUser",
      };
      body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteDirectoryConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteDirectoryConfig",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteDirectoryConfigRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteFleet",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteImageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteImage",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteImageRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteImageBuilderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteImageBuilder",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteImageBuilderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteImagePermissionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteImagePermissions",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteImagePermissionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteStack",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteUsageReportSubscriptionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteUsageReportSubscription",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteUsageReportSubscriptionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteUserCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DeleteUser",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeDirectoryConfigsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeDirectoryConfigs",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeDirectoryConfigsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeFleetsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeFleets",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeFleetsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeImageBuildersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeImageBuilders",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeImageBuildersRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeImagePermissionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeImagePermissions",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeImagePermissionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeImagesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeImages",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeSessionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeSessions",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeStacksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeStacks",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeUsageReportSubscriptionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeUsageReportSubscriptions",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeUsageReportSubscriptionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeUsersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeUsers",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeUsersRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeUserStackAssociationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DescribeUserStackAssociations",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeUserStackAssociationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisableUserCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DisableUser",
      };
      body = JSON.stringify(serializeAws_json1_1DisableUserRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.DisassociateFleet",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1EnableUserCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.EnableUser",
      };
      body = JSON.stringify(serializeAws_json1_1EnableUserRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ExpireSessionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.ExpireSession",
      };
      body = JSON.stringify(serializeAws_json1_1ExpireSessionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListAssociatedFleetsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.ListAssociatedFleets",
      };
      body = JSON.stringify(serializeAws_json1_1ListAssociatedFleetsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListAssociatedStacksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.ListAssociatedStacks",
      };
      body = JSON.stringify(serializeAws_json1_1ListAssociatedStacksRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.ListTagsForResource",
      };
      body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.StartFleet",
      };
      body = JSON.stringify(serializeAws_json1_1StartFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartImageBuilderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.StartImageBuilder",
      };
      body = JSON.stringify(serializeAws_json1_1StartImageBuilderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StopFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.StopFleet",
      };
      body = JSON.stringify(serializeAws_json1_1StopFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StopImageBuilderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.StopImageBuilder",
      };
      body = JSON.stringify(serializeAws_json1_1StopImageBuilderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.TagResource",
      };
      body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.UntagResource",
      };
      body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateDirectoryConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.UpdateDirectoryConfig",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateDirectoryConfigRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateFleetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.UpdateFleet",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateFleetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateImagePermissionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.UpdateImagePermissions",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateImagePermissionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PhotonAdminProxyService.UpdateStack",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1AssociateFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1BatchAssociateUserStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1BatchAssociateUserStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1BatchAssociateUserStackResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1BatchAssociateUserStackCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1BatchDisassociateUserStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1BatchDisassociateUserStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1BatchDisassociateUserStackResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1BatchDisassociateUserStackCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CopyImageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CopyImageCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CopyImageResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CopyImageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "IncompatibleImageException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 2];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 6];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 8];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateDirectoryConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateDirectoryConfigCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateDirectoryConfigResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateDirectoryConfigCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "InvalidRoleException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 6];
            case "OperationNotPermittedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 8];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "InvalidRoleException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 12];
            case "OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "RequestLimitExceededException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appstream#RequestLimitExceededException":
              return [3 /*break*/, 16];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 18];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 18];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 20];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 20];
            case "ResourceNotFoundException":
              return [3 /*break*/, 22];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateImageBuilderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateImageBuilderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateImageBuilderResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateImageBuilderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "InvalidRoleException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 12];
            case "OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "RequestLimitExceededException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appstream#RequestLimitExceededException":
              return [3 /*break*/, 16];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 18];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 18];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 20];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 20];
            case "ResourceNotFoundException":
              return [3 /*break*/, 22];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateImageBuilderStreamingURLCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateImageBuilderStreamingURLResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "OperationNotPermittedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateStackResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateStackCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
      switch (_l.label) {
        case 0:
          _a = [__assign({}, output)];
          _k = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_k.body = _l.sent()), _k)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 4];
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 6];
            case "InvalidRoleException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _l.label = 17;
        case 17:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateStreamingURLCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateStreamingURLCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateStreamingURLResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateStreamingURLCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateUpdatedImageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateUpdatedImageCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateUpdatedImageResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateUpdatedImageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
      switch (_l.label) {
        case 0:
          _a = [__assign({}, output)];
          _k = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_k.body = _l.sent()), _k)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _l.label = 17;
        case 17:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateUsageReportSubscriptionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateUsageReportSubscriptionResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateUsageReportSubscriptionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "InvalidRoleException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateUserCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateUserCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateUserResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateUserCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 6];
            case "OperationNotPermittedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 8];
            case "ResourceAlreadyExistsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#ResourceAlreadyExistsException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteDirectoryConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteDirectoryConfigCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteDirectoryConfigResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteDirectoryConfigCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceInUseException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "ResourceInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteImageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteImageCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteImageResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteImageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "ResourceInUseException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteImageBuilderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteImageBuilderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteImageBuilderResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteImageBuilderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteImagePermissionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteImagePermissionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteImagePermissionsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteImagePermissionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotAvailableException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteStackResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteStackCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "ResourceInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteUsageReportSubscriptionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteUsageReportSubscriptionResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteUserCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteUserCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteUserResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteUserCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeDirectoryConfigsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeDirectoryConfigsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeDirectoryConfigsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeDirectoryConfigsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeFleetsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeFleetsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeFleetsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeFleetsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeImageBuildersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeImageBuildersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeImageBuildersResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeImageBuildersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeImagePermissionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeImagePermissionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeImagePermissionsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeImagePermissionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeImagesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeImagesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeImagesResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeImagesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeSessionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeSessionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeSessionsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeSessionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeStacksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeStacksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeStacksResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeStacksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeUsageReportSubscriptionsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeUsersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeUsersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeUsersResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeUsersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeUserStackAssociationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeUserStackAssociationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeUserStackAssociationsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeUserStackAssociationsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisableUserCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DisableUserCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisableUserResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisableUserCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisassociateFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DisassociateFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "ResourceInUseException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1EnableUserCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1EnableUserCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1EnableUserResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1EnableUserCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ExpireSessionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ExpireSessionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ExpireSessionResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ExpireSessionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListAssociatedFleetsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListAssociatedFleetsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListAssociatedFleetsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListAssociatedFleetsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListAssociatedStacksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListAssociatedStacksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListAssociatedStacksResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListAssociatedStacksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StartFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 4];
            case "InvalidRoleException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "RequestLimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#RequestLimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StartImageBuilderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartImageBuilderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartImageBuilderResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartImageBuilderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StopFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StopFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StopFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StopFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StopImageBuilderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StopImageBuilderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StopImageBuilderResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StopImageBuilderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1TagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1TagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UntagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateDirectoryConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateDirectoryConfigCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateDirectoryConfigResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateDirectoryConfigCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidRoleException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 4];
            case "OperationNotPermittedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 6];
            case "ResourceInUseException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateFleetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateFleetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateFleetResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateFleetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "InvalidRoleException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 12];
            case "OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "RequestLimitExceededException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appstream#RequestLimitExceededException":
              return [3 /*break*/, 16];
            case "ResourceInUseException":
              return [3 /*break*/, 18];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 18];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 20];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 20];
            case "ResourceNotFoundException":
              return [3 /*break*/, 22];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateImagePermissionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateImagePermissionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateImagePermissionsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateImagePermissionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 2];
            case "ResourceNotAvailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#ResourceNotAvailableException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateStackResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateStackCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appstream#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "IncompatibleImageException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appstream#IncompatibleImageException":
              return [3 /*break*/, 4];
            case "InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appstream#InvalidAccountStatusException":
              return [3 /*break*/, 6];
            case "InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appstream#InvalidParameterCombinationException":
              return [3 /*break*/, 8];
            case "InvalidRoleException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appstream#InvalidRoleException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appstream#LimitExceededException":
              return [3 /*break*/, 12];
            case "OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appstream#OperationNotPermittedException":
              return [3 /*break*/, 14];
            case "ResourceInUseException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appstream#ResourceInUseException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.appstream#ResourceNotFoundException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1ConcurrentModificationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
      contents = __assign(
        { name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1IncompatibleImageExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1IncompatibleImageException(body, context);
      contents = __assign(
        { name: "IncompatibleImageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidAccountStatusExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidAccountStatusException(body, context);
      contents = __assign(
        { name: "InvalidAccountStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
      contents = __assign(
        {
          name: "InvalidParameterCombinationException",
          $fault: "client",
          $metadata: deserializeMetadata(parsedOutput),
        },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidRoleExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
      contents = __assign(
        { name: "InvalidRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LimitExceededException(body, context);
      contents = __assign(
        { name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1OperationNotPermittedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
      contents = __assign(
        { name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1RequestLimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1RequestLimitExceededException(body, context);
      contents = __assign(
        { name: "RequestLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
      contents = __assign(
        { name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
      contents = __assign(
        { name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotAvailableExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotAvailableException(body, context);
      contents = __assign(
        { name: "ResourceNotAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
      contents = __assign(
        { name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1AccessEndpoint = function (input, context) {
  return __assign(
    __assign(
      {},
      input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }
    ),
    input.VpceId !== undefined && input.VpceId !== null && { VpceId: input.VpceId }
  );
};
var serializeAws_json1_1AccessEndpointList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1AccessEndpoint(entry, context);
    });
};
var serializeAws_json1_1ApplicationSettings = function (input, context) {
  return __assign(
    __assign({}, input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    input.SettingsGroup !== undefined && input.SettingsGroup !== null && { SettingsGroup: input.SettingsGroup }
  );
};
var serializeAws_json1_1ArnList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1AssociateFleetRequest = function (input, context) {
  return __assign(
    __assign({}, input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
  );
};
var serializeAws_json1_1AwsAccountIdList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1BatchAssociateUserStackRequest = function (input, context) {
  return __assign(
    {},
    input.UserStackAssociations !== undefined &&
      input.UserStackAssociations !== null && {
        UserStackAssociations: serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context),
      }
  );
};
var serializeAws_json1_1BatchDisassociateUserStackRequest = function (input, context) {
  return __assign(
    {},
    input.UserStackAssociations !== undefined &&
      input.UserStackAssociations !== null && {
        UserStackAssociations: serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context),
      }
  );
};
var serializeAws_json1_1ComputeCapacity = function (input, context) {
  return __assign(
    {},
    input.DesiredInstances !== undefined &&
      input.DesiredInstances !== null && { DesiredInstances: input.DesiredInstances }
  );
};
var serializeAws_json1_1CopyImageRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.DestinationImageDescription !== undefined &&
            input.DestinationImageDescription !== null && {
              DestinationImageDescription: input.DestinationImageDescription,
            }
        ),
        input.DestinationImageName !== undefined &&
          input.DestinationImageName !== null && { DestinationImageName: input.DestinationImageName }
      ),
      input.DestinationRegion !== undefined &&
        input.DestinationRegion !== null && { DestinationRegion: input.DestinationRegion }
    ),
    input.SourceImageName !== undefined && input.SourceImageName !== null && { SourceImageName: input.SourceImageName }
  );
};
var serializeAws_json1_1CreateDirectoryConfigRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }
      ),
      input.OrganizationalUnitDistinguishedNames !== undefined &&
        input.OrganizationalUnitDistinguishedNames !== null && {
          OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
            input.OrganizationalUnitDistinguishedNames,
            context
          ),
        }
    ),
    input.ServiceAccountCredentials !== undefined &&
      input.ServiceAccountCredentials !== null && {
        ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
          input.ServiceAccountCredentials,
          context
        ),
      }
  );
};
var serializeAws_json1_1CreateFleetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign(
                                __assign(
                                  __assign(
                                    {},
                                    input.ComputeCapacity !== undefined &&
                                      input.ComputeCapacity !== null && {
                                        ComputeCapacity: serializeAws_json1_1ComputeCapacity(
                                          input.ComputeCapacity,
                                          context
                                        ),
                                      }
                                  ),
                                  input.Description !== undefined &&
                                    input.Description !== null && { Description: input.Description }
                                ),
                                input.DisconnectTimeoutInSeconds !== undefined &&
                                  input.DisconnectTimeoutInSeconds !== null && {
                                    DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds,
                                  }
                              ),
                              input.DisplayName !== undefined &&
                                input.DisplayName !== null && { DisplayName: input.DisplayName }
                            ),
                            input.DomainJoinInfo !== undefined &&
                              input.DomainJoinInfo !== null && {
                                DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
                              }
                          ),
                          input.EnableDefaultInternetAccess !== undefined &&
                            input.EnableDefaultInternetAccess !== null && {
                              EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
                            }
                        ),
                        input.FleetType !== undefined && input.FleetType !== null && { FleetType: input.FleetType }
                      ),
                      input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }
                    ),
                    input.IdleDisconnectTimeoutInSeconds !== undefined &&
                      input.IdleDisconnectTimeoutInSeconds !== null && {
                        IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds,
                      }
                  ),
                  input.ImageArn !== undefined && input.ImageArn !== null && { ImageArn: input.ImageArn }
                ),
                input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }
              ),
              input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }
            ),
            input.MaxUserDurationInSeconds !== undefined &&
              input.MaxUserDurationInSeconds !== null && { MaxUserDurationInSeconds: input.MaxUserDurationInSeconds }
          ),
          input.Name !== undefined && input.Name !== null && { Name: input.Name }
        ),
        input.StreamView !== undefined && input.StreamView !== null && { StreamView: input.StreamView }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }
    ),
    input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }
  );
};
var serializeAws_json1_1CreateImageBuilderRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            {},
                            input.AccessEndpoints !== undefined &&
                              input.AccessEndpoints !== null && {
                                AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
                              }
                          ),
                          input.AppstreamAgentVersion !== undefined &&
                            input.AppstreamAgentVersion !== null && {
                              AppstreamAgentVersion: input.AppstreamAgentVersion,
                            }
                        ),
                        input.Description !== undefined &&
                          input.Description !== null && { Description: input.Description }
                      ),
                      input.DisplayName !== undefined &&
                        input.DisplayName !== null && { DisplayName: input.DisplayName }
                    ),
                    input.DomainJoinInfo !== undefined &&
                      input.DomainJoinInfo !== null && {
                        DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
                      }
                  ),
                  input.EnableDefaultInternetAccess !== undefined &&
                    input.EnableDefaultInternetAccess !== null && {
                      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
                    }
                ),
                input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }
              ),
              input.ImageArn !== undefined && input.ImageArn !== null && { ImageArn: input.ImageArn }
            ),
            input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }
          ),
          input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }
        ),
        input.Name !== undefined && input.Name !== null && { Name: input.Name }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }
    ),
    input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }
  );
};
var serializeAws_json1_1CreateImageBuilderStreamingURLRequest = function (input, context) {
  return __assign(
    __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    input.Validity !== undefined && input.Validity !== null && { Validity: input.Validity }
  );
};
var serializeAws_json1_1CreateStackRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.AccessEndpoints !== undefined &&
                          input.AccessEndpoints !== null && {
                            AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
                          }
                      ),
                      input.ApplicationSettings !== undefined &&
                        input.ApplicationSettings !== null && {
                          ApplicationSettings: serializeAws_json1_1ApplicationSettings(
                            input.ApplicationSettings,
                            context
                          ),
                        }
                    ),
                    input.Description !== undefined && input.Description !== null && { Description: input.Description }
                  ),
                  input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }
                ),
                input.EmbedHostDomains !== undefined &&
                  input.EmbedHostDomains !== null && {
                    EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context),
                  }
              ),
              input.FeedbackURL !== undefined && input.FeedbackURL !== null && { FeedbackURL: input.FeedbackURL }
            ),
            input.Name !== undefined && input.Name !== null && { Name: input.Name }
          ),
          input.RedirectURL !== undefined && input.RedirectURL !== null && { RedirectURL: input.RedirectURL }
        ),
        input.StorageConnectors !== undefined &&
          input.StorageConnectors !== null && {
            StorageConnectors: serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context),
          }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }
    ),
    input.UserSettings !== undefined &&
      input.UserSettings !== null && {
        UserSettings: serializeAws_json1_1UserSettingList(input.UserSettings, context),
      }
  );
};
var serializeAws_json1_1CreateStreamingURLRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.ApplicationId !== undefined &&
                input.ApplicationId !== null && { ApplicationId: input.ApplicationId }
            ),
            input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }
          ),
          input.SessionContext !== undefined &&
            input.SessionContext !== null && { SessionContext: input.SessionContext }
        ),
        input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
      ),
      input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }
    ),
    input.Validity !== undefined && input.Validity !== null && { Validity: input.Validity }
  );
};
var serializeAws_json1_1CreateUpdatedImageRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign({}, input.dryRun !== undefined && input.dryRun !== null && { dryRun: input.dryRun }),
            input.existingImageName !== undefined &&
              input.existingImageName !== null && { existingImageName: input.existingImageName }
          ),
          input.newImageDescription !== undefined &&
            input.newImageDescription !== null && { newImageDescription: input.newImageDescription }
        ),
        input.newImageDisplayName !== undefined &&
          input.newImageDisplayName !== null && { newImageDisplayName: input.newImageDisplayName }
      ),
      input.newImageName !== undefined && input.newImageName !== null && { newImageName: input.newImageName }
    ),
    input.newImageTags !== undefined &&
      input.newImageTags !== null && { newImageTags: serializeAws_json1_1Tags(input.newImageTags, context) }
  );
};
var serializeAws_json1_1CreateUsageReportSubscriptionRequest = function (input, context) {
  return {};
};
var serializeAws_json1_1CreateUserRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.AuthenticationType !== undefined &&
              input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
          ),
          input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }
        ),
        input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }
      ),
      input.MessageAction !== undefined && input.MessageAction !== null && { MessageAction: input.MessageAction }
    ),
    input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }
  );
};
var serializeAws_json1_1DeleteDirectoryConfigRequest = function (input, context) {
  return __assign(
    {},
    input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }
  );
};
var serializeAws_json1_1DeleteFleetRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1DeleteImageBuilderRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1DeleteImagePermissionsRequest = function (input, context) {
  return __assign(
    __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    input.SharedAccountId !== undefined && input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }
  );
};
var serializeAws_json1_1DeleteImageRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1DeleteStackRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1DeleteUsageReportSubscriptionRequest = function (input, context) {
  return {};
};
var serializeAws_json1_1DeleteUserRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AuthenticationType !== undefined &&
        input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
    ),
    input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }
  );
};
var serializeAws_json1_1DescribeDirectoryConfigsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.DirectoryNames !== undefined &&
          input.DirectoryNames !== null && {
            DirectoryNames: serializeAws_json1_1DirectoryNameList(input.DirectoryNames, context),
          }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeFleetsRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Names !== undefined &&
        input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeImageBuildersRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.Names !== undefined &&
        input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeImagePermissionsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        input.Name !== undefined && input.Name !== null && { Name: input.Name }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SharedAwsAccountIds !== undefined &&
      input.SharedAwsAccountIds !== null && {
        SharedAwsAccountIds: serializeAws_json1_1AwsAccountIdList(input.SharedAwsAccountIds, context),
      }
  );
};
var serializeAws_json1_1DescribeImagesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.Arns !== undefined &&
              input.Arns !== null && { Arns: serializeAws_json1_1ArnList(input.Arns, context) }
          ),
          input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
        ),
        input.Names !== undefined &&
          input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.Type !== undefined && input.Type !== null && { Type: input.Type }
  );
};
var serializeAws_json1_1DescribeSessionsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.AuthenticationType !== undefined &&
                input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
            ),
            input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }
          ),
          input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }
        ),
        input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
      ),
      input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
    ),
    input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }
  );
};
var serializeAws_json1_1DescribeStacksRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Names !== undefined &&
        input.Names !== null && { Names: serializeAws_json1_1StringList(input.Names, context) }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeUsageReportSubscriptionsRequest = function (input, context) {
  return __assign(
    __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeUsersRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AuthenticationType !== undefined &&
          input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeUserStackAssociationsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.AuthenticationType !== undefined &&
              input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
          ),
          input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
        ),
        input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
      ),
      input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
    ),
    input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }
  );
};
var serializeAws_json1_1DirectoryNameList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1DisableUserRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AuthenticationType !== undefined &&
        input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
    ),
    input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }
  );
};
var serializeAws_json1_1DisassociateFleetRequest = function (input, context) {
  return __assign(
    __assign({}, input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
  );
};
var serializeAws_json1_1DomainJoinInfo = function (input, context) {
  return __assign(
    __assign(
      {},
      input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }
    ),
    input.OrganizationalUnitDistinguishedName !== undefined &&
      input.OrganizationalUnitDistinguishedName !== null && {
        OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
      }
  );
};
var serializeAws_json1_1DomainList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1EmbedHostDomains = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1EnableUserRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AuthenticationType !== undefined &&
        input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
    ),
    input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }
  );
};
var serializeAws_json1_1ExpireSessionRequest = function (input, context) {
  return __assign({}, input.SessionId !== undefined && input.SessionId !== null && { SessionId: input.SessionId });
};
var serializeAws_json1_1FleetAttributes = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1ImagePermissions = function (input, context) {
  return __assign(
    __assign({}, input.allowFleet !== undefined && input.allowFleet !== null && { allowFleet: input.allowFleet }),
    input.allowImageBuilder !== undefined &&
      input.allowImageBuilder !== null && { allowImageBuilder: input.allowImageBuilder }
  );
};
var serializeAws_json1_1ListAssociatedFleetsRequest = function (input, context) {
  return __assign(
    __assign({}, input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
  );
};
var serializeAws_json1_1ListAssociatedStacksRequest = function (input, context) {
  return __assign(
    __assign({}, input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
  return __assign(
    {},
    input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
  );
};
var serializeAws_json1_1OrganizationalUnitDistinguishedNamesList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1SecurityGroupIdList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1ServiceAccountCredentials = function (input, context) {
  return __assign(
    __assign({}, input.AccountName !== undefined && input.AccountName !== null && { AccountName: input.AccountName }),
    input.AccountPassword !== undefined && input.AccountPassword !== null && { AccountPassword: input.AccountPassword }
  );
};
var serializeAws_json1_1StackAttributes = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1StartFleetRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1StartImageBuilderRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AppstreamAgentVersion !== undefined &&
        input.AppstreamAgentVersion !== null && { AppstreamAgentVersion: input.AppstreamAgentVersion }
    ),
    input.Name !== undefined && input.Name !== null && { Name: input.Name }
  );
};
var serializeAws_json1_1StopFleetRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1StopImageBuilderRequest = function (input, context) {
  return __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name });
};
var serializeAws_json1_1StorageConnector = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ConnectorType !== undefined && input.ConnectorType !== null && { ConnectorType: input.ConnectorType }
      ),
      input.Domains !== undefined &&
        input.Domains !== null && { Domains: serializeAws_json1_1DomainList(input.Domains, context) }
    ),
    input.ResourceIdentifier !== undefined &&
      input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier }
  );
};
var serializeAws_json1_1StorageConnectorList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1StorageConnector(entry, context);
    });
};
var serializeAws_json1_1StringList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1SubnetIdList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1TagKeyList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }
  );
};
var serializeAws_json1_1Tags = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }
  );
};
var serializeAws_json1_1UpdateDirectoryConfigRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.DirectoryName !== undefined && input.DirectoryName !== null && { DirectoryName: input.DirectoryName }
      ),
      input.OrganizationalUnitDistinguishedNames !== undefined &&
        input.OrganizationalUnitDistinguishedNames !== null && {
          OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
            input.OrganizationalUnitDistinguishedNames,
            context
          ),
        }
    ),
    input.ServiceAccountCredentials !== undefined &&
      input.ServiceAccountCredentials !== null && {
        ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
          input.ServiceAccountCredentials,
          context
        ),
      }
  );
};
var serializeAws_json1_1UpdateFleetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign(
                                __assign(
                                  __assign(
                                    {},
                                    input.AttributesToDelete !== undefined &&
                                      input.AttributesToDelete !== null && {
                                        AttributesToDelete: serializeAws_json1_1FleetAttributes(
                                          input.AttributesToDelete,
                                          context
                                        ),
                                      }
                                  ),
                                  input.ComputeCapacity !== undefined &&
                                    input.ComputeCapacity !== null && {
                                      ComputeCapacity: serializeAws_json1_1ComputeCapacity(
                                        input.ComputeCapacity,
                                        context
                                      ),
                                    }
                                ),
                                input.DeleteVpcConfig !== undefined &&
                                  input.DeleteVpcConfig !== null && { DeleteVpcConfig: input.DeleteVpcConfig }
                              ),
                              input.Description !== undefined &&
                                input.Description !== null && { Description: input.Description }
                            ),
                            input.DisconnectTimeoutInSeconds !== undefined &&
                              input.DisconnectTimeoutInSeconds !== null && {
                                DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds,
                              }
                          ),
                          input.DisplayName !== undefined &&
                            input.DisplayName !== null && { DisplayName: input.DisplayName }
                        ),
                        input.DomainJoinInfo !== undefined &&
                          input.DomainJoinInfo !== null && {
                            DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
                          }
                      ),
                      input.EnableDefaultInternetAccess !== undefined &&
                        input.EnableDefaultInternetAccess !== null && {
                          EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
                        }
                    ),
                    input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }
                  ),
                  input.IdleDisconnectTimeoutInSeconds !== undefined &&
                    input.IdleDisconnectTimeoutInSeconds !== null && {
                      IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds,
                    }
                ),
                input.ImageArn !== undefined && input.ImageArn !== null && { ImageArn: input.ImageArn }
              ),
              input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }
            ),
            input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }
          ),
          input.MaxUserDurationInSeconds !== undefined &&
            input.MaxUserDurationInSeconds !== null && { MaxUserDurationInSeconds: input.MaxUserDurationInSeconds }
        ),
        input.Name !== undefined && input.Name !== null && { Name: input.Name }
      ),
      input.StreamView !== undefined && input.StreamView !== null && { StreamView: input.StreamView }
    ),
    input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }
  );
};
var serializeAws_json1_1UpdateImagePermissionsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ImagePermissions !== undefined &&
          input.ImagePermissions !== null && {
            ImagePermissions: serializeAws_json1_1ImagePermissions(input.ImagePermissions, context),
          }
      ),
      input.Name !== undefined && input.Name !== null && { Name: input.Name }
    ),
    input.SharedAccountId !== undefined && input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }
  );
};
var serializeAws_json1_1UpdateStackRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          {},
                          input.AccessEndpoints !== undefined &&
                            input.AccessEndpoints !== null && {
                              AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
                            }
                        ),
                        input.ApplicationSettings !== undefined &&
                          input.ApplicationSettings !== null && {
                            ApplicationSettings: serializeAws_json1_1ApplicationSettings(
                              input.ApplicationSettings,
                              context
                            ),
                          }
                      ),
                      input.AttributesToDelete !== undefined &&
                        input.AttributesToDelete !== null && {
                          AttributesToDelete: serializeAws_json1_1StackAttributes(input.AttributesToDelete, context),
                        }
                    ),
                    input.DeleteStorageConnectors !== undefined &&
                      input.DeleteStorageConnectors !== null && {
                        DeleteStorageConnectors: input.DeleteStorageConnectors,
                      }
                  ),
                  input.Description !== undefined && input.Description !== null && { Description: input.Description }
                ),
                input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }
              ),
              input.EmbedHostDomains !== undefined &&
                input.EmbedHostDomains !== null && {
                  EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context),
                }
            ),
            input.FeedbackURL !== undefined && input.FeedbackURL !== null && { FeedbackURL: input.FeedbackURL }
          ),
          input.Name !== undefined && input.Name !== null && { Name: input.Name }
        ),
        input.RedirectURL !== undefined && input.RedirectURL !== null && { RedirectURL: input.RedirectURL }
      ),
      input.StorageConnectors !== undefined &&
        input.StorageConnectors !== null && {
          StorageConnectors: serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context),
        }
    ),
    input.UserSettings !== undefined &&
      input.UserSettings !== null && {
        UserSettings: serializeAws_json1_1UserSettingList(input.UserSettings, context),
      }
  );
};
var serializeAws_json1_1UserSetting = function (input, context) {
  return __assign(
    __assign({}, input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    input.Permission !== undefined && input.Permission !== null && { Permission: input.Permission }
  );
};
var serializeAws_json1_1UserSettingList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1UserSetting(entry, context);
    });
};
var serializeAws_json1_1UserStackAssociation = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AuthenticationType !== undefined &&
            input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }
        ),
        input.SendEmailNotification !== undefined &&
          input.SendEmailNotification !== null && { SendEmailNotification: input.SendEmailNotification }
      ),
      input.StackName !== undefined && input.StackName !== null && { StackName: input.StackName }
    ),
    input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }
  );
};
var serializeAws_json1_1UserStackAssociationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1UserStackAssociation(entry, context);
    });
};
var serializeAws_json1_1VpcConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
          SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
        }
    ),
    input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }
  );
};
var deserializeAws_json1_1AccessEndpoint = function (output, context) {
  return {
    EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
    VpceId: output.VpceId !== undefined && output.VpceId !== null ? output.VpceId : undefined,
  };
};
var deserializeAws_json1_1AccessEndpointList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AccessEndpoint(entry, context);
    });
};
var deserializeAws_json1_1Application = function (output, context) {
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
var deserializeAws_json1_1Applications = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Application(entry, context);
    });
};
var deserializeAws_json1_1ApplicationSettingsResponse = function (output, context) {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    SettingsGroup:
      output.SettingsGroup !== undefined && output.SettingsGroup !== null ? output.SettingsGroup : undefined,
  };
};
var deserializeAws_json1_1AssociateFleetResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1BatchAssociateUserStackResult = function (output, context) {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context)
        : undefined,
  };
};
var deserializeAws_json1_1BatchDisassociateUserStackResult = function (output, context) {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context)
        : undefined,
  };
};
var deserializeAws_json1_1ComputeCapacityStatus = function (output, context) {
  return {
    Available: output.Available !== undefined && output.Available !== null ? output.Available : undefined,
    Desired: output.Desired !== undefined && output.Desired !== null ? output.Desired : undefined,
    InUse: output.InUse !== undefined && output.InUse !== null ? output.InUse : undefined,
    Running: output.Running !== undefined && output.Running !== null ? output.Running : undefined,
  };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1CopyImageResponse = function (output, context) {
  return {
    DestinationImageName:
      output.DestinationImageName !== undefined && output.DestinationImageName !== null
        ? output.DestinationImageName
        : undefined,
  };
};
var deserializeAws_json1_1CreateDirectoryConfigResult = function (output, context) {
  return {
    DirectoryConfig:
      output.DirectoryConfig !== undefined && output.DirectoryConfig !== null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined,
  };
};
var deserializeAws_json1_1CreateFleetResult = function (output, context) {
  return {
    Fleet:
      output.Fleet !== undefined && output.Fleet !== null
        ? deserializeAws_json1_1Fleet(output.Fleet, context)
        : undefined,
  };
};
var deserializeAws_json1_1CreateImageBuilderResult = function (output, context) {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
var deserializeAws_json1_1CreateImageBuilderStreamingURLResult = function (output, context) {
  return {
    Expires:
      output.Expires !== undefined && output.Expires !== null ? new Date(Math.round(output.Expires * 1000)) : undefined,
    StreamingURL: output.StreamingURL !== undefined && output.StreamingURL !== null ? output.StreamingURL : undefined,
  };
};
var deserializeAws_json1_1CreateStackResult = function (output, context) {
  return {
    Stack:
      output.Stack !== undefined && output.Stack !== null
        ? deserializeAws_json1_1Stack(output.Stack, context)
        : undefined,
  };
};
var deserializeAws_json1_1CreateStreamingURLResult = function (output, context) {
  return {
    Expires:
      output.Expires !== undefined && output.Expires !== null ? new Date(Math.round(output.Expires * 1000)) : undefined,
    StreamingURL: output.StreamingURL !== undefined && output.StreamingURL !== null ? output.StreamingURL : undefined,
  };
};
var deserializeAws_json1_1CreateUpdatedImageResult = function (output, context) {
  return {
    canUpdateImage:
      output.canUpdateImage !== undefined && output.canUpdateImage !== null ? output.canUpdateImage : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? deserializeAws_json1_1Image(output.image, context)
        : undefined,
  };
};
var deserializeAws_json1_1CreateUsageReportSubscriptionResult = function (output, context) {
  return {
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
  };
};
var deserializeAws_json1_1CreateUserResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteDirectoryConfigResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteFleetResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteImageBuilderResult = function (output, context) {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
var deserializeAws_json1_1DeleteImagePermissionsResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteImageResult = function (output, context) {
  return {
    Image:
      output.Image !== undefined && output.Image !== null
        ? deserializeAws_json1_1Image(output.Image, context)
        : undefined,
  };
};
var deserializeAws_json1_1DeleteStackResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteUsageReportSubscriptionResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteUserResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DescribeDirectoryConfigsResult = function (output, context) {
  return {
    DirectoryConfigs:
      output.DirectoryConfigs !== undefined && output.DirectoryConfigs !== null
        ? deserializeAws_json1_1DirectoryConfigList(output.DirectoryConfigs, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeFleetsResult = function (output, context) {
  return {
    Fleets:
      output.Fleets !== undefined && output.Fleets !== null
        ? deserializeAws_json1_1FleetList(output.Fleets, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeImageBuildersResult = function (output, context) {
  return {
    ImageBuilders:
      output.ImageBuilders !== undefined && output.ImageBuilders !== null
        ? deserializeAws_json1_1ImageBuilderList(output.ImageBuilders, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeImagePermissionsResult = function (output, context) {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SharedImagePermissionsList:
      output.SharedImagePermissionsList !== undefined && output.SharedImagePermissionsList !== null
        ? deserializeAws_json1_1SharedImagePermissionsList(output.SharedImagePermissionsList, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeImagesResult = function (output, context) {
  return {
    Images:
      output.Images !== undefined && output.Images !== null
        ? deserializeAws_json1_1ImageList(output.Images, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeSessionsResult = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Sessions:
      output.Sessions !== undefined && output.Sessions !== null
        ? deserializeAws_json1_1SessionList(output.Sessions, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeStacksResult = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Stacks:
      output.Stacks !== undefined && output.Stacks !== null
        ? deserializeAws_json1_1StackList(output.Stacks, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeUsageReportSubscriptionsResult = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    UsageReportSubscriptions:
      output.UsageReportSubscriptions !== undefined && output.UsageReportSubscriptions !== null
        ? deserializeAws_json1_1UsageReportSubscriptionList(output.UsageReportSubscriptions, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeUsersResult = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserList(output.Users, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeUserStackAssociationsResult = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    UserStackAssociations:
      output.UserStackAssociations !== undefined && output.UserStackAssociations !== null
        ? deserializeAws_json1_1UserStackAssociationList(output.UserStackAssociations, context)
        : undefined,
  };
};
var deserializeAws_json1_1DirectoryConfig = function (output, context) {
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
var deserializeAws_json1_1DirectoryConfigList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DirectoryConfig(entry, context);
    });
};
var deserializeAws_json1_1DisableUserResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DisassociateFleetResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DomainJoinInfo = function (output, context) {
  return {
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null ? output.DirectoryName : undefined,
    OrganizationalUnitDistinguishedName:
      output.OrganizationalUnitDistinguishedName !== undefined && output.OrganizationalUnitDistinguishedName !== null
        ? output.OrganizationalUnitDistinguishedName
        : undefined,
  };
};
var deserializeAws_json1_1DomainList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1EmbedHostDomains = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1EnableUserResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1ExpireSessionResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1Fleet = function (output, context) {
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
var deserializeAws_json1_1FleetError = function (output, context) {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  };
};
var deserializeAws_json1_1FleetErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1FleetError(entry, context);
    });
};
var deserializeAws_json1_1FleetList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Fleet(entry, context);
    });
};
var deserializeAws_json1_1Image = function (output, context) {
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
var deserializeAws_json1_1ImageBuilder = function (output, context) {
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
var deserializeAws_json1_1ImageBuilderList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ImageBuilder(entry, context);
    });
};
var deserializeAws_json1_1ImageBuilderStateChangeReason = function (output, context) {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ImageList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Image(entry, context);
    });
};
var deserializeAws_json1_1ImagePermissions = function (output, context) {
  return {
    allowFleet: output.allowFleet !== undefined && output.allowFleet !== null ? output.allowFleet : undefined,
    allowImageBuilder:
      output.allowImageBuilder !== undefined && output.allowImageBuilder !== null
        ? output.allowImageBuilder
        : undefined,
  };
};
var deserializeAws_json1_1ImageStateChangeReason = function (output, context) {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1IncompatibleImageException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidAccountStatusException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidParameterCombinationException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidRoleException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1LastReportGenerationExecutionError = function (output, context) {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  };
};
var deserializeAws_json1_1LastReportGenerationExecutionErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1LastReportGenerationExecutionError(entry, context);
    });
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ListAssociatedFleetsResult = function (output, context) {
  return {
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_json1_1StringList(output.Names, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListAssociatedStacksResult = function (output, context) {
  return {
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_json1_1StringList(output.Names, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  };
};
var deserializeAws_json1_1Metadata = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_json1_1NetworkAccessConfiguration = function (output, context) {
  return {
    EniId: output.EniId !== undefined && output.EniId !== null ? output.EniId : undefined,
    EniPrivateIpAddress:
      output.EniPrivateIpAddress !== undefined && output.EniPrivateIpAddress !== null
        ? output.EniPrivateIpAddress
        : undefined,
  };
};
var deserializeAws_json1_1OperationNotPermittedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1RequestLimitExceededException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ResourceAlreadyExistsException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ResourceError = function (output, context) {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    ErrorTimestamp:
      output.ErrorTimestamp !== undefined && output.ErrorTimestamp !== null
        ? new Date(Math.round(output.ErrorTimestamp * 1000))
        : undefined,
  };
};
var deserializeAws_json1_1ResourceErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ResourceError(entry, context);
    });
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ResourceNotAvailableException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1SecurityGroupIdList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1ServiceAccountCredentials = function (output, context) {
  return {
    AccountName: output.AccountName !== undefined && output.AccountName !== null ? output.AccountName : undefined,
    AccountPassword:
      output.AccountPassword !== undefined && output.AccountPassword !== null ? output.AccountPassword : undefined,
  };
};
var deserializeAws_json1_1Session = function (output, context) {
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
var deserializeAws_json1_1SessionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Session(entry, context);
    });
};
var deserializeAws_json1_1SharedImagePermissions = function (output, context) {
  return {
    imagePermissions:
      output.imagePermissions !== undefined && output.imagePermissions !== null
        ? deserializeAws_json1_1ImagePermissions(output.imagePermissions, context)
        : undefined,
    sharedAccountId:
      output.sharedAccountId !== undefined && output.sharedAccountId !== null ? output.sharedAccountId : undefined,
  };
};
var deserializeAws_json1_1SharedImagePermissionsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SharedImagePermissions(entry, context);
    });
};
var deserializeAws_json1_1Stack = function (output, context) {
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
var deserializeAws_json1_1StackError = function (output, context) {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  };
};
var deserializeAws_json1_1StackErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1StackError(entry, context);
    });
};
var deserializeAws_json1_1StackList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Stack(entry, context);
    });
};
var deserializeAws_json1_1StartFleetResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1StartImageBuilderResult = function (output, context) {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
var deserializeAws_json1_1StopFleetResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1StopImageBuilderResult = function (output, context) {
  return {
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined,
  };
};
var deserializeAws_json1_1StorageConnector = function (output, context) {
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
var deserializeAws_json1_1StorageConnectorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1StorageConnector(entry, context);
    });
};
var deserializeAws_json1_1StringList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1SubnetIdList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1Tags = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateDirectoryConfigResult = function (output, context) {
  return {
    DirectoryConfig:
      output.DirectoryConfig !== undefined && output.DirectoryConfig !== null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined,
  };
};
var deserializeAws_json1_1UpdateFleetResult = function (output, context) {
  return {
    Fleet:
      output.Fleet !== undefined && output.Fleet !== null
        ? deserializeAws_json1_1Fleet(output.Fleet, context)
        : undefined,
  };
};
var deserializeAws_json1_1UpdateImagePermissionsResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateStackResult = function (output, context) {
  return {
    Stack:
      output.Stack !== undefined && output.Stack !== null
        ? deserializeAws_json1_1Stack(output.Stack, context)
        : undefined,
  };
};
var deserializeAws_json1_1UsageReportSubscription = function (output, context) {
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
var deserializeAws_json1_1UsageReportSubscriptionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UsageReportSubscription(entry, context);
    });
};
var deserializeAws_json1_1User = function (output, context) {
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
var deserializeAws_json1_1UserList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1User(entry, context);
    });
};
var deserializeAws_json1_1UserSetting = function (output, context) {
  return {
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    Permission: output.Permission !== undefined && output.Permission !== null ? output.Permission : undefined,
  };
};
var deserializeAws_json1_1UserSettingList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserSetting(entry, context);
    });
};
var deserializeAws_json1_1UserStackAssociation = function (output, context) {
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
var deserializeAws_json1_1UserStackAssociationError = function (output, context) {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    UserStackAssociation:
      output.UserStackAssociation !== undefined && output.UserStackAssociation !== null
        ? deserializeAws_json1_1UserStackAssociation(output.UserStackAssociation, context)
        : undefined,
  };
};
var deserializeAws_json1_1UserStackAssociationErrorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserStackAssociationError(entry, context);
    });
};
var deserializeAws_json1_1UserStackAssociationList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserStackAssociation(entry, context);
    });
};
var deserializeAws_json1_1VpcConfig = function (output, context) {
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
var deserializeMetadata = function (output) {
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
var collectBody = function (streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          contents = {
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            path: path,
            headers: headers,
          };
          if (resolvedHostname !== undefined) {
            contents.hostname = resolvedHostname;
          }
          if (body !== undefined) {
            contents.body = body;
          }
          return [2 /*return*/, new __HttpRequest(contents)];
      }
    });
  });
};
var parseBody = function (streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
  var findKey = function (object, key) {
    return Object.keys(object).find(function (k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };
  var sanitizeErrorCode = function (rawValue) {
    var cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var headerKey = findKey(output.headers, "x-amzn-errortype");
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
