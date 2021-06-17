import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AcceptMatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.AcceptMatch",
        };
        body = JSON.stringify(serializeAws_json1_1AcceptMatchInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ClaimGameServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ClaimGameServer",
        };
        body = JSON.stringify(serializeAws_json1_1ClaimGameServerInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateAlias",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAliasInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateBuild",
        };
        body = JSON.stringify(serializeAws_json1_1CreateBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateFleet",
        };
        body = JSON.stringify(serializeAws_json1_1CreateFleetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateFleetLocationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateFleetLocations",
        };
        body = JSON.stringify(serializeAws_json1_1CreateFleetLocationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateGameServerGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateGameServerGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateGameServerGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateGameSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateGameSession",
        };
        body = JSON.stringify(serializeAws_json1_1CreateGameSessionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateGameSessionQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateGameSessionQueue",
        };
        body = JSON.stringify(serializeAws_json1_1CreateGameSessionQueueInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateMatchmakingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateMatchmakingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1CreateMatchmakingConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateMatchmakingRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateMatchmakingRuleSet",
        };
        body = JSON.stringify(serializeAws_json1_1CreateMatchmakingRuleSetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePlayerSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreatePlayerSession",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePlayerSessionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreatePlayerSessions",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateScriptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateScript",
        };
        body = JSON.stringify(serializeAws_json1_1CreateScriptInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateVpcPeeringAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateVpcPeeringAuthorization",
        };
        body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringAuthorizationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateVpcPeeringConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.CreateVpcPeeringConnection",
        };
        body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringConnectionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteAlias",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAliasInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteBuild",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteFleet",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFleetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFleetLocationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteFleetLocations",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFleetLocationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteGameServerGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteGameServerGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteGameServerGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteGameSessionQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteGameSessionQueue",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteGameSessionQueueInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteMatchmakingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteMatchmakingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteMatchmakingRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteMatchmakingRuleSet",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingRuleSetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteScriptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteScript",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteScriptInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteVpcPeeringAuthorization",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringAuthorizationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteVpcPeeringConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeleteVpcPeeringConnection",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringConnectionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeregisterGameServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DeregisterGameServer",
        };
        body = JSON.stringify(serializeAws_json1_1DeregisterGameServerInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeAlias",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAliasInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeBuild",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEC2InstanceLimitsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeEC2InstanceLimits",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEC2InstanceLimitsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetAttributesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetCapacityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetCapacity",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetCapacityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetEvents",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetEventsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetLocationAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetLocationAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationAttributesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetLocationCapacityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetLocationCapacity",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationCapacityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetLocationUtilizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetLocationUtilization",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationUtilizationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetPortSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetPortSettings",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetPortSettingsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFleetUtilizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeFleetUtilization",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFleetUtilizationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameServer",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameServerInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameServerGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameServerGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameServerGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameServerInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameServerInstances",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameServerInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameSessionDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameSessionDetails",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameSessionDetailsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameSessionPlacementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameSessionPlacement",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameSessionPlacementInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameSessionQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameSessionQueues",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameSessionQueuesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGameSessionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeGameSessions",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGameSessionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeInstances",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeMatchmakingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeMatchmaking",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeMatchmakingConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeMatchmakingConfigurations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingConfigurationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeMatchmakingRuleSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeMatchmakingRuleSets",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingRuleSetsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribePlayerSessionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribePlayerSessions",
        };
        body = JSON.stringify(serializeAws_json1_1DescribePlayerSessionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRuntimeConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeRuntimeConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRuntimeConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeScalingPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeScalingPolicies",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeScriptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeScript",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeScriptInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeVpcPeeringAuthorizations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeVpcPeeringConnectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.DescribeVpcPeeringConnections",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringConnectionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetGameSessionLogUrlCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.GetGameSessionLogUrl",
        };
        body = JSON.stringify(serializeAws_json1_1GetGameSessionLogUrlInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetInstanceAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.GetInstanceAccess",
        };
        body = JSON.stringify(serializeAws_json1_1GetInstanceAccessInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListAliases",
        };
        body = JSON.stringify(serializeAws_json1_1ListAliasesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBuildsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListBuilds",
        };
        body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListFleetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListFleets",
        };
        body = JSON.stringify(serializeAws_json1_1ListFleetsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListGameServerGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListGameServerGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListGameServerGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListGameServersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListGameServers",
        };
        body = JSON.stringify(serializeAws_json1_1ListGameServersInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListScriptsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListScripts",
        };
        body = JSON.stringify(serializeAws_json1_1ListScriptsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.PutScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterGameServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.RegisterGameServer",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterGameServerInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RequestUploadCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.RequestUploadCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1RequestUploadCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ResolveAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ResolveAlias",
        };
        body = JSON.stringify(serializeAws_json1_1ResolveAliasInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ResumeGameServerGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ResumeGameServerGroup",
        };
        body = JSON.stringify(serializeAws_json1_1ResumeGameServerGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SearchGameSessionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.SearchGameSessions",
        };
        body = JSON.stringify(serializeAws_json1_1SearchGameSessionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartFleetActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StartFleetActions",
        };
        body = JSON.stringify(serializeAws_json1_1StartFleetActionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartGameSessionPlacementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StartGameSessionPlacement",
        };
        body = JSON.stringify(serializeAws_json1_1StartGameSessionPlacementInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartMatchBackfillCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StartMatchBackfill",
        };
        body = JSON.stringify(serializeAws_json1_1StartMatchBackfillInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartMatchmakingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StartMatchmaking",
        };
        body = JSON.stringify(serializeAws_json1_1StartMatchmakingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopFleetActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StopFleetActions",
        };
        body = JSON.stringify(serializeAws_json1_1StopFleetActionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopGameSessionPlacementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StopGameSessionPlacement",
        };
        body = JSON.stringify(serializeAws_json1_1StopGameSessionPlacementInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopMatchmakingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.StopMatchmaking",
        };
        body = JSON.stringify(serializeAws_json1_1StopMatchmakingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SuspendGameServerGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.SuspendGameServerGroup",
        };
        body = JSON.stringify(serializeAws_json1_1SuspendGameServerGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateAlias",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAliasInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateBuild",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateFleetAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateFleetAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateFleetAttributesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateFleetCapacityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateFleetCapacity",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateFleetCapacityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateFleetPortSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateFleetPortSettings",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateFleetPortSettingsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGameServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateGameServer",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGameServerInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGameServerGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateGameServerGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGameServerGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGameSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateGameSession",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGameSessionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGameSessionQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateGameSessionQueue",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGameSessionQueueInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateMatchmakingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateMatchmakingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateMatchmakingConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateRuntimeConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateRuntimeConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateRuntimeConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateScriptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.UpdateScript",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateScriptInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ValidateMatchmakingRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "GameLift.ValidateMatchmakingRuleSet",
        };
        body = JSON.stringify(serializeAws_json1_1ValidateMatchmakingRuleSetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AcceptMatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AcceptMatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AcceptMatchOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AcceptMatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ClaimGameServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ClaimGameServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ClaimGameServerOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ClaimGameServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 8];
                    case "OutOfCapacityException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#OutOfCapacityException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OutOfCapacityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAliasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateAliasOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 8];
                    case "TaggingFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateBuildCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateBuildOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                contents = deserializeAws_json1_1CreateFleetOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 10];
                    case "TaggingFailedException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateFleetLocationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateFleetLocationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateFleetLocationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateFleetLocationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidFleetStatusException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateGameServerGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateGameServerGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateGameServerGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateGameServerGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateGameSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateGameSessionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateGameSessionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateGameSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "FleetCapacityExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#FleetCapacityExceededException": return [3 /*break*/, 4];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#IdempotentParameterMismatchException": return [3 /*break*/, 6];
                    case "InternalServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 8];
                    case "InvalidFleetStatusException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 10];
                    case "InvalidRequestException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 16];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 18];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 18];
                    case "UnauthorizedException": return [3 /*break*/, 20];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FleetCapacityExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateGameSessionQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateGameSessionQueueCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateGameSessionQueueOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateGameSessionQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 8];
                    case "TaggingFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateMatchmakingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateMatchmakingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateMatchmakingConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateMatchmakingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 8];
                    case "TaggingFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 10];
                    case "UnsupportedRegionException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateMatchmakingRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateMatchmakingRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateMatchmakingRuleSetOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateMatchmakingRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "TaggingFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreatePlayerSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePlayerSessionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreatePlayerSessionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePlayerSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GameSessionFullException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#GameSessionFullException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidGameSessionStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidGameSessionStatusException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 10];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreatePlayerSessionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePlayerSessionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreatePlayerSessionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePlayerSessionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GameSessionFullException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#GameSessionFullException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidGameSessionStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidGameSessionStatusException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 10];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateScriptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateScriptCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateScriptOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateScriptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateVpcPeeringConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateVpcPeeringConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateVpcPeeringConnectionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateVpcPeeringConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAliasCommandError(output, context)];
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
}); };
var deserializeAws_json1_1DeleteAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteBuildCommandError(output, context)];
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
}); };
var deserializeAws_json1_1DeleteBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFleetCommandError(output, context)];
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
}); };
var deserializeAws_json1_1DeleteFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidFleetStatusException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 8];
                    case "TaggingFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteFleetLocationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFleetLocationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteFleetLocationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteFleetLocationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteGameServerGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteGameServerGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteGameServerGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteGameServerGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteGameSessionQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteGameSessionQueueCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteGameSessionQueueOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteGameSessionQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteMatchmakingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteMatchmakingConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnsupportedRegionException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteMatchmakingRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteMatchmakingRuleSetOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnsupportedRegionException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context)];
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
}); };
var deserializeAws_json1_1DeleteScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteScriptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteScriptCommandError(output, context)];
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
}); };
var deserializeAws_json1_1DeleteScriptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteVpcPeeringConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteVpcPeeringConnectionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeregisterGameServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeregisterGameServerCommandError(output, context)];
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
}); };
var deserializeAws_json1_1DeregisterGameServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAliasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAliasOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeBuildCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeBuildOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeEC2InstanceLimitsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEC2InstanceLimitsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetAttributesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetCapacityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetCapacityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetCapacityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetCapacityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetEventsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetLocationAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetLocationAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetLocationAttributesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetLocationAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetLocationCapacityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetLocationCapacityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetLocationCapacityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetLocationCapacityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetLocationUtilizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetLocationUtilizationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetPortSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetPortSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetPortSettingsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetPortSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFleetUtilizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFleetUtilizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFleetUtilizationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFleetUtilizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameServerOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameServerGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameServerGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameServerGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameServerGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameServerInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameServerInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameServerInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameServerInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameSessionDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameSessionDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameSessionDetailsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameSessionDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameSessionPlacementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameSessionPlacementCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameSessionPlacementOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameSessionPlacementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameSessionQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameSessionQueuesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameSessionQueuesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameSessionQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGameSessionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGameSessionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGameSessionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGameSessionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeMatchmakingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeMatchmakingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeMatchmakingOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeMatchmakingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnsupportedRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnsupportedRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribePlayerSessionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribePlayerSessionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribePlayerSessionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribePlayerSessionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeRuntimeConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRuntimeConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRuntimeConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRuntimeConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeScalingPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeScalingPoliciesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeScalingPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeScriptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeScriptCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeScriptOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeScriptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetGameSessionLogUrlCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetGameSessionLogUrlCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetGameSessionLogUrlOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetGameSessionLogUrlCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetInstanceAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetInstanceAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetInstanceAccessOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetInstanceAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAliasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAliasesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListBuildsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBuildsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBuildsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBuildsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListFleetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListFleetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListFleetsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListFleetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListGameServerGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListGameServerGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGameServerGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListGameServerGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListGameServersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListGameServersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGameServersOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListGameServersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListScriptsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListScriptsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListScriptsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListScriptsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnauthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1PutScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutScalingPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutScalingPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RegisterGameServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterGameServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RegisterGameServerOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RegisterGameServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RequestUploadCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RequestUploadCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RequestUploadCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RequestUploadCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ResolveAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ResolveAliasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ResolveAliasOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ResolveAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ResumeGameServerGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ResumeGameServerGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ResumeGameServerGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ResumeGameServerGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SearchGameSessionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SearchGameSessionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SearchGameSessionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SearchGameSessionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TerminalRoutingStrategyException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartFleetActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartFleetActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartFleetActionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartFleetActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartGameSessionPlacementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartGameSessionPlacementCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartGameSessionPlacementOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartGameSessionPlacementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartMatchBackfillCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartMatchBackfillCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartMatchBackfillOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartMatchBackfillCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartMatchmakingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartMatchmakingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartMatchmakingOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartMatchmakingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopFleetActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopFleetActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopFleetActionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopFleetActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopGameSessionPlacementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopGameSessionPlacementCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopGameSessionPlacementOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopGameSessionPlacementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopMatchmakingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopMatchmakingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopMatchmakingOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopMatchmakingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SuspendGameServerGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SuspendGameServerGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SuspendGameServerGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SuspendGameServerGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "TaggingFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#TaggingFailedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAliasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateAliasOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateBuildCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateBuildOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateFleetAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateFleetAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateFleetAttributesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateFleetAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidFleetStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateFleetCapacityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateFleetCapacityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateFleetCapacityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateFleetCapacityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidFleetStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateFleetPortSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateFleetPortSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateFleetPortSettingsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateFleetPortSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidFleetStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#LimitExceededException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGameServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGameServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGameServerOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGameServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGameServerGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGameServerGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGameServerGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGameServerGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGameSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGameSessionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGameSessionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGameSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#ConflictException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidGameSessionStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidGameSessionStatusException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGameSessionQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGameSessionQueueCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGameSessionQueueOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGameSessionQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateMatchmakingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateMatchmakingConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedRegionException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateRuntimeConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateRuntimeConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateRuntimeConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateRuntimeConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidFleetStatusException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidFleetStatusException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateScriptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateScriptCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateScriptOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateScriptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#NotFoundException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.gamelift#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ValidateMatchmakingRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ValidateMatchmakingRuleSetOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.gamelift#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.gamelift#InvalidRequestException": return [3 /*break*/, 4];
                    case "UnsupportedRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.gamelift#UnsupportedRegionException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConflictException(body, context);
        contents = __assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1FleetCapacityExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1FleetCapacityExceededException(body, context);
        contents = __assign({ name: "FleetCapacityExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1GameSessionFullExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1GameSessionFullException(body, context);
        contents = __assign({ name: "GameSessionFullException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
        contents = __assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServiceException(body, context);
        contents = __assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidFleetStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidFleetStatusException(body, context);
        contents = __assign({ name: "InvalidFleetStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidGameSessionStatusException(body, context);
        contents = __assign({ name: "InvalidGameSessionStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
        contents = __assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotFoundException(body, context);
        contents = __assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OutOfCapacityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OutOfCapacityException(body, context);
        contents = __assign({ name: "OutOfCapacityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TaggingFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TaggingFailedException(body, context);
        contents = __assign({ name: "TaggingFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TerminalRoutingStrategyException(body, context);
        contents = __assign({ name: "TerminalRoutingStrategyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnauthorizedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnauthorizedException(body, context);
        contents = __assign({ name: "UnauthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedRegionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedRegionException(body, context);
        contents = __assign({ name: "UnsupportedRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AcceptMatchInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptanceType !== undefined &&
        input.AcceptanceType !== null && { AcceptanceType: input.AcceptanceType })), (input.PlayerIds !== undefined &&
        input.PlayerIds !== null && { PlayerIds: serializeAws_json1_1StringList(input.PlayerIds, context) })), (input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }));
};
var serializeAws_json1_1AttributeValue = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.N !== undefined && input.N !== null && { N: input.N })), (input.S !== undefined && input.S !== null && { S: input.S })), (input.SDM !== undefined &&
        input.SDM !== null && { SDM: serializeAws_json1_1StringDoubleMap(input.SDM, context) })), (input.SL !== undefined && input.SL !== null && { SL: serializeAws_json1_1StringList(input.SL, context) }));
};
var serializeAws_json1_1CertificateConfiguration = function (input, context) {
    return __assign({}, (input.CertificateType !== undefined &&
        input.CertificateType !== null && { CertificateType: input.CertificateType }));
};
var serializeAws_json1_1ClaimGameServerInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GameServerData !== undefined &&
        input.GameServerData !== null && { GameServerData: input.GameServerData })), (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }));
};
var serializeAws_json1_1CreateAliasInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoutingStrategy !== undefined &&
        input.RoutingStrategy !== null && {
        RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateBuildInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.OperatingSystem !== undefined &&
        input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem })), (input.StorageLocation !== undefined &&
        input.StorageLocation !== null && {
        StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_json1_1CreateFleetInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId })), (input.CertificateConfiguration !== undefined &&
        input.CertificateConfiguration !== null && {
        CertificateConfiguration: serializeAws_json1_1CertificateConfiguration(input.CertificateConfiguration, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.EC2InboundPermissions !== undefined &&
        input.EC2InboundPermissions !== null && {
        EC2InboundPermissions: serializeAws_json1_1IpPermissionsList(input.EC2InboundPermissions, context),
    })), (input.EC2InstanceType !== undefined &&
        input.EC2InstanceType !== null && { EC2InstanceType: input.EC2InstanceType })), (input.FleetType !== undefined && input.FleetType !== null && { FleetType: input.FleetType })), (input.InstanceRoleArn !== undefined &&
        input.InstanceRoleArn !== null && { InstanceRoleArn: input.InstanceRoleArn })), (input.Locations !== undefined &&
        input.Locations !== null && {
        Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
    })), (input.LogPaths !== undefined &&
        input.LogPaths !== null && { LogPaths: serializeAws_json1_1StringList(input.LogPaths, context) })), (input.MetricGroups !== undefined &&
        input.MetricGroups !== null && {
        MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NewGameSessionProtectionPolicy !== undefined &&
        input.NewGameSessionProtectionPolicy !== null && {
        NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
    })), (input.PeerVpcAwsAccountId !== undefined &&
        input.PeerVpcAwsAccountId !== null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId })), (input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId })), (input.ResourceCreationLimitPolicy !== undefined &&
        input.ResourceCreationLimitPolicy !== null && {
        ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context),
    })), (input.RuntimeConfiguration !== undefined &&
        input.RuntimeConfiguration !== null && {
        RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
    })), (input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId })), (input.ServerLaunchParameters !== undefined &&
        input.ServerLaunchParameters !== null && { ServerLaunchParameters: input.ServerLaunchParameters })), (input.ServerLaunchPath !== undefined &&
        input.ServerLaunchPath !== null && { ServerLaunchPath: input.ServerLaunchPath })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateFleetLocationsInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Locations !== undefined &&
        input.Locations !== null && {
        Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
    }));
};
var serializeAws_json1_1CreateGameServerGroupInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AutoScalingPolicy !== undefined &&
        input.AutoScalingPolicy !== null && {
        AutoScalingPolicy: serializeAws_json1_1GameServerGroupAutoScalingPolicy(input.AutoScalingPolicy, context),
    })), (input.BalancingStrategy !== undefined &&
        input.BalancingStrategy !== null && { BalancingStrategy: input.BalancingStrategy })), (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerProtectionPolicy !== undefined &&
        input.GameServerProtectionPolicy !== null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy })), (input.InstanceDefinitions !== undefined &&
        input.InstanceDefinitions !== null && {
        InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
    })), (input.LaunchTemplate !== undefined &&
        input.LaunchTemplate !== null && {
        LaunchTemplate: serializeAws_json1_1LaunchTemplateSpecification(input.LaunchTemplate, context),
    })), (input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize })), (input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.VpcSubnets !== undefined &&
        input.VpcSubnets !== null && { VpcSubnets: serializeAws_json1_1VpcSubnets(input.VpcSubnets, context) }));
};
var serializeAws_json1_1CreateGameSessionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId })), (input.CreatorId !== undefined && input.CreatorId !== null && { CreatorId: input.CreatorId })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.GameProperties !== undefined &&
        input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    })), (input.GameSessionData !== undefined &&
        input.GameSessionData !== null && { GameSessionData: input.GameSessionData })), (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.IdempotencyToken !== undefined &&
        input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.MaximumPlayerSessionCount !== undefined &&
        input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1CreateGameSessionQueueInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CustomEventData !== undefined &&
        input.CustomEventData !== null && { CustomEventData: input.CustomEventData })), (input.Destinations !== undefined &&
        input.Destinations !== null && {
        Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
    })), (input.FilterConfiguration !== undefined &&
        input.FilterConfiguration !== null && {
        FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NotificationTarget !== undefined &&
        input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget })), (input.PlayerLatencyPolicies !== undefined &&
        input.PlayerLatencyPolicies !== null && {
        PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
    })), (input.PriorityConfiguration !== undefined &&
        input.PriorityConfiguration !== null && {
        PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.TimeoutInSeconds !== undefined &&
        input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }));
};
var serializeAws_json1_1CreateMatchmakingConfigurationInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptanceRequired !== undefined &&
        input.AcceptanceRequired !== null && { AcceptanceRequired: input.AcceptanceRequired })), (input.AcceptanceTimeoutSeconds !== undefined &&
        input.AcceptanceTimeoutSeconds !== null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds })), (input.AdditionalPlayerCount !== undefined &&
        input.AdditionalPlayerCount !== null && { AdditionalPlayerCount: input.AdditionalPlayerCount })), (input.BackfillMode !== undefined && input.BackfillMode !== null && { BackfillMode: input.BackfillMode })), (input.CustomEventData !== undefined &&
        input.CustomEventData !== null && { CustomEventData: input.CustomEventData })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FlexMatchMode !== undefined && input.FlexMatchMode !== null && { FlexMatchMode: input.FlexMatchMode })), (input.GameProperties !== undefined &&
        input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    })), (input.GameSessionData !== undefined &&
        input.GameSessionData !== null && { GameSessionData: input.GameSessionData })), (input.GameSessionQueueArns !== undefined &&
        input.GameSessionQueueArns !== null && {
        GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NotificationTarget !== undefined &&
        input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget })), (input.RequestTimeoutSeconds !== undefined &&
        input.RequestTimeoutSeconds !== null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds })), (input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateMatchmakingRuleSetInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RuleSetBody !== undefined && input.RuleSetBody !== null && { RuleSetBody: input.RuleSetBody })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreatePlayerSessionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.PlayerData !== undefined && input.PlayerData !== null && { PlayerData: input.PlayerData })), (input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }));
};
var serializeAws_json1_1CreatePlayerSessionsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.PlayerDataMap !== undefined &&
        input.PlayerDataMap !== null && {
        PlayerDataMap: serializeAws_json1_1PlayerDataMap(input.PlayerDataMap, context),
    })), (input.PlayerIds !== undefined &&
        input.PlayerIds !== null && { PlayerIds: serializeAws_json1_1PlayerIdList(input.PlayerIds, context) }));
};
var serializeAws_json1_1CreateScriptInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.StorageLocation !== undefined &&
        input.StorageLocation !== null && {
        StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.Version !== undefined && input.Version !== null && { Version: input.Version })), (input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }));
};
var serializeAws_json1_1CreateVpcPeeringAuthorizationInput = function (input, context) {
    return __assign(__assign({}, (input.GameLiftAwsAccountId !== undefined &&
        input.GameLiftAwsAccountId !== null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId })), (input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }));
};
var serializeAws_json1_1CreateVpcPeeringConnectionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.PeerVpcAwsAccountId !== undefined &&
        input.PeerVpcAwsAccountId !== null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId })), (input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }));
};
var serializeAws_json1_1DeleteAliasInput = function (input, context) {
    return __assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }));
};
var serializeAws_json1_1DeleteBuildInput = function (input, context) {
    return __assign({}, (input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }));
};
var serializeAws_json1_1DeleteFleetInput = function (input, context) {
    return __assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }));
};
var serializeAws_json1_1DeleteFleetLocationsInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Locations !== undefined &&
        input.Locations !== null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }));
};
var serializeAws_json1_1DeleteGameServerGroupInput = function (input, context) {
    return __assign(__assign({}, (input.DeleteOption !== undefined && input.DeleteOption !== null && { DeleteOption: input.DeleteOption })), (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }));
};
var serializeAws_json1_1DeleteGameSessionQueueInput = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DeleteMatchmakingConfigurationInput = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DeleteMatchmakingRuleSetInput = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DeleteScalingPolicyInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DeleteScriptInput = function (input, context) {
    return __assign({}, (input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }));
};
var serializeAws_json1_1DeleteVpcPeeringAuthorizationInput = function (input, context) {
    return __assign(__assign({}, (input.GameLiftAwsAccountId !== undefined &&
        input.GameLiftAwsAccountId !== null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId })), (input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }));
};
var serializeAws_json1_1DeleteVpcPeeringConnectionInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.VpcPeeringConnectionId !== undefined &&
        input.VpcPeeringConnectionId !== null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }));
};
var serializeAws_json1_1DeregisterGameServerInput = function (input, context) {
    return __assign(__assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }));
};
var serializeAws_json1_1DescribeAliasInput = function (input, context) {
    return __assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }));
};
var serializeAws_json1_1DescribeBuildInput = function (input, context) {
    return __assign({}, (input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }));
};
var serializeAws_json1_1DescribeEC2InstanceLimitsInput = function (input, context) {
    return __assign(__assign({}, (input.EC2InstanceType !== undefined &&
        input.EC2InstanceType !== null && { EC2InstanceType: input.EC2InstanceType })), (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1DescribeFleetAttributesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.FleetIds !== undefined &&
        input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeFleetCapacityInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.FleetIds !== undefined &&
        input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeFleetEventsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1DescribeFleetLocationAttributesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Locations !== undefined &&
        input.Locations !== null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeFleetLocationCapacityInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1DescribeFleetLocationUtilizationInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1DescribeFleetPortSettingsInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1DescribeFleetUtilizationInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.FleetIds !== undefined &&
        input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeGameServerGroupInput = function (input, context) {
    return __assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }));
};
var serializeAws_json1_1DescribeGameServerInput = function (input, context) {
    return __assign(__assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }));
};
var serializeAws_json1_1DescribeGameServerInstancesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.InstanceIds !== undefined &&
        input.InstanceIds !== null && {
        InstanceIds: serializeAws_json1_1GameServerInstanceIds(input.InstanceIds, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeGameSessionDetailsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }));
};
var serializeAws_json1_1DescribeGameSessionPlacementInput = function (input, context) {
    return __assign({}, (input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }));
};
var serializeAws_json1_1DescribeGameSessionQueuesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Names !== undefined &&
        input.Names !== null && { Names: serializeAws_json1_1GameSessionQueueNameOrArnList(input.Names, context) })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeGameSessionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }));
};
var serializeAws_json1_1DescribeInstancesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeMatchmakingConfigurationsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Names !== undefined &&
        input.Names !== null && { Names: serializeAws_json1_1MatchmakingConfigurationNameList(input.Names, context) })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }));
};
var serializeAws_json1_1DescribeMatchmakingInput = function (input, context) {
    return __assign({}, (input.TicketIds !== undefined &&
        input.TicketIds !== null && { TicketIds: serializeAws_json1_1MatchmakingIdList(input.TicketIds, context) }));
};
var serializeAws_json1_1DescribeMatchmakingRuleSetsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Names !== undefined &&
        input.Names !== null && { Names: serializeAws_json1_1MatchmakingRuleSetNameList(input.Names, context) })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribePlayerSessionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId })), (input.PlayerSessionId !== undefined &&
        input.PlayerSessionId !== null && { PlayerSessionId: input.PlayerSessionId })), (input.PlayerSessionStatusFilter !== undefined &&
        input.PlayerSessionStatusFilter !== null && { PlayerSessionStatusFilter: input.PlayerSessionStatusFilter }));
};
var serializeAws_json1_1DescribeRuntimeConfigurationInput = function (input, context) {
    return __assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }));
};
var serializeAws_json1_1DescribeScalingPoliciesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }));
};
var serializeAws_json1_1DescribeScriptInput = function (input, context) {
    return __assign({}, (input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }));
};
var serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput = function (input, context) {
    return {};
};
var serializeAws_json1_1DescribeVpcPeeringConnectionsInput = function (input, context) {
    return __assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }));
};
var serializeAws_json1_1DesiredPlayerSession = function (input, context) {
    return __assign(__assign({}, (input.PlayerData !== undefined && input.PlayerData !== null && { PlayerData: input.PlayerData })), (input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }));
};
var serializeAws_json1_1DesiredPlayerSessionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DesiredPlayerSession(entry, context);
    });
};
var serializeAws_json1_1FilterConfiguration = function (input, context) {
    return __assign({}, (input.AllowedLocations !== undefined &&
        input.AllowedLocations !== null && {
        AllowedLocations: serializeAws_json1_1LocationList(input.AllowedLocations, context),
    }));
};
var serializeAws_json1_1FleetActionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1FleetIdOrArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GameProperty = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1GamePropertyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GameProperty(entry, context);
    });
};
var serializeAws_json1_1GameServerGroupActions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GameServerGroupAutoScalingPolicy = function (input, context) {
    return __assign(__assign({}, (input.EstimatedInstanceWarmup !== undefined &&
        input.EstimatedInstanceWarmup !== null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup })), (input.TargetTrackingConfiguration !== undefined &&
        input.TargetTrackingConfiguration !== null && {
        TargetTrackingConfiguration: serializeAws_json1_1TargetTrackingConfiguration(input.TargetTrackingConfiguration, context),
    }));
};
var serializeAws_json1_1GameServerInstanceIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GameSessionQueueDestination = function (input, context) {
    return __assign({}, (input.DestinationArn !== undefined &&
        input.DestinationArn !== null && { DestinationArn: input.DestinationArn }));
};
var serializeAws_json1_1GameSessionQueueDestinationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};
var serializeAws_json1_1GameSessionQueueNameOrArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GetGameSessionLogUrlInput = function (input, context) {
    return __assign({}, (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }));
};
var serializeAws_json1_1GetInstanceAccessInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }));
};
var serializeAws_json1_1InstanceDefinition = function (input, context) {
    return __assign(__assign({}, (input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType })), (input.WeightedCapacity !== undefined &&
        input.WeightedCapacity !== null && { WeightedCapacity: input.WeightedCapacity }));
};
var serializeAws_json1_1InstanceDefinitions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceDefinition(entry, context);
    });
};
var serializeAws_json1_1IpPermission = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort })), (input.IpRange !== undefined && input.IpRange !== null && { IpRange: input.IpRange })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }));
};
var serializeAws_json1_1IpPermissionsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IpPermission(entry, context);
    });
};
var serializeAws_json1_1LatencyMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1LaunchTemplateSpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.LaunchTemplateId !== undefined &&
        input.LaunchTemplateId !== null && { LaunchTemplateId: input.LaunchTemplateId })), (input.LaunchTemplateName !== undefined &&
        input.LaunchTemplateName !== null && { LaunchTemplateName: input.LaunchTemplateName })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_json1_1ListAliasesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.RoutingStrategyType !== undefined &&
        input.RoutingStrategyType !== null && { RoutingStrategyType: input.RoutingStrategyType }));
};
var serializeAws_json1_1ListBuildsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_json1_1ListFleetsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }));
};
var serializeAws_json1_1ListGameServerGroupsInput = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListGameServersInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_json1_1ListScriptsInput = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1LocationConfiguration = function (input, context) {
    return __assign({}, (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1LocationConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LocationConfiguration(entry, context);
    });
};
var serializeAws_json1_1LocationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MatchmakingConfigurationNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MatchmakingIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MatchmakingRuleSetNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MetricGroupList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Player = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.LatencyInMs !== undefined &&
        input.LatencyInMs !== null && { LatencyInMs: serializeAws_json1_1LatencyMap(input.LatencyInMs, context) })), (input.PlayerAttributes !== undefined &&
        input.PlayerAttributes !== null && {
        PlayerAttributes: serializeAws_json1_1PlayerAttributeMap(input.PlayerAttributes, context),
    })), (input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId })), (input.Team !== undefined && input.Team !== null && { Team: input.Team }));
};
var serializeAws_json1_1PlayerAttributeMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1AttributeValue(value, context), _b));
    }, {});
};
var serializeAws_json1_1PlayerDataMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1PlayerIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PlayerLatency = function (input, context) {
    return __assign(__assign(__assign({}, (input.LatencyInMilliseconds !== undefined &&
        input.LatencyInMilliseconds !== null && { LatencyInMilliseconds: input.LatencyInMilliseconds })), (input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId })), (input.RegionIdentifier !== undefined &&
        input.RegionIdentifier !== null && { RegionIdentifier: input.RegionIdentifier }));
};
var serializeAws_json1_1PlayerLatencyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlayerLatency(entry, context);
    });
};
var serializeAws_json1_1PlayerLatencyPolicy = function (input, context) {
    return __assign(__assign({}, (input.MaximumIndividualPlayerLatencyMilliseconds !== undefined &&
        input.MaximumIndividualPlayerLatencyMilliseconds !== null && {
        MaximumIndividualPlayerLatencyMilliseconds: input.MaximumIndividualPlayerLatencyMilliseconds,
    })), (input.PolicyDurationSeconds !== undefined &&
        input.PolicyDurationSeconds !== null && { PolicyDurationSeconds: input.PolicyDurationSeconds }));
};
var serializeAws_json1_1PlayerLatencyPolicyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};
var serializeAws_json1_1PlayerList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Player(entry, context);
    });
};
var serializeAws_json1_1PriorityConfiguration = function (input, context) {
    return __assign(__assign({}, (input.LocationOrder !== undefined &&
        input.LocationOrder !== null && {
        LocationOrder: serializeAws_json1_1LocationList(input.LocationOrder, context),
    })), (input.PriorityOrder !== undefined &&
        input.PriorityOrder !== null && {
        PriorityOrder: serializeAws_json1_1PriorityTypeList(input.PriorityOrder, context),
    }));
};
var serializeAws_json1_1PriorityTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PutScalingPolicyInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ComparisonOperator !== undefined &&
        input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator })), (input.EvaluationPeriods !== undefined &&
        input.EvaluationPeriods !== null && { EvaluationPeriods: input.EvaluationPeriods })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType })), (input.ScalingAdjustment !== undefined &&
        input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment })), (input.ScalingAdjustmentType !== undefined &&
        input.ScalingAdjustmentType !== null && { ScalingAdjustmentType: input.ScalingAdjustmentType })), (input.TargetConfiguration !== undefined &&
        input.TargetConfiguration !== null && {
        TargetConfiguration: serializeAws_json1_1TargetConfiguration(input.TargetConfiguration, context),
    })), (input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }));
};
var serializeAws_json1_1QueueArnsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1RegisterGameServerInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConnectionInfo !== undefined &&
        input.ConnectionInfo !== null && { ConnectionInfo: input.ConnectionInfo })), (input.GameServerData !== undefined &&
        input.GameServerData !== null && { GameServerData: input.GameServerData })), (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }));
};
var serializeAws_json1_1RequestUploadCredentialsInput = function (input, context) {
    return __assign({}, (input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }));
};
var serializeAws_json1_1ResolveAliasInput = function (input, context) {
    return __assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }));
};
var serializeAws_json1_1ResourceCreationLimitPolicy = function (input, context) {
    return __assign(__assign({}, (input.NewGameSessionsPerCreator !== undefined &&
        input.NewGameSessionsPerCreator !== null && { NewGameSessionsPerCreator: input.NewGameSessionsPerCreator })), (input.PolicyPeriodInMinutes !== undefined &&
        input.PolicyPeriodInMinutes !== null && { PolicyPeriodInMinutes: input.PolicyPeriodInMinutes }));
};
var serializeAws_json1_1ResumeGameServerGroupInput = function (input, context) {
    return __assign(__assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.ResumeActions !== undefined &&
        input.ResumeActions !== null && {
        ResumeActions: serializeAws_json1_1GameServerGroupActions(input.ResumeActions, context),
    }));
};
var serializeAws_json1_1RoutingStrategy = function (input, context) {
    return __assign(__assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Message !== undefined && input.Message !== null && { Message: input.Message })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1RuntimeConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.GameSessionActivationTimeoutSeconds !== undefined &&
        input.GameSessionActivationTimeoutSeconds !== null && {
        GameSessionActivationTimeoutSeconds: input.GameSessionActivationTimeoutSeconds,
    })), (input.MaxConcurrentGameSessionActivations !== undefined &&
        input.MaxConcurrentGameSessionActivations !== null && {
        MaxConcurrentGameSessionActivations: input.MaxConcurrentGameSessionActivations,
    })), (input.ServerProcesses !== undefined &&
        input.ServerProcesses !== null && {
        ServerProcesses: serializeAws_json1_1ServerProcessList(input.ServerProcesses, context),
    }));
};
var serializeAws_json1_1S3Location = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.ObjectVersion !== undefined && input.ObjectVersion !== null && { ObjectVersion: input.ObjectVersion })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }));
};
var serializeAws_json1_1SearchGameSessionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId })), (input.FilterExpression !== undefined &&
        input.FilterExpression !== null && { FilterExpression: input.FilterExpression })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SortExpression !== undefined &&
        input.SortExpression !== null && { SortExpression: input.SortExpression }));
};
var serializeAws_json1_1ServerProcess = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConcurrentExecutions !== undefined &&
        input.ConcurrentExecutions !== null && { ConcurrentExecutions: input.ConcurrentExecutions })), (input.LaunchPath !== undefined && input.LaunchPath !== null && { LaunchPath: input.LaunchPath })), (input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters }));
};
var serializeAws_json1_1ServerProcessList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerProcess(entry, context);
    });
};
var serializeAws_json1_1StartFleetActionsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1StartGameSessionPlacementInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DesiredPlayerSessions !== undefined &&
        input.DesiredPlayerSessions !== null && {
        DesiredPlayerSessions: serializeAws_json1_1DesiredPlayerSessionList(input.DesiredPlayerSessions, context),
    })), (input.GameProperties !== undefined &&
        input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    })), (input.GameSessionData !== undefined &&
        input.GameSessionData !== null && { GameSessionData: input.GameSessionData })), (input.GameSessionName !== undefined &&
        input.GameSessionName !== null && { GameSessionName: input.GameSessionName })), (input.GameSessionQueueName !== undefined &&
        input.GameSessionQueueName !== null && { GameSessionQueueName: input.GameSessionQueueName })), (input.MaximumPlayerSessionCount !== undefined &&
        input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount })), (input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId })), (input.PlayerLatencies !== undefined &&
        input.PlayerLatencies !== null && {
        PlayerLatencies: serializeAws_json1_1PlayerLatencyList(input.PlayerLatencies, context),
    }));
};
var serializeAws_json1_1StartMatchBackfillInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigurationName !== undefined &&
        input.ConfigurationName !== null && { ConfigurationName: input.ConfigurationName })), (input.GameSessionArn !== undefined &&
        input.GameSessionArn !== null && { GameSessionArn: input.GameSessionArn })), (input.Players !== undefined &&
        input.Players !== null && { Players: serializeAws_json1_1PlayerList(input.Players, context) })), (input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }));
};
var serializeAws_json1_1StartMatchmakingInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConfigurationName !== undefined &&
        input.ConfigurationName !== null && { ConfigurationName: input.ConfigurationName })), (input.Players !== undefined &&
        input.Players !== null && { Players: serializeAws_json1_1PlayerList(input.Players, context) })), (input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }));
};
var serializeAws_json1_1StopFleetActionsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Location !== undefined && input.Location !== null && { Location: input.Location }));
};
var serializeAws_json1_1StopGameSessionPlacementInput = function (input, context) {
    return __assign({}, (input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }));
};
var serializeAws_json1_1StopMatchmakingInput = function (input, context) {
    return __assign({}, (input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }));
};
var serializeAws_json1_1StringDoubleMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SuspendGameServerGroupInput = function (input, context) {
    return __assign(__assign({}, (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.SuspendActions !== undefined &&
        input.SuspendActions !== null && {
        SuspendActions: serializeAws_json1_1GameServerGroupActions(input.SuspendActions, context),
    }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1TargetConfiguration = function (input, context) {
    return __assign({}, (input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }));
};
var serializeAws_json1_1TargetTrackingConfiguration = function (input, context) {
    return __assign({}, (input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateAliasInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoutingStrategy !== undefined &&
        input.RoutingStrategy !== null && {
        RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
    }));
};
var serializeAws_json1_1UpdateBuildInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_json1_1UpdateFleetAttributesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.MetricGroups !== undefined &&
        input.MetricGroups !== null && {
        MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NewGameSessionProtectionPolicy !== undefined &&
        input.NewGameSessionProtectionPolicy !== null && {
        NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
    })), (input.ResourceCreationLimitPolicy !== undefined &&
        input.ResourceCreationLimitPolicy !== null && {
        ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context),
    }));
};
var serializeAws_json1_1UpdateFleetCapacityInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DesiredInstances !== undefined &&
        input.DesiredInstances !== null && { DesiredInstances: input.DesiredInstances })), (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize })), (input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }));
};
var serializeAws_json1_1UpdateFleetPortSettingsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.InboundPermissionAuthorizations !== undefined &&
        input.InboundPermissionAuthorizations !== null && {
        InboundPermissionAuthorizations: serializeAws_json1_1IpPermissionsList(input.InboundPermissionAuthorizations, context),
    })), (input.InboundPermissionRevocations !== undefined &&
        input.InboundPermissionRevocations !== null && {
        InboundPermissionRevocations: serializeAws_json1_1IpPermissionsList(input.InboundPermissionRevocations, context),
    }));
};
var serializeAws_json1_1UpdateGameServerGroupInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.BalancingStrategy !== undefined &&
        input.BalancingStrategy !== null && { BalancingStrategy: input.BalancingStrategy })), (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerProtectionPolicy !== undefined &&
        input.GameServerProtectionPolicy !== null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy })), (input.InstanceDefinitions !== undefined &&
        input.InstanceDefinitions !== null && {
        InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
    })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }));
};
var serializeAws_json1_1UpdateGameServerInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.GameServerData !== undefined &&
        input.GameServerData !== null && { GameServerData: input.GameServerData })), (input.GameServerGroupName !== undefined &&
        input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName })), (input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId })), (input.HealthCheck !== undefined && input.HealthCheck !== null && { HealthCheck: input.HealthCheck })), (input.UtilizationStatus !== undefined &&
        input.UtilizationStatus !== null && { UtilizationStatus: input.UtilizationStatus }));
};
var serializeAws_json1_1UpdateGameSessionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId })), (input.MaximumPlayerSessionCount !== undefined &&
        input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.PlayerSessionCreationPolicy !== undefined &&
        input.PlayerSessionCreationPolicy !== null && { PlayerSessionCreationPolicy: input.PlayerSessionCreationPolicy })), (input.ProtectionPolicy !== undefined &&
        input.ProtectionPolicy !== null && { ProtectionPolicy: input.ProtectionPolicy }));
};
var serializeAws_json1_1UpdateGameSessionQueueInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CustomEventData !== undefined &&
        input.CustomEventData !== null && { CustomEventData: input.CustomEventData })), (input.Destinations !== undefined &&
        input.Destinations !== null && {
        Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
    })), (input.FilterConfiguration !== undefined &&
        input.FilterConfiguration !== null && {
        FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NotificationTarget !== undefined &&
        input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget })), (input.PlayerLatencyPolicies !== undefined &&
        input.PlayerLatencyPolicies !== null && {
        PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
    })), (input.PriorityConfiguration !== undefined &&
        input.PriorityConfiguration !== null && {
        PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
    })), (input.TimeoutInSeconds !== undefined &&
        input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }));
};
var serializeAws_json1_1UpdateMatchmakingConfigurationInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptanceRequired !== undefined &&
        input.AcceptanceRequired !== null && { AcceptanceRequired: input.AcceptanceRequired })), (input.AcceptanceTimeoutSeconds !== undefined &&
        input.AcceptanceTimeoutSeconds !== null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds })), (input.AdditionalPlayerCount !== undefined &&
        input.AdditionalPlayerCount !== null && { AdditionalPlayerCount: input.AdditionalPlayerCount })), (input.BackfillMode !== undefined && input.BackfillMode !== null && { BackfillMode: input.BackfillMode })), (input.CustomEventData !== undefined &&
        input.CustomEventData !== null && { CustomEventData: input.CustomEventData })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FlexMatchMode !== undefined && input.FlexMatchMode !== null && { FlexMatchMode: input.FlexMatchMode })), (input.GameProperties !== undefined &&
        input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    })), (input.GameSessionData !== undefined &&
        input.GameSessionData !== null && { GameSessionData: input.GameSessionData })), (input.GameSessionQueueArns !== undefined &&
        input.GameSessionQueueArns !== null && {
        GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NotificationTarget !== undefined &&
        input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget })), (input.RequestTimeoutSeconds !== undefined &&
        input.RequestTimeoutSeconds !== null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds })), (input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }));
};
var serializeAws_json1_1UpdateRuntimeConfigurationInput = function (input, context) {
    return __assign(__assign({}, (input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId })), (input.RuntimeConfiguration !== undefined &&
        input.RuntimeConfiguration !== null && {
        RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
    }));
};
var serializeAws_json1_1UpdateScriptInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId })), (input.StorageLocation !== undefined &&
        input.StorageLocation !== null && {
        StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
    })), (input.Version !== undefined && input.Version !== null && { Version: input.Version })), (input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }));
};
var serializeAws_json1_1ValidateMatchmakingRuleSetInput = function (input, context) {
    return __assign({}, (input.RuleSetBody !== undefined && input.RuleSetBody !== null && { RuleSetBody: input.RuleSetBody }));
};
var serializeAws_json1_1VpcSubnets = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AcceptMatchOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1Alias = function (output, context) {
    return {
        AliasArn: output.AliasArn !== undefined && output.AliasArn !== null ? output.AliasArn : undefined,
        AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoutingStrategy: output.RoutingStrategy !== undefined && output.RoutingStrategy !== null
            ? deserializeAws_json1_1RoutingStrategy(output.RoutingStrategy, context)
            : undefined,
    };
};
var deserializeAws_json1_1AliasList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alias(entry, context);
    });
};
var deserializeAws_json1_1AttributeValue = function (output, context) {
    return {
        N: output.N !== undefined && output.N !== null ? output.N : undefined,
        S: output.S !== undefined && output.S !== null ? output.S : undefined,
        SDM: output.SDM !== undefined && output.SDM !== null
            ? deserializeAws_json1_1StringDoubleMap(output.SDM, context)
            : undefined,
        SL: output.SL !== undefined && output.SL !== null ? deserializeAws_json1_1StringList(output.SL, context) : undefined,
    };
};
var deserializeAws_json1_1AwsCredentials = function (output, context) {
    return {
        AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
        SecretAccessKey: output.SecretAccessKey !== undefined && output.SecretAccessKey !== null ? output.SecretAccessKey : undefined,
        SessionToken: output.SessionToken !== undefined && output.SessionToken !== null ? output.SessionToken : undefined,
    };
};
var deserializeAws_json1_1Build = function (output, context) {
    return {
        BuildArn: output.BuildArn !== undefined && output.BuildArn !== null ? output.BuildArn : undefined,
        BuildId: output.BuildId !== undefined && output.BuildId !== null ? output.BuildId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
        SizeOnDisk: output.SizeOnDisk !== undefined && output.SizeOnDisk !== null ? output.SizeOnDisk : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_json1_1BuildList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Build(entry, context);
    });
};
var deserializeAws_json1_1CertificateConfiguration = function (output, context) {
    return {
        CertificateType: output.CertificateType !== undefined && output.CertificateType !== null ? output.CertificateType : undefined,
    };
};
var deserializeAws_json1_1ClaimGameServerOutput = function (output, context) {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConflictException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CreateAliasOutput = function (output, context) {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null
            ? deserializeAws_json1_1Alias(output.Alias, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateBuildOutput = function (output, context) {
    return {
        Build: output.Build !== undefined && output.Build !== null
            ? deserializeAws_json1_1Build(output.Build, context)
            : undefined,
        StorageLocation: output.StorageLocation !== undefined && output.StorageLocation !== null
            ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
            : undefined,
        UploadCredentials: output.UploadCredentials !== undefined && output.UploadCredentials !== null
            ? deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateFleetLocationsOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        LocationStates: output.LocationStates !== undefined && output.LocationStates !== null
            ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateFleetOutput = function (output, context) {
    return {
        FleetAttributes: output.FleetAttributes !== undefined && output.FleetAttributes !== null
            ? deserializeAws_json1_1FleetAttributes(output.FleetAttributes, context)
            : undefined,
        LocationStates: output.LocationStates !== undefined && output.LocationStates !== null
            ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateGameServerGroupOutput = function (output, context) {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateGameSessionOutput = function (output, context) {
    return {
        GameSession: output.GameSession !== undefined && output.GameSession !== null
            ? deserializeAws_json1_1GameSession(output.GameSession, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateGameSessionQueueOutput = function (output, context) {
    return {
        GameSessionQueue: output.GameSessionQueue !== undefined && output.GameSessionQueue !== null
            ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateMatchmakingConfigurationOutput = function (output, context) {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateMatchmakingRuleSetOutput = function (output, context) {
    return {
        RuleSet: output.RuleSet !== undefined && output.RuleSet !== null
            ? deserializeAws_json1_1MatchmakingRuleSet(output.RuleSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreatePlayerSessionOutput = function (output, context) {
    return {
        PlayerSession: output.PlayerSession !== undefined && output.PlayerSession !== null
            ? deserializeAws_json1_1PlayerSession(output.PlayerSession, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreatePlayerSessionsOutput = function (output, context) {
    return {
        PlayerSessions: output.PlayerSessions !== undefined && output.PlayerSessions !== null
            ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateScriptOutput = function (output, context) {
    return {
        Script: output.Script !== undefined && output.Script !== null
            ? deserializeAws_json1_1Script(output.Script, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput = function (output, context) {
    return {
        VpcPeeringAuthorization: output.VpcPeeringAuthorization !== undefined && output.VpcPeeringAuthorization !== null
            ? deserializeAws_json1_1VpcPeeringAuthorization(output.VpcPeeringAuthorization, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateVpcPeeringConnectionOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteFleetLocationsOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        LocationStates: output.LocationStates !== undefined && output.LocationStates !== null
            ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteGameServerGroupOutput = function (output, context) {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteGameSessionQueueOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteMatchmakingConfigurationOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteMatchmakingRuleSetOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteVpcPeeringConnectionOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeAliasOutput = function (output, context) {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null
            ? deserializeAws_json1_1Alias(output.Alias, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeBuildOutput = function (output, context) {
    return {
        Build: output.Build !== undefined && output.Build !== null
            ? deserializeAws_json1_1Build(output.Build, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEC2InstanceLimitsOutput = function (output, context) {
    return {
        EC2InstanceLimits: output.EC2InstanceLimits !== undefined && output.EC2InstanceLimits !== null
            ? deserializeAws_json1_1EC2InstanceLimitList(output.EC2InstanceLimits, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetAttributesOutput = function (output, context) {
    return {
        FleetAttributes: output.FleetAttributes !== undefined && output.FleetAttributes !== null
            ? deserializeAws_json1_1FleetAttributesList(output.FleetAttributes, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetCapacityOutput = function (output, context) {
    return {
        FleetCapacity: output.FleetCapacity !== undefined && output.FleetCapacity !== null
            ? deserializeAws_json1_1FleetCapacityList(output.FleetCapacity, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetEventsOutput = function (output, context) {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventList(output.Events, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetLocationAttributesOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        LocationAttributes: output.LocationAttributes !== undefined && output.LocationAttributes !== null
            ? deserializeAws_json1_1LocationAttributesList(output.LocationAttributes, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetLocationCapacityOutput = function (output, context) {
    return {
        FleetCapacity: output.FleetCapacity !== undefined && output.FleetCapacity !== null
            ? deserializeAws_json1_1FleetCapacity(output.FleetCapacity, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetLocationUtilizationOutput = function (output, context) {
    return {
        FleetUtilization: output.FleetUtilization !== undefined && output.FleetUtilization !== null
            ? deserializeAws_json1_1FleetUtilization(output.FleetUtilization, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetPortSettingsOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InboundPermissions: output.InboundPermissions !== undefined && output.InboundPermissions !== null
            ? deserializeAws_json1_1IpPermissionsList(output.InboundPermissions, context)
            : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
var deserializeAws_json1_1DescribeFleetUtilizationOutput = function (output, context) {
    return {
        FleetUtilization: output.FleetUtilization !== undefined && output.FleetUtilization !== null
            ? deserializeAws_json1_1FleetUtilizationList(output.FleetUtilization, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeGameServerGroupOutput = function (output, context) {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeGameServerInstancesOutput = function (output, context) {
    return {
        GameServerInstances: output.GameServerInstances !== undefined && output.GameServerInstances !== null
            ? deserializeAws_json1_1GameServerInstances(output.GameServerInstances, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeGameServerOutput = function (output, context) {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeGameSessionDetailsOutput = function (output, context) {
    return {
        GameSessionDetails: output.GameSessionDetails !== undefined && output.GameSessionDetails !== null
            ? deserializeAws_json1_1GameSessionDetailList(output.GameSessionDetails, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeGameSessionPlacementOutput = function (output, context) {
    return {
        GameSessionPlacement: output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
            ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeGameSessionQueuesOutput = function (output, context) {
    return {
        GameSessionQueues: output.GameSessionQueues !== undefined && output.GameSessionQueues !== null
            ? deserializeAws_json1_1GameSessionQueueList(output.GameSessionQueues, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeGameSessionsOutput = function (output, context) {
    return {
        GameSessions: output.GameSessions !== undefined && output.GameSessions !== null
            ? deserializeAws_json1_1GameSessionList(output.GameSessions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeInstancesOutput = function (output, context) {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1InstanceList(output.Instances, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput = function (output, context) {
    return {
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1MatchmakingConfigurationList(output.Configurations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeMatchmakingOutput = function (output, context) {
    return {
        TicketList: output.TicketList !== undefined && output.TicketList !== null
            ? deserializeAws_json1_1MatchmakingTicketList(output.TicketList, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RuleSets: output.RuleSets !== undefined && output.RuleSets !== null
            ? deserializeAws_json1_1MatchmakingRuleSetList(output.RuleSets, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribePlayerSessionsOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PlayerSessions: output.PlayerSessions !== undefined && output.PlayerSessions !== null
            ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRuntimeConfigurationOutput = function (output, context) {
    return {
        RuntimeConfiguration: output.RuntimeConfiguration !== undefined && output.RuntimeConfiguration !== null
            ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeScalingPoliciesOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ScalingPolicies: output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
            ? deserializeAws_json1_1ScalingPolicyList(output.ScalingPolicies, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeScriptOutput = function (output, context) {
    return {
        Script: output.Script !== undefined && output.Script !== null
            ? deserializeAws_json1_1Script(output.Script, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput = function (output, context) {
    return {
        VpcPeeringAuthorizations: output.VpcPeeringAuthorizations !== undefined && output.VpcPeeringAuthorizations !== null
            ? deserializeAws_json1_1VpcPeeringAuthorizationList(output.VpcPeeringAuthorizations, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput = function (output, context) {
    return {
        VpcPeeringConnections: output.VpcPeeringConnections !== undefined && output.VpcPeeringConnections !== null
            ? deserializeAws_json1_1VpcPeeringConnectionList(output.VpcPeeringConnections, context)
            : undefined,
    };
};
var deserializeAws_json1_1EC2InstanceCounts = function (output, context) {
    return {
        ACTIVE: output.ACTIVE !== undefined && output.ACTIVE !== null ? output.ACTIVE : undefined,
        DESIRED: output.DESIRED !== undefined && output.DESIRED !== null ? output.DESIRED : undefined,
        IDLE: output.IDLE !== undefined && output.IDLE !== null ? output.IDLE : undefined,
        MAXIMUM: output.MAXIMUM !== undefined && output.MAXIMUM !== null ? output.MAXIMUM : undefined,
        MINIMUM: output.MINIMUM !== undefined && output.MINIMUM !== null ? output.MINIMUM : undefined,
        PENDING: output.PENDING !== undefined && output.PENDING !== null ? output.PENDING : undefined,
        TERMINATING: output.TERMINATING !== undefined && output.TERMINATING !== null ? output.TERMINATING : undefined,
    };
};
var deserializeAws_json1_1EC2InstanceLimit = function (output, context) {
    return {
        CurrentInstances: output.CurrentInstances !== undefined && output.CurrentInstances !== null ? output.CurrentInstances : undefined,
        EC2InstanceType: output.EC2InstanceType !== undefined && output.EC2InstanceType !== null ? output.EC2InstanceType : undefined,
        InstanceLimit: output.InstanceLimit !== undefined && output.InstanceLimit !== null ? output.InstanceLimit : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    };
};
var deserializeAws_json1_1EC2InstanceLimitList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EC2InstanceLimit(entry, context);
    });
};
var deserializeAws_json1_1Event = function (output, context) {
    return {
        EventCode: output.EventCode !== undefined && output.EventCode !== null ? output.EventCode : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
        EventTime: output.EventTime !== undefined && output.EventTime !== null
            ? new Date(Math.round(output.EventTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PreSignedLogUrl: output.PreSignedLogUrl !== undefined && output.PreSignedLogUrl !== null ? output.PreSignedLogUrl : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
var deserializeAws_json1_1EventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
var deserializeAws_json1_1FilterConfiguration = function (output, context) {
    return {
        AllowedLocations: output.AllowedLocations !== undefined && output.AllowedLocations !== null
            ? deserializeAws_json1_1LocationList(output.AllowedLocations, context)
            : undefined,
    };
};
var deserializeAws_json1_1FleetActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FleetAttributes = function (output, context) {
    return {
        BuildArn: output.BuildArn !== undefined && output.BuildArn !== null ? output.BuildArn : undefined,
        BuildId: output.BuildId !== undefined && output.BuildId !== null ? output.BuildId : undefined,
        CertificateConfiguration: output.CertificateConfiguration !== undefined && output.CertificateConfiguration !== null
            ? deserializeAws_json1_1CertificateConfiguration(output.CertificateConfiguration, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        FleetType: output.FleetType !== undefined && output.FleetType !== null ? output.FleetType : undefined,
        InstanceRoleArn: output.InstanceRoleArn !== undefined && output.InstanceRoleArn !== null ? output.InstanceRoleArn : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LogPaths: output.LogPaths !== undefined && output.LogPaths !== null
            ? deserializeAws_json1_1StringList(output.LogPaths, context)
            : undefined,
        MetricGroups: output.MetricGroups !== undefined && output.MetricGroups !== null
            ? deserializeAws_json1_1MetricGroupList(output.MetricGroups, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NewGameSessionProtectionPolicy: output.NewGameSessionProtectionPolicy !== undefined && output.NewGameSessionProtectionPolicy !== null
            ? output.NewGameSessionProtectionPolicy
            : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
        ResourceCreationLimitPolicy: output.ResourceCreationLimitPolicy !== undefined && output.ResourceCreationLimitPolicy !== null
            ? deserializeAws_json1_1ResourceCreationLimitPolicy(output.ResourceCreationLimitPolicy, context)
            : undefined,
        ScriptArn: output.ScriptArn !== undefined && output.ScriptArn !== null ? output.ScriptArn : undefined,
        ScriptId: output.ScriptId !== undefined && output.ScriptId !== null ? output.ScriptId : undefined,
        ServerLaunchParameters: output.ServerLaunchParameters !== undefined && output.ServerLaunchParameters !== null
            ? output.ServerLaunchParameters
            : undefined,
        ServerLaunchPath: output.ServerLaunchPath !== undefined && output.ServerLaunchPath !== null ? output.ServerLaunchPath : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StoppedActions: output.StoppedActions !== undefined && output.StoppedActions !== null
            ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context)
            : undefined,
        TerminationTime: output.TerminationTime !== undefined && output.TerminationTime !== null
            ? new Date(Math.round(output.TerminationTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1FleetAttributesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FleetAttributes(entry, context);
    });
};
var deserializeAws_json1_1FleetCapacity = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InstanceCounts: output.InstanceCounts !== undefined && output.InstanceCounts !== null
            ? deserializeAws_json1_1EC2InstanceCounts(output.InstanceCounts, context)
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    };
};
var deserializeAws_json1_1FleetCapacityExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1FleetCapacityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FleetCapacity(entry, context);
    });
};
var deserializeAws_json1_1FleetIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FleetUtilization = function (output, context) {
    return {
        ActiveGameSessionCount: output.ActiveGameSessionCount !== undefined && output.ActiveGameSessionCount !== null
            ? output.ActiveGameSessionCount
            : undefined,
        ActiveServerProcessCount: output.ActiveServerProcessCount !== undefined && output.ActiveServerProcessCount !== null
            ? output.ActiveServerProcessCount
            : undefined,
        CurrentPlayerSessionCount: output.CurrentPlayerSessionCount !== undefined && output.CurrentPlayerSessionCount !== null
            ? output.CurrentPlayerSessionCount
            : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        MaximumPlayerSessionCount: output.MaximumPlayerSessionCount !== undefined && output.MaximumPlayerSessionCount !== null
            ? output.MaximumPlayerSessionCount
            : undefined,
    };
};
var deserializeAws_json1_1FleetUtilizationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FleetUtilization(entry, context);
    });
};
var deserializeAws_json1_1GameProperty = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1GamePropertyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameProperty(entry, context);
    });
};
var deserializeAws_json1_1GameServer = function (output, context) {
    return {
        ClaimStatus: output.ClaimStatus !== undefined && output.ClaimStatus !== null ? output.ClaimStatus : undefined,
        ConnectionInfo: output.ConnectionInfo !== undefined && output.ConnectionInfo !== null ? output.ConnectionInfo : undefined,
        GameServerData: output.GameServerData !== undefined && output.GameServerData !== null ? output.GameServerData : undefined,
        GameServerGroupArn: output.GameServerGroupArn !== undefined && output.GameServerGroupArn !== null
            ? output.GameServerGroupArn
            : undefined,
        GameServerGroupName: output.GameServerGroupName !== undefined && output.GameServerGroupName !== null
            ? output.GameServerGroupName
            : undefined,
        GameServerId: output.GameServerId !== undefined && output.GameServerId !== null ? output.GameServerId : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        LastClaimTime: output.LastClaimTime !== undefined && output.LastClaimTime !== null
            ? new Date(Math.round(output.LastClaimTime * 1000))
            : undefined,
        LastHealthCheckTime: output.LastHealthCheckTime !== undefined && output.LastHealthCheckTime !== null
            ? new Date(Math.round(output.LastHealthCheckTime * 1000))
            : undefined,
        RegistrationTime: output.RegistrationTime !== undefined && output.RegistrationTime !== null
            ? new Date(Math.round(output.RegistrationTime * 1000))
            : undefined,
        UtilizationStatus: output.UtilizationStatus !== undefined && output.UtilizationStatus !== null
            ? output.UtilizationStatus
            : undefined,
    };
};
var deserializeAws_json1_1GameServerGroup = function (output, context) {
    return {
        AutoScalingGroupArn: output.AutoScalingGroupArn !== undefined && output.AutoScalingGroupArn !== null
            ? output.AutoScalingGroupArn
            : undefined,
        BalancingStrategy: output.BalancingStrategy !== undefined && output.BalancingStrategy !== null
            ? output.BalancingStrategy
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        GameServerGroupArn: output.GameServerGroupArn !== undefined && output.GameServerGroupArn !== null
            ? output.GameServerGroupArn
            : undefined,
        GameServerGroupName: output.GameServerGroupName !== undefined && output.GameServerGroupName !== null
            ? output.GameServerGroupName
            : undefined,
        GameServerProtectionPolicy: output.GameServerProtectionPolicy !== undefined && output.GameServerProtectionPolicy !== null
            ? output.GameServerProtectionPolicy
            : undefined,
        InstanceDefinitions: output.InstanceDefinitions !== undefined && output.InstanceDefinitions !== null
            ? deserializeAws_json1_1InstanceDefinitions(output.InstanceDefinitions, context)
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        SuspendedActions: output.SuspendedActions !== undefined && output.SuspendedActions !== null
            ? deserializeAws_json1_1GameServerGroupActions(output.SuspendedActions, context)
            : undefined,
    };
};
var deserializeAws_json1_1GameServerGroupActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1GameServerGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameServerGroup(entry, context);
    });
};
var deserializeAws_json1_1GameServerInstance = function (output, context) {
    return {
        GameServerGroupArn: output.GameServerGroupArn !== undefined && output.GameServerGroupArn !== null
            ? output.GameServerGroupArn
            : undefined,
        GameServerGroupName: output.GameServerGroupName !== undefined && output.GameServerGroupName !== null
            ? output.GameServerGroupName
            : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        InstanceStatus: output.InstanceStatus !== undefined && output.InstanceStatus !== null ? output.InstanceStatus : undefined,
    };
};
var deserializeAws_json1_1GameServerInstances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameServerInstance(entry, context);
    });
};
var deserializeAws_json1_1GameServers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameServer(entry, context);
    });
};
var deserializeAws_json1_1GameSession = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CreatorId: output.CreatorId !== undefined && output.CreatorId !== null ? output.CreatorId : undefined,
        CurrentPlayerSessionCount: output.CurrentPlayerSessionCount !== undefined && output.CurrentPlayerSessionCount !== null
            ? output.CurrentPlayerSessionCount
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        GameProperties: output.GameProperties !== undefined && output.GameProperties !== null
            ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
            : undefined,
        GameSessionData: output.GameSessionData !== undefined && output.GameSessionData !== null ? output.GameSessionData : undefined,
        GameSessionId: output.GameSessionId !== undefined && output.GameSessionId !== null ? output.GameSessionId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        MatchmakerData: output.MatchmakerData !== undefined && output.MatchmakerData !== null ? output.MatchmakerData : undefined,
        MaximumPlayerSessionCount: output.MaximumPlayerSessionCount !== undefined && output.MaximumPlayerSessionCount !== null
            ? output.MaximumPlayerSessionCount
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PlayerSessionCreationPolicy: output.PlayerSessionCreationPolicy !== undefined && output.PlayerSessionCreationPolicy !== null
            ? output.PlayerSessionCreationPolicy
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        TerminationTime: output.TerminationTime !== undefined && output.TerminationTime !== null
            ? new Date(Math.round(output.TerminationTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1GameSessionConnectionInfo = function (output, context) {
    return {
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        GameSessionArn: output.GameSessionArn !== undefined && output.GameSessionArn !== null ? output.GameSessionArn : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        MatchedPlayerSessions: output.MatchedPlayerSessions !== undefined && output.MatchedPlayerSessions !== null
            ? deserializeAws_json1_1MatchedPlayerSessionList(output.MatchedPlayerSessions, context)
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
var deserializeAws_json1_1GameSessionDetail = function (output, context) {
    return {
        GameSession: output.GameSession !== undefined && output.GameSession !== null
            ? deserializeAws_json1_1GameSession(output.GameSession, context)
            : undefined,
        ProtectionPolicy: output.ProtectionPolicy !== undefined && output.ProtectionPolicy !== null ? output.ProtectionPolicy : undefined,
    };
};
var deserializeAws_json1_1GameSessionDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSessionDetail(entry, context);
    });
};
var deserializeAws_json1_1GameSessionFullException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1GameSessionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSession(entry, context);
    });
};
var deserializeAws_json1_1GameSessionPlacement = function (output, context) {
    return {
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        GameProperties: output.GameProperties !== undefined && output.GameProperties !== null
            ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
            : undefined,
        GameSessionArn: output.GameSessionArn !== undefined && output.GameSessionArn !== null ? output.GameSessionArn : undefined,
        GameSessionData: output.GameSessionData !== undefined && output.GameSessionData !== null ? output.GameSessionData : undefined,
        GameSessionId: output.GameSessionId !== undefined && output.GameSessionId !== null ? output.GameSessionId : undefined,
        GameSessionName: output.GameSessionName !== undefined && output.GameSessionName !== null ? output.GameSessionName : undefined,
        GameSessionQueueName: output.GameSessionQueueName !== undefined && output.GameSessionQueueName !== null
            ? output.GameSessionQueueName
            : undefined,
        GameSessionRegion: output.GameSessionRegion !== undefined && output.GameSessionRegion !== null
            ? output.GameSessionRegion
            : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        MatchmakerData: output.MatchmakerData !== undefined && output.MatchmakerData !== null ? output.MatchmakerData : undefined,
        MaximumPlayerSessionCount: output.MaximumPlayerSessionCount !== undefined && output.MaximumPlayerSessionCount !== null
            ? output.MaximumPlayerSessionCount
            : undefined,
        PlacedPlayerSessions: output.PlacedPlayerSessions !== undefined && output.PlacedPlayerSessions !== null
            ? deserializeAws_json1_1PlacedPlayerSessionList(output.PlacedPlayerSessions, context)
            : undefined,
        PlacementId: output.PlacementId !== undefined && output.PlacementId !== null ? output.PlacementId : undefined,
        PlayerLatencies: output.PlayerLatencies !== undefined && output.PlayerLatencies !== null
            ? deserializeAws_json1_1PlayerLatencyList(output.PlayerLatencies, context)
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1GameSessionQueue = function (output, context) {
    return {
        CustomEventData: output.CustomEventData !== undefined && output.CustomEventData !== null ? output.CustomEventData : undefined,
        Destinations: output.Destinations !== undefined && output.Destinations !== null
            ? deserializeAws_json1_1GameSessionQueueDestinationList(output.Destinations, context)
            : undefined,
        FilterConfiguration: output.FilterConfiguration !== undefined && output.FilterConfiguration !== null
            ? deserializeAws_json1_1FilterConfiguration(output.FilterConfiguration, context)
            : undefined,
        GameSessionQueueArn: output.GameSessionQueueArn !== undefined && output.GameSessionQueueArn !== null
            ? output.GameSessionQueueArn
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NotificationTarget: output.NotificationTarget !== undefined && output.NotificationTarget !== null
            ? output.NotificationTarget
            : undefined,
        PlayerLatencyPolicies: output.PlayerLatencyPolicies !== undefined && output.PlayerLatencyPolicies !== null
            ? deserializeAws_json1_1PlayerLatencyPolicyList(output.PlayerLatencyPolicies, context)
            : undefined,
        PriorityConfiguration: output.PriorityConfiguration !== undefined && output.PriorityConfiguration !== null
            ? deserializeAws_json1_1PriorityConfiguration(output.PriorityConfiguration, context)
            : undefined,
        TimeoutInSeconds: output.TimeoutInSeconds !== undefined && output.TimeoutInSeconds !== null ? output.TimeoutInSeconds : undefined,
    };
};
var deserializeAws_json1_1GameSessionQueueDestination = function (output, context) {
    return {
        DestinationArn: output.DestinationArn !== undefined && output.DestinationArn !== null ? output.DestinationArn : undefined,
    };
};
var deserializeAws_json1_1GameSessionQueueDestinationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};
var deserializeAws_json1_1GameSessionQueueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSessionQueue(entry, context);
    });
};
var deserializeAws_json1_1GetGameSessionLogUrlOutput = function (output, context) {
    return {
        PreSignedUrl: output.PreSignedUrl !== undefined && output.PreSignedUrl !== null ? output.PreSignedUrl : undefined,
    };
};
var deserializeAws_json1_1GetInstanceAccessOutput = function (output, context) {
    return {
        InstanceAccess: output.InstanceAccess !== undefined && output.InstanceAccess !== null
            ? deserializeAws_json1_1InstanceAccess(output.InstanceAccess, context)
            : undefined,
    };
};
var deserializeAws_json1_1IdempotentParameterMismatchException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1Instance = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1InstanceAccess = function (output, context) {
    return {
        Credentials: output.Credentials !== undefined && output.Credentials !== null
            ? deserializeAws_json1_1InstanceCredentials(output.Credentials, context)
            : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
    };
};
var deserializeAws_json1_1InstanceCredentials = function (output, context) {
    return {
        Secret: output.Secret !== undefined && output.Secret !== null ? output.Secret : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
var deserializeAws_json1_1InstanceDefinition = function (output, context) {
    return {
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        WeightedCapacity: output.WeightedCapacity !== undefined && output.WeightedCapacity !== null ? output.WeightedCapacity : undefined,
    };
};
var deserializeAws_json1_1InstanceDefinitions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceDefinition(entry, context);
    });
};
var deserializeAws_json1_1InstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Instance(entry, context);
    });
};
var deserializeAws_json1_1InternalServiceException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidFleetStatusException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidGameSessionStatusException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidRequestException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1IpPermission = function (output, context) {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        IpRange: output.IpRange !== undefined && output.IpRange !== null ? output.IpRange : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
var deserializeAws_json1_1IpPermissionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IpPermission(entry, context);
    });
};
var deserializeAws_json1_1LatencyMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListAliasesOutput = function (output, context) {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1AliasList(output.Aliases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListBuildsOutput = function (output, context) {
    return {
        Builds: output.Builds !== undefined && output.Builds !== null
            ? deserializeAws_json1_1BuildList(output.Builds, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListFleetsOutput = function (output, context) {
    return {
        FleetIds: output.FleetIds !== undefined && output.FleetIds !== null
            ? deserializeAws_json1_1FleetIdList(output.FleetIds, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListGameServerGroupsOutput = function (output, context) {
    return {
        GameServerGroups: output.GameServerGroups !== undefined && output.GameServerGroups !== null
            ? deserializeAws_json1_1GameServerGroups(output.GameServerGroups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListGameServersOutput = function (output, context) {
    return {
        GameServers: output.GameServers !== undefined && output.GameServers !== null
            ? deserializeAws_json1_1GameServers(output.GameServers, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListScriptsOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Scripts: output.Scripts !== undefined && output.Scripts !== null
            ? deserializeAws_json1_1ScriptList(output.Scripts, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1LocationAttributes = function (output, context) {
    return {
        LocationState: output.LocationState !== undefined && output.LocationState !== null
            ? deserializeAws_json1_1LocationState(output.LocationState, context)
            : undefined,
        StoppedActions: output.StoppedActions !== undefined && output.StoppedActions !== null
            ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context)
            : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
var deserializeAws_json1_1LocationAttributesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LocationAttributes(entry, context);
    });
};
var deserializeAws_json1_1LocationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1LocationState = function (output, context) {
    return {
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1LocationStateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LocationState(entry, context);
    });
};
var deserializeAws_json1_1MatchedPlayerSession = function (output, context) {
    return {
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        PlayerSessionId: output.PlayerSessionId !== undefined && output.PlayerSessionId !== null ? output.PlayerSessionId : undefined,
    };
};
var deserializeAws_json1_1MatchedPlayerSessionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchedPlayerSession(entry, context);
    });
};
var deserializeAws_json1_1MatchmakingConfiguration = function (output, context) {
    return {
        AcceptanceRequired: output.AcceptanceRequired !== undefined && output.AcceptanceRequired !== null
            ? output.AcceptanceRequired
            : undefined,
        AcceptanceTimeoutSeconds: output.AcceptanceTimeoutSeconds !== undefined && output.AcceptanceTimeoutSeconds !== null
            ? output.AcceptanceTimeoutSeconds
            : undefined,
        AdditionalPlayerCount: output.AdditionalPlayerCount !== undefined && output.AdditionalPlayerCount !== null
            ? output.AdditionalPlayerCount
            : undefined,
        BackfillMode: output.BackfillMode !== undefined && output.BackfillMode !== null ? output.BackfillMode : undefined,
        ConfigurationArn: output.ConfigurationArn !== undefined && output.ConfigurationArn !== null ? output.ConfigurationArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CustomEventData: output.CustomEventData !== undefined && output.CustomEventData !== null ? output.CustomEventData : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FlexMatchMode: output.FlexMatchMode !== undefined && output.FlexMatchMode !== null ? output.FlexMatchMode : undefined,
        GameProperties: output.GameProperties !== undefined && output.GameProperties !== null
            ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
            : undefined,
        GameSessionData: output.GameSessionData !== undefined && output.GameSessionData !== null ? output.GameSessionData : undefined,
        GameSessionQueueArns: output.GameSessionQueueArns !== undefined && output.GameSessionQueueArns !== null
            ? deserializeAws_json1_1QueueArnsList(output.GameSessionQueueArns, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NotificationTarget: output.NotificationTarget !== undefined && output.NotificationTarget !== null
            ? output.NotificationTarget
            : undefined,
        RequestTimeoutSeconds: output.RequestTimeoutSeconds !== undefined && output.RequestTimeoutSeconds !== null
            ? output.RequestTimeoutSeconds
            : undefined,
        RuleSetArn: output.RuleSetArn !== undefined && output.RuleSetArn !== null ? output.RuleSetArn : undefined,
        RuleSetName: output.RuleSetName !== undefined && output.RuleSetName !== null ? output.RuleSetName : undefined,
    };
};
var deserializeAws_json1_1MatchmakingConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchmakingConfiguration(entry, context);
    });
};
var deserializeAws_json1_1MatchmakingRuleSet = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        RuleSetArn: output.RuleSetArn !== undefined && output.RuleSetArn !== null ? output.RuleSetArn : undefined,
        RuleSetBody: output.RuleSetBody !== undefined && output.RuleSetBody !== null ? output.RuleSetBody : undefined,
        RuleSetName: output.RuleSetName !== undefined && output.RuleSetName !== null ? output.RuleSetName : undefined,
    };
};
var deserializeAws_json1_1MatchmakingRuleSetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchmakingRuleSet(entry, context);
    });
};
var deserializeAws_json1_1MatchmakingTicket = function (output, context) {
    return {
        ConfigurationArn: output.ConfigurationArn !== undefined && output.ConfigurationArn !== null ? output.ConfigurationArn : undefined,
        ConfigurationName: output.ConfigurationName !== undefined && output.ConfigurationName !== null
            ? output.ConfigurationName
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        EstimatedWaitTime: output.EstimatedWaitTime !== undefined && output.EstimatedWaitTime !== null
            ? output.EstimatedWaitTime
            : undefined,
        GameSessionConnectionInfo: output.GameSessionConnectionInfo !== undefined && output.GameSessionConnectionInfo !== null
            ? deserializeAws_json1_1GameSessionConnectionInfo(output.GameSessionConnectionInfo, context)
            : undefined,
        Players: output.Players !== undefined && output.Players !== null
            ? deserializeAws_json1_1PlayerList(output.Players, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        TicketId: output.TicketId !== undefined && output.TicketId !== null ? output.TicketId : undefined,
    };
};
var deserializeAws_json1_1MatchmakingTicketList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchmakingTicket(entry, context);
    });
};
var deserializeAws_json1_1MetricGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1OutOfCapacityException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1PlacedPlayerSession = function (output, context) {
    return {
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        PlayerSessionId: output.PlayerSessionId !== undefined && output.PlayerSessionId !== null ? output.PlayerSessionId : undefined,
    };
};
var deserializeAws_json1_1PlacedPlayerSessionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacedPlayerSession(entry, context);
    });
};
var deserializeAws_json1_1Player = function (output, context) {
    return {
        LatencyInMs: output.LatencyInMs !== undefined && output.LatencyInMs !== null
            ? deserializeAws_json1_1LatencyMap(output.LatencyInMs, context)
            : undefined,
        PlayerAttributes: output.PlayerAttributes !== undefined && output.PlayerAttributes !== null
            ? deserializeAws_json1_1PlayerAttributeMap(output.PlayerAttributes, context)
            : undefined,
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        Team: output.Team !== undefined && output.Team !== null ? output.Team : undefined,
    };
};
var deserializeAws_json1_1PlayerAttributeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_1PlayerLatency = function (output, context) {
    return {
        LatencyInMilliseconds: output.LatencyInMilliseconds !== undefined && output.LatencyInMilliseconds !== null
            ? output.LatencyInMilliseconds
            : undefined,
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        RegionIdentifier: output.RegionIdentifier !== undefined && output.RegionIdentifier !== null ? output.RegionIdentifier : undefined,
    };
};
var deserializeAws_json1_1PlayerLatencyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlayerLatency(entry, context);
    });
};
var deserializeAws_json1_1PlayerLatencyPolicy = function (output, context) {
    return {
        MaximumIndividualPlayerLatencyMilliseconds: output.MaximumIndividualPlayerLatencyMilliseconds !== undefined &&
            output.MaximumIndividualPlayerLatencyMilliseconds !== null
            ? output.MaximumIndividualPlayerLatencyMilliseconds
            : undefined,
        PolicyDurationSeconds: output.PolicyDurationSeconds !== undefined && output.PolicyDurationSeconds !== null
            ? output.PolicyDurationSeconds
            : undefined,
    };
};
var deserializeAws_json1_1PlayerLatencyPolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};
var deserializeAws_json1_1PlayerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Player(entry, context);
    });
};
var deserializeAws_json1_1PlayerSession = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        GameSessionId: output.GameSessionId !== undefined && output.GameSessionId !== null ? output.GameSessionId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        PlayerData: output.PlayerData !== undefined && output.PlayerData !== null ? output.PlayerData : undefined,
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        PlayerSessionId: output.PlayerSessionId !== undefined && output.PlayerSessionId !== null ? output.PlayerSessionId : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TerminationTime: output.TerminationTime !== undefined && output.TerminationTime !== null
            ? new Date(Math.round(output.TerminationTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1PlayerSessionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlayerSession(entry, context);
    });
};
var deserializeAws_json1_1PriorityConfiguration = function (output, context) {
    return {
        LocationOrder: output.LocationOrder !== undefined && output.LocationOrder !== null
            ? deserializeAws_json1_1LocationList(output.LocationOrder, context)
            : undefined,
        PriorityOrder: output.PriorityOrder !== undefined && output.PriorityOrder !== null
            ? deserializeAws_json1_1PriorityTypeList(output.PriorityOrder, context)
            : undefined,
    };
};
var deserializeAws_json1_1PriorityTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1PutScalingPolicyOutput = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1QueueArnsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1RegisterGameServerOutput = function (output, context) {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1RequestUploadCredentialsOutput = function (output, context) {
    return {
        StorageLocation: output.StorageLocation !== undefined && output.StorageLocation !== null
            ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
            : undefined,
        UploadCredentials: output.UploadCredentials !== undefined && output.UploadCredentials !== null
            ? deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResolveAliasOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
var deserializeAws_json1_1ResourceCreationLimitPolicy = function (output, context) {
    return {
        NewGameSessionsPerCreator: output.NewGameSessionsPerCreator !== undefined && output.NewGameSessionsPerCreator !== null
            ? output.NewGameSessionsPerCreator
            : undefined,
        PolicyPeriodInMinutes: output.PolicyPeriodInMinutes !== undefined && output.PolicyPeriodInMinutes !== null
            ? output.PolicyPeriodInMinutes
            : undefined,
    };
};
var deserializeAws_json1_1ResumeGameServerGroupOutput = function (output, context) {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1RoutingStrategy = function (output, context) {
    return {
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1RuntimeConfiguration = function (output, context) {
    return {
        GameSessionActivationTimeoutSeconds: output.GameSessionActivationTimeoutSeconds !== undefined && output.GameSessionActivationTimeoutSeconds !== null
            ? output.GameSessionActivationTimeoutSeconds
            : undefined,
        MaxConcurrentGameSessionActivations: output.MaxConcurrentGameSessionActivations !== undefined && output.MaxConcurrentGameSessionActivations !== null
            ? output.MaxConcurrentGameSessionActivations
            : undefined,
        ServerProcesses: output.ServerProcesses !== undefined && output.ServerProcesses !== null
            ? deserializeAws_json1_1ServerProcessList(output.ServerProcesses, context)
            : undefined,
    };
};
var deserializeAws_json1_1S3Location = function (output, context) {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        ObjectVersion: output.ObjectVersion !== undefined && output.ObjectVersion !== null ? output.ObjectVersion : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
var deserializeAws_json1_1ScalingPolicy = function (output, context) {
    return {
        ComparisonOperator: output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
            ? output.ComparisonOperator
            : undefined,
        EvaluationPeriods: output.EvaluationPeriods !== undefined && output.EvaluationPeriods !== null
            ? output.EvaluationPeriods
            : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        ScalingAdjustment: output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
            ? output.ScalingAdjustment
            : undefined,
        ScalingAdjustmentType: output.ScalingAdjustmentType !== undefined && output.ScalingAdjustmentType !== null
            ? output.ScalingAdjustmentType
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TargetConfiguration: output.TargetConfiguration !== undefined && output.TargetConfiguration !== null
            ? deserializeAws_json1_1TargetConfiguration(output.TargetConfiguration, context)
            : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
var deserializeAws_json1_1ScalingPolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
};
var deserializeAws_json1_1Script = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScriptArn: output.ScriptArn !== undefined && output.ScriptArn !== null ? output.ScriptArn : undefined,
        ScriptId: output.ScriptId !== undefined && output.ScriptId !== null ? output.ScriptId : undefined,
        SizeOnDisk: output.SizeOnDisk !== undefined && output.SizeOnDisk !== null ? output.SizeOnDisk : undefined,
        StorageLocation: output.StorageLocation !== undefined && output.StorageLocation !== null
            ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_json1_1ScriptList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Script(entry, context);
    });
};
var deserializeAws_json1_1SearchGameSessionsOutput = function (output, context) {
    return {
        GameSessions: output.GameSessions !== undefined && output.GameSessions !== null
            ? deserializeAws_json1_1GameSessionList(output.GameSessions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ServerProcess = function (output, context) {
    return {
        ConcurrentExecutions: output.ConcurrentExecutions !== undefined && output.ConcurrentExecutions !== null
            ? output.ConcurrentExecutions
            : undefined,
        LaunchPath: output.LaunchPath !== undefined && output.LaunchPath !== null ? output.LaunchPath : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null ? output.Parameters : undefined,
    };
};
var deserializeAws_json1_1ServerProcessList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerProcess(entry, context);
    });
};
var deserializeAws_json1_1StartFleetActionsOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
var deserializeAws_json1_1StartGameSessionPlacementOutput = function (output, context) {
    return {
        GameSessionPlacement: output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
            ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartMatchBackfillOutput = function (output, context) {
    return {
        MatchmakingTicket: output.MatchmakingTicket !== undefined && output.MatchmakingTicket !== null
            ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartMatchmakingOutput = function (output, context) {
    return {
        MatchmakingTicket: output.MatchmakingTicket !== undefined && output.MatchmakingTicket !== null
            ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopFleetActionsOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
var deserializeAws_json1_1StopGameSessionPlacementOutput = function (output, context) {
    return {
        GameSessionPlacement: output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
            ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopMatchmakingOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1StringDoubleMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1StringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SuspendGameServerGroupOutput = function (output, context) {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TaggingFailedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1TargetConfiguration = function (output, context) {
    return {
        TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
    };
};
var deserializeAws_json1_1TerminalRoutingStrategyException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UnauthorizedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UnsupportedRegionException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateAliasOutput = function (output, context) {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null
            ? deserializeAws_json1_1Alias(output.Alias, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateBuildOutput = function (output, context) {
    return {
        Build: output.Build !== undefined && output.Build !== null
            ? deserializeAws_json1_1Build(output.Build, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateFleetAttributesOutput = function (output, context) {
    return {
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
var deserializeAws_json1_1UpdateFleetCapacityOutput = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    };
};
var deserializeAws_json1_1UpdateFleetPortSettingsOutput = function (output, context) {
    return {
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
var deserializeAws_json1_1UpdateGameServerGroupOutput = function (output, context) {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateGameServerOutput = function (output, context) {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateGameSessionOutput = function (output, context) {
    return {
        GameSession: output.GameSession !== undefined && output.GameSession !== null
            ? deserializeAws_json1_1GameSession(output.GameSession, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateGameSessionQueueOutput = function (output, context) {
    return {
        GameSessionQueue: output.GameSessionQueue !== undefined && output.GameSessionQueue !== null
            ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateMatchmakingConfigurationOutput = function (output, context) {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateRuntimeConfigurationOutput = function (output, context) {
    return {
        RuntimeConfiguration: output.RuntimeConfiguration !== undefined && output.RuntimeConfiguration !== null
            ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateScriptOutput = function (output, context) {
    return {
        Script: output.Script !== undefined && output.Script !== null
            ? deserializeAws_json1_1Script(output.Script, context)
            : undefined,
    };
};
var deserializeAws_json1_1ValidateMatchmakingRuleSetOutput = function (output, context) {
    return {
        Valid: output.Valid !== undefined && output.Valid !== null ? output.Valid : undefined,
    };
};
var deserializeAws_json1_1VpcPeeringAuthorization = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        GameLiftAwsAccountId: output.GameLiftAwsAccountId !== undefined && output.GameLiftAwsAccountId !== null
            ? output.GameLiftAwsAccountId
            : undefined,
        PeerVpcAwsAccountId: output.PeerVpcAwsAccountId !== undefined && output.PeerVpcAwsAccountId !== null
            ? output.PeerVpcAwsAccountId
            : undefined,
        PeerVpcId: output.PeerVpcId !== undefined && output.PeerVpcId !== null ? output.PeerVpcId : undefined,
    };
};
var deserializeAws_json1_1VpcPeeringAuthorizationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcPeeringAuthorization(entry, context);
    });
};
var deserializeAws_json1_1VpcPeeringConnection = function (output, context) {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        GameLiftVpcId: output.GameLiftVpcId !== undefined && output.GameLiftVpcId !== null ? output.GameLiftVpcId : undefined,
        IpV4CidrBlock: output.IpV4CidrBlock !== undefined && output.IpV4CidrBlock !== null ? output.IpV4CidrBlock : undefined,
        PeerVpcId: output.PeerVpcId !== undefined && output.PeerVpcId !== null ? output.PeerVpcId : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1VpcPeeringConnectionStatus(output.Status, context)
            : undefined,
        VpcPeeringConnectionId: output.VpcPeeringConnectionId !== undefined && output.VpcPeeringConnectionId !== null
            ? output.VpcPeeringConnectionId
            : undefined,
    };
};
var deserializeAws_json1_1VpcPeeringConnectionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcPeeringConnection(entry, context);
    });
};
var deserializeAws_json1_1VpcPeeringConnectionStatus = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
}); };
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
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
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