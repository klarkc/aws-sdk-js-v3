import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import {
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_queryCancelUpdateStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCancelUpdateStackInput(input, context)), {
          Action: "CancelUpdateStack",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryContinueUpdateRollbackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryContinueUpdateRollbackInput(input, context)), {
          Action: "ContinueUpdateRollback",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateChangeSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateChangeSetInput(input, context)), {
          Action: "CreateChangeSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateStackInput(input, context)), {
          Action: "CreateStack",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateStackInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateStackInstancesInput(input, context)), {
          Action: "CreateStackInstances",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateStackSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateStackSetInput(input, context)), {
          Action: "CreateStackSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteChangeSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteChangeSetInput(input, context)), {
          Action: "DeleteChangeSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteStackInput(input, context)), {
          Action: "DeleteStack",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteStackInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteStackInstancesInput(input, context)), {
          Action: "DeleteStackInstances",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteStackSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteStackSetInput(input, context)), {
          Action: "DeleteStackSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeregisterTypeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeregisterTypeInput(input, context)), {
          Action: "DeregisterType",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeAccountLimitsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeAccountLimitsInput(input, context)), {
          Action: "DescribeAccountLimits",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeChangeSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeChangeSetInput(input, context)), {
          Action: "DescribeChangeSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackDriftDetectionStatusCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackDriftDetectionStatusInput(input, context)), {
          Action: "DescribeStackDriftDetectionStatus",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackEventsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackEventsInput(input, context)), {
          Action: "DescribeStackEvents",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackInstanceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackInstanceInput(input, context)), {
          Action: "DescribeStackInstance",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackResourceInput(input, context)), {
          Action: "DescribeStackResource",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackResourceDriftsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackResourceDriftsInput(input, context)), {
          Action: "DescribeStackResourceDrifts",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackResourcesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackResourcesInput(input, context)), {
          Action: "DescribeStackResources",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStacksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStacksInput(input, context)), {
          Action: "DescribeStacks",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackSetInput(input, context)), {
          Action: "DescribeStackSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeStackSetOperationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeStackSetOperationInput(input, context)), {
          Action: "DescribeStackSetOperation",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeTypeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeTypeInput(input, context)), {
          Action: "DescribeType",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeTypeRegistrationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeTypeRegistrationInput(input, context)), {
          Action: "DescribeTypeRegistration",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDetectStackDriftCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDetectStackDriftInput(input, context)), {
          Action: "DetectStackDrift",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDetectStackResourceDriftCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDetectStackResourceDriftInput(input, context)), {
          Action: "DetectStackResourceDrift",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDetectStackSetDriftCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDetectStackSetDriftInput(input, context)), {
          Action: "DetectStackSetDrift",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryEstimateTemplateCostCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryEstimateTemplateCostInput(input, context)), {
          Action: "EstimateTemplateCost",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryExecuteChangeSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryExecuteChangeSetInput(input, context)), {
          Action: "ExecuteChangeSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryGetStackPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryGetStackPolicyInput(input, context)), {
          Action: "GetStackPolicy",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryGetTemplateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryGetTemplateInput(input, context)), {
          Action: "GetTemplate",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryGetTemplateSummaryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryGetTemplateSummaryInput(input, context)), {
          Action: "GetTemplateSummary",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListChangeSetsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListChangeSetsInput(input, context)), {
          Action: "ListChangeSets",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListExportsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListExportsInput(input, context)), {
          Action: "ListExports",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListImportsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListImportsInput(input, context)), {
          Action: "ListImports",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListStackInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListStackInstancesInput(input, context)), {
          Action: "ListStackInstances",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListStackResourcesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListStackResourcesInput(input, context)), {
          Action: "ListStackResources",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListStacksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListStacksInput(input, context)), {
          Action: "ListStacks",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListStackSetOperationResultsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListStackSetOperationResultsInput(input, context)), {
          Action: "ListStackSetOperationResults",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListStackSetOperationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListStackSetOperationsInput(input, context)), {
          Action: "ListStackSetOperations",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListStackSetsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListStackSetsInput(input, context)), {
          Action: "ListStackSets",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListTypeRegistrationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListTypeRegistrationsInput(input, context)), {
          Action: "ListTypeRegistrations",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListTypesInput(input, context)), {
          Action: "ListTypes",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryListTypeVersionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryListTypeVersionsInput(input, context)), {
          Action: "ListTypeVersions",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryRecordHandlerProgressCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryRecordHandlerProgressInput(input, context)), {
          Action: "RecordHandlerProgress",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryRegisterTypeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryRegisterTypeInput(input, context)), {
          Action: "RegisterType",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySetStackPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_querySetStackPolicyInput(input, context)), {
          Action: "SetStackPolicy",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySetTypeDefaultVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_querySetTypeDefaultVersionInput(input, context)), {
          Action: "SetTypeDefaultVersion",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySignalResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_querySignalResourceInput(input, context)), {
          Action: "SignalResource",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryStopStackSetOperationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryStopStackSetOperationInput(input, context)), {
          Action: "StopStackSetOperation",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryUpdateStackCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryUpdateStackInput(input, context)), {
          Action: "UpdateStack",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryUpdateStackInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryUpdateStackInstancesInput(input, context)), {
          Action: "UpdateStackInstances",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryUpdateStackSetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryUpdateStackSetInput(input, context)), {
          Action: "UpdateStackSet",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryUpdateTerminationProtectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryUpdateTerminationProtectionInput(input, context)), {
          Action: "UpdateTerminationProtection",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryValidateTemplateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryValidateTemplateInput(input, context)), {
          Action: "ValidateTemplate",
          Version: "2010-05-15",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_queryCancelUpdateStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCancelUpdateStackCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCancelUpdateStackCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "TokenAlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryContinueUpdateRollbackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryContinueUpdateRollbackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryContinueUpdateRollbackOutput(data.ContinueUpdateRollbackResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryContinueUpdateRollbackCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "TokenAlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryCreateChangeSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateChangeSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryCreateChangeSetOutput(data.CreateChangeSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateChangeSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "InsufficientCapabilitiesException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#LimitExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryCreateStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryCreateStackOutput(data.CreateStackResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateStackCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "InsufficientCapabilitiesException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#LimitExceededException":
              return [3 /*break*/, 6];
            case "TokenAlreadyExistsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryCreateStackInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateStackInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryCreateStackInstancesOutput(data.CreateStackInstancesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateStackInstancesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidOperationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidOperationException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#LimitExceededException":
              return [3 /*break*/, 4];
            case "OperationIdAlreadyExistsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
              return [3 /*break*/, 6];
            case "OperationInProgressException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudformation#OperationInProgressException":
              return [3 /*break*/, 8];
            case "StackSetNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 10];
            case "StaleRequestException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudformation#StaleRequestException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryCreateStackSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateStackSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryCreateStackSetOutput(data.CreateStackSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateStackSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CreatedButModifiedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CreatedButModifiedException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#LimitExceededException":
              return [3 /*break*/, 4];
            case "NameAlreadyExistsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#NameAlreadyExistsException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCreatedButModifiedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryNameAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDeleteChangeSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteChangeSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDeleteChangeSetOutput(data.DeleteChangeSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteChangeSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidChangeSetStatusException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDeleteStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteStackCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteStackCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "TokenAlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDeleteStackInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteStackInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDeleteStackInstancesOutput(data.DeleteStackInstancesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteStackInstancesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidOperationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidOperationException":
              return [3 /*break*/, 2];
            case "OperationIdAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
              return [3 /*break*/, 4];
            case "OperationInProgressException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#OperationInProgressException":
              return [3 /*break*/, 6];
            case "StackSetNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 8];
            case "StaleRequestException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudformation#StaleRequestException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDeleteStackSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteStackSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDeleteStackSetOutput(data.DeleteStackSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteStackSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "OperationInProgressException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#OperationInProgressException":
              return [3 /*break*/, 2];
            case "StackSetNotEmptyException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#StackSetNotEmptyException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotEmptyExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDeregisterTypeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeregisterTypeCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDeregisterTypeOutput(data.DeregisterTypeResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeregisterTypeCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
            case "TypeNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#TypeNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeAccountLimitsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeAccountLimitsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeAccountLimitsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeChangeSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeChangeSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeChangeSetOutput(data.DescribeChangeSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeChangeSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ChangeSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackDriftDetectionStatusCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackDriftDetectionStatusOutput(
            data.DescribeStackDriftDetectionStatusResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackDriftDetectionStatusCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackEventsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackEventsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackEventsOutput(data.DescribeStackEventsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackEventsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackInstanceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackInstanceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackInstanceOutput(data.DescribeStackInstanceResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackInstanceCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "StackInstanceNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
              return [3 /*break*/, 2];
            case "StackSetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackResourceOutput(data.DescribeStackResourceResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackResourceCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackResourceDriftsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackResourceDriftsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackResourceDriftsOutput(
            data.DescribeStackResourceDriftsResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackResourceDriftsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackResourcesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackResourcesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackResourcesOutput(data.DescribeStackResourcesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackResourcesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStacksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStacksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStacksOutput(data.DescribeStacksResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStacksCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackSetOutput(data.DescribeStackSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "StackSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeStackSetOperationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeStackSetOperationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeStackSetOperationOutput(data.DescribeStackSetOperationResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeStackSetOperationCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "OperationNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#OperationNotFoundException":
              return [3 /*break*/, 2];
            case "StackSetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeTypeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeTypeCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeTypeOutput(data.DescribeTypeResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeTypeCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
            case "TypeNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#TypeNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDescribeTypeRegistrationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeTypeRegistrationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeTypeRegistrationOutput(data.DescribeTypeRegistrationResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeTypeRegistrationCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDetectStackDriftCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDetectStackDriftCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDetectStackDriftOutput(data.DetectStackDriftResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDetectStackDriftCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDetectStackResourceDriftCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDetectStackResourceDriftCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDetectStackResourceDriftOutput(data.DetectStackResourceDriftResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDetectStackResourceDriftCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryDetectStackSetDriftCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDetectStackSetDriftCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDetectStackSetDriftOutput(data.DetectStackSetDriftResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDetectStackSetDriftCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidOperationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidOperationException":
              return [3 /*break*/, 2];
            case "OperationInProgressException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#OperationInProgressException":
              return [3 /*break*/, 4];
            case "StackSetNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryEstimateTemplateCostCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryEstimateTemplateCostCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryEstimateTemplateCostOutput(data.EstimateTemplateCostResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryEstimateTemplateCostCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryExecuteChangeSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryExecuteChangeSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryExecuteChangeSetOutput(data.ExecuteChangeSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryExecuteChangeSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ChangeSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
              return [3 /*break*/, 2];
            case "InsufficientCapabilitiesException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
              return [3 /*break*/, 4];
            case "InvalidChangeSetStatusException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
              return [3 /*break*/, 6];
            case "TokenAlreadyExistsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryGetStackPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryGetStackPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryGetStackPolicyOutput(data.GetStackPolicyResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryGetStackPolicyCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryGetTemplateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryGetTemplateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryGetTemplateOutput(data.GetTemplateResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryGetTemplateCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ChangeSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryGetTemplateSummaryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryGetTemplateSummaryCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryGetTemplateSummaryOutput(data.GetTemplateSummaryResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryGetTemplateSummaryCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "StackSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListChangeSetsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListChangeSetsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListChangeSetsOutput(data.ListChangeSetsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListChangeSetsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListExportsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListExportsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListExportsOutput(data.ListExportsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListExportsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListImportsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListImportsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListImportsOutput(data.ListImportsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListImportsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListStackInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListStackInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListStackInstancesOutput(data.ListStackInstancesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListStackInstancesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "StackSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListStackResourcesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListStackResourcesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListStackResourcesOutput(data.ListStackResourcesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListStackResourcesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListStacksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListStacksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListStacksOutput(data.ListStacksResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListStacksCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListStackSetOperationResultsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListStackSetOperationResultsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListStackSetOperationResultsOutput(
            data.ListStackSetOperationResultsResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListStackSetOperationResultsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "OperationNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#OperationNotFoundException":
              return [3 /*break*/, 2];
            case "StackSetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListStackSetOperationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListStackSetOperationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListStackSetOperationsOutput(data.ListStackSetOperationsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListStackSetOperationsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "StackSetNotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListStackSetsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListStackSetsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListStackSetsOutput(data.ListStackSetsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListStackSetsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListTypeRegistrationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListTypeRegistrationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListTypeRegistrationsOutput(data.ListTypeRegistrationsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListTypeRegistrationsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListTypesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListTypesOutput(data.ListTypesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListTypesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryListTypeVersionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryListTypeVersionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryListTypeVersionsOutput(data.ListTypeVersionsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryListTypeVersionsCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryRecordHandlerProgressCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryRecordHandlerProgressCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryRecordHandlerProgressOutput(data.RecordHandlerProgressResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryRecordHandlerProgressCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidStateTransitionException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidStateTransitionException":
              return [3 /*break*/, 2];
            case "OperationStatusCheckFailedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#OperationStatusCheckFailedException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidStateTransitionExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationStatusCheckFailedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryRegisterTypeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryRegisterTypeCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryRegisterTypeOutput(data.RegisterTypeResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryRegisterTypeCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_querySetStackPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySetStackPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySetStackPolicyCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_querySetTypeDefaultVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySetTypeDefaultVersionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_querySetTypeDefaultVersionOutput(data.SetTypeDefaultVersionResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySetTypeDefaultVersionCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CFNRegistryException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#CFNRegistryException":
              return [3 /*break*/, 2];
            case "TypeNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#TypeNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_querySignalResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySignalResourceCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySignalResourceCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryStopStackSetOperationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryStopStackSetOperationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryStopStackSetOperationOutput(data.StopStackSetOperationResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryStopStackSetOperationCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidOperationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidOperationException":
              return [3 /*break*/, 2];
            case "OperationNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#OperationNotFoundException":
              return [3 /*break*/, 4];
            case "StackSetNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryUpdateStackCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryUpdateStackCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryUpdateStackOutput(data.UpdateStackResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryUpdateStackCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InsufficientCapabilitiesException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
              return [3 /*break*/, 2];
            case "TokenAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryUpdateStackInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryUpdateStackInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryUpdateStackInstancesOutput(data.UpdateStackInstancesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryUpdateStackInstancesCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidOperationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidOperationException":
              return [3 /*break*/, 2];
            case "OperationIdAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
              return [3 /*break*/, 4];
            case "OperationInProgressException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#OperationInProgressException":
              return [3 /*break*/, 6];
            case "StackInstanceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
              return [3 /*break*/, 8];
            case "StackSetNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 10];
            case "StaleRequestException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudformation#StaleRequestException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryUpdateStackSetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryUpdateStackSetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryUpdateStackSetOutput(data.UpdateStackSetResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryUpdateStackSetCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidOperationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudformation#InvalidOperationException":
              return [3 /*break*/, 2];
            case "OperationIdAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
              return [3 /*break*/, 4];
            case "OperationInProgressException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudformation#OperationInProgressException":
              return [3 /*break*/, 6];
            case "StackInstanceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
              return [3 /*break*/, 8];
            case "StackSetNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudformation#StackSetNotFoundException":
              return [3 /*break*/, 10];
            case "StaleRequestException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudformation#StaleRequestException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryUpdateTerminationProtectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryUpdateTerminationProtectionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryUpdateTerminationProtectionOutput(
            data.UpdateTerminationProtectionResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryUpdateTerminationProtectionCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_queryValidateTemplateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryValidateTemplateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryValidateTemplateOutput(data.ValidateTemplateResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryValidateTemplateCommandError = function (output, context) {
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
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
              response = __assign(__assign({}, parsedBody.Error), {
                name: "" + errorCode,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
var deserializeAws_queryAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryAlreadyExistsException(body.Error, context);
      contents = __assign(
        { name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryCFNRegistryExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryCFNRegistryException(body.Error, context);
      contents = __assign(
        { name: "CFNRegistryException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryChangeSetNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryChangeSetNotFoundException(body.Error, context);
      contents = __assign(
        { name: "ChangeSetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryCreatedButModifiedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryCreatedButModifiedException(body.Error, context);
      contents = __assign(
        { name: "CreatedButModifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryInsufficientCapabilitiesExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryInsufficientCapabilitiesException(body.Error, context);
      contents = __assign(
        { name: "InsufficientCapabilitiesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryInvalidChangeSetStatusExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryInvalidChangeSetStatusException(body.Error, context);
      contents = __assign(
        { name: "InvalidChangeSetStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryInvalidOperationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryInvalidOperationException(body.Error, context);
      contents = __assign(
        { name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryInvalidStateTransitionExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryInvalidStateTransitionException(body.Error, context);
      contents = __assign(
        { name: "InvalidStateTransitionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryLimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
      contents = __assign(
        { name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryNameAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryNameAlreadyExistsException(body.Error, context);
      contents = __assign(
        { name: "NameAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryOperationIdAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryOperationIdAlreadyExistsException(body.Error, context);
      contents = __assign(
        { name: "OperationIdAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryOperationInProgressExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryOperationInProgressException(body.Error, context);
      contents = __assign(
        { name: "OperationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryOperationNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryOperationNotFoundException(body.Error, context);
      contents = __assign(
        { name: "OperationNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryOperationStatusCheckFailedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryOperationStatusCheckFailedException(body.Error, context);
      contents = __assign(
        { name: "OperationStatusCheckFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryStackInstanceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryStackInstanceNotFoundException(body.Error, context);
      contents = __assign(
        { name: "StackInstanceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryStackSetNotEmptyExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryStackSetNotEmptyException(body.Error, context);
      contents = __assign(
        { name: "StackSetNotEmptyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryStackSetNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryStackSetNotFoundException(body.Error, context);
      contents = __assign(
        { name: "StackSetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryStaleRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryStaleRequestException(body.Error, context);
      contents = __assign(
        { name: "StaleRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryTokenAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryTokenAlreadyExistsException(body.Error, context);
      contents = __assign(
        { name: "TokenAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryTypeNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryTypeNotFoundException(body.Error, context);
      contents = __assign(
        { name: "TypeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_queryAccountList = function (input, context) {
  var e_1, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
      var entry = input_1_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return entries;
};
var serializeAws_queryAutoDeployment = function (input, context) {
  var entries = {};
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.RetainStacksOnAccountRemoval !== undefined && input.RetainStacksOnAccountRemoval !== null) {
    entries["RetainStacksOnAccountRemoval"] = input.RetainStacksOnAccountRemoval;
  }
  return entries;
};
var serializeAws_queryCancelUpdateStackInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryCapabilities = function (input, context) {
  var e_2, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
      var entry = input_2_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  return entries;
};
var serializeAws_queryContinueUpdateRollbackInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ResourcesToSkip !== undefined && input.ResourcesToSkip !== null) {
    var memberEntries = serializeAws_queryResourcesToSkip(input.ResourcesToSkip, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ResourcesToSkip." + key;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryCreateChangeSetInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    var memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Parameters." + key;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    var memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Capabilities." + key;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    var memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ResourceTypes." + key;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    var memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "RollbackConfiguration." + key;
      entries[loc] = value;
    });
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    var memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "NotificationARNs." + key;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ClientToken !== undefined && input.ClientToken !== null) {
    entries["ClientToken"] = input.ClientToken;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.ChangeSetType !== undefined && input.ChangeSetType !== null) {
    entries["ChangeSetType"] = input.ChangeSetType;
  }
  if (input.ResourcesToImport !== undefined && input.ResourcesToImport !== null) {
    var memberEntries = serializeAws_queryResourcesToImport(input.ResourcesToImport, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ResourcesToImport." + key;
      entries[loc] = value;
    });
  }
  if (input.IncludeNestedStacks !== undefined && input.IncludeNestedStacks !== null) {
    entries["IncludeNestedStacks"] = input.IncludeNestedStacks;
  }
  return entries;
};
var serializeAws_queryCreateStackInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    var memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Parameters." + key;
      entries[loc] = value;
    });
  }
  if (input.DisableRollback !== undefined && input.DisableRollback !== null) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    var memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "RollbackConfiguration." + key;
      entries[loc] = value;
    });
  }
  if (input.TimeoutInMinutes !== undefined && input.TimeoutInMinutes !== null) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    var memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "NotificationARNs." + key;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    var memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Capabilities." + key;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    var memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ResourceTypes." + key;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.OnFailure !== undefined && input.OnFailure !== null) {
    entries["OnFailure"] = input.OnFailure;
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.EnableTerminationProtection !== undefined && input.EnableTerminationProtection !== null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  return entries;
};
var serializeAws_queryCreateStackInstancesInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    var memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Accounts." + key;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    var memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "DeploymentTargets." + key;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    var memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Regions." + key;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides !== undefined && input.ParameterOverrides !== null) {
    var memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ParameterOverrides." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    var memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "OperationPreferences." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryCreateStackSetInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    var memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Parameters." + key;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    var memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Capabilities." + key;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN !== undefined && input.AdministrationRoleARN !== null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName !== undefined && input.ExecutionRoleName !== null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.PermissionModel !== undefined && input.PermissionModel !== null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment !== undefined && input.AutoDeployment !== null) {
    var memberEntries = serializeAws_queryAutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "AutoDeployment." + key;
      entries[loc] = value;
    });
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryDeleteChangeSetInput = function (input, context) {
  var entries = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};
var serializeAws_queryDeleteStackInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RetainResources !== undefined && input.RetainResources !== null) {
    var memberEntries = serializeAws_queryRetainResources(input.RetainResources, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "RetainResources." + key;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryDeleteStackInstancesInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    var memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Accounts." + key;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    var memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "DeploymentTargets." + key;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    var memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Regions." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    var memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "OperationPreferences." + key;
      entries[loc] = value;
    });
  }
  if (input.RetainStacks !== undefined && input.RetainStacks !== null) {
    entries["RetainStacks"] = input.RetainStacks;
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryDeleteStackSetInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryDeploymentTargets = function (input, context) {
  var entries = {};
  if (input.Accounts !== undefined && input.Accounts !== null) {
    var memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Accounts." + key;
      entries[loc] = value;
    });
  }
  if (input.AccountsUrl !== undefined && input.AccountsUrl !== null) {
    entries["AccountsUrl"] = input.AccountsUrl;
  }
  if (input.OrganizationalUnitIds !== undefined && input.OrganizationalUnitIds !== null) {
    var memberEntries = serializeAws_queryOrganizationalUnitIdList(input.OrganizationalUnitIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "OrganizationalUnitIds." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryDeregisterTypeInput = function (input, context) {
  var entries = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};
var serializeAws_queryDescribeAccountLimitsInput = function (input, context) {
  var entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryDescribeChangeSetInput = function (input, context) {
  var entries = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryDescribeStackDriftDetectionStatusInput = function (input, context) {
  var entries = {};
  if (input.StackDriftDetectionId !== undefined && input.StackDriftDetectionId !== null) {
    entries["StackDriftDetectionId"] = input.StackDriftDetectionId;
  }
  return entries;
};
var serializeAws_queryDescribeStackEventsInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryDescribeStackInstanceInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.StackInstanceAccount !== undefined && input.StackInstanceAccount !== null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined && input.StackInstanceRegion !== null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryDescribeStackResourceDriftsInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackResourceDriftStatusFilters !== undefined && input.StackResourceDriftStatusFilters !== null) {
    var memberEntries = serializeAws_queryStackResourceDriftStatusFilters(
      input.StackResourceDriftStatusFilters,
      context
    );
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "StackResourceDriftStatusFilters." + key;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};
var serializeAws_queryDescribeStackResourceInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};
var serializeAws_queryDescribeStackResourcesInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.PhysicalResourceId !== undefined && input.PhysicalResourceId !== null) {
    entries["PhysicalResourceId"] = input.PhysicalResourceId;
  }
  return entries;
};
var serializeAws_queryDescribeStackSetInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryDescribeStackSetOperationInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryDescribeStacksInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryDescribeTypeInput = function (input, context) {
  var entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};
var serializeAws_queryDescribeTypeRegistrationInput = function (input, context) {
  var entries = {};
  if (input.RegistrationToken !== undefined && input.RegistrationToken !== null) {
    entries["RegistrationToken"] = input.RegistrationToken;
  }
  return entries;
};
var serializeAws_queryDetectStackDriftInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceIds !== undefined && input.LogicalResourceIds !== null) {
    var memberEntries = serializeAws_queryLogicalResourceIds(input.LogicalResourceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LogicalResourceIds." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryDetectStackResourceDriftInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};
var serializeAws_queryDetectStackSetDriftInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    var memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "OperationPreferences." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryEstimateTemplateCostInput = function (input, context) {
  var entries = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    var memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Parameters." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryExecuteChangeSetInput = function (input, context) {
  var entries = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryGetStackPolicyInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};
var serializeAws_queryGetTemplateInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.TemplateStage !== undefined && input.TemplateStage !== null) {
    entries["TemplateStage"] = input.TemplateStage;
  }
  return entries;
};
var serializeAws_queryGetTemplateSummaryInput = function (input, context) {
  var entries = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryListChangeSetsInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryListExportsInput = function (input, context) {
  var entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryListImportsInput = function (input, context) {
  var entries = {};
  if (input.ExportName !== undefined && input.ExportName !== null) {
    entries["ExportName"] = input.ExportName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryListStackInstancesInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Filters !== undefined && input.Filters !== null) {
    var memberEntries = serializeAws_queryStackInstanceFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Filters." + key;
      entries[loc] = value;
    });
  }
  if (input.StackInstanceAccount !== undefined && input.StackInstanceAccount !== null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined && input.StackInstanceRegion !== null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryListStackResourcesInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryListStackSetOperationResultsInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryListStackSetOperationsInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryListStackSetsInput = function (input, context) {
  var entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryListStacksInput = function (input, context) {
  var entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackStatusFilter !== undefined && input.StackStatusFilter !== null) {
    var memberEntries = serializeAws_queryStackStatusFilter(input.StackStatusFilter, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "StackStatusFilter." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryListTypeRegistrationsInput = function (input, context) {
  var entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.TypeArn !== undefined && input.TypeArn !== null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.RegistrationStatusFilter !== undefined && input.RegistrationStatusFilter !== null) {
    entries["RegistrationStatusFilter"] = input.RegistrationStatusFilter;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryListTypesInput = function (input, context) {
  var entries = {};
  if (input.Visibility !== undefined && input.Visibility !== null) {
    entries["Visibility"] = input.Visibility;
  }
  if (input.ProvisioningType !== undefined && input.ProvisioningType !== null) {
    entries["ProvisioningType"] = input.ProvisioningType;
  }
  if (input.DeprecatedStatus !== undefined && input.DeprecatedStatus !== null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
var serializeAws_queryListTypeVersionsInput = function (input, context) {
  var entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.DeprecatedStatus !== undefined && input.DeprecatedStatus !== null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  return entries;
};
var serializeAws_queryLoggingConfig = function (input, context) {
  var entries = {};
  if (input.LogRoleArn !== undefined && input.LogRoleArn !== null) {
    entries["LogRoleArn"] = input.LogRoleArn;
  }
  if (input.LogGroupName !== undefined && input.LogGroupName !== null) {
    entries["LogGroupName"] = input.LogGroupName;
  }
  return entries;
};
var serializeAws_queryLogicalResourceIds = function (input, context) {
  var e_3, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
      var entry = input_3_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_3_1) {
    e_3 = { error: e_3_1 };
  } finally {
    try {
      if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
    } finally {
      if (e_3) throw e_3.error;
    }
  }
  return entries;
};
var serializeAws_queryNotificationARNs = function (input, context) {
  var e_4, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
      var entry = input_4_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_4_1) {
    e_4 = { error: e_4_1 };
  } finally {
    try {
      if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
    } finally {
      if (e_4) throw e_4.error;
    }
  }
  return entries;
};
var serializeAws_queryOrganizationalUnitIdList = function (input, context) {
  var e_5, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
      var entry = input_5_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_5_1) {
    e_5 = { error: e_5_1 };
  } finally {
    try {
      if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return entries;
};
var serializeAws_queryParameter = function (input, context) {
  var entries = {};
  if (input.ParameterKey !== undefined && input.ParameterKey !== null) {
    entries["ParameterKey"] = input.ParameterKey;
  }
  if (input.ParameterValue !== undefined && input.ParameterValue !== null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.UsePreviousValue !== undefined && input.UsePreviousValue !== null) {
    entries["UsePreviousValue"] = input.UsePreviousValue;
  }
  if (input.ResolvedValue !== undefined && input.ResolvedValue !== null) {
    entries["ResolvedValue"] = input.ResolvedValue;
  }
  return entries;
};
var serializeAws_queryParameters = function (input, context) {
  var e_6, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
      var entry = input_6_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryParameter(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_6_1) {
    e_6 = { error: e_6_1 };
  } finally {
    try {
      if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
    } finally {
      if (e_6) throw e_6.error;
    }
  }
  return entries;
};
var serializeAws_queryRecordHandlerProgressInput = function (input, context) {
  var entries = {};
  if (input.BearerToken !== undefined && input.BearerToken !== null) {
    entries["BearerToken"] = input.BearerToken;
  }
  if (input.OperationStatus !== undefined && input.OperationStatus !== null) {
    entries["OperationStatus"] = input.OperationStatus;
  }
  if (input.CurrentOperationStatus !== undefined && input.CurrentOperationStatus !== null) {
    entries["CurrentOperationStatus"] = input.CurrentOperationStatus;
  }
  if (input.StatusMessage !== undefined && input.StatusMessage !== null) {
    entries["StatusMessage"] = input.StatusMessage;
  }
  if (input.ErrorCode !== undefined && input.ErrorCode !== null) {
    entries["ErrorCode"] = input.ErrorCode;
  }
  if (input.ResourceModel !== undefined && input.ResourceModel !== null) {
    entries["ResourceModel"] = input.ResourceModel;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryRegionList = function (input, context) {
  var e_7, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
      var entry = input_7_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_7_1) {
    e_7 = { error: e_7_1 };
  } finally {
    try {
      if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
    } finally {
      if (e_7) throw e_7.error;
    }
  }
  return entries;
};
var serializeAws_queryRegisterTypeInput = function (input, context) {
  var entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.SchemaHandlerPackage !== undefined && input.SchemaHandlerPackage !== null) {
    entries["SchemaHandlerPackage"] = input.SchemaHandlerPackage;
  }
  if (input.LoggingConfig !== undefined && input.LoggingConfig !== null) {
    var memberEntries = serializeAws_queryLoggingConfig(input.LoggingConfig, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LoggingConfig." + key;
      entries[loc] = value;
    });
  }
  if (input.ExecutionRoleArn !== undefined && input.ExecutionRoleArn !== null) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryResourceIdentifierProperties = function (input, context) {
  var entries = {};
  var counter = 1;
  Object.keys(input)
    .filter(function (key) {
      return input[key] != null;
    })
    .forEach(function (key) {
      entries["entry." + counter + ".key"] = key;
      entries["entry." + counter + ".value"] = input[key];
      counter++;
    });
  return entries;
};
var serializeAws_queryResourcesToImport = function (input, context) {
  var e_8, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
      var entry = input_8_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryResourceToImport(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_8_1) {
    e_8 = { error: e_8_1 };
  } finally {
    try {
      if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
    } finally {
      if (e_8) throw e_8.error;
    }
  }
  return entries;
};
var serializeAws_queryResourcesToSkip = function (input, context) {
  var e_9, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
      var entry = input_9_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_9_1) {
    e_9 = { error: e_9_1 };
  } finally {
    try {
      if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
    } finally {
      if (e_9) throw e_9.error;
    }
  }
  return entries;
};
var serializeAws_queryResourceToImport = function (input, context) {
  var entries = {};
  if (input.ResourceType !== undefined && input.ResourceType !== null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.ResourceIdentifier !== undefined && input.ResourceIdentifier !== null) {
    var memberEntries = serializeAws_queryResourceIdentifierProperties(input.ResourceIdentifier, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ResourceIdentifier." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryResourceTypes = function (input, context) {
  var e_10, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
      var entry = input_10_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_10_1) {
    e_10 = { error: e_10_1 };
  } finally {
    try {
      if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
    } finally {
      if (e_10) throw e_10.error;
    }
  }
  return entries;
};
var serializeAws_queryRetainResources = function (input, context) {
  var e_11, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
      var entry = input_11_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_11_1) {
    e_11 = { error: e_11_1 };
  } finally {
    try {
      if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
    } finally {
      if (e_11) throw e_11.error;
    }
  }
  return entries;
};
var serializeAws_queryRollbackConfiguration = function (input, context) {
  var entries = {};
  if (input.RollbackTriggers !== undefined && input.RollbackTriggers !== null) {
    var memberEntries = serializeAws_queryRollbackTriggers(input.RollbackTriggers, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "RollbackTriggers." + key;
      entries[loc] = value;
    });
  }
  if (input.MonitoringTimeInMinutes !== undefined && input.MonitoringTimeInMinutes !== null) {
    entries["MonitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
  }
  return entries;
};
var serializeAws_queryRollbackTrigger = function (input, context) {
  var entries = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  return entries;
};
var serializeAws_queryRollbackTriggers = function (input, context) {
  var e_12, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
      var entry = input_12_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryRollbackTrigger(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_12_1) {
    e_12 = { error: e_12_1 };
  } finally {
    try {
      if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
    } finally {
      if (e_12) throw e_12.error;
    }
  }
  return entries;
};
var serializeAws_querySetStackPolicyInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  return entries;
};
var serializeAws_querySetTypeDefaultVersionInput = function (input, context) {
  var entries = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};
var serializeAws_querySignalResourceInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.UniqueId !== undefined && input.UniqueId !== null) {
    entries["UniqueId"] = input.UniqueId;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  return entries;
};
var serializeAws_queryStackInstanceFilter = function (input, context) {
  var entries = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined && input.Values !== null) {
    entries["Values"] = input.Values;
  }
  return entries;
};
var serializeAws_queryStackInstanceFilters = function (input, context) {
  var e_13, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
      var entry = input_13_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryStackInstanceFilter(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_13_1) {
    e_13 = { error: e_13_1 };
  } finally {
    try {
      if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
    } finally {
      if (e_13) throw e_13.error;
    }
  }
  return entries;
};
var serializeAws_queryStackResourceDriftStatusFilters = function (input, context) {
  var e_14, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
      var entry = input_14_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_14_1) {
    e_14 = { error: e_14_1 };
  } finally {
    try {
      if (input_14_1 && !input_14_1.done && (_a = input_14.return)) _a.call(input_14);
    } finally {
      if (e_14) throw e_14.error;
    }
  }
  return entries;
};
var serializeAws_queryStackSetOperationPreferences = function (input, context) {
  var entries = {};
  if (input.RegionConcurrencyType !== undefined && input.RegionConcurrencyType !== null) {
    entries["RegionConcurrencyType"] = input.RegionConcurrencyType;
  }
  if (input.RegionOrder !== undefined && input.RegionOrder !== null) {
    var memberEntries = serializeAws_queryRegionList(input.RegionOrder, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "RegionOrder." + key;
      entries[loc] = value;
    });
  }
  if (input.FailureToleranceCount !== undefined && input.FailureToleranceCount !== null) {
    entries["FailureToleranceCount"] = input.FailureToleranceCount;
  }
  if (input.FailureTolerancePercentage !== undefined && input.FailureTolerancePercentage !== null) {
    entries["FailureTolerancePercentage"] = input.FailureTolerancePercentage;
  }
  if (input.MaxConcurrentCount !== undefined && input.MaxConcurrentCount !== null) {
    entries["MaxConcurrentCount"] = input.MaxConcurrentCount;
  }
  if (input.MaxConcurrentPercentage !== undefined && input.MaxConcurrentPercentage !== null) {
    entries["MaxConcurrentPercentage"] = input.MaxConcurrentPercentage;
  }
  return entries;
};
var serializeAws_queryStackStatusFilter = function (input, context) {
  var e_15, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
      var entry = input_15_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_15_1) {
    e_15 = { error: e_15_1 };
  } finally {
    try {
      if (input_15_1 && !input_15_1.done && (_a = input_15.return)) _a.call(input_15);
    } finally {
      if (e_15) throw e_15.error;
    }
  }
  return entries;
};
var serializeAws_queryStopStackSetOperationInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryTag = function (input, context) {
  var entries = {};
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};
var serializeAws_queryTags = function (input, context) {
  var e_16, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
      var entry = input_16_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryTag(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_16_1) {
    e_16 = { error: e_16_1 };
  } finally {
    try {
      if (input_16_1 && !input_16_1.done && (_a = input_16.return)) _a.call(input_16);
    } finally {
      if (e_16) throw e_16.error;
    }
  }
  return entries;
};
var serializeAws_queryUpdateStackInput = function (input, context) {
  var entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.StackPolicyDuringUpdateBody !== undefined && input.StackPolicyDuringUpdateBody !== null) {
    entries["StackPolicyDuringUpdateBody"] = input.StackPolicyDuringUpdateBody;
  }
  if (input.StackPolicyDuringUpdateURL !== undefined && input.StackPolicyDuringUpdateURL !== null) {
    entries["StackPolicyDuringUpdateURL"] = input.StackPolicyDuringUpdateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    var memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Parameters." + key;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    var memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Capabilities." + key;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    var memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ResourceTypes." + key;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    var memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "RollbackConfiguration." + key;
      entries[loc] = value;
    });
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    var memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "NotificationARNs." + key;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
var serializeAws_queryUpdateStackInstancesInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    var memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Accounts." + key;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    var memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "DeploymentTargets." + key;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    var memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Regions." + key;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides !== undefined && input.ParameterOverrides !== null) {
    var memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ParameterOverrides." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    var memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "OperationPreferences." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryUpdateStackSetInput = function (input, context) {
  var entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    var memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Parameters." + key;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    var memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Capabilities." + key;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    var memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "OperationPreferences." + key;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN !== undefined && input.AdministrationRoleARN !== null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName !== undefined && input.ExecutionRoleName !== null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    var memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "DeploymentTargets." + key;
      entries[loc] = value;
    });
  }
  if (input.PermissionModel !== undefined && input.PermissionModel !== null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment !== undefined && input.AutoDeployment !== null) {
    var memberEntries = serializeAws_queryAutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "AutoDeployment." + key;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    var memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Accounts." + key;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    var memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Regions." + key;
      entries[loc] = value;
    });
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
var serializeAws_queryUpdateTerminationProtectionInput = function (input, context) {
  var entries = {};
  if (input.EnableTerminationProtection !== undefined && input.EnableTerminationProtection !== null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};
var serializeAws_queryValidateTemplateInput = function (input, context) {
  var entries = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};
var deserializeAws_queryAccountGateResult = function (output, context) {
  var contents = {
    Status: undefined,
    StatusReason: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  return contents;
};
var deserializeAws_queryAccountLimit = function (output, context) {
  var contents = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = parseInt(output["Value"]);
  }
  return contents;
};
var deserializeAws_queryAccountLimitList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAccountLimit(entry, context);
    });
};
var deserializeAws_queryAccountList = function (output, context) {
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
var deserializeAws_queryAllowedValues = function (output, context) {
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
var deserializeAws_queryAlreadyExistsException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryAutoDeployment = function (output, context) {
  var contents = {
    Enabled: undefined,
    RetainStacksOnAccountRemoval: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["RetainStacksOnAccountRemoval"] !== undefined) {
    contents.RetainStacksOnAccountRemoval = output["RetainStacksOnAccountRemoval"] == "true";
  }
  return contents;
};
var deserializeAws_queryCapabilities = function (output, context) {
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
var deserializeAws_queryCFNRegistryException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryChange = function (output, context) {
  var contents = {
    Type: undefined,
    ResourceChange: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["ResourceChange"] !== undefined) {
    contents.ResourceChange = deserializeAws_queryResourceChange(output["ResourceChange"], context);
  }
  return contents;
};
var deserializeAws_queryChanges = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryChange(entry, context);
    });
};
var deserializeAws_queryChangeSetNotFoundException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryChangeSetSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryChangeSetSummary(entry, context);
    });
};
var deserializeAws_queryChangeSetSummary = function (output, context) {
  var contents = {
    StackId: undefined,
    StackName: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    ExecutionStatus: undefined,
    Status: undefined,
    StatusReason: undefined,
    CreationTime: undefined,
    Description: undefined,
    IncludeNestedStacks: undefined,
    ParentChangeSetId: undefined,
    RootChangeSetId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = output["ChangeSetName"];
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus = output["ExecutionStatus"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["IncludeNestedStacks"] !== undefined) {
    contents.IncludeNestedStacks = output["IncludeNestedStacks"] == "true";
  }
  if (output["ParentChangeSetId"] !== undefined) {
    contents.ParentChangeSetId = output["ParentChangeSetId"];
  }
  if (output["RootChangeSetId"] !== undefined) {
    contents.RootChangeSetId = output["RootChangeSetId"];
  }
  return contents;
};
var deserializeAws_queryContinueUpdateRollbackOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryCreateChangeSetOutput = function (output, context) {
  var contents = {
    Id: undefined,
    StackId: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
var deserializeAws_queryCreatedButModifiedException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryCreateStackInstancesOutput = function (output, context) {
  var contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
var deserializeAws_queryCreateStackOutput = function (output, context) {
  var contents = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
var deserializeAws_queryCreateStackSetOutput = function (output, context) {
  var contents = {
    StackSetId: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  return contents;
};
var deserializeAws_queryDeleteChangeSetOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryDeleteStackInstancesOutput = function (output, context) {
  var contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
var deserializeAws_queryDeleteStackSetOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryDeploymentTargets = function (output, context) {
  var contents = {
    Accounts: undefined,
    AccountsUrl: undefined,
    OrganizationalUnitIds: undefined,
  };
  if (output.Accounts === "") {
    contents.Accounts = [];
  }
  if (output["Accounts"] !== undefined && output["Accounts"]["member"] !== undefined) {
    contents.Accounts = deserializeAws_queryAccountList(__getArrayIfSingleItem(output["Accounts"]["member"]), context);
  }
  if (output["AccountsUrl"] !== undefined) {
    contents.AccountsUrl = output["AccountsUrl"];
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  }
  if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = deserializeAws_queryOrganizationalUnitIdList(
      __getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDeregisterTypeOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryDescribeAccountLimitsOutput = function (output, context) {
  var contents = {
    AccountLimits: undefined,
    NextToken: undefined,
  };
  if (output.AccountLimits === "") {
    contents.AccountLimits = [];
  }
  if (output["AccountLimits"] !== undefined && output["AccountLimits"]["member"] !== undefined) {
    contents.AccountLimits = deserializeAws_queryAccountLimitList(
      __getArrayIfSingleItem(output["AccountLimits"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeChangeSetOutput = function (output, context) {
  var contents = {
    ChangeSetName: undefined,
    ChangeSetId: undefined,
    StackId: undefined,
    StackName: undefined,
    Description: undefined,
    Parameters: undefined,
    CreationTime: undefined,
    ExecutionStatus: undefined,
    Status: undefined,
    StatusReason: undefined,
    NotificationARNs: undefined,
    RollbackConfiguration: undefined,
    Capabilities: undefined,
    Tags: undefined,
    Changes: undefined,
    NextToken: undefined,
    IncludeNestedStacks: undefined,
    ParentChangeSetId: undefined,
    RootChangeSetId: undefined,
  };
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = output["ChangeSetName"];
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus = output["ExecutionStatus"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  }
  if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      __getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.Changes === "") {
    contents.Changes = [];
  }
  if (output["Changes"] !== undefined && output["Changes"]["member"] !== undefined) {
    contents.Changes = deserializeAws_queryChanges(__getArrayIfSingleItem(output["Changes"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output["IncludeNestedStacks"] !== undefined) {
    contents.IncludeNestedStacks = output["IncludeNestedStacks"] == "true";
  }
  if (output["ParentChangeSetId"] !== undefined) {
    contents.ParentChangeSetId = output["ParentChangeSetId"];
  }
  if (output["RootChangeSetId"] !== undefined) {
    contents.RootChangeSetId = output["RootChangeSetId"];
  }
  return contents;
};
var deserializeAws_queryDescribeStackDriftDetectionStatusOutput = function (output, context) {
  var contents = {
    StackId: undefined,
    StackDriftDetectionId: undefined,
    StackDriftStatus: undefined,
    DetectionStatus: undefined,
    DetectionStatusReason: undefined,
    DriftedStackResourceCount: undefined,
    Timestamp: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = output["StackDriftDetectionId"];
  }
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = output["StackDriftStatus"];
  }
  if (output["DetectionStatus"] !== undefined) {
    contents.DetectionStatus = output["DetectionStatus"];
  }
  if (output["DetectionStatusReason"] !== undefined) {
    contents.DetectionStatusReason = output["DetectionStatusReason"];
  }
  if (output["DriftedStackResourceCount"] !== undefined) {
    contents.DriftedStackResourceCount = parseInt(output["DriftedStackResourceCount"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};
var deserializeAws_queryDescribeStackEventsOutput = function (output, context) {
  var contents = {
    StackEvents: undefined,
    NextToken: undefined,
  };
  if (output.StackEvents === "") {
    contents.StackEvents = [];
  }
  if (output["StackEvents"] !== undefined && output["StackEvents"]["member"] !== undefined) {
    contents.StackEvents = deserializeAws_queryStackEvents(
      __getArrayIfSingleItem(output["StackEvents"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeStackInstanceOutput = function (output, context) {
  var contents = {
    StackInstance: undefined,
  };
  if (output["StackInstance"] !== undefined) {
    contents.StackInstance = deserializeAws_queryStackInstance(output["StackInstance"], context);
  }
  return contents;
};
var deserializeAws_queryDescribeStackResourceDriftsOutput = function (output, context) {
  var contents = {
    StackResourceDrifts: undefined,
    NextToken: undefined,
  };
  if (output.StackResourceDrifts === "") {
    contents.StackResourceDrifts = [];
  }
  if (output["StackResourceDrifts"] !== undefined && output["StackResourceDrifts"]["member"] !== undefined) {
    contents.StackResourceDrifts = deserializeAws_queryStackResourceDrifts(
      __getArrayIfSingleItem(output["StackResourceDrifts"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeStackResourceOutput = function (output, context) {
  var contents = {
    StackResourceDetail: undefined,
  };
  if (output["StackResourceDetail"] !== undefined) {
    contents.StackResourceDetail = deserializeAws_queryStackResourceDetail(output["StackResourceDetail"], context);
  }
  return contents;
};
var deserializeAws_queryDescribeStackResourcesOutput = function (output, context) {
  var contents = {
    StackResources: undefined,
  };
  if (output.StackResources === "") {
    contents.StackResources = [];
  }
  if (output["StackResources"] !== undefined && output["StackResources"]["member"] !== undefined) {
    contents.StackResources = deserializeAws_queryStackResources(
      __getArrayIfSingleItem(output["StackResources"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeStackSetOperationOutput = function (output, context) {
  var contents = {
    StackSetOperation: undefined,
  };
  if (output["StackSetOperation"] !== undefined) {
    contents.StackSetOperation = deserializeAws_queryStackSetOperation(output["StackSetOperation"], context);
  }
  return contents;
};
var deserializeAws_queryDescribeStackSetOutput = function (output, context) {
  var contents = {
    StackSet: undefined,
  };
  if (output["StackSet"] !== undefined) {
    contents.StackSet = deserializeAws_queryStackSet(output["StackSet"], context);
  }
  return contents;
};
var deserializeAws_queryDescribeStacksOutput = function (output, context) {
  var contents = {
    Stacks: undefined,
    NextToken: undefined,
  };
  if (output.Stacks === "") {
    contents.Stacks = [];
  }
  if (output["Stacks"] !== undefined && output["Stacks"]["member"] !== undefined) {
    contents.Stacks = deserializeAws_queryStacks(__getArrayIfSingleItem(output["Stacks"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeTypeOutput = function (output, context) {
  var contents = {
    Arn: undefined,
    Type: undefined,
    TypeName: undefined,
    DefaultVersionId: undefined,
    IsDefaultVersion: undefined,
    Description: undefined,
    Schema: undefined,
    ProvisioningType: undefined,
    DeprecatedStatus: undefined,
    LoggingConfig: undefined,
    ExecutionRoleArn: undefined,
    Visibility: undefined,
    SourceUrl: undefined,
    DocumentationUrl: undefined,
    LastUpdated: undefined,
    TimeCreated: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = output["TypeName"];
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = output["DefaultVersionId"];
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Schema"] !== undefined) {
    contents.Schema = output["Schema"];
  }
  if (output["ProvisioningType"] !== undefined) {
    contents.ProvisioningType = output["ProvisioningType"];
  }
  if (output["DeprecatedStatus"] !== undefined) {
    contents.DeprecatedStatus = output["DeprecatedStatus"];
  }
  if (output["LoggingConfig"] !== undefined) {
    contents.LoggingConfig = deserializeAws_queryLoggingConfig(output["LoggingConfig"], context);
  }
  if (output["ExecutionRoleArn"] !== undefined) {
    contents.ExecutionRoleArn = output["ExecutionRoleArn"];
  }
  if (output["Visibility"] !== undefined) {
    contents.Visibility = output["Visibility"];
  }
  if (output["SourceUrl"] !== undefined) {
    contents.SourceUrl = output["SourceUrl"];
  }
  if (output["DocumentationUrl"] !== undefined) {
    contents.DocumentationUrl = output["DocumentationUrl"];
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  return contents;
};
var deserializeAws_queryDescribeTypeRegistrationOutput = function (output, context) {
  var contents = {
    ProgressStatus: undefined,
    Description: undefined,
    TypeArn: undefined,
    TypeVersionArn: undefined,
  };
  if (output["ProgressStatus"] !== undefined) {
    contents.ProgressStatus = output["ProgressStatus"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = output["TypeArn"];
  }
  if (output["TypeVersionArn"] !== undefined) {
    contents.TypeVersionArn = output["TypeVersionArn"];
  }
  return contents;
};
var deserializeAws_queryDetectStackDriftOutput = function (output, context) {
  var contents = {
    StackDriftDetectionId: undefined,
  };
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = output["StackDriftDetectionId"];
  }
  return contents;
};
var deserializeAws_queryDetectStackResourceDriftOutput = function (output, context) {
  var contents = {
    StackResourceDrift: undefined,
  };
  if (output["StackResourceDrift"] !== undefined) {
    contents.StackResourceDrift = deserializeAws_queryStackResourceDrift(output["StackResourceDrift"], context);
  }
  return contents;
};
var deserializeAws_queryDetectStackSetDriftOutput = function (output, context) {
  var contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
var deserializeAws_queryEstimateTemplateCostOutput = function (output, context) {
  var contents = {
    Url: undefined,
  };
  if (output["Url"] !== undefined) {
    contents.Url = output["Url"];
  }
  return contents;
};
var deserializeAws_queryExecuteChangeSetOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryExport = function (output, context) {
  var contents = {
    ExportingStackId: undefined,
    Name: undefined,
    Value: undefined,
  };
  if (output["ExportingStackId"] !== undefined) {
    contents.ExportingStackId = output["ExportingStackId"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};
var deserializeAws_queryExports = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryExport(entry, context);
    });
};
var deserializeAws_queryGetStackPolicyOutput = function (output, context) {
  var contents = {
    StackPolicyBody: undefined,
  };
  if (output["StackPolicyBody"] !== undefined) {
    contents.StackPolicyBody = output["StackPolicyBody"];
  }
  return contents;
};
var deserializeAws_queryGetTemplateOutput = function (output, context) {
  var contents = {
    TemplateBody: undefined,
    StagesAvailable: undefined,
  };
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = output["TemplateBody"];
  }
  if (output.StagesAvailable === "") {
    contents.StagesAvailable = [];
  }
  if (output["StagesAvailable"] !== undefined && output["StagesAvailable"]["member"] !== undefined) {
    contents.StagesAvailable = deserializeAws_queryStageList(
      __getArrayIfSingleItem(output["StagesAvailable"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryGetTemplateSummaryOutput = function (output, context) {
  var contents = {
    Parameters: undefined,
    Description: undefined,
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    ResourceTypes: undefined,
    Version: undefined,
    Metadata: undefined,
    DeclaredTransforms: undefined,
    ResourceIdentifierSummaries: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameterDeclarations(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = output["CapabilitiesReason"];
  }
  if (output.ResourceTypes === "") {
    contents.ResourceTypes = [];
  }
  if (output["ResourceTypes"] !== undefined && output["ResourceTypes"]["member"] !== undefined) {
    contents.ResourceTypes = deserializeAws_queryResourceTypes(
      __getArrayIfSingleItem(output["ResourceTypes"]["member"]),
      context
    );
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = output["Metadata"];
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      __getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifierSummaries === "") {
    contents.ResourceIdentifierSummaries = [];
  }
  if (
    output["ResourceIdentifierSummaries"] !== undefined &&
    output["ResourceIdentifierSummaries"]["member"] !== undefined
  ) {
    contents.ResourceIdentifierSummaries = deserializeAws_queryResourceIdentifierSummaries(
      __getArrayIfSingleItem(output["ResourceIdentifierSummaries"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryImports = function (output, context) {
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
var deserializeAws_queryInsufficientCapabilitiesException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryInvalidChangeSetStatusException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryInvalidOperationException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryInvalidStateTransitionException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryLimitExceededException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryListChangeSetsOutput = function (output, context) {
  var contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryChangeSetSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListExportsOutput = function (output, context) {
  var contents = {
    Exports: undefined,
    NextToken: undefined,
  };
  if (output.Exports === "") {
    contents.Exports = [];
  }
  if (output["Exports"] !== undefined && output["Exports"]["member"] !== undefined) {
    contents.Exports = deserializeAws_queryExports(__getArrayIfSingleItem(output["Exports"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListImportsOutput = function (output, context) {
  var contents = {
    Imports: undefined,
    NextToken: undefined,
  };
  if (output.Imports === "") {
    contents.Imports = [];
  }
  if (output["Imports"] !== undefined && output["Imports"]["member"] !== undefined) {
    contents.Imports = deserializeAws_queryImports(__getArrayIfSingleItem(output["Imports"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListStackInstancesOutput = function (output, context) {
  var contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackInstanceSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListStackResourcesOutput = function (output, context) {
  var contents = {
    StackResourceSummaries: undefined,
    NextToken: undefined,
  };
  if (output.StackResourceSummaries === "") {
    contents.StackResourceSummaries = [];
  }
  if (output["StackResourceSummaries"] !== undefined && output["StackResourceSummaries"]["member"] !== undefined) {
    contents.StackResourceSummaries = deserializeAws_queryStackResourceSummaries(
      __getArrayIfSingleItem(output["StackResourceSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListStackSetOperationResultsOutput = function (output, context) {
  var contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetOperationResultSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListStackSetOperationsOutput = function (output, context) {
  var contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetOperationSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListStackSetsOutput = function (output, context) {
  var contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListStacksOutput = function (output, context) {
  var contents = {
    StackSummaries: undefined,
    NextToken: undefined,
  };
  if (output.StackSummaries === "") {
    contents.StackSummaries = [];
  }
  if (output["StackSummaries"] !== undefined && output["StackSummaries"]["member"] !== undefined) {
    contents.StackSummaries = deserializeAws_queryStackSummaries(
      __getArrayIfSingleItem(output["StackSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListTypeRegistrationsOutput = function (output, context) {
  var contents = {
    RegistrationTokenList: undefined,
    NextToken: undefined,
  };
  if (output.RegistrationTokenList === "") {
    contents.RegistrationTokenList = [];
  }
  if (output["RegistrationTokenList"] !== undefined && output["RegistrationTokenList"]["member"] !== undefined) {
    contents.RegistrationTokenList = deserializeAws_queryRegistrationTokenList(
      __getArrayIfSingleItem(output["RegistrationTokenList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListTypesOutput = function (output, context) {
  var contents = {
    TypeSummaries: undefined,
    NextToken: undefined,
  };
  if (output.TypeSummaries === "") {
    contents.TypeSummaries = [];
  }
  if (output["TypeSummaries"] !== undefined && output["TypeSummaries"]["member"] !== undefined) {
    contents.TypeSummaries = deserializeAws_queryTypeSummaries(
      __getArrayIfSingleItem(output["TypeSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryListTypeVersionsOutput = function (output, context) {
  var contents = {
    TypeVersionSummaries: undefined,
    NextToken: undefined,
  };
  if (output.TypeVersionSummaries === "") {
    contents.TypeVersionSummaries = [];
  }
  if (output["TypeVersionSummaries"] !== undefined && output["TypeVersionSummaries"]["member"] !== undefined) {
    contents.TypeVersionSummaries = deserializeAws_queryTypeVersionSummaries(
      __getArrayIfSingleItem(output["TypeVersionSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryLoggingConfig = function (output, context) {
  var contents = {
    LogRoleArn: undefined,
    LogGroupName: undefined,
  };
  if (output["LogRoleArn"] !== undefined) {
    contents.LogRoleArn = output["LogRoleArn"];
  }
  if (output["LogGroupName"] !== undefined) {
    contents.LogGroupName = output["LogGroupName"];
  }
  return contents;
};
var deserializeAws_queryLogicalResourceIds = function (output, context) {
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
var deserializeAws_queryModuleInfo = function (output, context) {
  var contents = {
    TypeHierarchy: undefined,
    LogicalIdHierarchy: undefined,
  };
  if (output["TypeHierarchy"] !== undefined) {
    contents.TypeHierarchy = output["TypeHierarchy"];
  }
  if (output["LogicalIdHierarchy"] !== undefined) {
    contents.LogicalIdHierarchy = output["LogicalIdHierarchy"];
  }
  return contents;
};
var deserializeAws_queryNameAlreadyExistsException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryNotificationARNs = function (output, context) {
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
var deserializeAws_queryOperationIdAlreadyExistsException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryOperationInProgressException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryOperationNotFoundException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryOperationStatusCheckFailedException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryOrganizationalUnitIdList = function (output, context) {
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
var deserializeAws_queryOutput = function (output, context) {
  var contents = {
    OutputKey: undefined,
    OutputValue: undefined,
    Description: undefined,
    ExportName: undefined,
  };
  if (output["OutputKey"] !== undefined) {
    contents.OutputKey = output["OutputKey"];
  }
  if (output["OutputValue"] !== undefined) {
    contents.OutputValue = output["OutputValue"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["ExportName"] !== undefined) {
    contents.ExportName = output["ExportName"];
  }
  return contents;
};
var deserializeAws_queryOutputs = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryOutput(entry, context);
    });
};
var deserializeAws_queryParameter = function (output, context) {
  var contents = {
    ParameterKey: undefined,
    ParameterValue: undefined,
    UsePreviousValue: undefined,
    ResolvedValue: undefined,
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = output["ParameterKey"];
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue = output["ParameterValue"];
  }
  if (output["UsePreviousValue"] !== undefined) {
    contents.UsePreviousValue = output["UsePreviousValue"] == "true";
  }
  if (output["ResolvedValue"] !== undefined) {
    contents.ResolvedValue = output["ResolvedValue"];
  }
  return contents;
};
var deserializeAws_queryParameterConstraints = function (output, context) {
  var contents = {
    AllowedValues: undefined,
  };
  if (output.AllowedValues === "") {
    contents.AllowedValues = [];
  }
  if (output["AllowedValues"] !== undefined && output["AllowedValues"]["member"] !== undefined) {
    contents.AllowedValues = deserializeAws_queryAllowedValues(
      __getArrayIfSingleItem(output["AllowedValues"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryParameterDeclaration = function (output, context) {
  var contents = {
    ParameterKey: undefined,
    DefaultValue: undefined,
    ParameterType: undefined,
    NoEcho: undefined,
    Description: undefined,
    ParameterConstraints: undefined,
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = output["ParameterKey"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["ParameterType"] !== undefined) {
    contents.ParameterType = output["ParameterType"];
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho = output["NoEcho"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["ParameterConstraints"] !== undefined) {
    contents.ParameterConstraints = deserializeAws_queryParameterConstraints(output["ParameterConstraints"], context);
  }
  return contents;
};
var deserializeAws_queryParameterDeclarations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryParameterDeclaration(entry, context);
    });
};
var deserializeAws_queryParameters = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryParameter(entry, context);
    });
};
var deserializeAws_queryPhysicalResourceIdContext = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryPhysicalResourceIdContextKeyValuePair(entry, context);
    });
};
var deserializeAws_queryPhysicalResourceIdContextKeyValuePair = function (output, context) {
  var contents = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};
var deserializeAws_queryPropertyDifference = function (output, context) {
  var contents = {
    PropertyPath: undefined,
    ExpectedValue: undefined,
    ActualValue: undefined,
    DifferenceType: undefined,
  };
  if (output["PropertyPath"] !== undefined) {
    contents.PropertyPath = output["PropertyPath"];
  }
  if (output["ExpectedValue"] !== undefined) {
    contents.ExpectedValue = output["ExpectedValue"];
  }
  if (output["ActualValue"] !== undefined) {
    contents.ActualValue = output["ActualValue"];
  }
  if (output["DifferenceType"] !== undefined) {
    contents.DifferenceType = output["DifferenceType"];
  }
  return contents;
};
var deserializeAws_queryPropertyDifferences = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryPropertyDifference(entry, context);
    });
};
var deserializeAws_queryRecordHandlerProgressOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryRegionList = function (output, context) {
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
var deserializeAws_queryRegisterTypeOutput = function (output, context) {
  var contents = {
    RegistrationToken: undefined,
  };
  if (output["RegistrationToken"] !== undefined) {
    contents.RegistrationToken = output["RegistrationToken"];
  }
  return contents;
};
var deserializeAws_queryRegistrationTokenList = function (output, context) {
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
var deserializeAws_queryResourceChange = function (output, context) {
  var contents = {
    Action: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Replacement: undefined,
    Scope: undefined,
    Details: undefined,
    ChangeSetId: undefined,
    ModuleInfo: undefined,
  };
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Replacement"] !== undefined) {
    contents.Replacement = output["Replacement"];
  }
  if (output.Scope === "") {
    contents.Scope = [];
  }
  if (output["Scope"] !== undefined && output["Scope"]["member"] !== undefined) {
    contents.Scope = deserializeAws_queryScope(__getArrayIfSingleItem(output["Scope"]["member"]), context);
  }
  if (output.Details === "") {
    contents.Details = [];
  }
  if (output["Details"] !== undefined && output["Details"]["member"] !== undefined) {
    contents.Details = deserializeAws_queryResourceChangeDetails(
      __getArrayIfSingleItem(output["Details"]["member"]),
      context
    );
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
var deserializeAws_queryResourceChangeDetail = function (output, context) {
  var contents = {
    Target: undefined,
    Evaluation: undefined,
    ChangeSource: undefined,
    CausingEntity: undefined,
  };
  if (output["Target"] !== undefined) {
    contents.Target = deserializeAws_queryResourceTargetDefinition(output["Target"], context);
  }
  if (output["Evaluation"] !== undefined) {
    contents.Evaluation = output["Evaluation"];
  }
  if (output["ChangeSource"] !== undefined) {
    contents.ChangeSource = output["ChangeSource"];
  }
  if (output["CausingEntity"] !== undefined) {
    contents.CausingEntity = output["CausingEntity"];
  }
  return contents;
};
var deserializeAws_queryResourceChangeDetails = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryResourceChangeDetail(entry, context);
    });
};
var deserializeAws_queryResourceIdentifiers = function (output, context) {
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
var deserializeAws_queryResourceIdentifierSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryResourceIdentifierSummary(entry, context);
    });
};
var deserializeAws_queryResourceIdentifierSummary = function (output, context) {
  var contents = {
    ResourceType: undefined,
    LogicalResourceIds: undefined,
    ResourceIdentifiers: undefined,
  };
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output.LogicalResourceIds === "") {
    contents.LogicalResourceIds = [];
  }
  if (output["LogicalResourceIds"] !== undefined && output["LogicalResourceIds"]["member"] !== undefined) {
    contents.LogicalResourceIds = deserializeAws_queryLogicalResourceIds(
      __getArrayIfSingleItem(output["LogicalResourceIds"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifiers === "") {
    contents.ResourceIdentifiers = [];
  }
  if (output["ResourceIdentifiers"] !== undefined && output["ResourceIdentifiers"]["member"] !== undefined) {
    contents.ResourceIdentifiers = deserializeAws_queryResourceIdentifiers(
      __getArrayIfSingleItem(output["ResourceIdentifiers"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryResourceTargetDefinition = function (output, context) {
  var contents = {
    Attribute: undefined,
    Name: undefined,
    RequiresRecreation: undefined,
  };
  if (output["Attribute"] !== undefined) {
    contents.Attribute = output["Attribute"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["RequiresRecreation"] !== undefined) {
    contents.RequiresRecreation = output["RequiresRecreation"];
  }
  return contents;
};
var deserializeAws_queryResourceTypes = function (output, context) {
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
var deserializeAws_queryRollbackConfiguration = function (output, context) {
  var contents = {
    RollbackTriggers: undefined,
    MonitoringTimeInMinutes: undefined,
  };
  if (output.RollbackTriggers === "") {
    contents.RollbackTriggers = [];
  }
  if (output["RollbackTriggers"] !== undefined && output["RollbackTriggers"]["member"] !== undefined) {
    contents.RollbackTriggers = deserializeAws_queryRollbackTriggers(
      __getArrayIfSingleItem(output["RollbackTriggers"]["member"]),
      context
    );
  }
  if (output["MonitoringTimeInMinutes"] !== undefined) {
    contents.MonitoringTimeInMinutes = parseInt(output["MonitoringTimeInMinutes"]);
  }
  return contents;
};
var deserializeAws_queryRollbackTrigger = function (output, context) {
  var contents = {
    Arn: undefined,
    Type: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  return contents;
};
var deserializeAws_queryRollbackTriggers = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryRollbackTrigger(entry, context);
    });
};
var deserializeAws_queryScope = function (output, context) {
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
var deserializeAws_querySetTypeDefaultVersionOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryStack = function (output, context) {
  var contents = {
    StackId: undefined,
    StackName: undefined,
    ChangeSetId: undefined,
    Description: undefined,
    Parameters: undefined,
    CreationTime: undefined,
    DeletionTime: undefined,
    LastUpdatedTime: undefined,
    RollbackConfiguration: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    DisableRollback: undefined,
    NotificationARNs: undefined,
    TimeoutInMinutes: undefined,
    Capabilities: undefined,
    Outputs: undefined,
    RoleARN: undefined,
    Tags: undefined,
    EnableTerminationProtection: undefined,
    ParentId: undefined,
    RootId: undefined,
    DriftInformation: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus = output["StackStatus"];
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason = output["StackStatusReason"];
  }
  if (output["DisableRollback"] !== undefined) {
    contents.DisableRollback = output["DisableRollback"] == "true";
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  }
  if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      __getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["TimeoutInMinutes"] !== undefined) {
    contents.TimeoutInMinutes = parseInt(output["TimeoutInMinutes"]);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Outputs === "") {
    contents.Outputs = [];
  }
  if (output["Outputs"] !== undefined && output["Outputs"]["member"] !== undefined) {
    contents.Outputs = deserializeAws_queryOutputs(__getArrayIfSingleItem(output["Outputs"]["member"]), context);
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = output["RoleARN"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["EnableTerminationProtection"] !== undefined) {
    contents.EnableTerminationProtection = output["EnableTerminationProtection"] == "true";
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId = output["ParentId"];
  }
  if (output["RootId"] !== undefined) {
    contents.RootId = output["RootId"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackDriftInformation(output["DriftInformation"], context);
  }
  return contents;
};
var deserializeAws_queryStackDriftInformation = function (output, context) {
  var contents = {
    StackDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = output["StackDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackDriftInformationSummary = function (output, context) {
  var contents = {
    StackDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = output["StackDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackEvent = function (output, context) {
  var contents = {
    StackId: undefined,
    EventId: undefined,
    StackName: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Timestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceProperties: undefined,
    ClientRequestToken: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["EventId"] !== undefined) {
    contents.EventId = output["EventId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["ResourceProperties"] !== undefined) {
    contents.ResourceProperties = output["ResourceProperties"];
  }
  if (output["ClientRequestToken"] !== undefined) {
    contents.ClientRequestToken = output["ClientRequestToken"];
  }
  return contents;
};
var deserializeAws_queryStackEvents = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackEvent(entry, context);
    });
};
var deserializeAws_queryStackInstance = function (output, context) {
  var contents = {
    StackSetId: undefined,
    Region: undefined,
    Account: undefined,
    StackId: undefined,
    ParameterOverrides: undefined,
    Status: undefined,
    StackInstanceStatus: undefined,
    StatusReason: undefined,
    OrganizationalUnitId: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output.ParameterOverrides === "") {
    contents.ParameterOverrides = [];
  }
  if (output["ParameterOverrides"] !== undefined && output["ParameterOverrides"]["member"] !== undefined) {
    contents.ParameterOverrides = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["ParameterOverrides"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = deserializeAws_queryStackInstanceComprehensiveStatus(
      output["StackInstanceStatus"],
      context
    );
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = output["OrganizationalUnitId"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackInstanceComprehensiveStatus = function (output, context) {
  var contents = {
    DetailedStatus: undefined,
  };
  if (output["DetailedStatus"] !== undefined) {
    contents.DetailedStatus = output["DetailedStatus"];
  }
  return contents;
};
var deserializeAws_queryStackInstanceNotFoundException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryStackInstanceSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackInstanceSummary(entry, context);
    });
};
var deserializeAws_queryStackInstanceSummary = function (output, context) {
  var contents = {
    StackSetId: undefined,
    Region: undefined,
    Account: undefined,
    StackId: undefined,
    Status: undefined,
    StatusReason: undefined,
    StackInstanceStatus: undefined,
    OrganizationalUnitId: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = deserializeAws_queryStackInstanceComprehensiveStatus(
      output["StackInstanceStatus"],
      context
    );
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = output["OrganizationalUnitId"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackResource = function (output, context) {
  var contents = {
    StackName: undefined,
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Timestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    Description: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
var deserializeAws_queryStackResourceDetail = function (output, context) {
  var contents = {
    StackName: undefined,
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    LastUpdatedTimestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    Description: undefined,
    Metadata: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = output["Metadata"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
var deserializeAws_queryStackResourceDrift = function (output, context) {
  var contents = {
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    PhysicalResourceIdContext: undefined,
    ResourceType: undefined,
    ExpectedProperties: undefined,
    ActualProperties: undefined,
    PropertyDifferences: undefined,
    StackResourceDriftStatus: undefined,
    Timestamp: undefined,
    ModuleInfo: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output.PhysicalResourceIdContext === "") {
    contents.PhysicalResourceIdContext = [];
  }
  if (
    output["PhysicalResourceIdContext"] !== undefined &&
    output["PhysicalResourceIdContext"]["member"] !== undefined
  ) {
    contents.PhysicalResourceIdContext = deserializeAws_queryPhysicalResourceIdContext(
      __getArrayIfSingleItem(output["PhysicalResourceIdContext"]["member"]),
      context
    );
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["ExpectedProperties"] !== undefined) {
    contents.ExpectedProperties = output["ExpectedProperties"];
  }
  if (output["ActualProperties"] !== undefined) {
    contents.ActualProperties = output["ActualProperties"];
  }
  if (output.PropertyDifferences === "") {
    contents.PropertyDifferences = [];
  }
  if (output["PropertyDifferences"] !== undefined && output["PropertyDifferences"]["member"] !== undefined) {
    contents.PropertyDifferences = deserializeAws_queryPropertyDifferences(
      __getArrayIfSingleItem(output["PropertyDifferences"]["member"]),
      context
    );
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
var deserializeAws_queryStackResourceDriftInformation = function (output, context) {
  var contents = {
    StackResourceDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackResourceDriftInformationSummary = function (output, context) {
  var contents = {
    StackResourceDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackResourceDrifts = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackResourceDrift(entry, context);
    });
};
var deserializeAws_queryStackResources = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackResource(entry, context);
    });
};
var deserializeAws_queryStackResourceSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackResourceSummary(entry, context);
    });
};
var deserializeAws_queryStackResourceSummary = function (output, context) {
  var contents = {
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    LastUpdatedTimestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformationSummary(
      output["DriftInformation"],
      context
    );
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
var deserializeAws_queryStacks = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStack(entry, context);
    });
};
var deserializeAws_queryStackSet = function (output, context) {
  var contents = {
    StackSetName: undefined,
    StackSetId: undefined,
    Description: undefined,
    Status: undefined,
    TemplateBody: undefined,
    Parameters: undefined,
    Capabilities: undefined,
    Tags: undefined,
    StackSetARN: undefined,
    AdministrationRoleARN: undefined,
    ExecutionRoleName: undefined,
    StackSetDriftDetectionDetails: undefined,
    AutoDeployment: undefined,
    PermissionModel: undefined,
    OrganizationalUnitIds: undefined,
  };
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName = output["StackSetName"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = output["TemplateBody"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["StackSetARN"] !== undefined) {
    contents.StackSetARN = output["StackSetARN"];
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN = output["AdministrationRoleARN"];
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName = output["ExecutionRoleName"];
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = deserializeAws_queryAutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = output["PermissionModel"];
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  }
  if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = deserializeAws_queryOrganizationalUnitIdList(
      __getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryStackSetDriftDetectionDetails = function (output, context) {
  var contents = {
    DriftStatus: undefined,
    DriftDetectionStatus: undefined,
    LastDriftCheckTimestamp: undefined,
    TotalStackInstancesCount: undefined,
    DriftedStackInstancesCount: undefined,
    InSyncStackInstancesCount: undefined,
    InProgressStackInstancesCount: undefined,
    FailedStackInstancesCount: undefined,
  };
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["DriftDetectionStatus"] !== undefined) {
    contents.DriftDetectionStatus = output["DriftDetectionStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  if (output["TotalStackInstancesCount"] !== undefined) {
    contents.TotalStackInstancesCount = parseInt(output["TotalStackInstancesCount"]);
  }
  if (output["DriftedStackInstancesCount"] !== undefined) {
    contents.DriftedStackInstancesCount = parseInt(output["DriftedStackInstancesCount"]);
  }
  if (output["InSyncStackInstancesCount"] !== undefined) {
    contents.InSyncStackInstancesCount = parseInt(output["InSyncStackInstancesCount"]);
  }
  if (output["InProgressStackInstancesCount"] !== undefined) {
    contents.InProgressStackInstancesCount = parseInt(output["InProgressStackInstancesCount"]);
  }
  if (output["FailedStackInstancesCount"] !== undefined) {
    contents.FailedStackInstancesCount = parseInt(output["FailedStackInstancesCount"]);
  }
  return contents;
};
var deserializeAws_queryStackSetNotEmptyException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryStackSetNotFoundException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryStackSetOperation = function (output, context) {
  var contents = {
    OperationId: undefined,
    StackSetId: undefined,
    Action: undefined,
    Status: undefined,
    OperationPreferences: undefined,
    RetainStacks: undefined,
    AdministrationRoleARN: undefined,
    ExecutionRoleName: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
    DeploymentTargets: undefined,
    StackSetDriftDetectionDetails: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["OperationPreferences"] !== undefined) {
    contents.OperationPreferences = deserializeAws_queryStackSetOperationPreferences(
      output["OperationPreferences"],
      context
    );
  }
  if (output["RetainStacks"] !== undefined) {
    contents.RetainStacks = output["RetainStacks"] == "true";
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN = output["AdministrationRoleARN"];
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName = output["ExecutionRoleName"];
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  if (output["DeploymentTargets"] !== undefined) {
    contents.DeploymentTargets = deserializeAws_queryDeploymentTargets(output["DeploymentTargets"], context);
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  return contents;
};
var deserializeAws_queryStackSetOperationPreferences = function (output, context) {
  var contents = {
    RegionConcurrencyType: undefined,
    RegionOrder: undefined,
    FailureToleranceCount: undefined,
    FailureTolerancePercentage: undefined,
    MaxConcurrentCount: undefined,
    MaxConcurrentPercentage: undefined,
  };
  if (output["RegionConcurrencyType"] !== undefined) {
    contents.RegionConcurrencyType = output["RegionConcurrencyType"];
  }
  if (output.RegionOrder === "") {
    contents.RegionOrder = [];
  }
  if (output["RegionOrder"] !== undefined && output["RegionOrder"]["member"] !== undefined) {
    contents.RegionOrder = deserializeAws_queryRegionList(
      __getArrayIfSingleItem(output["RegionOrder"]["member"]),
      context
    );
  }
  if (output["FailureToleranceCount"] !== undefined) {
    contents.FailureToleranceCount = parseInt(output["FailureToleranceCount"]);
  }
  if (output["FailureTolerancePercentage"] !== undefined) {
    contents.FailureTolerancePercentage = parseInt(output["FailureTolerancePercentage"]);
  }
  if (output["MaxConcurrentCount"] !== undefined) {
    contents.MaxConcurrentCount = parseInt(output["MaxConcurrentCount"]);
  }
  if (output["MaxConcurrentPercentage"] !== undefined) {
    contents.MaxConcurrentPercentage = parseInt(output["MaxConcurrentPercentage"]);
  }
  return contents;
};
var deserializeAws_queryStackSetOperationResultSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSetOperationResultSummary(entry, context);
    });
};
var deserializeAws_queryStackSetOperationResultSummary = function (output, context) {
  var contents = {
    Account: undefined,
    Region: undefined,
    Status: undefined,
    StatusReason: undefined,
    AccountGateResult: undefined,
    OrganizationalUnitId: undefined,
  };
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["AccountGateResult"] !== undefined) {
    contents.AccountGateResult = deserializeAws_queryAccountGateResult(output["AccountGateResult"], context);
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = output["OrganizationalUnitId"];
  }
  return contents;
};
var deserializeAws_queryStackSetOperationSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSetOperationSummary(entry, context);
    });
};
var deserializeAws_queryStackSetOperationSummary = function (output, context) {
  var contents = {
    OperationId: undefined,
    Action: undefined,
    Status: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackSetSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSetSummary(entry, context);
    });
};
var deserializeAws_queryStackSetSummary = function (output, context) {
  var contents = {
    StackSetName: undefined,
    StackSetId: undefined,
    Description: undefined,
    Status: undefined,
    AutoDeployment: undefined,
    PermissionModel: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName = output["StackSetName"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = deserializeAws_queryAutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = output["PermissionModel"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};
var deserializeAws_queryStackSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSummary(entry, context);
    });
};
var deserializeAws_queryStackSummary = function (output, context) {
  var contents = {
    StackId: undefined,
    StackName: undefined,
    TemplateDescription: undefined,
    CreationTime: undefined,
    LastUpdatedTime: undefined,
    DeletionTime: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    ParentId: undefined,
    RootId: undefined,
    DriftInformation: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["TemplateDescription"] !== undefined) {
    contents.TemplateDescription = output["TemplateDescription"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus = output["StackStatus"];
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason = output["StackStatusReason"];
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId = output["ParentId"];
  }
  if (output["RootId"] !== undefined) {
    contents.RootId = output["RootId"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackDriftInformationSummary(output["DriftInformation"], context);
  }
  return contents;
};
var deserializeAws_queryStageList = function (output, context) {
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
var deserializeAws_queryStaleRequestException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryStopStackSetOperationOutput = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryTag = function (output, context) {
  var contents = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};
var deserializeAws_queryTags = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTag(entry, context);
    });
};
var deserializeAws_queryTemplateParameter = function (output, context) {
  var contents = {
    ParameterKey: undefined,
    DefaultValue: undefined,
    NoEcho: undefined,
    Description: undefined,
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = output["ParameterKey"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho = output["NoEcho"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};
var deserializeAws_queryTemplateParameters = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTemplateParameter(entry, context);
    });
};
var deserializeAws_queryTokenAlreadyExistsException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryTransformsList = function (output, context) {
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
var deserializeAws_queryTypeNotFoundException = function (output, context) {
  var contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
var deserializeAws_queryTypeSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTypeSummary(entry, context);
    });
};
var deserializeAws_queryTypeSummary = function (output, context) {
  var contents = {
    Type: undefined,
    TypeName: undefined,
    DefaultVersionId: undefined,
    TypeArn: undefined,
    LastUpdated: undefined,
    Description: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = output["TypeName"];
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = output["DefaultVersionId"];
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = output["TypeArn"];
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};
var deserializeAws_queryTypeVersionSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTypeVersionSummary(entry, context);
    });
};
var deserializeAws_queryTypeVersionSummary = function (output, context) {
  var contents = {
    Type: undefined,
    TypeName: undefined,
    VersionId: undefined,
    IsDefaultVersion: undefined,
    Arn: undefined,
    TimeCreated: undefined,
    Description: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = output["TypeName"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};
var deserializeAws_queryUpdateStackInstancesOutput = function (output, context) {
  var contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
var deserializeAws_queryUpdateStackOutput = function (output, context) {
  var contents = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
var deserializeAws_queryUpdateStackSetOutput = function (output, context) {
  var contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
var deserializeAws_queryUpdateTerminationProtectionOutput = function (output, context) {
  var contents = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
var deserializeAws_queryValidateTemplateOutput = function (output, context) {
  var contents = {
    Parameters: undefined,
    Description: undefined,
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    DeclaredTransforms: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryTemplateParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = output["CapabilitiesReason"];
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      __getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  return contents;
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
      var parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: function (val, tagName) {
          return val.trim() === "" ? "" : decodeHTML(val);
        },
      });
      var textNodeName = "#text";
      var key = Object.keys(parsedObj)[0];
      var parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });
};
var buildFormUrlencodedString = function (formEntries) {
  return Object.entries(formEntries)
    .map(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
    .join("&");
};
var loadQueryErrorCode = function (output, data) {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
//# sourceMappingURL=Aws_query.js.map
