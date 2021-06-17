"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UpdateChannelClassCommand = exports.serializeAws_restJson1UpdateChannelCommand = exports.serializeAws_restJson1TransferInputDeviceCommand = exports.serializeAws_restJson1StopMultiplexCommand = exports.serializeAws_restJson1StopChannelCommand = exports.serializeAws_restJson1StartMultiplexCommand = exports.serializeAws_restJson1StartChannelCommand = exports.serializeAws_restJson1RejectInputDeviceTransferCommand = exports.serializeAws_restJson1PurchaseOfferingCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListReservationsCommand = exports.serializeAws_restJson1ListOfferingsCommand = exports.serializeAws_restJson1ListMultiplexProgramsCommand = exports.serializeAws_restJson1ListMultiplexesCommand = exports.serializeAws_restJson1ListInputSecurityGroupsCommand = exports.serializeAws_restJson1ListInputsCommand = exports.serializeAws_restJson1ListInputDeviceTransfersCommand = exports.serializeAws_restJson1ListInputDevicesCommand = exports.serializeAws_restJson1ListChannelsCommand = exports.serializeAws_restJson1DescribeScheduleCommand = exports.serializeAws_restJson1DescribeReservationCommand = exports.serializeAws_restJson1DescribeOfferingCommand = exports.serializeAws_restJson1DescribeMultiplexProgramCommand = exports.serializeAws_restJson1DescribeMultiplexCommand = exports.serializeAws_restJson1DescribeInputSecurityGroupCommand = exports.serializeAws_restJson1DescribeInputDeviceThumbnailCommand = exports.serializeAws_restJson1DescribeInputDeviceCommand = exports.serializeAws_restJson1DescribeInputCommand = exports.serializeAws_restJson1DescribeChannelCommand = exports.serializeAws_restJson1DeleteTagsCommand = exports.serializeAws_restJson1DeleteScheduleCommand = exports.serializeAws_restJson1DeleteReservationCommand = exports.serializeAws_restJson1DeleteMultiplexProgramCommand = exports.serializeAws_restJson1DeleteMultiplexCommand = exports.serializeAws_restJson1DeleteInputSecurityGroupCommand = exports.serializeAws_restJson1DeleteInputCommand = exports.serializeAws_restJson1DeleteChannelCommand = exports.serializeAws_restJson1CreateTagsCommand = exports.serializeAws_restJson1CreatePartnerInputCommand = exports.serializeAws_restJson1CreateMultiplexProgramCommand = exports.serializeAws_restJson1CreateMultiplexCommand = exports.serializeAws_restJson1CreateInputSecurityGroupCommand = exports.serializeAws_restJson1CreateInputCommand = exports.serializeAws_restJson1CreateChannelCommand = exports.serializeAws_restJson1CancelInputDeviceTransferCommand = exports.serializeAws_restJson1BatchUpdateScheduleCommand = exports.serializeAws_restJson1BatchStopCommand = exports.serializeAws_restJson1BatchStartCommand = exports.serializeAws_restJson1BatchDeleteCommand = exports.serializeAws_restJson1AcceptInputDeviceTransferCommand = void 0;
exports.deserializeAws_restJson1StartChannelCommand = exports.deserializeAws_restJson1RejectInputDeviceTransferCommand = exports.deserializeAws_restJson1PurchaseOfferingCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListReservationsCommand = exports.deserializeAws_restJson1ListOfferingsCommand = exports.deserializeAws_restJson1ListMultiplexProgramsCommand = exports.deserializeAws_restJson1ListMultiplexesCommand = exports.deserializeAws_restJson1ListInputSecurityGroupsCommand = exports.deserializeAws_restJson1ListInputsCommand = exports.deserializeAws_restJson1ListInputDeviceTransfersCommand = exports.deserializeAws_restJson1ListInputDevicesCommand = exports.deserializeAws_restJson1ListChannelsCommand = exports.deserializeAws_restJson1DescribeScheduleCommand = exports.deserializeAws_restJson1DescribeReservationCommand = exports.deserializeAws_restJson1DescribeOfferingCommand = exports.deserializeAws_restJson1DescribeMultiplexProgramCommand = exports.deserializeAws_restJson1DescribeMultiplexCommand = exports.deserializeAws_restJson1DescribeInputSecurityGroupCommand = exports.deserializeAws_restJson1DescribeInputDeviceThumbnailCommand = exports.deserializeAws_restJson1DescribeInputDeviceCommand = exports.deserializeAws_restJson1DescribeInputCommand = exports.deserializeAws_restJson1DescribeChannelCommand = exports.deserializeAws_restJson1DeleteTagsCommand = exports.deserializeAws_restJson1DeleteScheduleCommand = exports.deserializeAws_restJson1DeleteReservationCommand = exports.deserializeAws_restJson1DeleteMultiplexProgramCommand = exports.deserializeAws_restJson1DeleteMultiplexCommand = exports.deserializeAws_restJson1DeleteInputSecurityGroupCommand = exports.deserializeAws_restJson1DeleteInputCommand = exports.deserializeAws_restJson1DeleteChannelCommand = exports.deserializeAws_restJson1CreateTagsCommand = exports.deserializeAws_restJson1CreatePartnerInputCommand = exports.deserializeAws_restJson1CreateMultiplexProgramCommand = exports.deserializeAws_restJson1CreateMultiplexCommand = exports.deserializeAws_restJson1CreateInputSecurityGroupCommand = exports.deserializeAws_restJson1CreateInputCommand = exports.deserializeAws_restJson1CreateChannelCommand = exports.deserializeAws_restJson1CancelInputDeviceTransferCommand = exports.deserializeAws_restJson1BatchUpdateScheduleCommand = exports.deserializeAws_restJson1BatchStopCommand = exports.deserializeAws_restJson1BatchStartCommand = exports.deserializeAws_restJson1BatchDeleteCommand = exports.deserializeAws_restJson1AcceptInputDeviceTransferCommand = exports.serializeAws_restJson1UpdateReservationCommand = exports.serializeAws_restJson1UpdateMultiplexProgramCommand = exports.serializeAws_restJson1UpdateMultiplexCommand = exports.serializeAws_restJson1UpdateInputSecurityGroupCommand = exports.serializeAws_restJson1UpdateInputDeviceCommand = exports.serializeAws_restJson1UpdateInputCommand = void 0;
exports.deserializeAws_restJson1UpdateReservationCommand = exports.deserializeAws_restJson1UpdateMultiplexProgramCommand = exports.deserializeAws_restJson1UpdateMultiplexCommand = exports.deserializeAws_restJson1UpdateInputSecurityGroupCommand = exports.deserializeAws_restJson1UpdateInputDeviceCommand = exports.deserializeAws_restJson1UpdateInputCommand = exports.deserializeAws_restJson1UpdateChannelClassCommand = exports.deserializeAws_restJson1UpdateChannelCommand = exports.deserializeAws_restJson1TransferInputDeviceCommand = exports.deserializeAws_restJson1StopMultiplexCommand = exports.deserializeAws_restJson1StopChannelCommand = exports.deserializeAws_restJson1StartMultiplexCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AcceptInputDeviceTransferCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}/accept";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1AcceptInputDeviceTransferCommand = serializeAws_restJson1AcceptInputDeviceTransferCommand;
const serializeAws_restJson1BatchDeleteCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/batch/delete";
    let body;
    body = JSON.stringify({
        ...(input.ChannelIds !== undefined &&
            input.ChannelIds !== null && { channelIds: serializeAws_restJson1__listOf__string(input.ChannelIds, context) }),
        ...(input.InputIds !== undefined &&
            input.InputIds !== null && { inputIds: serializeAws_restJson1__listOf__string(input.InputIds, context) }),
        ...(input.InputSecurityGroupIds !== undefined &&
            input.InputSecurityGroupIds !== null && {
            inputSecurityGroupIds: serializeAws_restJson1__listOf__string(input.InputSecurityGroupIds, context),
        }),
        ...(input.MultiplexIds !== undefined &&
            input.MultiplexIds !== null && {
            multiplexIds: serializeAws_restJson1__listOf__string(input.MultiplexIds, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchDeleteCommand = serializeAws_restJson1BatchDeleteCommand;
const serializeAws_restJson1BatchStartCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/batch/start";
    let body;
    body = JSON.stringify({
        ...(input.ChannelIds !== undefined &&
            input.ChannelIds !== null && { channelIds: serializeAws_restJson1__listOf__string(input.ChannelIds, context) }),
        ...(input.MultiplexIds !== undefined &&
            input.MultiplexIds !== null && {
            multiplexIds: serializeAws_restJson1__listOf__string(input.MultiplexIds, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchStartCommand = serializeAws_restJson1BatchStartCommand;
const serializeAws_restJson1BatchStopCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/batch/stop";
    let body;
    body = JSON.stringify({
        ...(input.ChannelIds !== undefined &&
            input.ChannelIds !== null && { channelIds: serializeAws_restJson1__listOf__string(input.ChannelIds, context) }),
        ...(input.MultiplexIds !== undefined &&
            input.MultiplexIds !== null && {
            multiplexIds: serializeAws_restJson1__listOf__string(input.MultiplexIds, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchStopCommand = serializeAws_restJson1BatchStopCommand;
const serializeAws_restJson1BatchUpdateScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/channels/{ChannelId}/schedule";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Creates !== undefined &&
            input.Creates !== null && {
            creates: serializeAws_restJson1BatchScheduleActionCreateRequest(input.Creates, context),
        }),
        ...(input.Deletes !== undefined &&
            input.Deletes !== null && {
            deletes: serializeAws_restJson1BatchScheduleActionDeleteRequest(input.Deletes, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchUpdateScheduleCommand = serializeAws_restJson1BatchUpdateScheduleCommand;
const serializeAws_restJson1CancelInputDeviceTransferCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}/cancel";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CancelInputDeviceTransferCommand = serializeAws_restJson1CancelInputDeviceTransferCommand;
const serializeAws_restJson1CreateChannelCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/channels";
    let body;
    body = JSON.stringify({
        ...(input.CdiInputSpecification !== undefined &&
            input.CdiInputSpecification !== null && {
            cdiInputSpecification: serializeAws_restJson1CdiInputSpecification(input.CdiInputSpecification, context),
        }),
        ...(input.ChannelClass !== undefined && input.ChannelClass !== null && { channelClass: input.ChannelClass }),
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            destinations: serializeAws_restJson1__listOfOutputDestination(input.Destinations, context),
        }),
        ...(input.EncoderSettings !== undefined &&
            input.EncoderSettings !== null && {
            encoderSettings: serializeAws_restJson1EncoderSettings(input.EncoderSettings, context),
        }),
        ...(input.InputAttachments !== undefined &&
            input.InputAttachments !== null && {
            inputAttachments: serializeAws_restJson1__listOfInputAttachment(input.InputAttachments, context),
        }),
        ...(input.InputSpecification !== undefined &&
            input.InputSpecification !== null && {
            inputSpecification: serializeAws_restJson1InputSpecification(input.InputSpecification, context),
        }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { logLevel: input.LogLevel }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        requestId: (_a = input.RequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Reserved !== undefined && input.Reserved !== null && { reserved: input.Reserved }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.Vpc !== undefined &&
            input.Vpc !== null && { vpc: serializeAws_restJson1VpcOutputSettings(input.Vpc, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateChannelCommand = serializeAws_restJson1CreateChannelCommand;
const serializeAws_restJson1CreateInputCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputs";
    let body;
    body = JSON.stringify({
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            destinations: serializeAws_restJson1__listOfInputDestinationRequest(input.Destinations, context),
        }),
        ...(input.InputDevices !== undefined &&
            input.InputDevices !== null && {
            inputDevices: serializeAws_restJson1__listOfInputDeviceSettings(input.InputDevices, context),
        }),
        ...(input.InputSecurityGroups !== undefined &&
            input.InputSecurityGroups !== null && {
            inputSecurityGroups: serializeAws_restJson1__listOf__string(input.InputSecurityGroups, context),
        }),
        ...(input.MediaConnectFlows !== undefined &&
            input.MediaConnectFlows !== null && {
            mediaConnectFlows: serializeAws_restJson1__listOfMediaConnectFlowRequest(input.MediaConnectFlows, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        requestId: (_a = input.RequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { sources: serializeAws_restJson1__listOfInputSourceRequest(input.Sources, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { type: input.Type }),
        ...(input.Vpc !== undefined &&
            input.Vpc !== null && { vpc: serializeAws_restJson1InputVpcRequest(input.Vpc, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateInputCommand = serializeAws_restJson1CreateInputCommand;
const serializeAws_restJson1CreateInputSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputSecurityGroups";
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.WhitelistRules !== undefined &&
            input.WhitelistRules !== null && {
            whitelistRules: serializeAws_restJson1__listOfInputWhitelistRuleCidr(input.WhitelistRules, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateInputSecurityGroupCommand = serializeAws_restJson1CreateInputSecurityGroupCommand;
const serializeAws_restJson1CreateMultiplexCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/multiplexes";
    let body;
    body = JSON.stringify({
        ...(input.AvailabilityZones !== undefined &&
            input.AvailabilityZones !== null && {
            availabilityZones: serializeAws_restJson1__listOf__string(input.AvailabilityZones, context),
        }),
        ...(input.MultiplexSettings !== undefined &&
            input.MultiplexSettings !== null && {
            multiplexSettings: serializeAws_restJson1MultiplexSettings(input.MultiplexSettings, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        requestId: (_a = input.RequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateMultiplexCommand = serializeAws_restJson1CreateMultiplexCommand;
const serializeAws_restJson1CreateMultiplexProgramCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MultiplexProgramSettings !== undefined &&
            input.MultiplexProgramSettings !== null && {
            multiplexProgramSettings: serializeAws_restJson1MultiplexProgramSettings(input.MultiplexProgramSettings, context),
        }),
        ...(input.ProgramName !== undefined && input.ProgramName !== null && { programName: input.ProgramName }),
        requestId: (_a = input.RequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateMultiplexProgramCommand = serializeAws_restJson1CreateMultiplexProgramCommand;
const serializeAws_restJson1CreatePartnerInputCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputs/{InputId}/partners";
    if (input.InputId !== undefined) {
        const labelValue = input.InputId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputId.");
        }
        resolvedPath = resolvedPath.replace("{InputId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputId.");
    }
    let body;
    body = JSON.stringify({
        requestId: (_a = input.RequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePartnerInputCommand = serializeAws_restJson1CreatePartnerInputCommand;
const serializeAws_restJson1CreateTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTagsCommand = serializeAws_restJson1CreateTagsCommand;
const serializeAws_restJson1DeleteChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels/{ChannelId}";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteChannelCommand = serializeAws_restJson1DeleteChannelCommand;
const serializeAws_restJson1DeleteInputCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputs/{InputId}";
    if (input.InputId !== undefined) {
        const labelValue = input.InputId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputId.");
        }
        resolvedPath = resolvedPath.replace("{InputId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteInputCommand = serializeAws_restJson1DeleteInputCommand;
const serializeAws_restJson1DeleteInputSecurityGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputSecurityGroups/{InputSecurityGroupId}";
    if (input.InputSecurityGroupId !== undefined) {
        const labelValue = input.InputSecurityGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputSecurityGroupId.");
        }
        resolvedPath = resolvedPath.replace("{InputSecurityGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputSecurityGroupId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteInputSecurityGroupCommand = serializeAws_restJson1DeleteInputSecurityGroupCommand;
const serializeAws_restJson1DeleteMultiplexCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteMultiplexCommand = serializeAws_restJson1DeleteMultiplexCommand;
const serializeAws_restJson1DeleteMultiplexProgramCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    if (input.ProgramName !== undefined) {
        const labelValue = input.ProgramName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProgramName.");
        }
        resolvedPath = resolvedPath.replace("{ProgramName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProgramName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteMultiplexProgramCommand = serializeAws_restJson1DeleteMultiplexProgramCommand;
const serializeAws_restJson1DeleteReservationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/reservations/{ReservationId}";
    if (input.ReservationId !== undefined) {
        const labelValue = input.ReservationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ReservationId.");
        }
        resolvedPath = resolvedPath.replace("{ReservationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ReservationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteReservationCommand = serializeAws_restJson1DeleteReservationCommand;
const serializeAws_restJson1DeleteScheduleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels/{ChannelId}/schedule";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteScheduleCommand = serializeAws_restJson1DeleteScheduleCommand;
const serializeAws_restJson1DeleteTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteTagsCommand = serializeAws_restJson1DeleteTagsCommand;
const serializeAws_restJson1DescribeChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels/{ChannelId}";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeChannelCommand = serializeAws_restJson1DescribeChannelCommand;
const serializeAws_restJson1DescribeInputCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputs/{InputId}";
    if (input.InputId !== undefined) {
        const labelValue = input.InputId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputId.");
        }
        resolvedPath = resolvedPath.replace("{InputId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeInputCommand = serializeAws_restJson1DescribeInputCommand;
const serializeAws_restJson1DescribeInputDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeInputDeviceCommand = serializeAws_restJson1DescribeInputDeviceCommand;
const serializeAws_restJson1DescribeInputDeviceThumbnailCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.Accept) && { accept: input.Accept }),
    };
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}/thumbnailData";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeInputDeviceThumbnailCommand = serializeAws_restJson1DescribeInputDeviceThumbnailCommand;
const serializeAws_restJson1DescribeInputSecurityGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputSecurityGroups/{InputSecurityGroupId}";
    if (input.InputSecurityGroupId !== undefined) {
        const labelValue = input.InputSecurityGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputSecurityGroupId.");
        }
        resolvedPath = resolvedPath.replace("{InputSecurityGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputSecurityGroupId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeInputSecurityGroupCommand = serializeAws_restJson1DescribeInputSecurityGroupCommand;
const serializeAws_restJson1DescribeMultiplexCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeMultiplexCommand = serializeAws_restJson1DescribeMultiplexCommand;
const serializeAws_restJson1DescribeMultiplexProgramCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    if (input.ProgramName !== undefined) {
        const labelValue = input.ProgramName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProgramName.");
        }
        resolvedPath = resolvedPath.replace("{ProgramName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProgramName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeMultiplexProgramCommand = serializeAws_restJson1DescribeMultiplexProgramCommand;
const serializeAws_restJson1DescribeOfferingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/offerings/{OfferingId}";
    if (input.OfferingId !== undefined) {
        const labelValue = input.OfferingId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OfferingId.");
        }
        resolvedPath = resolvedPath.replace("{OfferingId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OfferingId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeOfferingCommand = serializeAws_restJson1DescribeOfferingCommand;
const serializeAws_restJson1DescribeReservationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/reservations/{ReservationId}";
    if (input.ReservationId !== undefined) {
        const labelValue = input.ReservationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ReservationId.");
        }
        resolvedPath = resolvedPath.replace("{ReservationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ReservationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeReservationCommand = serializeAws_restJson1DescribeReservationCommand;
const serializeAws_restJson1DescribeScheduleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels/{ChannelId}/schedule";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeScheduleCommand = serializeAws_restJson1DescribeScheduleCommand;
const serializeAws_restJson1ListChannelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListChannelsCommand = serializeAws_restJson1ListChannelsCommand;
const serializeAws_restJson1ListInputDevicesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputDevices";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListInputDevicesCommand = serializeAws_restJson1ListInputDevicesCommand;
const serializeAws_restJson1ListInputDeviceTransfersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputDeviceTransfers";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.TransferType !== undefined && { transferType: input.TransferType }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListInputDeviceTransfersCommand = serializeAws_restJson1ListInputDeviceTransfersCommand;
const serializeAws_restJson1ListInputsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputs";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListInputsCommand = serializeAws_restJson1ListInputsCommand;
const serializeAws_restJson1ListInputSecurityGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputSecurityGroups";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListInputSecurityGroupsCommand = serializeAws_restJson1ListInputSecurityGroupsCommand;
const serializeAws_restJson1ListMultiplexesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListMultiplexesCommand = serializeAws_restJson1ListMultiplexesCommand;
const serializeAws_restJson1ListMultiplexProgramsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListMultiplexProgramsCommand = serializeAws_restJson1ListMultiplexProgramsCommand;
const serializeAws_restJson1ListOfferingsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/offerings";
    const query = {
        ...(input.ChannelClass !== undefined && { channelClass: input.ChannelClass }),
        ...(input.ChannelConfiguration !== undefined && { channelConfiguration: input.ChannelConfiguration }),
        ...(input.Codec !== undefined && { codec: input.Codec }),
        ...(input.Duration !== undefined && { duration: input.Duration }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.MaximumBitrate !== undefined && { maximumBitrate: input.MaximumBitrate }),
        ...(input.MaximumFramerate !== undefined && { maximumFramerate: input.MaximumFramerate }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.Resolution !== undefined && { resolution: input.Resolution }),
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
        ...(input.SpecialFeature !== undefined && { specialFeature: input.SpecialFeature }),
        ...(input.VideoQuality !== undefined && { videoQuality: input.VideoQuality }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListOfferingsCommand = serializeAws_restJson1ListOfferingsCommand;
const serializeAws_restJson1ListReservationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/reservations";
    const query = {
        ...(input.ChannelClass !== undefined && { channelClass: input.ChannelClass }),
        ...(input.Codec !== undefined && { codec: input.Codec }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.MaximumBitrate !== undefined && { maximumBitrate: input.MaximumBitrate }),
        ...(input.MaximumFramerate !== undefined && { maximumFramerate: input.MaximumFramerate }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.Resolution !== undefined && { resolution: input.Resolution }),
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
        ...(input.SpecialFeature !== undefined && { specialFeature: input.SpecialFeature }),
        ...(input.VideoQuality !== undefined && { videoQuality: input.VideoQuality }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListReservationsCommand = serializeAws_restJson1ListReservationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PurchaseOfferingCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/offerings/{OfferingId}/purchase";
    if (input.OfferingId !== undefined) {
        const labelValue = input.OfferingId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OfferingId.");
        }
        resolvedPath = resolvedPath.replace("{OfferingId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OfferingId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Count !== undefined && input.Count !== null && { count: input.Count }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        requestId: (_a = input.RequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Start !== undefined && input.Start !== null && { start: input.Start }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PurchaseOfferingCommand = serializeAws_restJson1PurchaseOfferingCommand;
const serializeAws_restJson1RejectInputDeviceTransferCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}/reject";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1RejectInputDeviceTransferCommand = serializeAws_restJson1RejectInputDeviceTransferCommand;
const serializeAws_restJson1StartChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels/{ChannelId}/start";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StartChannelCommand = serializeAws_restJson1StartChannelCommand;
const serializeAws_restJson1StartMultiplexCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/start";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StartMultiplexCommand = serializeAws_restJson1StartMultiplexCommand;
const serializeAws_restJson1StopChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/channels/{ChannelId}/stop";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StopChannelCommand = serializeAws_restJson1StopChannelCommand;
const serializeAws_restJson1StopMultiplexCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/stop";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StopMultiplexCommand = serializeAws_restJson1StopMultiplexCommand;
const serializeAws_restJson1TransferInputDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}/transfer";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TargetCustomerId !== undefined &&
            input.TargetCustomerId !== null && { targetCustomerId: input.TargetCustomerId }),
        ...(input.TargetRegion !== undefined && input.TargetRegion !== null && { targetRegion: input.TargetRegion }),
        ...(input.TransferMessage !== undefined &&
            input.TransferMessage !== null && { transferMessage: input.TransferMessage }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TransferInputDeviceCommand = serializeAws_restJson1TransferInputDeviceCommand;
const serializeAws_restJson1UpdateChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/channels/{ChannelId}";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CdiInputSpecification !== undefined &&
            input.CdiInputSpecification !== null && {
            cdiInputSpecification: serializeAws_restJson1CdiInputSpecification(input.CdiInputSpecification, context),
        }),
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            destinations: serializeAws_restJson1__listOfOutputDestination(input.Destinations, context),
        }),
        ...(input.EncoderSettings !== undefined &&
            input.EncoderSettings !== null && {
            encoderSettings: serializeAws_restJson1EncoderSettings(input.EncoderSettings, context),
        }),
        ...(input.InputAttachments !== undefined &&
            input.InputAttachments !== null && {
            inputAttachments: serializeAws_restJson1__listOfInputAttachment(input.InputAttachments, context),
        }),
        ...(input.InputSpecification !== undefined &&
            input.InputSpecification !== null && {
            inputSpecification: serializeAws_restJson1InputSpecification(input.InputSpecification, context),
        }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { logLevel: input.LogLevel }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateChannelCommand = serializeAws_restJson1UpdateChannelCommand;
const serializeAws_restJson1UpdateChannelClassCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/channels/{ChannelId}/channelClass";
    if (input.ChannelId !== undefined) {
        const labelValue = input.ChannelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelId.");
        }
        resolvedPath = resolvedPath.replace("{ChannelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ChannelClass !== undefined && input.ChannelClass !== null && { channelClass: input.ChannelClass }),
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            destinations: serializeAws_restJson1__listOfOutputDestination(input.Destinations, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateChannelClassCommand = serializeAws_restJson1UpdateChannelClassCommand;
const serializeAws_restJson1UpdateInputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputs/{InputId}";
    if (input.InputId !== undefined) {
        const labelValue = input.InputId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputId.");
        }
        resolvedPath = resolvedPath.replace("{InputId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            destinations: serializeAws_restJson1__listOfInputDestinationRequest(input.Destinations, context),
        }),
        ...(input.InputDevices !== undefined &&
            input.InputDevices !== null && {
            inputDevices: serializeAws_restJson1__listOfInputDeviceRequest(input.InputDevices, context),
        }),
        ...(input.InputSecurityGroups !== undefined &&
            input.InputSecurityGroups !== null && {
            inputSecurityGroups: serializeAws_restJson1__listOf__string(input.InputSecurityGroups, context),
        }),
        ...(input.MediaConnectFlows !== undefined &&
            input.MediaConnectFlows !== null && {
            mediaConnectFlows: serializeAws_restJson1__listOfMediaConnectFlowRequest(input.MediaConnectFlows, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { sources: serializeAws_restJson1__listOfInputSourceRequest(input.Sources, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateInputCommand = serializeAws_restJson1UpdateInputCommand;
const serializeAws_restJson1UpdateInputDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputDevices/{InputDeviceId}";
    if (input.InputDeviceId !== undefined) {
        const labelValue = input.InputDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{InputDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputDeviceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.HdDeviceSettings !== undefined &&
            input.HdDeviceSettings !== null && {
            hdDeviceSettings: serializeAws_restJson1InputDeviceConfigurableSettings(input.HdDeviceSettings, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.UhdDeviceSettings !== undefined &&
            input.UhdDeviceSettings !== null && {
            uhdDeviceSettings: serializeAws_restJson1InputDeviceConfigurableSettings(input.UhdDeviceSettings, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateInputDeviceCommand = serializeAws_restJson1UpdateInputDeviceCommand;
const serializeAws_restJson1UpdateInputSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/inputSecurityGroups/{InputSecurityGroupId}";
    if (input.InputSecurityGroupId !== undefined) {
        const labelValue = input.InputSecurityGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InputSecurityGroupId.");
        }
        resolvedPath = resolvedPath.replace("{InputSecurityGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InputSecurityGroupId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.WhitelistRules !== undefined &&
            input.WhitelistRules !== null && {
            whitelistRules: serializeAws_restJson1__listOfInputWhitelistRuleCidr(input.WhitelistRules, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateInputSecurityGroupCommand = serializeAws_restJson1UpdateInputSecurityGroupCommand;
const serializeAws_restJson1UpdateMultiplexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/multiplexes/{MultiplexId}";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MultiplexSettings !== undefined &&
            input.MultiplexSettings !== null && {
            multiplexSettings: serializeAws_restJson1MultiplexSettings(input.MultiplexSettings, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateMultiplexCommand = serializeAws_restJson1UpdateMultiplexCommand;
const serializeAws_restJson1UpdateMultiplexProgramCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
    if (input.MultiplexId !== undefined) {
        const labelValue = input.MultiplexId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MultiplexId.");
        }
        resolvedPath = resolvedPath.replace("{MultiplexId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MultiplexId.");
    }
    if (input.ProgramName !== undefined) {
        const labelValue = input.ProgramName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProgramName.");
        }
        resolvedPath = resolvedPath.replace("{ProgramName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProgramName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MultiplexProgramSettings !== undefined &&
            input.MultiplexProgramSettings !== null && {
            multiplexProgramSettings: serializeAws_restJson1MultiplexProgramSettings(input.MultiplexProgramSettings, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateMultiplexProgramCommand = serializeAws_restJson1UpdateMultiplexProgramCommand;
const serializeAws_restJson1UpdateReservationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/prod/reservations/{ReservationId}";
    if (input.ReservationId !== undefined) {
        const labelValue = input.ReservationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ReservationId.");
        }
        resolvedPath = resolvedPath.replace("{ReservationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ReservationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateReservationCommand = serializeAws_restJson1UpdateReservationCommand;
const deserializeAws_restJson1AcceptInputDeviceTransferCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AcceptInputDeviceTransferCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AcceptInputDeviceTransferCommand = deserializeAws_restJson1AcceptInputDeviceTransferCommand;
const deserializeAws_restJson1AcceptInputDeviceTransferCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchDeleteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Failed: undefined,
        Successful: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failed !== undefined && data.failed !== null) {
        contents.Failed = deserializeAws_restJson1__listOfBatchFailedResultModel(data.failed, context);
    }
    if (data.successful !== undefined && data.successful !== null) {
        contents.Successful = deserializeAws_restJson1__listOfBatchSuccessfulResultModel(data.successful, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteCommand = deserializeAws_restJson1BatchDeleteCommand;
const deserializeAws_restJson1BatchDeleteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchStartCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchStartCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Failed: undefined,
        Successful: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failed !== undefined && data.failed !== null) {
        contents.Failed = deserializeAws_restJson1__listOfBatchFailedResultModel(data.failed, context);
    }
    if (data.successful !== undefined && data.successful !== null) {
        contents.Successful = deserializeAws_restJson1__listOfBatchSuccessfulResultModel(data.successful, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchStartCommand = deserializeAws_restJson1BatchStartCommand;
const deserializeAws_restJson1BatchStartCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchStopCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchStopCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Failed: undefined,
        Successful: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failed !== undefined && data.failed !== null) {
        contents.Failed = deserializeAws_restJson1__listOfBatchFailedResultModel(data.failed, context);
    }
    if (data.successful !== undefined && data.successful !== null) {
        contents.Successful = deserializeAws_restJson1__listOfBatchSuccessfulResultModel(data.successful, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchStopCommand = deserializeAws_restJson1BatchStopCommand;
const deserializeAws_restJson1BatchStopCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchUpdateScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchUpdateScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Creates: undefined,
        Deletes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.creates !== undefined && data.creates !== null) {
        contents.Creates = deserializeAws_restJson1BatchScheduleActionCreateResult(data.creates, context);
    }
    if (data.deletes !== undefined && data.deletes !== null) {
        contents.Deletes = deserializeAws_restJson1BatchScheduleActionDeleteResult(data.deletes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchUpdateScheduleCommand = deserializeAws_restJson1BatchUpdateScheduleCommand;
const deserializeAws_restJson1BatchUpdateScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelInputDeviceTransferCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelInputDeviceTransferCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelInputDeviceTransferCommand = deserializeAws_restJson1CancelInputDeviceTransferCommand;
const deserializeAws_restJson1CancelInputDeviceTransferCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateChannelCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Channel: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channel !== undefined && data.channel !== null) {
        contents.Channel = deserializeAws_restJson1Channel(data.channel, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateChannelCommand = deserializeAws_restJson1CreateChannelCommand;
const deserializeAws_restJson1CreateChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateInputCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Input: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.input !== undefined && data.input !== null) {
        contents.Input = deserializeAws_restJson1Input(data.input, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateInputCommand = deserializeAws_restJson1CreateInputCommand;
const deserializeAws_restJson1CreateInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateInputSecurityGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateInputSecurityGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SecurityGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.securityGroup !== undefined && data.securityGroup !== null) {
        contents.SecurityGroup = deserializeAws_restJson1InputSecurityGroup(data.securityGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateInputSecurityGroupCommand = deserializeAws_restJson1CreateInputSecurityGroupCommand;
const deserializeAws_restJson1CreateInputSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateMultiplexCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMultiplexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Multiplex: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.multiplex !== undefined && data.multiplex !== null) {
        contents.Multiplex = deserializeAws_restJson1Multiplex(data.multiplex, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMultiplexCommand = deserializeAws_restJson1CreateMultiplexCommand;
const deserializeAws_restJson1CreateMultiplexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateMultiplexProgramCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMultiplexProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MultiplexProgram: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.multiplexProgram !== undefined && data.multiplexProgram !== null) {
        contents.MultiplexProgram = deserializeAws_restJson1MultiplexProgram(data.multiplexProgram, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMultiplexProgramCommand = deserializeAws_restJson1CreateMultiplexProgramCommand;
const deserializeAws_restJson1CreateMultiplexProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePartnerInputCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePartnerInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Input: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.input !== undefined && data.input !== null) {
        contents.Input = deserializeAws_restJson1Input(data.input, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePartnerInputCommand = deserializeAws_restJson1CreatePartnerInputCommand;
const deserializeAws_restJson1CreatePartnerInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateTagsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTagsCommand = deserializeAws_restJson1CreateTagsCommand;
const deserializeAws_restJson1CreateTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CdiInputSpecification: undefined,
        ChannelClass: undefined,
        Destinations: undefined,
        EgressEndpoints: undefined,
        EncoderSettings: undefined,
        Id: undefined,
        InputAttachments: undefined,
        InputSpecification: undefined,
        LogLevel: undefined,
        Name: undefined,
        PipelineDetails: undefined,
        PipelinesRunningCount: undefined,
        RoleArn: undefined,
        State: undefined,
        Tags: undefined,
        Vpc: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.cdiInputSpecification !== undefined && data.cdiInputSpecification !== null) {
        contents.CdiInputSpecification = deserializeAws_restJson1CdiInputSpecification(data.cdiInputSpecification, context);
    }
    if (data.channelClass !== undefined && data.channelClass !== null) {
        contents.ChannelClass = data.channelClass;
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(data.destinations, context);
    }
    if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
        contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(data.egressEndpoints, context);
    }
    if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
        contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(data.encoderSettings, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
        contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(data.inputAttachments, context);
    }
    if (data.inputSpecification !== undefined && data.inputSpecification !== null) {
        contents.InputSpecification = deserializeAws_restJson1InputSpecification(data.inputSpecification, context);
    }
    if (data.logLevel !== undefined && data.logLevel !== null) {
        contents.LogLevel = data.logLevel;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
        contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(data.pipelineDetails, context);
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.roleArn !== undefined && data.roleArn !== null) {
        contents.RoleArn = data.roleArn;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.vpc !== undefined && data.vpc !== null) {
        contents.Vpc = deserializeAws_restJson1VpcOutputSettingsDescription(data.vpc, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteChannelCommand = deserializeAws_restJson1DeleteChannelCommand;
const deserializeAws_restJson1DeleteChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteInputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInputCommand = deserializeAws_restJson1DeleteInputCommand;
const deserializeAws_restJson1DeleteInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteInputSecurityGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInputSecurityGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInputSecurityGroupCommand = deserializeAws_restJson1DeleteInputSecurityGroupCommand;
const deserializeAws_restJson1DeleteInputSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteMultiplexCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMultiplexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AvailabilityZones: undefined,
        Destinations: undefined,
        Id: undefined,
        MultiplexSettings: undefined,
        Name: undefined,
        PipelinesRunningCount: undefined,
        ProgramCount: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(data.availabilityZones, context);
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(data.destinations, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
        contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(data.multiplexSettings, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.programCount !== undefined && data.programCount !== null) {
        contents.ProgramCount = data.programCount;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMultiplexCommand = deserializeAws_restJson1DeleteMultiplexCommand;
const deserializeAws_restJson1DeleteMultiplexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteMultiplexProgramCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMultiplexProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChannelId: undefined,
        MultiplexProgramSettings: undefined,
        PacketIdentifiersMap: undefined,
        PipelineDetails: undefined,
        ProgramName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channelId !== undefined && data.channelId !== null) {
        contents.ChannelId = data.channelId;
    }
    if (data.multiplexProgramSettings !== undefined && data.multiplexProgramSettings !== null) {
        contents.MultiplexProgramSettings = deserializeAws_restJson1MultiplexProgramSettings(data.multiplexProgramSettings, context);
    }
    if (data.packetIdentifiersMap !== undefined && data.packetIdentifiersMap !== null) {
        contents.PacketIdentifiersMap = deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap(data.packetIdentifiersMap, context);
    }
    if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
        contents.PipelineDetails = deserializeAws_restJson1__listOfMultiplexProgramPipelineDetail(data.pipelineDetails, context);
    }
    if (data.programName !== undefined && data.programName !== null) {
        contents.ProgramName = data.programName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMultiplexProgramCommand = deserializeAws_restJson1DeleteMultiplexProgramCommand;
const deserializeAws_restJson1DeleteMultiplexProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteReservationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteReservationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Count: undefined,
        CurrencyCode: undefined,
        Duration: undefined,
        DurationUnits: undefined,
        End: undefined,
        FixedPrice: undefined,
        Name: undefined,
        OfferingDescription: undefined,
        OfferingId: undefined,
        OfferingType: undefined,
        Region: undefined,
        ReservationId: undefined,
        ResourceSpecification: undefined,
        Start: undefined,
        State: undefined,
        Tags: undefined,
        UsagePrice: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.count !== undefined && data.count !== null) {
        contents.Count = data.count;
    }
    if (data.currencyCode !== undefined && data.currencyCode !== null) {
        contents.CurrencyCode = data.currencyCode;
    }
    if (data.duration !== undefined && data.duration !== null) {
        contents.Duration = data.duration;
    }
    if (data.durationUnits !== undefined && data.durationUnits !== null) {
        contents.DurationUnits = data.durationUnits;
    }
    if (data.end !== undefined && data.end !== null) {
        contents.End = data.end;
    }
    if (data.fixedPrice !== undefined && data.fixedPrice !== null) {
        contents.FixedPrice = data.fixedPrice;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.offeringDescription !== undefined && data.offeringDescription !== null) {
        contents.OfferingDescription = data.offeringDescription;
    }
    if (data.offeringId !== undefined && data.offeringId !== null) {
        contents.OfferingId = data.offeringId;
    }
    if (data.offeringType !== undefined && data.offeringType !== null) {
        contents.OfferingType = data.offeringType;
    }
    if (data.region !== undefined && data.region !== null) {
        contents.Region = data.region;
    }
    if (data.reservationId !== undefined && data.reservationId !== null) {
        contents.ReservationId = data.reservationId;
    }
    if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
        contents.ResourceSpecification = deserializeAws_restJson1ReservationResourceSpecification(data.resourceSpecification, context);
    }
    if (data.start !== undefined && data.start !== null) {
        contents.Start = data.start;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.usagePrice !== undefined && data.usagePrice !== null) {
        contents.UsagePrice = data.usagePrice;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteReservationCommand = deserializeAws_restJson1DeleteReservationCommand;
const deserializeAws_restJson1DeleteReservationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteScheduleCommand = deserializeAws_restJson1DeleteScheduleCommand;
const deserializeAws_restJson1DeleteScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteTagsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTagsCommand = deserializeAws_restJson1DeleteTagsCommand;
const deserializeAws_restJson1DeleteTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CdiInputSpecification: undefined,
        ChannelClass: undefined,
        Destinations: undefined,
        EgressEndpoints: undefined,
        EncoderSettings: undefined,
        Id: undefined,
        InputAttachments: undefined,
        InputSpecification: undefined,
        LogLevel: undefined,
        Name: undefined,
        PipelineDetails: undefined,
        PipelinesRunningCount: undefined,
        RoleArn: undefined,
        State: undefined,
        Tags: undefined,
        Vpc: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.cdiInputSpecification !== undefined && data.cdiInputSpecification !== null) {
        contents.CdiInputSpecification = deserializeAws_restJson1CdiInputSpecification(data.cdiInputSpecification, context);
    }
    if (data.channelClass !== undefined && data.channelClass !== null) {
        contents.ChannelClass = data.channelClass;
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(data.destinations, context);
    }
    if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
        contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(data.egressEndpoints, context);
    }
    if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
        contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(data.encoderSettings, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
        contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(data.inputAttachments, context);
    }
    if (data.inputSpecification !== undefined && data.inputSpecification !== null) {
        contents.InputSpecification = deserializeAws_restJson1InputSpecification(data.inputSpecification, context);
    }
    if (data.logLevel !== undefined && data.logLevel !== null) {
        contents.LogLevel = data.logLevel;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
        contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(data.pipelineDetails, context);
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.roleArn !== undefined && data.roleArn !== null) {
        contents.RoleArn = data.roleArn;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.vpc !== undefined && data.vpc !== null) {
        contents.Vpc = deserializeAws_restJson1VpcOutputSettingsDescription(data.vpc, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeChannelCommand = deserializeAws_restJson1DescribeChannelCommand;
const deserializeAws_restJson1DescribeChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeInputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AttachedChannels: undefined,
        Destinations: undefined,
        Id: undefined,
        InputClass: undefined,
        InputDevices: undefined,
        InputPartnerIds: undefined,
        InputSourceType: undefined,
        MediaConnectFlows: undefined,
        Name: undefined,
        RoleArn: undefined,
        SecurityGroups: undefined,
        Sources: undefined,
        State: undefined,
        Tags: undefined,
        Type: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.attachedChannels !== undefined && data.attachedChannels !== null) {
        contents.AttachedChannels = deserializeAws_restJson1__listOf__string(data.attachedChannels, context);
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfInputDestination(data.destinations, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.inputClass !== undefined && data.inputClass !== null) {
        contents.InputClass = data.inputClass;
    }
    if (data.inputDevices !== undefined && data.inputDevices !== null) {
        contents.InputDevices = deserializeAws_restJson1__listOfInputDeviceSettings(data.inputDevices, context);
    }
    if (data.inputPartnerIds !== undefined && data.inputPartnerIds !== null) {
        contents.InputPartnerIds = deserializeAws_restJson1__listOf__string(data.inputPartnerIds, context);
    }
    if (data.inputSourceType !== undefined && data.inputSourceType !== null) {
        contents.InputSourceType = data.inputSourceType;
    }
    if (data.mediaConnectFlows !== undefined && data.mediaConnectFlows !== null) {
        contents.MediaConnectFlows = deserializeAws_restJson1__listOfMediaConnectFlow(data.mediaConnectFlows, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.roleArn !== undefined && data.roleArn !== null) {
        contents.RoleArn = data.roleArn;
    }
    if (data.securityGroups !== undefined && data.securityGroups !== null) {
        contents.SecurityGroups = deserializeAws_restJson1__listOf__string(data.securityGroups, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.Sources = deserializeAws_restJson1__listOfInputSource(data.sources, context);
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.type !== undefined && data.type !== null) {
        contents.Type = data.type;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInputCommand = deserializeAws_restJson1DescribeInputCommand;
const deserializeAws_restJson1DescribeInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeInputDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInputDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        ConnectionState: undefined,
        DeviceSettingsSyncState: undefined,
        DeviceUpdateStatus: undefined,
        HdDeviceSettings: undefined,
        Id: undefined,
        MacAddress: undefined,
        Name: undefined,
        NetworkSettings: undefined,
        SerialNumber: undefined,
        Type: undefined,
        UhdDeviceSettings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.connectionState !== undefined && data.connectionState !== null) {
        contents.ConnectionState = data.connectionState;
    }
    if (data.deviceSettingsSyncState !== undefined && data.deviceSettingsSyncState !== null) {
        contents.DeviceSettingsSyncState = data.deviceSettingsSyncState;
    }
    if (data.deviceUpdateStatus !== undefined && data.deviceUpdateStatus !== null) {
        contents.DeviceUpdateStatus = data.deviceUpdateStatus;
    }
    if (data.hdDeviceSettings !== undefined && data.hdDeviceSettings !== null) {
        contents.HdDeviceSettings = deserializeAws_restJson1InputDeviceHdSettings(data.hdDeviceSettings, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.macAddress !== undefined && data.macAddress !== null) {
        contents.MacAddress = data.macAddress;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.networkSettings !== undefined && data.networkSettings !== null) {
        contents.NetworkSettings = deserializeAws_restJson1InputDeviceNetworkSettings(data.networkSettings, context);
    }
    if (data.serialNumber !== undefined && data.serialNumber !== null) {
        contents.SerialNumber = data.serialNumber;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.Type = data.type;
    }
    if (data.uhdDeviceSettings !== undefined && data.uhdDeviceSettings !== null) {
        contents.UhdDeviceSettings = deserializeAws_restJson1InputDeviceUhdSettings(data.uhdDeviceSettings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInputDeviceCommand = deserializeAws_restJson1DescribeInputDeviceCommand;
const deserializeAws_restJson1DescribeInputDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeInputDeviceThumbnailCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInputDeviceThumbnailCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Body: undefined,
        ContentLength: undefined,
        ContentType: undefined,
        ETag: undefined,
        LastModified: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    if (output.headers["content-length"] !== undefined) {
        contents.ContentLength = parseInt(output.headers["content-length"], 10);
    }
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["last-modified"] !== undefined) {
        contents.LastModified = new Date(output.headers["last-modified"]);
    }
    const data = output.body;
    contents.Body = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInputDeviceThumbnailCommand = deserializeAws_restJson1DescribeInputDeviceThumbnailCommand;
const deserializeAws_restJson1DescribeInputDeviceThumbnailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeInputSecurityGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInputSecurityGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
        Inputs: undefined,
        State: undefined,
        Tags: undefined,
        WhitelistRules: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.inputs !== undefined && data.inputs !== null) {
        contents.Inputs = deserializeAws_restJson1__listOf__string(data.inputs, context);
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.whitelistRules !== undefined && data.whitelistRules !== null) {
        contents.WhitelistRules = deserializeAws_restJson1__listOfInputWhitelistRule(data.whitelistRules, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInputSecurityGroupCommand = deserializeAws_restJson1DescribeInputSecurityGroupCommand;
const deserializeAws_restJson1DescribeInputSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeMultiplexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMultiplexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AvailabilityZones: undefined,
        Destinations: undefined,
        Id: undefined,
        MultiplexSettings: undefined,
        Name: undefined,
        PipelinesRunningCount: undefined,
        ProgramCount: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(data.availabilityZones, context);
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(data.destinations, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
        contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(data.multiplexSettings, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.programCount !== undefined && data.programCount !== null) {
        contents.ProgramCount = data.programCount;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMultiplexCommand = deserializeAws_restJson1DescribeMultiplexCommand;
const deserializeAws_restJson1DescribeMultiplexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeMultiplexProgramCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMultiplexProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChannelId: undefined,
        MultiplexProgramSettings: undefined,
        PacketIdentifiersMap: undefined,
        PipelineDetails: undefined,
        ProgramName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channelId !== undefined && data.channelId !== null) {
        contents.ChannelId = data.channelId;
    }
    if (data.multiplexProgramSettings !== undefined && data.multiplexProgramSettings !== null) {
        contents.MultiplexProgramSettings = deserializeAws_restJson1MultiplexProgramSettings(data.multiplexProgramSettings, context);
    }
    if (data.packetIdentifiersMap !== undefined && data.packetIdentifiersMap !== null) {
        contents.PacketIdentifiersMap = deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap(data.packetIdentifiersMap, context);
    }
    if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
        contents.PipelineDetails = deserializeAws_restJson1__listOfMultiplexProgramPipelineDetail(data.pipelineDetails, context);
    }
    if (data.programName !== undefined && data.programName !== null) {
        contents.ProgramName = data.programName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMultiplexProgramCommand = deserializeAws_restJson1DescribeMultiplexProgramCommand;
const deserializeAws_restJson1DescribeMultiplexProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeOfferingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeOfferingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CurrencyCode: undefined,
        Duration: undefined,
        DurationUnits: undefined,
        FixedPrice: undefined,
        OfferingDescription: undefined,
        OfferingId: undefined,
        OfferingType: undefined,
        Region: undefined,
        ResourceSpecification: undefined,
        UsagePrice: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.currencyCode !== undefined && data.currencyCode !== null) {
        contents.CurrencyCode = data.currencyCode;
    }
    if (data.duration !== undefined && data.duration !== null) {
        contents.Duration = data.duration;
    }
    if (data.durationUnits !== undefined && data.durationUnits !== null) {
        contents.DurationUnits = data.durationUnits;
    }
    if (data.fixedPrice !== undefined && data.fixedPrice !== null) {
        contents.FixedPrice = data.fixedPrice;
    }
    if (data.offeringDescription !== undefined && data.offeringDescription !== null) {
        contents.OfferingDescription = data.offeringDescription;
    }
    if (data.offeringId !== undefined && data.offeringId !== null) {
        contents.OfferingId = data.offeringId;
    }
    if (data.offeringType !== undefined && data.offeringType !== null) {
        contents.OfferingType = data.offeringType;
    }
    if (data.region !== undefined && data.region !== null) {
        contents.Region = data.region;
    }
    if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
        contents.ResourceSpecification = deserializeAws_restJson1ReservationResourceSpecification(data.resourceSpecification, context);
    }
    if (data.usagePrice !== undefined && data.usagePrice !== null) {
        contents.UsagePrice = data.usagePrice;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeOfferingCommand = deserializeAws_restJson1DescribeOfferingCommand;
const deserializeAws_restJson1DescribeOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeReservationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeReservationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Count: undefined,
        CurrencyCode: undefined,
        Duration: undefined,
        DurationUnits: undefined,
        End: undefined,
        FixedPrice: undefined,
        Name: undefined,
        OfferingDescription: undefined,
        OfferingId: undefined,
        OfferingType: undefined,
        Region: undefined,
        ReservationId: undefined,
        ResourceSpecification: undefined,
        Start: undefined,
        State: undefined,
        Tags: undefined,
        UsagePrice: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.count !== undefined && data.count !== null) {
        contents.Count = data.count;
    }
    if (data.currencyCode !== undefined && data.currencyCode !== null) {
        contents.CurrencyCode = data.currencyCode;
    }
    if (data.duration !== undefined && data.duration !== null) {
        contents.Duration = data.duration;
    }
    if (data.durationUnits !== undefined && data.durationUnits !== null) {
        contents.DurationUnits = data.durationUnits;
    }
    if (data.end !== undefined && data.end !== null) {
        contents.End = data.end;
    }
    if (data.fixedPrice !== undefined && data.fixedPrice !== null) {
        contents.FixedPrice = data.fixedPrice;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.offeringDescription !== undefined && data.offeringDescription !== null) {
        contents.OfferingDescription = data.offeringDescription;
    }
    if (data.offeringId !== undefined && data.offeringId !== null) {
        contents.OfferingId = data.offeringId;
    }
    if (data.offeringType !== undefined && data.offeringType !== null) {
        contents.OfferingType = data.offeringType;
    }
    if (data.region !== undefined && data.region !== null) {
        contents.Region = data.region;
    }
    if (data.reservationId !== undefined && data.reservationId !== null) {
        contents.ReservationId = data.reservationId;
    }
    if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
        contents.ResourceSpecification = deserializeAws_restJson1ReservationResourceSpecification(data.resourceSpecification, context);
    }
    if (data.start !== undefined && data.start !== null) {
        contents.Start = data.start;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.usagePrice !== undefined && data.usagePrice !== null) {
        contents.UsagePrice = data.usagePrice;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeReservationCommand = deserializeAws_restJson1DescribeReservationCommand;
const deserializeAws_restJson1DescribeReservationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ScheduleActions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.scheduleActions !== undefined && data.scheduleActions !== null) {
        contents.ScheduleActions = deserializeAws_restJson1__listOfScheduleAction(data.scheduleActions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeScheduleCommand = deserializeAws_restJson1DescribeScheduleCommand;
const deserializeAws_restJson1DescribeScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Channels: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channels !== undefined && data.channels !== null) {
        contents.Channels = deserializeAws_restJson1__listOfChannelSummary(data.channels, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListChannelsCommand = deserializeAws_restJson1ListChannelsCommand;
const deserializeAws_restJson1ListChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListInputDevicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInputDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InputDevices: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputDevices !== undefined && data.inputDevices !== null) {
        contents.InputDevices = deserializeAws_restJson1__listOfInputDeviceSummary(data.inputDevices, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInputDevicesCommand = deserializeAws_restJson1ListInputDevicesCommand;
const deserializeAws_restJson1ListInputDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListInputDeviceTransfersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInputDeviceTransfersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InputDeviceTransfers: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputDeviceTransfers !== undefined && data.inputDeviceTransfers !== null) {
        contents.InputDeviceTransfers = deserializeAws_restJson1__listOfTransferringInputDeviceSummary(data.inputDeviceTransfers, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInputDeviceTransfersCommand = deserializeAws_restJson1ListInputDeviceTransfersCommand;
const deserializeAws_restJson1ListInputDeviceTransfersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListInputsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInputsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Inputs: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputs !== undefined && data.inputs !== null) {
        contents.Inputs = deserializeAws_restJson1__listOfInput(data.inputs, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInputsCommand = deserializeAws_restJson1ListInputsCommand;
const deserializeAws_restJson1ListInputsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListInputSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInputSecurityGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InputSecurityGroups: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputSecurityGroups !== undefined && data.inputSecurityGroups !== null) {
        contents.InputSecurityGroups = deserializeAws_restJson1__listOfInputSecurityGroup(data.inputSecurityGroups, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInputSecurityGroupsCommand = deserializeAws_restJson1ListInputSecurityGroupsCommand;
const deserializeAws_restJson1ListInputSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListMultiplexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMultiplexesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Multiplexes: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.multiplexes !== undefined && data.multiplexes !== null) {
        contents.Multiplexes = deserializeAws_restJson1__listOfMultiplexSummary(data.multiplexes, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMultiplexesCommand = deserializeAws_restJson1ListMultiplexesCommand;
const deserializeAws_restJson1ListMultiplexesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListMultiplexProgramsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMultiplexProgramsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MultiplexPrograms: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.multiplexPrograms !== undefined && data.multiplexPrograms !== null) {
        contents.MultiplexPrograms = deserializeAws_restJson1__listOfMultiplexProgramSummary(data.multiplexPrograms, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMultiplexProgramsCommand = deserializeAws_restJson1ListMultiplexProgramsCommand;
const deserializeAws_restJson1ListMultiplexProgramsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListOfferingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListOfferingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Offerings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.offerings !== undefined && data.offerings !== null) {
        contents.Offerings = deserializeAws_restJson1__listOfOffering(data.offerings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListOfferingsCommand = deserializeAws_restJson1ListOfferingsCommand;
const deserializeAws_restJson1ListOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListReservationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListReservationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Reservations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.reservations !== undefined && data.reservations !== null) {
        contents.Reservations = deserializeAws_restJson1__listOfReservation(data.reservations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListReservationsCommand = deserializeAws_restJson1ListReservationsCommand;
const deserializeAws_restJson1ListReservationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PurchaseOfferingCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1PurchaseOfferingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Reservation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.reservation !== undefined && data.reservation !== null) {
        contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PurchaseOfferingCommand = deserializeAws_restJson1PurchaseOfferingCommand;
const deserializeAws_restJson1PurchaseOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RejectInputDeviceTransferCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RejectInputDeviceTransferCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RejectInputDeviceTransferCommand = deserializeAws_restJson1RejectInputDeviceTransferCommand;
const deserializeAws_restJson1RejectInputDeviceTransferCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CdiInputSpecification: undefined,
        ChannelClass: undefined,
        Destinations: undefined,
        EgressEndpoints: undefined,
        EncoderSettings: undefined,
        Id: undefined,
        InputAttachments: undefined,
        InputSpecification: undefined,
        LogLevel: undefined,
        Name: undefined,
        PipelineDetails: undefined,
        PipelinesRunningCount: undefined,
        RoleArn: undefined,
        State: undefined,
        Tags: undefined,
        Vpc: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.cdiInputSpecification !== undefined && data.cdiInputSpecification !== null) {
        contents.CdiInputSpecification = deserializeAws_restJson1CdiInputSpecification(data.cdiInputSpecification, context);
    }
    if (data.channelClass !== undefined && data.channelClass !== null) {
        contents.ChannelClass = data.channelClass;
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(data.destinations, context);
    }
    if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
        contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(data.egressEndpoints, context);
    }
    if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
        contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(data.encoderSettings, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
        contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(data.inputAttachments, context);
    }
    if (data.inputSpecification !== undefined && data.inputSpecification !== null) {
        contents.InputSpecification = deserializeAws_restJson1InputSpecification(data.inputSpecification, context);
    }
    if (data.logLevel !== undefined && data.logLevel !== null) {
        contents.LogLevel = data.logLevel;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
        contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(data.pipelineDetails, context);
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.roleArn !== undefined && data.roleArn !== null) {
        contents.RoleArn = data.roleArn;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.vpc !== undefined && data.vpc !== null) {
        contents.Vpc = deserializeAws_restJson1VpcOutputSettingsDescription(data.vpc, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartChannelCommand = deserializeAws_restJson1StartChannelCommand;
const deserializeAws_restJson1StartChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartMultiplexCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartMultiplexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AvailabilityZones: undefined,
        Destinations: undefined,
        Id: undefined,
        MultiplexSettings: undefined,
        Name: undefined,
        PipelinesRunningCount: undefined,
        ProgramCount: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(data.availabilityZones, context);
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(data.destinations, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
        contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(data.multiplexSettings, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.programCount !== undefined && data.programCount !== null) {
        contents.ProgramCount = data.programCount;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartMultiplexCommand = deserializeAws_restJson1StartMultiplexCommand;
const deserializeAws_restJson1StartMultiplexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StopChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CdiInputSpecification: undefined,
        ChannelClass: undefined,
        Destinations: undefined,
        EgressEndpoints: undefined,
        EncoderSettings: undefined,
        Id: undefined,
        InputAttachments: undefined,
        InputSpecification: undefined,
        LogLevel: undefined,
        Name: undefined,
        PipelineDetails: undefined,
        PipelinesRunningCount: undefined,
        RoleArn: undefined,
        State: undefined,
        Tags: undefined,
        Vpc: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.cdiInputSpecification !== undefined && data.cdiInputSpecification !== null) {
        contents.CdiInputSpecification = deserializeAws_restJson1CdiInputSpecification(data.cdiInputSpecification, context);
    }
    if (data.channelClass !== undefined && data.channelClass !== null) {
        contents.ChannelClass = data.channelClass;
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(data.destinations, context);
    }
    if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
        contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(data.egressEndpoints, context);
    }
    if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
        contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(data.encoderSettings, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
        contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(data.inputAttachments, context);
    }
    if (data.inputSpecification !== undefined && data.inputSpecification !== null) {
        contents.InputSpecification = deserializeAws_restJson1InputSpecification(data.inputSpecification, context);
    }
    if (data.logLevel !== undefined && data.logLevel !== null) {
        contents.LogLevel = data.logLevel;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
        contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(data.pipelineDetails, context);
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.roleArn !== undefined && data.roleArn !== null) {
        contents.RoleArn = data.roleArn;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.vpc !== undefined && data.vpc !== null) {
        contents.Vpc = deserializeAws_restJson1VpcOutputSettingsDescription(data.vpc, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopChannelCommand = deserializeAws_restJson1StopChannelCommand;
const deserializeAws_restJson1StopChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StopMultiplexCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopMultiplexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AvailabilityZones: undefined,
        Destinations: undefined,
        Id: undefined,
        MultiplexSettings: undefined,
        Name: undefined,
        PipelinesRunningCount: undefined,
        ProgramCount: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(data.availabilityZones, context);
    }
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(data.destinations, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
        contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(data.multiplexSettings, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.pipelinesRunningCount !== undefined && data.pipelinesRunningCount !== null) {
        contents.PipelinesRunningCount = data.pipelinesRunningCount;
    }
    if (data.programCount !== undefined && data.programCount !== null) {
        contents.ProgramCount = data.programCount;
    }
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopMultiplexCommand = deserializeAws_restJson1StopMultiplexCommand;
const deserializeAws_restJson1StopMultiplexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TransferInputDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TransferInputDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TransferInputDeviceCommand = deserializeAws_restJson1TransferInputDeviceCommand;
const deserializeAws_restJson1TransferInputDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Channel: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channel !== undefined && data.channel !== null) {
        contents.Channel = deserializeAws_restJson1Channel(data.channel, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateChannelCommand = deserializeAws_restJson1UpdateChannelCommand;
const deserializeAws_restJson1UpdateChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateChannelClassCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateChannelClassCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Channel: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channel !== undefined && data.channel !== null) {
        contents.Channel = deserializeAws_restJson1Channel(data.channel, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateChannelClassCommand = deserializeAws_restJson1UpdateChannelClassCommand;
const deserializeAws_restJson1UpdateChannelClassCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateInputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Input: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.input !== undefined && data.input !== null) {
        contents.Input = deserializeAws_restJson1Input(data.input, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInputCommand = deserializeAws_restJson1UpdateInputCommand;
const deserializeAws_restJson1UpdateInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateInputDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInputDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        ConnectionState: undefined,
        DeviceSettingsSyncState: undefined,
        DeviceUpdateStatus: undefined,
        HdDeviceSettings: undefined,
        Id: undefined,
        MacAddress: undefined,
        Name: undefined,
        NetworkSettings: undefined,
        SerialNumber: undefined,
        Type: undefined,
        UhdDeviceSettings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.connectionState !== undefined && data.connectionState !== null) {
        contents.ConnectionState = data.connectionState;
    }
    if (data.deviceSettingsSyncState !== undefined && data.deviceSettingsSyncState !== null) {
        contents.DeviceSettingsSyncState = data.deviceSettingsSyncState;
    }
    if (data.deviceUpdateStatus !== undefined && data.deviceUpdateStatus !== null) {
        contents.DeviceUpdateStatus = data.deviceUpdateStatus;
    }
    if (data.hdDeviceSettings !== undefined && data.hdDeviceSettings !== null) {
        contents.HdDeviceSettings = deserializeAws_restJson1InputDeviceHdSettings(data.hdDeviceSettings, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.macAddress !== undefined && data.macAddress !== null) {
        contents.MacAddress = data.macAddress;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.networkSettings !== undefined && data.networkSettings !== null) {
        contents.NetworkSettings = deserializeAws_restJson1InputDeviceNetworkSettings(data.networkSettings, context);
    }
    if (data.serialNumber !== undefined && data.serialNumber !== null) {
        contents.SerialNumber = data.serialNumber;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.Type = data.type;
    }
    if (data.uhdDeviceSettings !== undefined && data.uhdDeviceSettings !== null) {
        contents.UhdDeviceSettings = deserializeAws_restJson1InputDeviceUhdSettings(data.uhdDeviceSettings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInputDeviceCommand = deserializeAws_restJson1UpdateInputDeviceCommand;
const deserializeAws_restJson1UpdateInputDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateInputSecurityGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInputSecurityGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SecurityGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.securityGroup !== undefined && data.securityGroup !== null) {
        contents.SecurityGroup = deserializeAws_restJson1InputSecurityGroup(data.securityGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInputSecurityGroupCommand = deserializeAws_restJson1UpdateInputSecurityGroupCommand;
const deserializeAws_restJson1UpdateInputSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMultiplexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMultiplexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Multiplex: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.multiplex !== undefined && data.multiplex !== null) {
        contents.Multiplex = deserializeAws_restJson1Multiplex(data.multiplex, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMultiplexCommand = deserializeAws_restJson1UpdateMultiplexCommand;
const deserializeAws_restJson1UpdateMultiplexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMultiplexProgramCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMultiplexProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MultiplexProgram: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.multiplexProgram !== undefined && data.multiplexProgram !== null) {
        contents.MultiplexProgram = deserializeAws_restJson1MultiplexProgram(data.multiplexProgram, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMultiplexProgramCommand = deserializeAws_restJson1UpdateMultiplexProgramCommand;
const deserializeAws_restJson1UpdateMultiplexProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.medialive#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateReservationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateReservationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Reservation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.reservation !== undefined && data.reservation !== null) {
        contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateReservationCommand = deserializeAws_restJson1UpdateReservationCommand;
const deserializeAws_restJson1UpdateReservationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.medialive#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.medialive#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.medialive#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.medialive#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GatewayTimeoutException":
        case "com.amazonaws.medialive#GatewayTimeoutException":
            response = {
                ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.medialive#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.medialive#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.medialive#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BadGatewayExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadGatewayException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1GatewayTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "GatewayTimeoutException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnprocessableEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ValidationErrors: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    if (data.validationErrors !== undefined && data.validationErrors !== null) {
        contents.ValidationErrors = deserializeAws_restJson1__listOfValidationError(data.validationErrors, context);
    }
    return contents;
};
const serializeAws_restJson1__listOf__string = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfAudioChannelMapping = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioChannelMapping(entry, context);
    });
};
const serializeAws_restJson1__listOfAudioDescription = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioDescription(entry, context);
    });
};
const serializeAws_restJson1__listOfAudioSelector = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioSelector(entry, context);
    });
};
const serializeAws_restJson1__listOfAudioTrack = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioTrack(entry, context);
    });
};
const serializeAws_restJson1__listOfCaptionDescription = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionDescription(entry, context);
    });
};
const serializeAws_restJson1__listOfCaptionLanguageMapping = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionLanguageMapping(entry, context);
    });
};
const serializeAws_restJson1__listOfCaptionSelector = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionSelector(entry, context);
    });
};
const serializeAws_restJson1__listOfFailoverCondition = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FailoverCondition(entry, context);
    });
};
const serializeAws_restJson1__listOfHlsAdMarkers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfInputAttachment = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputAttachment(entry, context);
    });
};
const serializeAws_restJson1__listOfInputChannelLevel = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputChannelLevel(entry, context);
    });
};
const serializeAws_restJson1__listOfInputDestinationRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputDestinationRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfInputDeviceRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputDeviceRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfInputDeviceSettings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputDeviceSettings(entry, context);
    });
};
const serializeAws_restJson1__listOfInputSourceRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputSourceRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfInputWhitelistRuleCidr = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputWhitelistRuleCidr(entry, context);
    });
};
const serializeAws_restJson1__listOfMediaConnectFlowRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaConnectFlowRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfMediaPackageOutputDestinationSettings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaPackageOutputDestinationSettings(entry, context);
    });
};
const serializeAws_restJson1__listOfOutput = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Output(entry, context);
    });
};
const serializeAws_restJson1__listOfOutputDestination = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputDestination(entry, context);
    });
};
const serializeAws_restJson1__listOfOutputDestinationSettings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputDestinationSettings(entry, context);
    });
};
const serializeAws_restJson1__listOfOutputGroup = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputGroup(entry, context);
    });
};
const serializeAws_restJson1__listOfPipelinePauseStateSettings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PipelinePauseStateSettings(entry, context);
    });
};
const serializeAws_restJson1__listOfRtmpAdMarkers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfScheduleAction = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ScheduleAction(entry, context);
    });
};
const serializeAws_restJson1__listOfScte35Descriptor = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Scte35Descriptor(entry, context);
    });
};
const serializeAws_restJson1__listOfVideoDescription = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1VideoDescription(entry, context);
    });
};
const serializeAws_restJson1AacSettings = (input, context) => {
    return {
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
        ...(input.InputType !== undefined && input.InputType !== null && { inputType: input.InputType }),
        ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
        ...(input.RateControlMode !== undefined &&
            input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
        ...(input.RawFormat !== undefined && input.RawFormat !== null && { rawFormat: input.RawFormat }),
        ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
        ...(input.Spec !== undefined && input.Spec !== null && { spec: input.Spec }),
        ...(input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }),
    };
};
const serializeAws_restJson1Ac3Settings = (input, context) => {
    return {
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode }),
        ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
        ...(input.Dialnorm !== undefined && input.Dialnorm !== null && { dialnorm: input.Dialnorm }),
        ...(input.DrcProfile !== undefined && input.DrcProfile !== null && { drcProfile: input.DrcProfile }),
        ...(input.LfeFilter !== undefined && input.LfeFilter !== null && { lfeFilter: input.LfeFilter }),
        ...(input.MetadataControl !== undefined &&
            input.MetadataControl !== null && { metadataControl: input.MetadataControl }),
    };
};
const serializeAws_restJson1AncillarySourceSettings = (input, context) => {
    return {
        ...(input.SourceAncillaryChannelNumber !== undefined &&
            input.SourceAncillaryChannelNumber !== null && {
            sourceAncillaryChannelNumber: input.SourceAncillaryChannelNumber,
        }),
    };
};
const serializeAws_restJson1ArchiveCdnSettings = (input, context) => {
    return {
        ...(input.ArchiveS3Settings !== undefined &&
            input.ArchiveS3Settings !== null && {
            archiveS3Settings: serializeAws_restJson1ArchiveS3Settings(input.ArchiveS3Settings, context),
        }),
    };
};
const serializeAws_restJson1ArchiveContainerSettings = (input, context) => {
    return {
        ...(input.M2tsSettings !== undefined &&
            input.M2tsSettings !== null && { m2tsSettings: serializeAws_restJson1M2tsSettings(input.M2tsSettings, context) }),
        ...(input.RawSettings !== undefined &&
            input.RawSettings !== null && { rawSettings: serializeAws_restJson1RawSettings(input.RawSettings, context) }),
    };
};
const serializeAws_restJson1ArchiveGroupSettings = (input, context) => {
    return {
        ...(input.ArchiveCdnSettings !== undefined &&
            input.ArchiveCdnSettings !== null && {
            archiveCdnSettings: serializeAws_restJson1ArchiveCdnSettings(input.ArchiveCdnSettings, context),
        }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
        ...(input.RolloverInterval !== undefined &&
            input.RolloverInterval !== null && { rolloverInterval: input.RolloverInterval }),
    };
};
const serializeAws_restJson1ArchiveOutputSettings = (input, context) => {
    return {
        ...(input.ContainerSettings !== undefined &&
            input.ContainerSettings !== null && {
            containerSettings: serializeAws_restJson1ArchiveContainerSettings(input.ContainerSettings, context),
        }),
        ...(input.Extension !== undefined && input.Extension !== null && { extension: input.Extension }),
        ...(input.NameModifier !== undefined && input.NameModifier !== null && { nameModifier: input.NameModifier }),
    };
};
const serializeAws_restJson1ArchiveS3Settings = (input, context) => {
    return {
        ...(input.CannedAcl !== undefined && input.CannedAcl !== null && { cannedAcl: input.CannedAcl }),
    };
};
const serializeAws_restJson1AribDestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1AribSourceSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1AudioChannelMapping = (input, context) => {
    return {
        ...(input.InputChannelLevels !== undefined &&
            input.InputChannelLevels !== null && {
            inputChannelLevels: serializeAws_restJson1__listOfInputChannelLevel(input.InputChannelLevels, context),
        }),
        ...(input.OutputChannel !== undefined && input.OutputChannel !== null && { outputChannel: input.OutputChannel }),
    };
};
const serializeAws_restJson1AudioCodecSettings = (input, context) => {
    return {
        ...(input.AacSettings !== undefined &&
            input.AacSettings !== null && { aacSettings: serializeAws_restJson1AacSettings(input.AacSettings, context) }),
        ...(input.Ac3Settings !== undefined &&
            input.Ac3Settings !== null && { ac3Settings: serializeAws_restJson1Ac3Settings(input.Ac3Settings, context) }),
        ...(input.Eac3Settings !== undefined &&
            input.Eac3Settings !== null && { eac3Settings: serializeAws_restJson1Eac3Settings(input.Eac3Settings, context) }),
        ...(input.Mp2Settings !== undefined &&
            input.Mp2Settings !== null && { mp2Settings: serializeAws_restJson1Mp2Settings(input.Mp2Settings, context) }),
        ...(input.PassThroughSettings !== undefined &&
            input.PassThroughSettings !== null && {
            passThroughSettings: serializeAws_restJson1PassThroughSettings(input.PassThroughSettings, context),
        }),
        ...(input.WavSettings !== undefined &&
            input.WavSettings !== null && { wavSettings: serializeAws_restJson1WavSettings(input.WavSettings, context) }),
    };
};
const serializeAws_restJson1AudioDescription = (input, context) => {
    return {
        ...(input.AudioNormalizationSettings !== undefined &&
            input.AudioNormalizationSettings !== null && {
            audioNormalizationSettings: serializeAws_restJson1AudioNormalizationSettings(input.AudioNormalizationSettings, context),
        }),
        ...(input.AudioSelectorName !== undefined &&
            input.AudioSelectorName !== null && { audioSelectorName: input.AudioSelectorName }),
        ...(input.AudioType !== undefined && input.AudioType !== null && { audioType: input.AudioType }),
        ...(input.AudioTypeControl !== undefined &&
            input.AudioTypeControl !== null && { audioTypeControl: input.AudioTypeControl }),
        ...(input.CodecSettings !== undefined &&
            input.CodecSettings !== null && {
            codecSettings: serializeAws_restJson1AudioCodecSettings(input.CodecSettings, context),
        }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
        ...(input.LanguageCodeControl !== undefined &&
            input.LanguageCodeControl !== null && { languageCodeControl: input.LanguageCodeControl }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.RemixSettings !== undefined &&
            input.RemixSettings !== null && {
            remixSettings: serializeAws_restJson1RemixSettings(input.RemixSettings, context),
        }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { streamName: input.StreamName }),
    };
};
const serializeAws_restJson1AudioLanguageSelection = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
        ...(input.LanguageSelectionPolicy !== undefined &&
            input.LanguageSelectionPolicy !== null && { languageSelectionPolicy: input.LanguageSelectionPolicy }),
    };
};
const serializeAws_restJson1AudioNormalizationSettings = (input, context) => {
    return {
        ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
        ...(input.AlgorithmControl !== undefined &&
            input.AlgorithmControl !== null && { algorithmControl: input.AlgorithmControl }),
        ...(input.TargetLkfs !== undefined && input.TargetLkfs !== null && { targetLkfs: input.TargetLkfs }),
    };
};
const serializeAws_restJson1AudioOnlyHlsSettings = (input, context) => {
    return {
        ...(input.AudioGroupId !== undefined && input.AudioGroupId !== null && { audioGroupId: input.AudioGroupId }),
        ...(input.AudioOnlyImage !== undefined &&
            input.AudioOnlyImage !== null && {
            audioOnlyImage: serializeAws_restJson1InputLocation(input.AudioOnlyImage, context),
        }),
        ...(input.AudioTrackType !== undefined &&
            input.AudioTrackType !== null && { audioTrackType: input.AudioTrackType }),
        ...(input.SegmentType !== undefined && input.SegmentType !== null && { segmentType: input.SegmentType }),
    };
};
const serializeAws_restJson1AudioPidSelection = (input, context) => {
    return {
        ...(input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }),
    };
};
const serializeAws_restJson1AudioSelector = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.SelectorSettings !== undefined &&
            input.SelectorSettings !== null && {
            selectorSettings: serializeAws_restJson1AudioSelectorSettings(input.SelectorSettings, context),
        }),
    };
};
const serializeAws_restJson1AudioSelectorSettings = (input, context) => {
    return {
        ...(input.AudioLanguageSelection !== undefined &&
            input.AudioLanguageSelection !== null && {
            audioLanguageSelection: serializeAws_restJson1AudioLanguageSelection(input.AudioLanguageSelection, context),
        }),
        ...(input.AudioPidSelection !== undefined &&
            input.AudioPidSelection !== null && {
            audioPidSelection: serializeAws_restJson1AudioPidSelection(input.AudioPidSelection, context),
        }),
        ...(input.AudioTrackSelection !== undefined &&
            input.AudioTrackSelection !== null && {
            audioTrackSelection: serializeAws_restJson1AudioTrackSelection(input.AudioTrackSelection, context),
        }),
    };
};
const serializeAws_restJson1AudioSilenceFailoverSettings = (input, context) => {
    return {
        ...(input.AudioSelectorName !== undefined &&
            input.AudioSelectorName !== null && { audioSelectorName: input.AudioSelectorName }),
        ...(input.AudioSilenceThresholdMsec !== undefined &&
            input.AudioSilenceThresholdMsec !== null && { audioSilenceThresholdMsec: input.AudioSilenceThresholdMsec }),
    };
};
const serializeAws_restJson1AudioTrack = (input, context) => {
    return {
        ...(input.Track !== undefined && input.Track !== null && { track: input.Track }),
    };
};
const serializeAws_restJson1AudioTrackSelection = (input, context) => {
    return {
        ...(input.Tracks !== undefined &&
            input.Tracks !== null && { tracks: serializeAws_restJson1__listOfAudioTrack(input.Tracks, context) }),
    };
};
const serializeAws_restJson1AutomaticInputFailoverSettings = (input, context) => {
    return {
        ...(input.ErrorClearTimeMsec !== undefined &&
            input.ErrorClearTimeMsec !== null && { errorClearTimeMsec: input.ErrorClearTimeMsec }),
        ...(input.FailoverConditions !== undefined &&
            input.FailoverConditions !== null && {
            failoverConditions: serializeAws_restJson1__listOfFailoverCondition(input.FailoverConditions, context),
        }),
        ...(input.InputPreference !== undefined &&
            input.InputPreference !== null && { inputPreference: input.InputPreference }),
        ...(input.SecondaryInputId !== undefined &&
            input.SecondaryInputId !== null && { secondaryInputId: input.SecondaryInputId }),
    };
};
const serializeAws_restJson1AvailBlanking = (input, context) => {
    return {
        ...(input.AvailBlankingImage !== undefined &&
            input.AvailBlankingImage !== null && {
            availBlankingImage: serializeAws_restJson1InputLocation(input.AvailBlankingImage, context),
        }),
        ...(input.State !== undefined && input.State !== null && { state: input.State }),
    };
};
const serializeAws_restJson1AvailConfiguration = (input, context) => {
    return {
        ...(input.AvailSettings !== undefined &&
            input.AvailSettings !== null && {
            availSettings: serializeAws_restJson1AvailSettings(input.AvailSettings, context),
        }),
    };
};
const serializeAws_restJson1AvailSettings = (input, context) => {
    return {
        ...(input.Scte35SpliceInsert !== undefined &&
            input.Scte35SpliceInsert !== null && {
            scte35SpliceInsert: serializeAws_restJson1Scte35SpliceInsert(input.Scte35SpliceInsert, context),
        }),
        ...(input.Scte35TimeSignalApos !== undefined &&
            input.Scte35TimeSignalApos !== null && {
            scte35TimeSignalApos: serializeAws_restJson1Scte35TimeSignalApos(input.Scte35TimeSignalApos, context),
        }),
    };
};
const serializeAws_restJson1BatchScheduleActionCreateRequest = (input, context) => {
    return {
        ...(input.ScheduleActions !== undefined &&
            input.ScheduleActions !== null && {
            scheduleActions: serializeAws_restJson1__listOfScheduleAction(input.ScheduleActions, context),
        }),
    };
};
const serializeAws_restJson1BatchScheduleActionDeleteRequest = (input, context) => {
    return {
        ...(input.ActionNames !== undefined &&
            input.ActionNames !== null && {
            actionNames: serializeAws_restJson1__listOf__string(input.ActionNames, context),
        }),
    };
};
const serializeAws_restJson1BlackoutSlate = (input, context) => {
    return {
        ...(input.BlackoutSlateImage !== undefined &&
            input.BlackoutSlateImage !== null && {
            blackoutSlateImage: serializeAws_restJson1InputLocation(input.BlackoutSlateImage, context),
        }),
        ...(input.NetworkEndBlackout !== undefined &&
            input.NetworkEndBlackout !== null && { networkEndBlackout: input.NetworkEndBlackout }),
        ...(input.NetworkEndBlackoutImage !== undefined &&
            input.NetworkEndBlackoutImage !== null && {
            networkEndBlackoutImage: serializeAws_restJson1InputLocation(input.NetworkEndBlackoutImage, context),
        }),
        ...(input.NetworkId !== undefined && input.NetworkId !== null && { networkId: input.NetworkId }),
        ...(input.State !== undefined && input.State !== null && { state: input.State }),
    };
};
const serializeAws_restJson1BurnInDestinationSettings = (input, context) => {
    return {
        ...(input.Alignment !== undefined && input.Alignment !== null && { alignment: input.Alignment }),
        ...(input.BackgroundColor !== undefined &&
            input.BackgroundColor !== null && { backgroundColor: input.BackgroundColor }),
        ...(input.BackgroundOpacity !== undefined &&
            input.BackgroundOpacity !== null && { backgroundOpacity: input.BackgroundOpacity }),
        ...(input.Font !== undefined &&
            input.Font !== null && { font: serializeAws_restJson1InputLocation(input.Font, context) }),
        ...(input.FontColor !== undefined && input.FontColor !== null && { fontColor: input.FontColor }),
        ...(input.FontOpacity !== undefined && input.FontOpacity !== null && { fontOpacity: input.FontOpacity }),
        ...(input.FontResolution !== undefined &&
            input.FontResolution !== null && { fontResolution: input.FontResolution }),
        ...(input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize }),
        ...(input.OutlineColor !== undefined && input.OutlineColor !== null && { outlineColor: input.OutlineColor }),
        ...(input.OutlineSize !== undefined && input.OutlineSize !== null && { outlineSize: input.OutlineSize }),
        ...(input.ShadowColor !== undefined && input.ShadowColor !== null && { shadowColor: input.ShadowColor }),
        ...(input.ShadowOpacity !== undefined && input.ShadowOpacity !== null && { shadowOpacity: input.ShadowOpacity }),
        ...(input.ShadowXOffset !== undefined && input.ShadowXOffset !== null && { shadowXOffset: input.ShadowXOffset }),
        ...(input.ShadowYOffset !== undefined && input.ShadowYOffset !== null && { shadowYOffset: input.ShadowYOffset }),
        ...(input.TeletextGridControl !== undefined &&
            input.TeletextGridControl !== null && { teletextGridControl: input.TeletextGridControl }),
        ...(input.XPosition !== undefined && input.XPosition !== null && { xPosition: input.XPosition }),
        ...(input.YPosition !== undefined && input.YPosition !== null && { yPosition: input.YPosition }),
    };
};
const serializeAws_restJson1CaptionDescription = (input, context) => {
    return {
        ...(input.CaptionSelectorName !== undefined &&
            input.CaptionSelectorName !== null && { captionSelectorName: input.CaptionSelectorName }),
        ...(input.DestinationSettings !== undefined &&
            input.DestinationSettings !== null && {
            destinationSettings: serializeAws_restJson1CaptionDestinationSettings(input.DestinationSettings, context),
        }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
        ...(input.LanguageDescription !== undefined &&
            input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    };
};
const serializeAws_restJson1CaptionDestinationSettings = (input, context) => {
    return {
        ...(input.AribDestinationSettings !== undefined &&
            input.AribDestinationSettings !== null && {
            aribDestinationSettings: serializeAws_restJson1AribDestinationSettings(input.AribDestinationSettings, context),
        }),
        ...(input.BurnInDestinationSettings !== undefined &&
            input.BurnInDestinationSettings !== null && {
            burnInDestinationSettings: serializeAws_restJson1BurnInDestinationSettings(input.BurnInDestinationSettings, context),
        }),
        ...(input.DvbSubDestinationSettings !== undefined &&
            input.DvbSubDestinationSettings !== null && {
            dvbSubDestinationSettings: serializeAws_restJson1DvbSubDestinationSettings(input.DvbSubDestinationSettings, context),
        }),
        ...(input.EbuTtDDestinationSettings !== undefined &&
            input.EbuTtDDestinationSettings !== null && {
            ebuTtDDestinationSettings: serializeAws_restJson1EbuTtDDestinationSettings(input.EbuTtDDestinationSettings, context),
        }),
        ...(input.EmbeddedDestinationSettings !== undefined &&
            input.EmbeddedDestinationSettings !== null && {
            embeddedDestinationSettings: serializeAws_restJson1EmbeddedDestinationSettings(input.EmbeddedDestinationSettings, context),
        }),
        ...(input.EmbeddedPlusScte20DestinationSettings !== undefined &&
            input.EmbeddedPlusScte20DestinationSettings !== null && {
            embeddedPlusScte20DestinationSettings: serializeAws_restJson1EmbeddedPlusScte20DestinationSettings(input.EmbeddedPlusScte20DestinationSettings, context),
        }),
        ...(input.RtmpCaptionInfoDestinationSettings !== undefined &&
            input.RtmpCaptionInfoDestinationSettings !== null && {
            rtmpCaptionInfoDestinationSettings: serializeAws_restJson1RtmpCaptionInfoDestinationSettings(input.RtmpCaptionInfoDestinationSettings, context),
        }),
        ...(input.Scte20PlusEmbeddedDestinationSettings !== undefined &&
            input.Scte20PlusEmbeddedDestinationSettings !== null && {
            scte20PlusEmbeddedDestinationSettings: serializeAws_restJson1Scte20PlusEmbeddedDestinationSettings(input.Scte20PlusEmbeddedDestinationSettings, context),
        }),
        ...(input.Scte27DestinationSettings !== undefined &&
            input.Scte27DestinationSettings !== null && {
            scte27DestinationSettings: serializeAws_restJson1Scte27DestinationSettings(input.Scte27DestinationSettings, context),
        }),
        ...(input.SmpteTtDestinationSettings !== undefined &&
            input.SmpteTtDestinationSettings !== null && {
            smpteTtDestinationSettings: serializeAws_restJson1SmpteTtDestinationSettings(input.SmpteTtDestinationSettings, context),
        }),
        ...(input.TeletextDestinationSettings !== undefined &&
            input.TeletextDestinationSettings !== null && {
            teletextDestinationSettings: serializeAws_restJson1TeletextDestinationSettings(input.TeletextDestinationSettings, context),
        }),
        ...(input.TtmlDestinationSettings !== undefined &&
            input.TtmlDestinationSettings !== null && {
            ttmlDestinationSettings: serializeAws_restJson1TtmlDestinationSettings(input.TtmlDestinationSettings, context),
        }),
        ...(input.WebvttDestinationSettings !== undefined &&
            input.WebvttDestinationSettings !== null && {
            webvttDestinationSettings: serializeAws_restJson1WebvttDestinationSettings(input.WebvttDestinationSettings, context),
        }),
    };
};
const serializeAws_restJson1CaptionLanguageMapping = (input, context) => {
    return {
        ...(input.CaptionChannel !== undefined &&
            input.CaptionChannel !== null && { captionChannel: input.CaptionChannel }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
        ...(input.LanguageDescription !== undefined &&
            input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }),
    };
};
const serializeAws_restJson1CaptionRectangle = (input, context) => {
    return {
        ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
        ...(input.LeftOffset !== undefined && input.LeftOffset !== null && { leftOffset: input.LeftOffset }),
        ...(input.TopOffset !== undefined && input.TopOffset !== null && { topOffset: input.TopOffset }),
        ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
    };
};
const serializeAws_restJson1CaptionSelector = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.SelectorSettings !== undefined &&
            input.SelectorSettings !== null && {
            selectorSettings: serializeAws_restJson1CaptionSelectorSettings(input.SelectorSettings, context),
        }),
    };
};
const serializeAws_restJson1CaptionSelectorSettings = (input, context) => {
    return {
        ...(input.AncillarySourceSettings !== undefined &&
            input.AncillarySourceSettings !== null && {
            ancillarySourceSettings: serializeAws_restJson1AncillarySourceSettings(input.AncillarySourceSettings, context),
        }),
        ...(input.AribSourceSettings !== undefined &&
            input.AribSourceSettings !== null && {
            aribSourceSettings: serializeAws_restJson1AribSourceSettings(input.AribSourceSettings, context),
        }),
        ...(input.DvbSubSourceSettings !== undefined &&
            input.DvbSubSourceSettings !== null && {
            dvbSubSourceSettings: serializeAws_restJson1DvbSubSourceSettings(input.DvbSubSourceSettings, context),
        }),
        ...(input.EmbeddedSourceSettings !== undefined &&
            input.EmbeddedSourceSettings !== null && {
            embeddedSourceSettings: serializeAws_restJson1EmbeddedSourceSettings(input.EmbeddedSourceSettings, context),
        }),
        ...(input.Scte20SourceSettings !== undefined &&
            input.Scte20SourceSettings !== null && {
            scte20SourceSettings: serializeAws_restJson1Scte20SourceSettings(input.Scte20SourceSettings, context),
        }),
        ...(input.Scte27SourceSettings !== undefined &&
            input.Scte27SourceSettings !== null && {
            scte27SourceSettings: serializeAws_restJson1Scte27SourceSettings(input.Scte27SourceSettings, context),
        }),
        ...(input.TeletextSourceSettings !== undefined &&
            input.TeletextSourceSettings !== null && {
            teletextSourceSettings: serializeAws_restJson1TeletextSourceSettings(input.TeletextSourceSettings, context),
        }),
    };
};
const serializeAws_restJson1CdiInputSpecification = (input, context) => {
    return {
        ...(input.Resolution !== undefined && input.Resolution !== null && { resolution: input.Resolution }),
    };
};
const serializeAws_restJson1ColorSpacePassthroughSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1DvbNitSettings = (input, context) => {
    return {
        ...(input.NetworkId !== undefined && input.NetworkId !== null && { networkId: input.NetworkId }),
        ...(input.NetworkName !== undefined && input.NetworkName !== null && { networkName: input.NetworkName }),
        ...(input.RepInterval !== undefined && input.RepInterval !== null && { repInterval: input.RepInterval }),
    };
};
const serializeAws_restJson1DvbSdtSettings = (input, context) => {
    return {
        ...(input.OutputSdt !== undefined && input.OutputSdt !== null && { outputSdt: input.OutputSdt }),
        ...(input.RepInterval !== undefined && input.RepInterval !== null && { repInterval: input.RepInterval }),
        ...(input.ServiceName !== undefined && input.ServiceName !== null && { serviceName: input.ServiceName }),
        ...(input.ServiceProviderName !== undefined &&
            input.ServiceProviderName !== null && { serviceProviderName: input.ServiceProviderName }),
    };
};
const serializeAws_restJson1DvbSubDestinationSettings = (input, context) => {
    return {
        ...(input.Alignment !== undefined && input.Alignment !== null && { alignment: input.Alignment }),
        ...(input.BackgroundColor !== undefined &&
            input.BackgroundColor !== null && { backgroundColor: input.BackgroundColor }),
        ...(input.BackgroundOpacity !== undefined &&
            input.BackgroundOpacity !== null && { backgroundOpacity: input.BackgroundOpacity }),
        ...(input.Font !== undefined &&
            input.Font !== null && { font: serializeAws_restJson1InputLocation(input.Font, context) }),
        ...(input.FontColor !== undefined && input.FontColor !== null && { fontColor: input.FontColor }),
        ...(input.FontOpacity !== undefined && input.FontOpacity !== null && { fontOpacity: input.FontOpacity }),
        ...(input.FontResolution !== undefined &&
            input.FontResolution !== null && { fontResolution: input.FontResolution }),
        ...(input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize }),
        ...(input.OutlineColor !== undefined && input.OutlineColor !== null && { outlineColor: input.OutlineColor }),
        ...(input.OutlineSize !== undefined && input.OutlineSize !== null && { outlineSize: input.OutlineSize }),
        ...(input.ShadowColor !== undefined && input.ShadowColor !== null && { shadowColor: input.ShadowColor }),
        ...(input.ShadowOpacity !== undefined && input.ShadowOpacity !== null && { shadowOpacity: input.ShadowOpacity }),
        ...(input.ShadowXOffset !== undefined && input.ShadowXOffset !== null && { shadowXOffset: input.ShadowXOffset }),
        ...(input.ShadowYOffset !== undefined && input.ShadowYOffset !== null && { shadowYOffset: input.ShadowYOffset }),
        ...(input.TeletextGridControl !== undefined &&
            input.TeletextGridControl !== null && { teletextGridControl: input.TeletextGridControl }),
        ...(input.XPosition !== undefined && input.XPosition !== null && { xPosition: input.XPosition }),
        ...(input.YPosition !== undefined && input.YPosition !== null && { yPosition: input.YPosition }),
    };
};
const serializeAws_restJson1DvbSubSourceSettings = (input, context) => {
    return {
        ...(input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }),
    };
};
const serializeAws_restJson1DvbTdtSettings = (input, context) => {
    return {
        ...(input.RepInterval !== undefined && input.RepInterval !== null && { repInterval: input.RepInterval }),
    };
};
const serializeAws_restJson1Eac3Settings = (input, context) => {
    return {
        ...(input.AttenuationControl !== undefined &&
            input.AttenuationControl !== null && { attenuationControl: input.AttenuationControl }),
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode }),
        ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
        ...(input.DcFilter !== undefined && input.DcFilter !== null && { dcFilter: input.DcFilter }),
        ...(input.Dialnorm !== undefined && input.Dialnorm !== null && { dialnorm: input.Dialnorm }),
        ...(input.DrcLine !== undefined && input.DrcLine !== null && { drcLine: input.DrcLine }),
        ...(input.DrcRf !== undefined && input.DrcRf !== null && { drcRf: input.DrcRf }),
        ...(input.LfeControl !== undefined && input.LfeControl !== null && { lfeControl: input.LfeControl }),
        ...(input.LfeFilter !== undefined && input.LfeFilter !== null && { lfeFilter: input.LfeFilter }),
        ...(input.LoRoCenterMixLevel !== undefined &&
            input.LoRoCenterMixLevel !== null && { loRoCenterMixLevel: input.LoRoCenterMixLevel }),
        ...(input.LoRoSurroundMixLevel !== undefined &&
            input.LoRoSurroundMixLevel !== null && { loRoSurroundMixLevel: input.LoRoSurroundMixLevel }),
        ...(input.LtRtCenterMixLevel !== undefined &&
            input.LtRtCenterMixLevel !== null && { ltRtCenterMixLevel: input.LtRtCenterMixLevel }),
        ...(input.LtRtSurroundMixLevel !== undefined &&
            input.LtRtSurroundMixLevel !== null && { ltRtSurroundMixLevel: input.LtRtSurroundMixLevel }),
        ...(input.MetadataControl !== undefined &&
            input.MetadataControl !== null && { metadataControl: input.MetadataControl }),
        ...(input.PassthroughControl !== undefined &&
            input.PassthroughControl !== null && { passthroughControl: input.PassthroughControl }),
        ...(input.PhaseControl !== undefined && input.PhaseControl !== null && { phaseControl: input.PhaseControl }),
        ...(input.StereoDownmix !== undefined && input.StereoDownmix !== null && { stereoDownmix: input.StereoDownmix }),
        ...(input.SurroundExMode !== undefined &&
            input.SurroundExMode !== null && { surroundExMode: input.SurroundExMode }),
        ...(input.SurroundMode !== undefined && input.SurroundMode !== null && { surroundMode: input.SurroundMode }),
    };
};
const serializeAws_restJson1EbuTtDDestinationSettings = (input, context) => {
    return {
        ...(input.CopyrightHolder !== undefined &&
            input.CopyrightHolder !== null && { copyrightHolder: input.CopyrightHolder }),
        ...(input.FillLineGap !== undefined && input.FillLineGap !== null && { fillLineGap: input.FillLineGap }),
        ...(input.FontFamily !== undefined && input.FontFamily !== null && { fontFamily: input.FontFamily }),
        ...(input.StyleControl !== undefined && input.StyleControl !== null && { styleControl: input.StyleControl }),
    };
};
const serializeAws_restJson1EmbeddedDestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1EmbeddedPlusScte20DestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1EmbeddedSourceSettings = (input, context) => {
    return {
        ...(input.Convert608To708 !== undefined &&
            input.Convert608To708 !== null && { convert608To708: input.Convert608To708 }),
        ...(input.Scte20Detection !== undefined &&
            input.Scte20Detection !== null && { scte20Detection: input.Scte20Detection }),
        ...(input.Source608ChannelNumber !== undefined &&
            input.Source608ChannelNumber !== null && { source608ChannelNumber: input.Source608ChannelNumber }),
        ...(input.Source608TrackNumber !== undefined &&
            input.Source608TrackNumber !== null && { source608TrackNumber: input.Source608TrackNumber }),
    };
};
const serializeAws_restJson1EncoderSettings = (input, context) => {
    return {
        ...(input.AudioDescriptions !== undefined &&
            input.AudioDescriptions !== null && {
            audioDescriptions: serializeAws_restJson1__listOfAudioDescription(input.AudioDescriptions, context),
        }),
        ...(input.AvailBlanking !== undefined &&
            input.AvailBlanking !== null && {
            availBlanking: serializeAws_restJson1AvailBlanking(input.AvailBlanking, context),
        }),
        ...(input.AvailConfiguration !== undefined &&
            input.AvailConfiguration !== null && {
            availConfiguration: serializeAws_restJson1AvailConfiguration(input.AvailConfiguration, context),
        }),
        ...(input.BlackoutSlate !== undefined &&
            input.BlackoutSlate !== null && {
            blackoutSlate: serializeAws_restJson1BlackoutSlate(input.BlackoutSlate, context),
        }),
        ...(input.CaptionDescriptions !== undefined &&
            input.CaptionDescriptions !== null && {
            captionDescriptions: serializeAws_restJson1__listOfCaptionDescription(input.CaptionDescriptions, context),
        }),
        ...(input.FeatureActivations !== undefined &&
            input.FeatureActivations !== null && {
            featureActivations: serializeAws_restJson1FeatureActivations(input.FeatureActivations, context),
        }),
        ...(input.GlobalConfiguration !== undefined &&
            input.GlobalConfiguration !== null && {
            globalConfiguration: serializeAws_restJson1GlobalConfiguration(input.GlobalConfiguration, context),
        }),
        ...(input.MotionGraphicsConfiguration !== undefined &&
            input.MotionGraphicsConfiguration !== null && {
            motionGraphicsConfiguration: serializeAws_restJson1MotionGraphicsConfiguration(input.MotionGraphicsConfiguration, context),
        }),
        ...(input.NielsenConfiguration !== undefined &&
            input.NielsenConfiguration !== null && {
            nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(input.NielsenConfiguration, context),
        }),
        ...(input.OutputGroups !== undefined &&
            input.OutputGroups !== null && {
            outputGroups: serializeAws_restJson1__listOfOutputGroup(input.OutputGroups, context),
        }),
        ...(input.TimecodeConfig !== undefined &&
            input.TimecodeConfig !== null && {
            timecodeConfig: serializeAws_restJson1TimecodeConfig(input.TimecodeConfig, context),
        }),
        ...(input.VideoDescriptions !== undefined &&
            input.VideoDescriptions !== null && {
            videoDescriptions: serializeAws_restJson1__listOfVideoDescription(input.VideoDescriptions, context),
        }),
    };
};
const serializeAws_restJson1FailoverCondition = (input, context) => {
    return {
        ...(input.FailoverConditionSettings !== undefined &&
            input.FailoverConditionSettings !== null && {
            failoverConditionSettings: serializeAws_restJson1FailoverConditionSettings(input.FailoverConditionSettings, context),
        }),
    };
};
const serializeAws_restJson1FailoverConditionSettings = (input, context) => {
    return {
        ...(input.AudioSilenceSettings !== undefined &&
            input.AudioSilenceSettings !== null && {
            audioSilenceSettings: serializeAws_restJson1AudioSilenceFailoverSettings(input.AudioSilenceSettings, context),
        }),
        ...(input.InputLossSettings !== undefined &&
            input.InputLossSettings !== null && {
            inputLossSettings: serializeAws_restJson1InputLossFailoverSettings(input.InputLossSettings, context),
        }),
        ...(input.VideoBlackSettings !== undefined &&
            input.VideoBlackSettings !== null && {
            videoBlackSettings: serializeAws_restJson1VideoBlackFailoverSettings(input.VideoBlackSettings, context),
        }),
    };
};
const serializeAws_restJson1FeatureActivations = (input, context) => {
    return {
        ...(input.InputPrepareScheduleActions !== undefined &&
            input.InputPrepareScheduleActions !== null && { inputPrepareScheduleActions: input.InputPrepareScheduleActions }),
    };
};
const serializeAws_restJson1FecOutputSettings = (input, context) => {
    return {
        ...(input.ColumnDepth !== undefined && input.ColumnDepth !== null && { columnDepth: input.ColumnDepth }),
        ...(input.IncludeFec !== undefined && input.IncludeFec !== null && { includeFec: input.IncludeFec }),
        ...(input.RowLength !== undefined && input.RowLength !== null && { rowLength: input.RowLength }),
    };
};
const serializeAws_restJson1FixedModeScheduleActionStartSettings = (input, context) => {
    return {
        ...(input.Time !== undefined && input.Time !== null && { time: input.Time }),
    };
};
const serializeAws_restJson1Fmp4HlsSettings = (input, context) => {
    return {
        ...(input.AudioRenditionSets !== undefined &&
            input.AudioRenditionSets !== null && { audioRenditionSets: input.AudioRenditionSets }),
        ...(input.NielsenId3Behavior !== undefined &&
            input.NielsenId3Behavior !== null && { nielsenId3Behavior: input.NielsenId3Behavior }),
        ...(input.TimedMetadataBehavior !== undefined &&
            input.TimedMetadataBehavior !== null && { timedMetadataBehavior: input.TimedMetadataBehavior }),
    };
};
const serializeAws_restJson1FollowModeScheduleActionStartSettings = (input, context) => {
    return {
        ...(input.FollowPoint !== undefined && input.FollowPoint !== null && { followPoint: input.FollowPoint }),
        ...(input.ReferenceActionName !== undefined &&
            input.ReferenceActionName !== null && { referenceActionName: input.ReferenceActionName }),
    };
};
const serializeAws_restJson1FrameCaptureCdnSettings = (input, context) => {
    return {
        ...(input.FrameCaptureS3Settings !== undefined &&
            input.FrameCaptureS3Settings !== null && {
            frameCaptureS3Settings: serializeAws_restJson1FrameCaptureS3Settings(input.FrameCaptureS3Settings, context),
        }),
    };
};
const serializeAws_restJson1FrameCaptureGroupSettings = (input, context) => {
    return {
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
        ...(input.FrameCaptureCdnSettings !== undefined &&
            input.FrameCaptureCdnSettings !== null && {
            frameCaptureCdnSettings: serializeAws_restJson1FrameCaptureCdnSettings(input.FrameCaptureCdnSettings, context),
        }),
    };
};
const serializeAws_restJson1FrameCaptureHlsSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1FrameCaptureOutputSettings = (input, context) => {
    return {
        ...(input.NameModifier !== undefined && input.NameModifier !== null && { nameModifier: input.NameModifier }),
    };
};
const serializeAws_restJson1FrameCaptureS3Settings = (input, context) => {
    return {
        ...(input.CannedAcl !== undefined && input.CannedAcl !== null && { cannedAcl: input.CannedAcl }),
    };
};
const serializeAws_restJson1FrameCaptureSettings = (input, context) => {
    return {
        ...(input.CaptureInterval !== undefined &&
            input.CaptureInterval !== null && { captureInterval: input.CaptureInterval }),
        ...(input.CaptureIntervalUnits !== undefined &&
            input.CaptureIntervalUnits !== null && { captureIntervalUnits: input.CaptureIntervalUnits }),
    };
};
const serializeAws_restJson1GlobalConfiguration = (input, context) => {
    return {
        ...(input.InitialAudioGain !== undefined &&
            input.InitialAudioGain !== null && { initialAudioGain: input.InitialAudioGain }),
        ...(input.InputEndAction !== undefined &&
            input.InputEndAction !== null && { inputEndAction: input.InputEndAction }),
        ...(input.InputLossBehavior !== undefined &&
            input.InputLossBehavior !== null && {
            inputLossBehavior: serializeAws_restJson1InputLossBehavior(input.InputLossBehavior, context),
        }),
        ...(input.OutputLockingMode !== undefined &&
            input.OutputLockingMode !== null && { outputLockingMode: input.OutputLockingMode }),
        ...(input.OutputTimingSource !== undefined &&
            input.OutputTimingSource !== null && { outputTimingSource: input.OutputTimingSource }),
        ...(input.SupportLowFramerateInputs !== undefined &&
            input.SupportLowFramerateInputs !== null && { supportLowFramerateInputs: input.SupportLowFramerateInputs }),
    };
};
const serializeAws_restJson1H264ColorSpaceSettings = (input, context) => {
    return {
        ...(input.ColorSpacePassthroughSettings !== undefined &&
            input.ColorSpacePassthroughSettings !== null && {
            colorSpacePassthroughSettings: serializeAws_restJson1ColorSpacePassthroughSettings(input.ColorSpacePassthroughSettings, context),
        }),
        ...(input.Rec601Settings !== undefined &&
            input.Rec601Settings !== null && {
            rec601Settings: serializeAws_restJson1Rec601Settings(input.Rec601Settings, context),
        }),
        ...(input.Rec709Settings !== undefined &&
            input.Rec709Settings !== null && {
            rec709Settings: serializeAws_restJson1Rec709Settings(input.Rec709Settings, context),
        }),
    };
};
const serializeAws_restJson1H264FilterSettings = (input, context) => {
    return {
        ...(input.TemporalFilterSettings !== undefined &&
            input.TemporalFilterSettings !== null && {
            temporalFilterSettings: serializeAws_restJson1TemporalFilterSettings(input.TemporalFilterSettings, context),
        }),
    };
};
const serializeAws_restJson1H264Settings = (input, context) => {
    return {
        ...(input.AdaptiveQuantization !== undefined &&
            input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
        ...(input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling }),
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.BufFillPct !== undefined && input.BufFillPct !== null && { bufFillPct: input.BufFillPct }),
        ...(input.BufSize !== undefined && input.BufSize !== null && { bufSize: input.BufSize }),
        ...(input.ColorMetadata !== undefined && input.ColorMetadata !== null && { colorMetadata: input.ColorMetadata }),
        ...(input.ColorSpaceSettings !== undefined &&
            input.ColorSpaceSettings !== null && {
            colorSpaceSettings: serializeAws_restJson1H264ColorSpaceSettings(input.ColorSpaceSettings, context),
        }),
        ...(input.EntropyEncoding !== undefined &&
            input.EntropyEncoding !== null && { entropyEncoding: input.EntropyEncoding }),
        ...(input.FilterSettings !== undefined &&
            input.FilterSettings !== null && {
            filterSettings: serializeAws_restJson1H264FilterSettings(input.FilterSettings, context),
        }),
        ...(input.FixedAfd !== undefined && input.FixedAfd !== null && { fixedAfd: input.FixedAfd }),
        ...(input.FlickerAq !== undefined && input.FlickerAq !== null && { flickerAq: input.FlickerAq }),
        ...(input.ForceFieldPictures !== undefined &&
            input.ForceFieldPictures !== null && { forceFieldPictures: input.ForceFieldPictures }),
        ...(input.FramerateControl !== undefined &&
            input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
        ...(input.FramerateDenominator !== undefined &&
            input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
        ...(input.FramerateNumerator !== undefined &&
            input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
        ...(input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference }),
        ...(input.GopClosedCadence !== undefined &&
            input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
        ...(input.GopNumBFrames !== undefined && input.GopNumBFrames !== null && { gopNumBFrames: input.GopNumBFrames }),
        ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize }),
        ...(input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits }),
        ...(input.Level !== undefined && input.Level !== null && { level: input.Level }),
        ...(input.LookAheadRateControl !== undefined &&
            input.LookAheadRateControl !== null && { lookAheadRateControl: input.LookAheadRateControl }),
        ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
        ...(input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval }),
        ...(input.NumRefFrames !== undefined && input.NumRefFrames !== null && { numRefFrames: input.NumRefFrames }),
        ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
        ...(input.ParDenominator !== undefined &&
            input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
        ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
        ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
        ...(input.QualityLevel !== undefined && input.QualityLevel !== null && { qualityLevel: input.QualityLevel }),
        ...(input.QvbrQualityLevel !== undefined &&
            input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel }),
        ...(input.RateControlMode !== undefined &&
            input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
        ...(input.ScanType !== undefined && input.ScanType !== null && { scanType: input.ScanType }),
        ...(input.SceneChangeDetect !== undefined &&
            input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect }),
        ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
        ...(input.Softness !== undefined && input.Softness !== null && { softness: input.Softness }),
        ...(input.SpatialAq !== undefined && input.SpatialAq !== null && { spatialAq: input.SpatialAq }),
        ...(input.SubgopLength !== undefined && input.SubgopLength !== null && { subgopLength: input.SubgopLength }),
        ...(input.Syntax !== undefined && input.Syntax !== null && { syntax: input.Syntax }),
        ...(input.TemporalAq !== undefined && input.TemporalAq !== null && { temporalAq: input.TemporalAq }),
        ...(input.TimecodeInsertion !== undefined &&
            input.TimecodeInsertion !== null && { timecodeInsertion: input.TimecodeInsertion }),
    };
};
const serializeAws_restJson1H265ColorSpaceSettings = (input, context) => {
    return {
        ...(input.ColorSpacePassthroughSettings !== undefined &&
            input.ColorSpacePassthroughSettings !== null && {
            colorSpacePassthroughSettings: serializeAws_restJson1ColorSpacePassthroughSettings(input.ColorSpacePassthroughSettings, context),
        }),
        ...(input.Hdr10Settings !== undefined &&
            input.Hdr10Settings !== null && {
            hdr10Settings: serializeAws_restJson1Hdr10Settings(input.Hdr10Settings, context),
        }),
        ...(input.Rec601Settings !== undefined &&
            input.Rec601Settings !== null && {
            rec601Settings: serializeAws_restJson1Rec601Settings(input.Rec601Settings, context),
        }),
        ...(input.Rec709Settings !== undefined &&
            input.Rec709Settings !== null && {
            rec709Settings: serializeAws_restJson1Rec709Settings(input.Rec709Settings, context),
        }),
    };
};
const serializeAws_restJson1H265FilterSettings = (input, context) => {
    return {
        ...(input.TemporalFilterSettings !== undefined &&
            input.TemporalFilterSettings !== null && {
            temporalFilterSettings: serializeAws_restJson1TemporalFilterSettings(input.TemporalFilterSettings, context),
        }),
    };
};
const serializeAws_restJson1H265Settings = (input, context) => {
    return {
        ...(input.AdaptiveQuantization !== undefined &&
            input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
        ...(input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling }),
        ...(input.AlternativeTransferFunction !== undefined &&
            input.AlternativeTransferFunction !== null && { alternativeTransferFunction: input.AlternativeTransferFunction }),
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.BufSize !== undefined && input.BufSize !== null && { bufSize: input.BufSize }),
        ...(input.ColorMetadata !== undefined && input.ColorMetadata !== null && { colorMetadata: input.ColorMetadata }),
        ...(input.ColorSpaceSettings !== undefined &&
            input.ColorSpaceSettings !== null && {
            colorSpaceSettings: serializeAws_restJson1H265ColorSpaceSettings(input.ColorSpaceSettings, context),
        }),
        ...(input.FilterSettings !== undefined &&
            input.FilterSettings !== null && {
            filterSettings: serializeAws_restJson1H265FilterSettings(input.FilterSettings, context),
        }),
        ...(input.FixedAfd !== undefined && input.FixedAfd !== null && { fixedAfd: input.FixedAfd }),
        ...(input.FlickerAq !== undefined && input.FlickerAq !== null && { flickerAq: input.FlickerAq }),
        ...(input.FramerateDenominator !== undefined &&
            input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
        ...(input.FramerateNumerator !== undefined &&
            input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
        ...(input.GopClosedCadence !== undefined &&
            input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
        ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize }),
        ...(input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits }),
        ...(input.Level !== undefined && input.Level !== null && { level: input.Level }),
        ...(input.LookAheadRateControl !== undefined &&
            input.LookAheadRateControl !== null && { lookAheadRateControl: input.LookAheadRateControl }),
        ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
        ...(input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval }),
        ...(input.ParDenominator !== undefined &&
            input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
        ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
        ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
        ...(input.QvbrQualityLevel !== undefined &&
            input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel }),
        ...(input.RateControlMode !== undefined &&
            input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
        ...(input.ScanType !== undefined && input.ScanType !== null && { scanType: input.ScanType }),
        ...(input.SceneChangeDetect !== undefined &&
            input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect }),
        ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
        ...(input.Tier !== undefined && input.Tier !== null && { tier: input.Tier }),
        ...(input.TimecodeInsertion !== undefined &&
            input.TimecodeInsertion !== null && { timecodeInsertion: input.TimecodeInsertion }),
    };
};
const serializeAws_restJson1Hdr10Settings = (input, context) => {
    return {
        ...(input.MaxCll !== undefined && input.MaxCll !== null && { maxCll: input.MaxCll }),
        ...(input.MaxFall !== undefined && input.MaxFall !== null && { maxFall: input.MaxFall }),
    };
};
const serializeAws_restJson1HlsAkamaiSettings = (input, context) => {
    return {
        ...(input.ConnectionRetryInterval !== undefined &&
            input.ConnectionRetryInterval !== null && { connectionRetryInterval: input.ConnectionRetryInterval }),
        ...(input.FilecacheDuration !== undefined &&
            input.FilecacheDuration !== null && { filecacheDuration: input.FilecacheDuration }),
        ...(input.HttpTransferMode !== undefined &&
            input.HttpTransferMode !== null && { httpTransferMode: input.HttpTransferMode }),
        ...(input.NumRetries !== undefined && input.NumRetries !== null && { numRetries: input.NumRetries }),
        ...(input.RestartDelay !== undefined && input.RestartDelay !== null && { restartDelay: input.RestartDelay }),
        ...(input.Salt !== undefined && input.Salt !== null && { salt: input.Salt }),
        ...(input.Token !== undefined && input.Token !== null && { token: input.Token }),
    };
};
const serializeAws_restJson1HlsBasicPutSettings = (input, context) => {
    return {
        ...(input.ConnectionRetryInterval !== undefined &&
            input.ConnectionRetryInterval !== null && { connectionRetryInterval: input.ConnectionRetryInterval }),
        ...(input.FilecacheDuration !== undefined &&
            input.FilecacheDuration !== null && { filecacheDuration: input.FilecacheDuration }),
        ...(input.NumRetries !== undefined && input.NumRetries !== null && { numRetries: input.NumRetries }),
        ...(input.RestartDelay !== undefined && input.RestartDelay !== null && { restartDelay: input.RestartDelay }),
    };
};
const serializeAws_restJson1HlsCdnSettings = (input, context) => {
    return {
        ...(input.HlsAkamaiSettings !== undefined &&
            input.HlsAkamaiSettings !== null && {
            hlsAkamaiSettings: serializeAws_restJson1HlsAkamaiSettings(input.HlsAkamaiSettings, context),
        }),
        ...(input.HlsBasicPutSettings !== undefined &&
            input.HlsBasicPutSettings !== null && {
            hlsBasicPutSettings: serializeAws_restJson1HlsBasicPutSettings(input.HlsBasicPutSettings, context),
        }),
        ...(input.HlsMediaStoreSettings !== undefined &&
            input.HlsMediaStoreSettings !== null && {
            hlsMediaStoreSettings: serializeAws_restJson1HlsMediaStoreSettings(input.HlsMediaStoreSettings, context),
        }),
        ...(input.HlsS3Settings !== undefined &&
            input.HlsS3Settings !== null && {
            hlsS3Settings: serializeAws_restJson1HlsS3Settings(input.HlsS3Settings, context),
        }),
        ...(input.HlsWebdavSettings !== undefined &&
            input.HlsWebdavSettings !== null && {
            hlsWebdavSettings: serializeAws_restJson1HlsWebdavSettings(input.HlsWebdavSettings, context),
        }),
    };
};
const serializeAws_restJson1HlsGroupSettings = (input, context) => {
    return {
        ...(input.AdMarkers !== undefined &&
            input.AdMarkers !== null && { adMarkers: serializeAws_restJson1__listOfHlsAdMarkers(input.AdMarkers, context) }),
        ...(input.BaseUrlContent !== undefined &&
            input.BaseUrlContent !== null && { baseUrlContent: input.BaseUrlContent }),
        ...(input.BaseUrlContent1 !== undefined &&
            input.BaseUrlContent1 !== null && { baseUrlContent1: input.BaseUrlContent1 }),
        ...(input.BaseUrlManifest !== undefined &&
            input.BaseUrlManifest !== null && { baseUrlManifest: input.BaseUrlManifest }),
        ...(input.BaseUrlManifest1 !== undefined &&
            input.BaseUrlManifest1 !== null && { baseUrlManifest1: input.BaseUrlManifest1 }),
        ...(input.CaptionLanguageMappings !== undefined &&
            input.CaptionLanguageMappings !== null && {
            captionLanguageMappings: serializeAws_restJson1__listOfCaptionLanguageMapping(input.CaptionLanguageMappings, context),
        }),
        ...(input.CaptionLanguageSetting !== undefined &&
            input.CaptionLanguageSetting !== null && { captionLanguageSetting: input.CaptionLanguageSetting }),
        ...(input.ClientCache !== undefined && input.ClientCache !== null && { clientCache: input.ClientCache }),
        ...(input.CodecSpecification !== undefined &&
            input.CodecSpecification !== null && { codecSpecification: input.CodecSpecification }),
        ...(input.ConstantIv !== undefined && input.ConstantIv !== null && { constantIv: input.ConstantIv }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
        ...(input.DirectoryStructure !== undefined &&
            input.DirectoryStructure !== null && { directoryStructure: input.DirectoryStructure }),
        ...(input.DiscontinuityTags !== undefined &&
            input.DiscontinuityTags !== null && { discontinuityTags: input.DiscontinuityTags }),
        ...(input.EncryptionType !== undefined &&
            input.EncryptionType !== null && { encryptionType: input.EncryptionType }),
        ...(input.HlsCdnSettings !== undefined &&
            input.HlsCdnSettings !== null && {
            hlsCdnSettings: serializeAws_restJson1HlsCdnSettings(input.HlsCdnSettings, context),
        }),
        ...(input.HlsId3SegmentTagging !== undefined &&
            input.HlsId3SegmentTagging !== null && { hlsId3SegmentTagging: input.HlsId3SegmentTagging }),
        ...(input.IFrameOnlyPlaylists !== undefined &&
            input.IFrameOnlyPlaylists !== null && { iFrameOnlyPlaylists: input.IFrameOnlyPlaylists }),
        ...(input.IncompleteSegmentBehavior !== undefined &&
            input.IncompleteSegmentBehavior !== null && { incompleteSegmentBehavior: input.IncompleteSegmentBehavior }),
        ...(input.IndexNSegments !== undefined &&
            input.IndexNSegments !== null && { indexNSegments: input.IndexNSegments }),
        ...(input.InputLossAction !== undefined &&
            input.InputLossAction !== null && { inputLossAction: input.InputLossAction }),
        ...(input.IvInManifest !== undefined && input.IvInManifest !== null && { ivInManifest: input.IvInManifest }),
        ...(input.IvSource !== undefined && input.IvSource !== null && { ivSource: input.IvSource }),
        ...(input.KeepSegments !== undefined && input.KeepSegments !== null && { keepSegments: input.KeepSegments }),
        ...(input.KeyFormat !== undefined && input.KeyFormat !== null && { keyFormat: input.KeyFormat }),
        ...(input.KeyFormatVersions !== undefined &&
            input.KeyFormatVersions !== null && { keyFormatVersions: input.KeyFormatVersions }),
        ...(input.KeyProviderSettings !== undefined &&
            input.KeyProviderSettings !== null && {
            keyProviderSettings: serializeAws_restJson1KeyProviderSettings(input.KeyProviderSettings, context),
        }),
        ...(input.ManifestCompression !== undefined &&
            input.ManifestCompression !== null && { manifestCompression: input.ManifestCompression }),
        ...(input.ManifestDurationFormat !== undefined &&
            input.ManifestDurationFormat !== null && { manifestDurationFormat: input.ManifestDurationFormat }),
        ...(input.MinSegmentLength !== undefined &&
            input.MinSegmentLength !== null && { minSegmentLength: input.MinSegmentLength }),
        ...(input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
        ...(input.OutputSelection !== undefined &&
            input.OutputSelection !== null && { outputSelection: input.OutputSelection }),
        ...(input.ProgramDateTime !== undefined &&
            input.ProgramDateTime !== null && { programDateTime: input.ProgramDateTime }),
        ...(input.ProgramDateTimePeriod !== undefined &&
            input.ProgramDateTimePeriod !== null && { programDateTimePeriod: input.ProgramDateTimePeriod }),
        ...(input.RedundantManifest !== undefined &&
            input.RedundantManifest !== null && { redundantManifest: input.RedundantManifest }),
        ...(input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength }),
        ...(input.SegmentationMode !== undefined &&
            input.SegmentationMode !== null && { segmentationMode: input.SegmentationMode }),
        ...(input.SegmentsPerSubdirectory !== undefined &&
            input.SegmentsPerSubdirectory !== null && { segmentsPerSubdirectory: input.SegmentsPerSubdirectory }),
        ...(input.StreamInfResolution !== undefined &&
            input.StreamInfResolution !== null && { streamInfResolution: input.StreamInfResolution }),
        ...(input.TimedMetadataId3Frame !== undefined &&
            input.TimedMetadataId3Frame !== null && { timedMetadataId3Frame: input.TimedMetadataId3Frame }),
        ...(input.TimedMetadataId3Period !== undefined &&
            input.TimedMetadataId3Period !== null && { timedMetadataId3Period: input.TimedMetadataId3Period }),
        ...(input.TimestampDeltaMilliseconds !== undefined &&
            input.TimestampDeltaMilliseconds !== null && { timestampDeltaMilliseconds: input.TimestampDeltaMilliseconds }),
        ...(input.TsFileMode !== undefined && input.TsFileMode !== null && { tsFileMode: input.TsFileMode }),
    };
};
const serializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings = (input, context) => {
    return {
        ...(input.Tag !== undefined && input.Tag !== null && { tag: input.Tag }),
    };
};
const serializeAws_restJson1HlsInputSettings = (input, context) => {
    return {
        ...(input.Bandwidth !== undefined && input.Bandwidth !== null && { bandwidth: input.Bandwidth }),
        ...(input.BufferSegments !== undefined &&
            input.BufferSegments !== null && { bufferSegments: input.BufferSegments }),
        ...(input.Retries !== undefined && input.Retries !== null && { retries: input.Retries }),
        ...(input.RetryInterval !== undefined && input.RetryInterval !== null && { retryInterval: input.RetryInterval }),
    };
};
const serializeAws_restJson1HlsMediaStoreSettings = (input, context) => {
    return {
        ...(input.ConnectionRetryInterval !== undefined &&
            input.ConnectionRetryInterval !== null && { connectionRetryInterval: input.ConnectionRetryInterval }),
        ...(input.FilecacheDuration !== undefined &&
            input.FilecacheDuration !== null && { filecacheDuration: input.FilecacheDuration }),
        ...(input.MediaStoreStorageClass !== undefined &&
            input.MediaStoreStorageClass !== null && { mediaStoreStorageClass: input.MediaStoreStorageClass }),
        ...(input.NumRetries !== undefined && input.NumRetries !== null && { numRetries: input.NumRetries }),
        ...(input.RestartDelay !== undefined && input.RestartDelay !== null && { restartDelay: input.RestartDelay }),
    };
};
const serializeAws_restJson1HlsOutputSettings = (input, context) => {
    return {
        ...(input.H265PackagingType !== undefined &&
            input.H265PackagingType !== null && { h265PackagingType: input.H265PackagingType }),
        ...(input.HlsSettings !== undefined &&
            input.HlsSettings !== null && { hlsSettings: serializeAws_restJson1HlsSettings(input.HlsSettings, context) }),
        ...(input.NameModifier !== undefined && input.NameModifier !== null && { nameModifier: input.NameModifier }),
        ...(input.SegmentModifier !== undefined &&
            input.SegmentModifier !== null && { segmentModifier: input.SegmentModifier }),
    };
};
const serializeAws_restJson1HlsS3Settings = (input, context) => {
    return {
        ...(input.CannedAcl !== undefined && input.CannedAcl !== null && { cannedAcl: input.CannedAcl }),
    };
};
const serializeAws_restJson1HlsSettings = (input, context) => {
    return {
        ...(input.AudioOnlyHlsSettings !== undefined &&
            input.AudioOnlyHlsSettings !== null && {
            audioOnlyHlsSettings: serializeAws_restJson1AudioOnlyHlsSettings(input.AudioOnlyHlsSettings, context),
        }),
        ...(input.Fmp4HlsSettings !== undefined &&
            input.Fmp4HlsSettings !== null && {
            fmp4HlsSettings: serializeAws_restJson1Fmp4HlsSettings(input.Fmp4HlsSettings, context),
        }),
        ...(input.FrameCaptureHlsSettings !== undefined &&
            input.FrameCaptureHlsSettings !== null && {
            frameCaptureHlsSettings: serializeAws_restJson1FrameCaptureHlsSettings(input.FrameCaptureHlsSettings, context),
        }),
        ...(input.StandardHlsSettings !== undefined &&
            input.StandardHlsSettings !== null && {
            standardHlsSettings: serializeAws_restJson1StandardHlsSettings(input.StandardHlsSettings, context),
        }),
    };
};
const serializeAws_restJson1HlsTimedMetadataScheduleActionSettings = (input, context) => {
    return {
        ...(input.Id3 !== undefined && input.Id3 !== null && { id3: input.Id3 }),
    };
};
const serializeAws_restJson1HlsWebdavSettings = (input, context) => {
    return {
        ...(input.ConnectionRetryInterval !== undefined &&
            input.ConnectionRetryInterval !== null && { connectionRetryInterval: input.ConnectionRetryInterval }),
        ...(input.FilecacheDuration !== undefined &&
            input.FilecacheDuration !== null && { filecacheDuration: input.FilecacheDuration }),
        ...(input.HttpTransferMode !== undefined &&
            input.HttpTransferMode !== null && { httpTransferMode: input.HttpTransferMode }),
        ...(input.NumRetries !== undefined && input.NumRetries !== null && { numRetries: input.NumRetries }),
        ...(input.RestartDelay !== undefined && input.RestartDelay !== null && { restartDelay: input.RestartDelay }),
    };
};
const serializeAws_restJson1HtmlMotionGraphicsSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1ImmediateModeScheduleActionStartSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1InputAttachment = (input, context) => {
    return {
        ...(input.AutomaticInputFailoverSettings !== undefined &&
            input.AutomaticInputFailoverSettings !== null && {
            automaticInputFailoverSettings: serializeAws_restJson1AutomaticInputFailoverSettings(input.AutomaticInputFailoverSettings, context),
        }),
        ...(input.InputAttachmentName !== undefined &&
            input.InputAttachmentName !== null && { inputAttachmentName: input.InputAttachmentName }),
        ...(input.InputId !== undefined && input.InputId !== null && { inputId: input.InputId }),
        ...(input.InputSettings !== undefined &&
            input.InputSettings !== null && {
            inputSettings: serializeAws_restJson1InputSettings(input.InputSettings, context),
        }),
    };
};
const serializeAws_restJson1InputChannelLevel = (input, context) => {
    return {
        ...(input.Gain !== undefined && input.Gain !== null && { gain: input.Gain }),
        ...(input.InputChannel !== undefined && input.InputChannel !== null && { inputChannel: input.InputChannel }),
    };
};
const serializeAws_restJson1InputClippingSettings = (input, context) => {
    return {
        ...(input.InputTimecodeSource !== undefined &&
            input.InputTimecodeSource !== null && { inputTimecodeSource: input.InputTimecodeSource }),
        ...(input.StartTimecode !== undefined &&
            input.StartTimecode !== null && {
            startTimecode: serializeAws_restJson1StartTimecode(input.StartTimecode, context),
        }),
        ...(input.StopTimecode !== undefined &&
            input.StopTimecode !== null && { stopTimecode: serializeAws_restJson1StopTimecode(input.StopTimecode, context) }),
    };
};
const serializeAws_restJson1InputDestinationRequest = (input, context) => {
    return {
        ...(input.StreamName !== undefined && input.StreamName !== null && { streamName: input.StreamName }),
    };
};
const serializeAws_restJson1InputDeviceConfigurableSettings = (input, context) => {
    return {
        ...(input.ConfiguredInput !== undefined &&
            input.ConfiguredInput !== null && { configuredInput: input.ConfiguredInput }),
        ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    };
};
const serializeAws_restJson1InputDeviceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    };
};
const serializeAws_restJson1InputDeviceSettings = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    };
};
const serializeAws_restJson1InputLocation = (input, context) => {
    return {
        ...(input.PasswordParam !== undefined && input.PasswordParam !== null && { passwordParam: input.PasswordParam }),
        ...(input.Uri !== undefined && input.Uri !== null && { uri: input.Uri }),
        ...(input.Username !== undefined && input.Username !== null && { username: input.Username }),
    };
};
const serializeAws_restJson1InputLossBehavior = (input, context) => {
    return {
        ...(input.BlackFrameMsec !== undefined &&
            input.BlackFrameMsec !== null && { blackFrameMsec: input.BlackFrameMsec }),
        ...(input.InputLossImageColor !== undefined &&
            input.InputLossImageColor !== null && { inputLossImageColor: input.InputLossImageColor }),
        ...(input.InputLossImageSlate !== undefined &&
            input.InputLossImageSlate !== null && {
            inputLossImageSlate: serializeAws_restJson1InputLocation(input.InputLossImageSlate, context),
        }),
        ...(input.InputLossImageType !== undefined &&
            input.InputLossImageType !== null && { inputLossImageType: input.InputLossImageType }),
        ...(input.RepeatFrameMsec !== undefined &&
            input.RepeatFrameMsec !== null && { repeatFrameMsec: input.RepeatFrameMsec }),
    };
};
const serializeAws_restJson1InputLossFailoverSettings = (input, context) => {
    return {
        ...(input.InputLossThresholdMsec !== undefined &&
            input.InputLossThresholdMsec !== null && { inputLossThresholdMsec: input.InputLossThresholdMsec }),
    };
};
const serializeAws_restJson1InputPrepareScheduleActionSettings = (input, context) => {
    return {
        ...(input.InputAttachmentNameReference !== undefined &&
            input.InputAttachmentNameReference !== null && {
            inputAttachmentNameReference: input.InputAttachmentNameReference,
        }),
        ...(input.InputClippingSettings !== undefined &&
            input.InputClippingSettings !== null && {
            inputClippingSettings: serializeAws_restJson1InputClippingSettings(input.InputClippingSettings, context),
        }),
        ...(input.UrlPath !== undefined &&
            input.UrlPath !== null && { urlPath: serializeAws_restJson1__listOf__string(input.UrlPath, context) }),
    };
};
const serializeAws_restJson1InputSettings = (input, context) => {
    return {
        ...(input.AudioSelectors !== undefined &&
            input.AudioSelectors !== null && {
            audioSelectors: serializeAws_restJson1__listOfAudioSelector(input.AudioSelectors, context),
        }),
        ...(input.CaptionSelectors !== undefined &&
            input.CaptionSelectors !== null && {
            captionSelectors: serializeAws_restJson1__listOfCaptionSelector(input.CaptionSelectors, context),
        }),
        ...(input.DeblockFilter !== undefined && input.DeblockFilter !== null && { deblockFilter: input.DeblockFilter }),
        ...(input.DenoiseFilter !== undefined && input.DenoiseFilter !== null && { denoiseFilter: input.DenoiseFilter }),
        ...(input.FilterStrength !== undefined &&
            input.FilterStrength !== null && { filterStrength: input.FilterStrength }),
        ...(input.InputFilter !== undefined && input.InputFilter !== null && { inputFilter: input.InputFilter }),
        ...(input.NetworkInputSettings !== undefined &&
            input.NetworkInputSettings !== null && {
            networkInputSettings: serializeAws_restJson1NetworkInputSettings(input.NetworkInputSettings, context),
        }),
        ...(input.Smpte2038DataPreference !== undefined &&
            input.Smpte2038DataPreference !== null && { smpte2038DataPreference: input.Smpte2038DataPreference }),
        ...(input.SourceEndBehavior !== undefined &&
            input.SourceEndBehavior !== null && { sourceEndBehavior: input.SourceEndBehavior }),
        ...(input.VideoSelector !== undefined &&
            input.VideoSelector !== null && {
            videoSelector: serializeAws_restJson1VideoSelector(input.VideoSelector, context),
        }),
    };
};
const serializeAws_restJson1InputSourceRequest = (input, context) => {
    return {
        ...(input.PasswordParam !== undefined && input.PasswordParam !== null && { passwordParam: input.PasswordParam }),
        ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
        ...(input.Username !== undefined && input.Username !== null && { username: input.Username }),
    };
};
const serializeAws_restJson1InputSpecification = (input, context) => {
    return {
        ...(input.Codec !== undefined && input.Codec !== null && { codec: input.Codec }),
        ...(input.MaximumBitrate !== undefined &&
            input.MaximumBitrate !== null && { maximumBitrate: input.MaximumBitrate }),
        ...(input.Resolution !== undefined && input.Resolution !== null && { resolution: input.Resolution }),
    };
};
const serializeAws_restJson1InputSwitchScheduleActionSettings = (input, context) => {
    return {
        ...(input.InputAttachmentNameReference !== undefined &&
            input.InputAttachmentNameReference !== null && {
            inputAttachmentNameReference: input.InputAttachmentNameReference,
        }),
        ...(input.InputClippingSettings !== undefined &&
            input.InputClippingSettings !== null && {
            inputClippingSettings: serializeAws_restJson1InputClippingSettings(input.InputClippingSettings, context),
        }),
        ...(input.UrlPath !== undefined &&
            input.UrlPath !== null && { urlPath: serializeAws_restJson1__listOf__string(input.UrlPath, context) }),
    };
};
const serializeAws_restJson1InputVpcRequest = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1__listOf__string(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { subnetIds: serializeAws_restJson1__listOf__string(input.SubnetIds, context) }),
    };
};
const serializeAws_restJson1InputWhitelistRuleCidr = (input, context) => {
    return {
        ...(input.Cidr !== undefined && input.Cidr !== null && { cidr: input.Cidr }),
    };
};
const serializeAws_restJson1KeyProviderSettings = (input, context) => {
    return {
        ...(input.StaticKeySettings !== undefined &&
            input.StaticKeySettings !== null && {
            staticKeySettings: serializeAws_restJson1StaticKeySettings(input.StaticKeySettings, context),
        }),
    };
};
const serializeAws_restJson1M2tsSettings = (input, context) => {
    return {
        ...(input.AbsentInputAudioBehavior !== undefined &&
            input.AbsentInputAudioBehavior !== null && { absentInputAudioBehavior: input.AbsentInputAudioBehavior }),
        ...(input.Arib !== undefined && input.Arib !== null && { arib: input.Arib }),
        ...(input.AribCaptionsPid !== undefined &&
            input.AribCaptionsPid !== null && { aribCaptionsPid: input.AribCaptionsPid }),
        ...(input.AribCaptionsPidControl !== undefined &&
            input.AribCaptionsPidControl !== null && { aribCaptionsPidControl: input.AribCaptionsPidControl }),
        ...(input.AudioBufferModel !== undefined &&
            input.AudioBufferModel !== null && { audioBufferModel: input.AudioBufferModel }),
        ...(input.AudioFramesPerPes !== undefined &&
            input.AudioFramesPerPes !== null && { audioFramesPerPes: input.AudioFramesPerPes }),
        ...(input.AudioPids !== undefined && input.AudioPids !== null && { audioPids: input.AudioPids }),
        ...(input.AudioStreamType !== undefined &&
            input.AudioStreamType !== null && { audioStreamType: input.AudioStreamType }),
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.BufferModel !== undefined && input.BufferModel !== null && { bufferModel: input.BufferModel }),
        ...(input.CcDescriptor !== undefined && input.CcDescriptor !== null && { ccDescriptor: input.CcDescriptor }),
        ...(input.DvbNitSettings !== undefined &&
            input.DvbNitSettings !== null && {
            dvbNitSettings: serializeAws_restJson1DvbNitSettings(input.DvbNitSettings, context),
        }),
        ...(input.DvbSdtSettings !== undefined &&
            input.DvbSdtSettings !== null && {
            dvbSdtSettings: serializeAws_restJson1DvbSdtSettings(input.DvbSdtSettings, context),
        }),
        ...(input.DvbSubPids !== undefined && input.DvbSubPids !== null && { dvbSubPids: input.DvbSubPids }),
        ...(input.DvbTdtSettings !== undefined &&
            input.DvbTdtSettings !== null && {
            dvbTdtSettings: serializeAws_restJson1DvbTdtSettings(input.DvbTdtSettings, context),
        }),
        ...(input.DvbTeletextPid !== undefined &&
            input.DvbTeletextPid !== null && { dvbTeletextPid: input.DvbTeletextPid }),
        ...(input.Ebif !== undefined && input.Ebif !== null && { ebif: input.Ebif }),
        ...(input.EbpAudioInterval !== undefined &&
            input.EbpAudioInterval !== null && { ebpAudioInterval: input.EbpAudioInterval }),
        ...(input.EbpLookaheadMs !== undefined &&
            input.EbpLookaheadMs !== null && { ebpLookaheadMs: input.EbpLookaheadMs }),
        ...(input.EbpPlacement !== undefined && input.EbpPlacement !== null && { ebpPlacement: input.EbpPlacement }),
        ...(input.EcmPid !== undefined && input.EcmPid !== null && { ecmPid: input.EcmPid }),
        ...(input.EsRateInPes !== undefined && input.EsRateInPes !== null && { esRateInPes: input.EsRateInPes }),
        ...(input.EtvPlatformPid !== undefined &&
            input.EtvPlatformPid !== null && { etvPlatformPid: input.EtvPlatformPid }),
        ...(input.EtvSignalPid !== undefined && input.EtvSignalPid !== null && { etvSignalPid: input.EtvSignalPid }),
        ...(input.FragmentTime !== undefined && input.FragmentTime !== null && { fragmentTime: input.FragmentTime }),
        ...(input.Klv !== undefined && input.Klv !== null && { klv: input.Klv }),
        ...(input.KlvDataPids !== undefined && input.KlvDataPids !== null && { klvDataPids: input.KlvDataPids }),
        ...(input.NielsenId3Behavior !== undefined &&
            input.NielsenId3Behavior !== null && { nielsenId3Behavior: input.NielsenId3Behavior }),
        ...(input.NullPacketBitrate !== undefined &&
            input.NullPacketBitrate !== null && { nullPacketBitrate: input.NullPacketBitrate }),
        ...(input.PatInterval !== undefined && input.PatInterval !== null && { patInterval: input.PatInterval }),
        ...(input.PcrControl !== undefined && input.PcrControl !== null && { pcrControl: input.PcrControl }),
        ...(input.PcrPeriod !== undefined && input.PcrPeriod !== null && { pcrPeriod: input.PcrPeriod }),
        ...(input.PcrPid !== undefined && input.PcrPid !== null && { pcrPid: input.PcrPid }),
        ...(input.PmtInterval !== undefined && input.PmtInterval !== null && { pmtInterval: input.PmtInterval }),
        ...(input.PmtPid !== undefined && input.PmtPid !== null && { pmtPid: input.PmtPid }),
        ...(input.ProgramNum !== undefined && input.ProgramNum !== null && { programNum: input.ProgramNum }),
        ...(input.RateMode !== undefined && input.RateMode !== null && { rateMode: input.RateMode }),
        ...(input.Scte27Pids !== undefined && input.Scte27Pids !== null && { scte27Pids: input.Scte27Pids }),
        ...(input.Scte35Control !== undefined && input.Scte35Control !== null && { scte35Control: input.Scte35Control }),
        ...(input.Scte35Pid !== undefined && input.Scte35Pid !== null && { scte35Pid: input.Scte35Pid }),
        ...(input.SegmentationMarkers !== undefined &&
            input.SegmentationMarkers !== null && { segmentationMarkers: input.SegmentationMarkers }),
        ...(input.SegmentationStyle !== undefined &&
            input.SegmentationStyle !== null && { segmentationStyle: input.SegmentationStyle }),
        ...(input.SegmentationTime !== undefined &&
            input.SegmentationTime !== null && { segmentationTime: input.SegmentationTime }),
        ...(input.TimedMetadataBehavior !== undefined &&
            input.TimedMetadataBehavior !== null && { timedMetadataBehavior: input.TimedMetadataBehavior }),
        ...(input.TimedMetadataPid !== undefined &&
            input.TimedMetadataPid !== null && { timedMetadataPid: input.TimedMetadataPid }),
        ...(input.TransportStreamId !== undefined &&
            input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId }),
        ...(input.VideoPid !== undefined && input.VideoPid !== null && { videoPid: input.VideoPid }),
    };
};
const serializeAws_restJson1M3u8Settings = (input, context) => {
    return {
        ...(input.AudioFramesPerPes !== undefined &&
            input.AudioFramesPerPes !== null && { audioFramesPerPes: input.AudioFramesPerPes }),
        ...(input.AudioPids !== undefined && input.AudioPids !== null && { audioPids: input.AudioPids }),
        ...(input.EcmPid !== undefined && input.EcmPid !== null && { ecmPid: input.EcmPid }),
        ...(input.NielsenId3Behavior !== undefined &&
            input.NielsenId3Behavior !== null && { nielsenId3Behavior: input.NielsenId3Behavior }),
        ...(input.PatInterval !== undefined && input.PatInterval !== null && { patInterval: input.PatInterval }),
        ...(input.PcrControl !== undefined && input.PcrControl !== null && { pcrControl: input.PcrControl }),
        ...(input.PcrPeriod !== undefined && input.PcrPeriod !== null && { pcrPeriod: input.PcrPeriod }),
        ...(input.PcrPid !== undefined && input.PcrPid !== null && { pcrPid: input.PcrPid }),
        ...(input.PmtInterval !== undefined && input.PmtInterval !== null && { pmtInterval: input.PmtInterval }),
        ...(input.PmtPid !== undefined && input.PmtPid !== null && { pmtPid: input.PmtPid }),
        ...(input.ProgramNum !== undefined && input.ProgramNum !== null && { programNum: input.ProgramNum }),
        ...(input.Scte35Behavior !== undefined &&
            input.Scte35Behavior !== null && { scte35Behavior: input.Scte35Behavior }),
        ...(input.Scte35Pid !== undefined && input.Scte35Pid !== null && { scte35Pid: input.Scte35Pid }),
        ...(input.TimedMetadataBehavior !== undefined &&
            input.TimedMetadataBehavior !== null && { timedMetadataBehavior: input.TimedMetadataBehavior }),
        ...(input.TimedMetadataPid !== undefined &&
            input.TimedMetadataPid !== null && { timedMetadataPid: input.TimedMetadataPid }),
        ...(input.TransportStreamId !== undefined &&
            input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId }),
        ...(input.VideoPid !== undefined && input.VideoPid !== null && { videoPid: input.VideoPid }),
    };
};
const serializeAws_restJson1MediaConnectFlowRequest = (input, context) => {
    return {
        ...(input.FlowArn !== undefined && input.FlowArn !== null && { flowArn: input.FlowArn }),
    };
};
const serializeAws_restJson1MediaPackageGroupSettings = (input, context) => {
    return {
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
    };
};
const serializeAws_restJson1MediaPackageOutputDestinationSettings = (input, context) => {
    return {
        ...(input.ChannelId !== undefined && input.ChannelId !== null && { channelId: input.ChannelId }),
    };
};
const serializeAws_restJson1MediaPackageOutputSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1MotionGraphicsActivateScheduleActionSettings = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { duration: input.Duration }),
        ...(input.PasswordParam !== undefined && input.PasswordParam !== null && { passwordParam: input.PasswordParam }),
        ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
        ...(input.Username !== undefined && input.Username !== null && { username: input.Username }),
    };
};
const serializeAws_restJson1MotionGraphicsConfiguration = (input, context) => {
    return {
        ...(input.MotionGraphicsInsertion !== undefined &&
            input.MotionGraphicsInsertion !== null && { motionGraphicsInsertion: input.MotionGraphicsInsertion }),
        ...(input.MotionGraphicsSettings !== undefined &&
            input.MotionGraphicsSettings !== null && {
            motionGraphicsSettings: serializeAws_restJson1MotionGraphicsSettings(input.MotionGraphicsSettings, context),
        }),
    };
};
const serializeAws_restJson1MotionGraphicsDeactivateScheduleActionSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1MotionGraphicsSettings = (input, context) => {
    return {
        ...(input.HtmlMotionGraphicsSettings !== undefined &&
            input.HtmlMotionGraphicsSettings !== null && {
            htmlMotionGraphicsSettings: serializeAws_restJson1HtmlMotionGraphicsSettings(input.HtmlMotionGraphicsSettings, context),
        }),
    };
};
const serializeAws_restJson1Mp2Settings = (input, context) => {
    return {
        ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
        ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
        ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    };
};
const serializeAws_restJson1Mpeg2FilterSettings = (input, context) => {
    return {
        ...(input.TemporalFilterSettings !== undefined &&
            input.TemporalFilterSettings !== null && {
            temporalFilterSettings: serializeAws_restJson1TemporalFilterSettings(input.TemporalFilterSettings, context),
        }),
    };
};
const serializeAws_restJson1Mpeg2Settings = (input, context) => {
    return {
        ...(input.AdaptiveQuantization !== undefined &&
            input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
        ...(input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling }),
        ...(input.ColorMetadata !== undefined && input.ColorMetadata !== null && { colorMetadata: input.ColorMetadata }),
        ...(input.ColorSpace !== undefined && input.ColorSpace !== null && { colorSpace: input.ColorSpace }),
        ...(input.DisplayAspectRatio !== undefined &&
            input.DisplayAspectRatio !== null && { displayAspectRatio: input.DisplayAspectRatio }),
        ...(input.FilterSettings !== undefined &&
            input.FilterSettings !== null && {
            filterSettings: serializeAws_restJson1Mpeg2FilterSettings(input.FilterSettings, context),
        }),
        ...(input.FixedAfd !== undefined && input.FixedAfd !== null && { fixedAfd: input.FixedAfd }),
        ...(input.FramerateDenominator !== undefined &&
            input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
        ...(input.FramerateNumerator !== undefined &&
            input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
        ...(input.GopClosedCadence !== undefined &&
            input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
        ...(input.GopNumBFrames !== undefined && input.GopNumBFrames !== null && { gopNumBFrames: input.GopNumBFrames }),
        ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize }),
        ...(input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits }),
        ...(input.ScanType !== undefined && input.ScanType !== null && { scanType: input.ScanType }),
        ...(input.SubgopLength !== undefined && input.SubgopLength !== null && { subgopLength: input.SubgopLength }),
        ...(input.TimecodeInsertion !== undefined &&
            input.TimecodeInsertion !== null && { timecodeInsertion: input.TimecodeInsertion }),
    };
};
const serializeAws_restJson1MsSmoothGroupSettings = (input, context) => {
    return {
        ...(input.AcquisitionPointId !== undefined &&
            input.AcquisitionPointId !== null && { acquisitionPointId: input.AcquisitionPointId }),
        ...(input.AudioOnlyTimecodeControl !== undefined &&
            input.AudioOnlyTimecodeControl !== null && { audioOnlyTimecodeControl: input.AudioOnlyTimecodeControl }),
        ...(input.CertificateMode !== undefined &&
            input.CertificateMode !== null && { certificateMode: input.CertificateMode }),
        ...(input.ConnectionRetryInterval !== undefined &&
            input.ConnectionRetryInterval !== null && { connectionRetryInterval: input.ConnectionRetryInterval }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
        ...(input.EventId !== undefined && input.EventId !== null && { eventId: input.EventId }),
        ...(input.EventIdMode !== undefined && input.EventIdMode !== null && { eventIdMode: input.EventIdMode }),
        ...(input.EventStopBehavior !== undefined &&
            input.EventStopBehavior !== null && { eventStopBehavior: input.EventStopBehavior }),
        ...(input.FilecacheDuration !== undefined &&
            input.FilecacheDuration !== null && { filecacheDuration: input.FilecacheDuration }),
        ...(input.FragmentLength !== undefined &&
            input.FragmentLength !== null && { fragmentLength: input.FragmentLength }),
        ...(input.InputLossAction !== undefined &&
            input.InputLossAction !== null && { inputLossAction: input.InputLossAction }),
        ...(input.NumRetries !== undefined && input.NumRetries !== null && { numRetries: input.NumRetries }),
        ...(input.RestartDelay !== undefined && input.RestartDelay !== null && { restartDelay: input.RestartDelay }),
        ...(input.SegmentationMode !== undefined &&
            input.SegmentationMode !== null && { segmentationMode: input.SegmentationMode }),
        ...(input.SendDelayMs !== undefined && input.SendDelayMs !== null && { sendDelayMs: input.SendDelayMs }),
        ...(input.SparseTrackType !== undefined &&
            input.SparseTrackType !== null && { sparseTrackType: input.SparseTrackType }),
        ...(input.StreamManifestBehavior !== undefined &&
            input.StreamManifestBehavior !== null && { streamManifestBehavior: input.StreamManifestBehavior }),
        ...(input.TimestampOffset !== undefined &&
            input.TimestampOffset !== null && { timestampOffset: input.TimestampOffset }),
        ...(input.TimestampOffsetMode !== undefined &&
            input.TimestampOffsetMode !== null && { timestampOffsetMode: input.TimestampOffsetMode }),
    };
};
const serializeAws_restJson1MsSmoothOutputSettings = (input, context) => {
    return {
        ...(input.H265PackagingType !== undefined &&
            input.H265PackagingType !== null && { h265PackagingType: input.H265PackagingType }),
        ...(input.NameModifier !== undefined && input.NameModifier !== null && { nameModifier: input.NameModifier }),
    };
};
const serializeAws_restJson1MultiplexGroupSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1MultiplexOutputSettings = (input, context) => {
    return {
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
    };
};
const serializeAws_restJson1MultiplexProgramChannelDestinationSettings = (input, context) => {
    return {
        ...(input.MultiplexId !== undefined && input.MultiplexId !== null && { multiplexId: input.MultiplexId }),
        ...(input.ProgramName !== undefined && input.ProgramName !== null && { programName: input.ProgramName }),
    };
};
const serializeAws_restJson1MultiplexProgramServiceDescriptor = (input, context) => {
    return {
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { providerName: input.ProviderName }),
        ...(input.ServiceName !== undefined && input.ServiceName !== null && { serviceName: input.ServiceName }),
    };
};
const serializeAws_restJson1MultiplexProgramSettings = (input, context) => {
    return {
        ...(input.PreferredChannelPipeline !== undefined &&
            input.PreferredChannelPipeline !== null && { preferredChannelPipeline: input.PreferredChannelPipeline }),
        ...(input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber }),
        ...(input.ServiceDescriptor !== undefined &&
            input.ServiceDescriptor !== null && {
            serviceDescriptor: serializeAws_restJson1MultiplexProgramServiceDescriptor(input.ServiceDescriptor, context),
        }),
        ...(input.VideoSettings !== undefined &&
            input.VideoSettings !== null && {
            videoSettings: serializeAws_restJson1MultiplexVideoSettings(input.VideoSettings, context),
        }),
    };
};
const serializeAws_restJson1MultiplexSettings = (input, context) => {
    return {
        ...(input.MaximumVideoBufferDelayMilliseconds !== undefined &&
            input.MaximumVideoBufferDelayMilliseconds !== null && {
            maximumVideoBufferDelayMilliseconds: input.MaximumVideoBufferDelayMilliseconds,
        }),
        ...(input.TransportStreamBitrate !== undefined &&
            input.TransportStreamBitrate !== null && { transportStreamBitrate: input.TransportStreamBitrate }),
        ...(input.TransportStreamId !== undefined &&
            input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId }),
        ...(input.TransportStreamReservedBitrate !== undefined &&
            input.TransportStreamReservedBitrate !== null && {
            transportStreamReservedBitrate: input.TransportStreamReservedBitrate,
        }),
    };
};
const serializeAws_restJson1MultiplexStatmuxVideoSettings = (input, context) => {
    return {
        ...(input.MaximumBitrate !== undefined &&
            input.MaximumBitrate !== null && { maximumBitrate: input.MaximumBitrate }),
        ...(input.MinimumBitrate !== undefined &&
            input.MinimumBitrate !== null && { minimumBitrate: input.MinimumBitrate }),
        ...(input.Priority !== undefined && input.Priority !== null && { priority: input.Priority }),
    };
};
const serializeAws_restJson1MultiplexVideoSettings = (input, context) => {
    return {
        ...(input.ConstantBitrate !== undefined &&
            input.ConstantBitrate !== null && { constantBitrate: input.ConstantBitrate }),
        ...(input.StatmuxSettings !== undefined &&
            input.StatmuxSettings !== null && {
            statmuxSettings: serializeAws_restJson1MultiplexStatmuxVideoSettings(input.StatmuxSettings, context),
        }),
    };
};
const serializeAws_restJson1NetworkInputSettings = (input, context) => {
    return {
        ...(input.HlsInputSettings !== undefined &&
            input.HlsInputSettings !== null && {
            hlsInputSettings: serializeAws_restJson1HlsInputSettings(input.HlsInputSettings, context),
        }),
        ...(input.ServerValidation !== undefined &&
            input.ServerValidation !== null && { serverValidation: input.ServerValidation }),
    };
};
const serializeAws_restJson1NielsenConfiguration = (input, context) => {
    return {
        ...(input.DistributorId !== undefined && input.DistributorId !== null && { distributorId: input.DistributorId }),
        ...(input.NielsenPcmToId3Tagging !== undefined &&
            input.NielsenPcmToId3Tagging !== null && { nielsenPcmToId3Tagging: input.NielsenPcmToId3Tagging }),
    };
};
const serializeAws_restJson1Output = (input, context) => {
    return {
        ...(input.AudioDescriptionNames !== undefined &&
            input.AudioDescriptionNames !== null && {
            audioDescriptionNames: serializeAws_restJson1__listOf__string(input.AudioDescriptionNames, context),
        }),
        ...(input.CaptionDescriptionNames !== undefined &&
            input.CaptionDescriptionNames !== null && {
            captionDescriptionNames: serializeAws_restJson1__listOf__string(input.CaptionDescriptionNames, context),
        }),
        ...(input.OutputName !== undefined && input.OutputName !== null && { outputName: input.OutputName }),
        ...(input.OutputSettings !== undefined &&
            input.OutputSettings !== null && {
            outputSettings: serializeAws_restJson1OutputSettings(input.OutputSettings, context),
        }),
        ...(input.VideoDescriptionName !== undefined &&
            input.VideoDescriptionName !== null && { videoDescriptionName: input.VideoDescriptionName }),
    };
};
const serializeAws_restJson1OutputDestination = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
        ...(input.MediaPackageSettings !== undefined &&
            input.MediaPackageSettings !== null && {
            mediaPackageSettings: serializeAws_restJson1__listOfMediaPackageOutputDestinationSettings(input.MediaPackageSettings, context),
        }),
        ...(input.MultiplexSettings !== undefined &&
            input.MultiplexSettings !== null && {
            multiplexSettings: serializeAws_restJson1MultiplexProgramChannelDestinationSettings(input.MultiplexSettings, context),
        }),
        ...(input.Settings !== undefined &&
            input.Settings !== null && {
            settings: serializeAws_restJson1__listOfOutputDestinationSettings(input.Settings, context),
        }),
    };
};
const serializeAws_restJson1OutputDestinationSettings = (input, context) => {
    return {
        ...(input.PasswordParam !== undefined && input.PasswordParam !== null && { passwordParam: input.PasswordParam }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { streamName: input.StreamName }),
        ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
        ...(input.Username !== undefined && input.Username !== null && { username: input.Username }),
    };
};
const serializeAws_restJson1OutputGroup = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.OutputGroupSettings !== undefined &&
            input.OutputGroupSettings !== null && {
            outputGroupSettings: serializeAws_restJson1OutputGroupSettings(input.OutputGroupSettings, context),
        }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { outputs: serializeAws_restJson1__listOfOutput(input.Outputs, context) }),
    };
};
const serializeAws_restJson1OutputGroupSettings = (input, context) => {
    return {
        ...(input.ArchiveGroupSettings !== undefined &&
            input.ArchiveGroupSettings !== null && {
            archiveGroupSettings: serializeAws_restJson1ArchiveGroupSettings(input.ArchiveGroupSettings, context),
        }),
        ...(input.FrameCaptureGroupSettings !== undefined &&
            input.FrameCaptureGroupSettings !== null && {
            frameCaptureGroupSettings: serializeAws_restJson1FrameCaptureGroupSettings(input.FrameCaptureGroupSettings, context),
        }),
        ...(input.HlsGroupSettings !== undefined &&
            input.HlsGroupSettings !== null && {
            hlsGroupSettings: serializeAws_restJson1HlsGroupSettings(input.HlsGroupSettings, context),
        }),
        ...(input.MediaPackageGroupSettings !== undefined &&
            input.MediaPackageGroupSettings !== null && {
            mediaPackageGroupSettings: serializeAws_restJson1MediaPackageGroupSettings(input.MediaPackageGroupSettings, context),
        }),
        ...(input.MsSmoothGroupSettings !== undefined &&
            input.MsSmoothGroupSettings !== null && {
            msSmoothGroupSettings: serializeAws_restJson1MsSmoothGroupSettings(input.MsSmoothGroupSettings, context),
        }),
        ...(input.MultiplexGroupSettings !== undefined &&
            input.MultiplexGroupSettings !== null && {
            multiplexGroupSettings: serializeAws_restJson1MultiplexGroupSettings(input.MultiplexGroupSettings, context),
        }),
        ...(input.RtmpGroupSettings !== undefined &&
            input.RtmpGroupSettings !== null && {
            rtmpGroupSettings: serializeAws_restJson1RtmpGroupSettings(input.RtmpGroupSettings, context),
        }),
        ...(input.UdpGroupSettings !== undefined &&
            input.UdpGroupSettings !== null && {
            udpGroupSettings: serializeAws_restJson1UdpGroupSettings(input.UdpGroupSettings, context),
        }),
    };
};
const serializeAws_restJson1OutputLocationRef = (input, context) => {
    return {
        ...(input.DestinationRefId !== undefined &&
            input.DestinationRefId !== null && { destinationRefId: input.DestinationRefId }),
    };
};
const serializeAws_restJson1OutputSettings = (input, context) => {
    return {
        ...(input.ArchiveOutputSettings !== undefined &&
            input.ArchiveOutputSettings !== null && {
            archiveOutputSettings: serializeAws_restJson1ArchiveOutputSettings(input.ArchiveOutputSettings, context),
        }),
        ...(input.FrameCaptureOutputSettings !== undefined &&
            input.FrameCaptureOutputSettings !== null && {
            frameCaptureOutputSettings: serializeAws_restJson1FrameCaptureOutputSettings(input.FrameCaptureOutputSettings, context),
        }),
        ...(input.HlsOutputSettings !== undefined &&
            input.HlsOutputSettings !== null && {
            hlsOutputSettings: serializeAws_restJson1HlsOutputSettings(input.HlsOutputSettings, context),
        }),
        ...(input.MediaPackageOutputSettings !== undefined &&
            input.MediaPackageOutputSettings !== null && {
            mediaPackageOutputSettings: serializeAws_restJson1MediaPackageOutputSettings(input.MediaPackageOutputSettings, context),
        }),
        ...(input.MsSmoothOutputSettings !== undefined &&
            input.MsSmoothOutputSettings !== null && {
            msSmoothOutputSettings: serializeAws_restJson1MsSmoothOutputSettings(input.MsSmoothOutputSettings, context),
        }),
        ...(input.MultiplexOutputSettings !== undefined &&
            input.MultiplexOutputSettings !== null && {
            multiplexOutputSettings: serializeAws_restJson1MultiplexOutputSettings(input.MultiplexOutputSettings, context),
        }),
        ...(input.RtmpOutputSettings !== undefined &&
            input.RtmpOutputSettings !== null && {
            rtmpOutputSettings: serializeAws_restJson1RtmpOutputSettings(input.RtmpOutputSettings, context),
        }),
        ...(input.UdpOutputSettings !== undefined &&
            input.UdpOutputSettings !== null && {
            udpOutputSettings: serializeAws_restJson1UdpOutputSettings(input.UdpOutputSettings, context),
        }),
    };
};
const serializeAws_restJson1PassThroughSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1PauseStateScheduleActionSettings = (input, context) => {
    return {
        ...(input.Pipelines !== undefined &&
            input.Pipelines !== null && {
            pipelines: serializeAws_restJson1__listOfPipelinePauseStateSettings(input.Pipelines, context),
        }),
    };
};
const serializeAws_restJson1PipelinePauseStateSettings = (input, context) => {
    return {
        ...(input.PipelineId !== undefined && input.PipelineId !== null && { pipelineId: input.PipelineId }),
    };
};
const serializeAws_restJson1RawSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1Rec601Settings = (input, context) => {
    return {};
};
const serializeAws_restJson1Rec709Settings = (input, context) => {
    return {};
};
const serializeAws_restJson1RemixSettings = (input, context) => {
    return {
        ...(input.ChannelMappings !== undefined &&
            input.ChannelMappings !== null && {
            channelMappings: serializeAws_restJson1__listOfAudioChannelMapping(input.ChannelMappings, context),
        }),
        ...(input.ChannelsIn !== undefined && input.ChannelsIn !== null && { channelsIn: input.ChannelsIn }),
        ...(input.ChannelsOut !== undefined && input.ChannelsOut !== null && { channelsOut: input.ChannelsOut }),
    };
};
const serializeAws_restJson1RtmpCaptionInfoDestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1RtmpGroupSettings = (input, context) => {
    return {
        ...(input.AdMarkers !== undefined &&
            input.AdMarkers !== null && { adMarkers: serializeAws_restJson1__listOfRtmpAdMarkers(input.AdMarkers, context) }),
        ...(input.AuthenticationScheme !== undefined &&
            input.AuthenticationScheme !== null && { authenticationScheme: input.AuthenticationScheme }),
        ...(input.CacheFullBehavior !== undefined &&
            input.CacheFullBehavior !== null && { cacheFullBehavior: input.CacheFullBehavior }),
        ...(input.CacheLength !== undefined && input.CacheLength !== null && { cacheLength: input.CacheLength }),
        ...(input.CaptionData !== undefined && input.CaptionData !== null && { captionData: input.CaptionData }),
        ...(input.InputLossAction !== undefined &&
            input.InputLossAction !== null && { inputLossAction: input.InputLossAction }),
        ...(input.RestartDelay !== undefined && input.RestartDelay !== null && { restartDelay: input.RestartDelay }),
    };
};
const serializeAws_restJson1RtmpOutputSettings = (input, context) => {
    return {
        ...(input.CertificateMode !== undefined &&
            input.CertificateMode !== null && { certificateMode: input.CertificateMode }),
        ...(input.ConnectionRetryInterval !== undefined &&
            input.ConnectionRetryInterval !== null && { connectionRetryInterval: input.ConnectionRetryInterval }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
        ...(input.NumRetries !== undefined && input.NumRetries !== null && { numRetries: input.NumRetries }),
    };
};
const serializeAws_restJson1ScheduleAction = (input, context) => {
    return {
        ...(input.ActionName !== undefined && input.ActionName !== null && { actionName: input.ActionName }),
        ...(input.ScheduleActionSettings !== undefined &&
            input.ScheduleActionSettings !== null && {
            scheduleActionSettings: serializeAws_restJson1ScheduleActionSettings(input.ScheduleActionSettings, context),
        }),
        ...(input.ScheduleActionStartSettings !== undefined &&
            input.ScheduleActionStartSettings !== null && {
            scheduleActionStartSettings: serializeAws_restJson1ScheduleActionStartSettings(input.ScheduleActionStartSettings, context),
        }),
    };
};
const serializeAws_restJson1ScheduleActionSettings = (input, context) => {
    return {
        ...(input.HlsId3SegmentTaggingSettings !== undefined &&
            input.HlsId3SegmentTaggingSettings !== null && {
            hlsId3SegmentTaggingSettings: serializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings(input.HlsId3SegmentTaggingSettings, context),
        }),
        ...(input.HlsTimedMetadataSettings !== undefined &&
            input.HlsTimedMetadataSettings !== null && {
            hlsTimedMetadataSettings: serializeAws_restJson1HlsTimedMetadataScheduleActionSettings(input.HlsTimedMetadataSettings, context),
        }),
        ...(input.InputPrepareSettings !== undefined &&
            input.InputPrepareSettings !== null && {
            inputPrepareSettings: serializeAws_restJson1InputPrepareScheduleActionSettings(input.InputPrepareSettings, context),
        }),
        ...(input.InputSwitchSettings !== undefined &&
            input.InputSwitchSettings !== null && {
            inputSwitchSettings: serializeAws_restJson1InputSwitchScheduleActionSettings(input.InputSwitchSettings, context),
        }),
        ...(input.MotionGraphicsImageActivateSettings !== undefined &&
            input.MotionGraphicsImageActivateSettings !== null && {
            motionGraphicsImageActivateSettings: serializeAws_restJson1MotionGraphicsActivateScheduleActionSettings(input.MotionGraphicsImageActivateSettings, context),
        }),
        ...(input.MotionGraphicsImageDeactivateSettings !== undefined &&
            input.MotionGraphicsImageDeactivateSettings !== null && {
            motionGraphicsImageDeactivateSettings: serializeAws_restJson1MotionGraphicsDeactivateScheduleActionSettings(input.MotionGraphicsImageDeactivateSettings, context),
        }),
        ...(input.PauseStateSettings !== undefined &&
            input.PauseStateSettings !== null && {
            pauseStateSettings: serializeAws_restJson1PauseStateScheduleActionSettings(input.PauseStateSettings, context),
        }),
        ...(input.Scte35ReturnToNetworkSettings !== undefined &&
            input.Scte35ReturnToNetworkSettings !== null && {
            scte35ReturnToNetworkSettings: serializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings(input.Scte35ReturnToNetworkSettings, context),
        }),
        ...(input.Scte35SpliceInsertSettings !== undefined &&
            input.Scte35SpliceInsertSettings !== null && {
            scte35SpliceInsertSettings: serializeAws_restJson1Scte35SpliceInsertScheduleActionSettings(input.Scte35SpliceInsertSettings, context),
        }),
        ...(input.Scte35TimeSignalSettings !== undefined &&
            input.Scte35TimeSignalSettings !== null && {
            scte35TimeSignalSettings: serializeAws_restJson1Scte35TimeSignalScheduleActionSettings(input.Scte35TimeSignalSettings, context),
        }),
        ...(input.StaticImageActivateSettings !== undefined &&
            input.StaticImageActivateSettings !== null && {
            staticImageActivateSettings: serializeAws_restJson1StaticImageActivateScheduleActionSettings(input.StaticImageActivateSettings, context),
        }),
        ...(input.StaticImageDeactivateSettings !== undefined &&
            input.StaticImageDeactivateSettings !== null && {
            staticImageDeactivateSettings: serializeAws_restJson1StaticImageDeactivateScheduleActionSettings(input.StaticImageDeactivateSettings, context),
        }),
    };
};
const serializeAws_restJson1ScheduleActionStartSettings = (input, context) => {
    return {
        ...(input.FixedModeScheduleActionStartSettings !== undefined &&
            input.FixedModeScheduleActionStartSettings !== null && {
            fixedModeScheduleActionStartSettings: serializeAws_restJson1FixedModeScheduleActionStartSettings(input.FixedModeScheduleActionStartSettings, context),
        }),
        ...(input.FollowModeScheduleActionStartSettings !== undefined &&
            input.FollowModeScheduleActionStartSettings !== null && {
            followModeScheduleActionStartSettings: serializeAws_restJson1FollowModeScheduleActionStartSettings(input.FollowModeScheduleActionStartSettings, context),
        }),
        ...(input.ImmediateModeScheduleActionStartSettings !== undefined &&
            input.ImmediateModeScheduleActionStartSettings !== null && {
            immediateModeScheduleActionStartSettings: serializeAws_restJson1ImmediateModeScheduleActionStartSettings(input.ImmediateModeScheduleActionStartSettings, context),
        }),
    };
};
const serializeAws_restJson1Scte20PlusEmbeddedDestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1Scte20SourceSettings = (input, context) => {
    return {
        ...(input.Convert608To708 !== undefined &&
            input.Convert608To708 !== null && { convert608To708: input.Convert608To708 }),
        ...(input.Source608ChannelNumber !== undefined &&
            input.Source608ChannelNumber !== null && { source608ChannelNumber: input.Source608ChannelNumber }),
    };
};
const serializeAws_restJson1Scte27DestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1Scte27SourceSettings = (input, context) => {
    return {
        ...(input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }),
    };
};
const serializeAws_restJson1Scte35DeliveryRestrictions = (input, context) => {
    return {
        ...(input.ArchiveAllowedFlag !== undefined &&
            input.ArchiveAllowedFlag !== null && { archiveAllowedFlag: input.ArchiveAllowedFlag }),
        ...(input.DeviceRestrictions !== undefined &&
            input.DeviceRestrictions !== null && { deviceRestrictions: input.DeviceRestrictions }),
        ...(input.NoRegionalBlackoutFlag !== undefined &&
            input.NoRegionalBlackoutFlag !== null && { noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag }),
        ...(input.WebDeliveryAllowedFlag !== undefined &&
            input.WebDeliveryAllowedFlag !== null && { webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag }),
    };
};
const serializeAws_restJson1Scte35Descriptor = (input, context) => {
    return {
        ...(input.Scte35DescriptorSettings !== undefined &&
            input.Scte35DescriptorSettings !== null && {
            scte35DescriptorSettings: serializeAws_restJson1Scte35DescriptorSettings(input.Scte35DescriptorSettings, context),
        }),
    };
};
const serializeAws_restJson1Scte35DescriptorSettings = (input, context) => {
    return {
        ...(input.SegmentationDescriptorScte35DescriptorSettings !== undefined &&
            input.SegmentationDescriptorScte35DescriptorSettings !== null && {
            segmentationDescriptorScte35DescriptorSettings: serializeAws_restJson1Scte35SegmentationDescriptor(input.SegmentationDescriptorScte35DescriptorSettings, context),
        }),
    };
};
const serializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings = (input, context) => {
    return {
        ...(input.SpliceEventId !== undefined && input.SpliceEventId !== null && { spliceEventId: input.SpliceEventId }),
    };
};
const serializeAws_restJson1Scte35SegmentationDescriptor = (input, context) => {
    return {
        ...(input.DeliveryRestrictions !== undefined &&
            input.DeliveryRestrictions !== null && {
            deliveryRestrictions: serializeAws_restJson1Scte35DeliveryRestrictions(input.DeliveryRestrictions, context),
        }),
        ...(input.SegmentNum !== undefined && input.SegmentNum !== null && { segmentNum: input.SegmentNum }),
        ...(input.SegmentationCancelIndicator !== undefined &&
            input.SegmentationCancelIndicator !== null && { segmentationCancelIndicator: input.SegmentationCancelIndicator }),
        ...(input.SegmentationDuration !== undefined &&
            input.SegmentationDuration !== null && { segmentationDuration: input.SegmentationDuration }),
        ...(input.SegmentationEventId !== undefined &&
            input.SegmentationEventId !== null && { segmentationEventId: input.SegmentationEventId }),
        ...(input.SegmentationTypeId !== undefined &&
            input.SegmentationTypeId !== null && { segmentationTypeId: input.SegmentationTypeId }),
        ...(input.SegmentationUpid !== undefined &&
            input.SegmentationUpid !== null && { segmentationUpid: input.SegmentationUpid }),
        ...(input.SegmentationUpidType !== undefined &&
            input.SegmentationUpidType !== null && { segmentationUpidType: input.SegmentationUpidType }),
        ...(input.SegmentsExpected !== undefined &&
            input.SegmentsExpected !== null && { segmentsExpected: input.SegmentsExpected }),
        ...(input.SubSegmentNum !== undefined && input.SubSegmentNum !== null && { subSegmentNum: input.SubSegmentNum }),
        ...(input.SubSegmentsExpected !== undefined &&
            input.SubSegmentsExpected !== null && { subSegmentsExpected: input.SubSegmentsExpected }),
    };
};
const serializeAws_restJson1Scte35SpliceInsert = (input, context) => {
    return {
        ...(input.AdAvailOffset !== undefined && input.AdAvailOffset !== null && { adAvailOffset: input.AdAvailOffset }),
        ...(input.NoRegionalBlackoutFlag !== undefined &&
            input.NoRegionalBlackoutFlag !== null && { noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag }),
        ...(input.WebDeliveryAllowedFlag !== undefined &&
            input.WebDeliveryAllowedFlag !== null && { webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag }),
    };
};
const serializeAws_restJson1Scte35SpliceInsertScheduleActionSettings = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { duration: input.Duration }),
        ...(input.SpliceEventId !== undefined && input.SpliceEventId !== null && { spliceEventId: input.SpliceEventId }),
    };
};
const serializeAws_restJson1Scte35TimeSignalApos = (input, context) => {
    return {
        ...(input.AdAvailOffset !== undefined && input.AdAvailOffset !== null && { adAvailOffset: input.AdAvailOffset }),
        ...(input.NoRegionalBlackoutFlag !== undefined &&
            input.NoRegionalBlackoutFlag !== null && { noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag }),
        ...(input.WebDeliveryAllowedFlag !== undefined &&
            input.WebDeliveryAllowedFlag !== null && { webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag }),
    };
};
const serializeAws_restJson1Scte35TimeSignalScheduleActionSettings = (input, context) => {
    return {
        ...(input.Scte35Descriptors !== undefined &&
            input.Scte35Descriptors !== null && {
            scte35Descriptors: serializeAws_restJson1__listOfScte35Descriptor(input.Scte35Descriptors, context),
        }),
    };
};
const serializeAws_restJson1SmpteTtDestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1StandardHlsSettings = (input, context) => {
    return {
        ...(input.AudioRenditionSets !== undefined &&
            input.AudioRenditionSets !== null && { audioRenditionSets: input.AudioRenditionSets }),
        ...(input.M3u8Settings !== undefined &&
            input.M3u8Settings !== null && { m3u8Settings: serializeAws_restJson1M3u8Settings(input.M3u8Settings, context) }),
    };
};
const serializeAws_restJson1StartTimecode = (input, context) => {
    return {
        ...(input.Timecode !== undefined && input.Timecode !== null && { timecode: input.Timecode }),
    };
};
const serializeAws_restJson1StaticImageActivateScheduleActionSettings = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { duration: input.Duration }),
        ...(input.FadeIn !== undefined && input.FadeIn !== null && { fadeIn: input.FadeIn }),
        ...(input.FadeOut !== undefined && input.FadeOut !== null && { fadeOut: input.FadeOut }),
        ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
        ...(input.Image !== undefined &&
            input.Image !== null && { image: serializeAws_restJson1InputLocation(input.Image, context) }),
        ...(input.ImageX !== undefined && input.ImageX !== null && { imageX: input.ImageX }),
        ...(input.ImageY !== undefined && input.ImageY !== null && { imageY: input.ImageY }),
        ...(input.Layer !== undefined && input.Layer !== null && { layer: input.Layer }),
        ...(input.Opacity !== undefined && input.Opacity !== null && { opacity: input.Opacity }),
        ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
    };
};
const serializeAws_restJson1StaticImageDeactivateScheduleActionSettings = (input, context) => {
    return {
        ...(input.FadeOut !== undefined && input.FadeOut !== null && { fadeOut: input.FadeOut }),
        ...(input.Layer !== undefined && input.Layer !== null && { layer: input.Layer }),
    };
};
const serializeAws_restJson1StaticKeySettings = (input, context) => {
    return {
        ...(input.KeyProviderServer !== undefined &&
            input.KeyProviderServer !== null && {
            keyProviderServer: serializeAws_restJson1InputLocation(input.KeyProviderServer, context),
        }),
        ...(input.StaticKeyValue !== undefined &&
            input.StaticKeyValue !== null && { staticKeyValue: input.StaticKeyValue }),
    };
};
const serializeAws_restJson1StopTimecode = (input, context) => {
    return {
        ...(input.LastFrameClippingBehavior !== undefined &&
            input.LastFrameClippingBehavior !== null && { lastFrameClippingBehavior: input.LastFrameClippingBehavior }),
        ...(input.Timecode !== undefined && input.Timecode !== null && { timecode: input.Timecode }),
    };
};
const serializeAws_restJson1Tags = (input, context) => {
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
const serializeAws_restJson1TeletextDestinationSettings = (input, context) => {
    return {};
};
const serializeAws_restJson1TeletextSourceSettings = (input, context) => {
    return {
        ...(input.OutputRectangle !== undefined &&
            input.OutputRectangle !== null && {
            outputRectangle: serializeAws_restJson1CaptionRectangle(input.OutputRectangle, context),
        }),
        ...(input.PageNumber !== undefined && input.PageNumber !== null && { pageNumber: input.PageNumber }),
    };
};
const serializeAws_restJson1TemporalFilterSettings = (input, context) => {
    return {
        ...(input.PostFilterSharpening !== undefined &&
            input.PostFilterSharpening !== null && { postFilterSharpening: input.PostFilterSharpening }),
        ...(input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }),
    };
};
const serializeAws_restJson1TimecodeConfig = (input, context) => {
    return {
        ...(input.Source !== undefined && input.Source !== null && { source: input.Source }),
        ...(input.SyncThreshold !== undefined && input.SyncThreshold !== null && { syncThreshold: input.SyncThreshold }),
    };
};
const serializeAws_restJson1TtmlDestinationSettings = (input, context) => {
    return {
        ...(input.StyleControl !== undefined && input.StyleControl !== null && { styleControl: input.StyleControl }),
    };
};
const serializeAws_restJson1UdpContainerSettings = (input, context) => {
    return {
        ...(input.M2tsSettings !== undefined &&
            input.M2tsSettings !== null && { m2tsSettings: serializeAws_restJson1M2tsSettings(input.M2tsSettings, context) }),
    };
};
const serializeAws_restJson1UdpGroupSettings = (input, context) => {
    return {
        ...(input.InputLossAction !== undefined &&
            input.InputLossAction !== null && { inputLossAction: input.InputLossAction }),
        ...(input.TimedMetadataId3Frame !== undefined &&
            input.TimedMetadataId3Frame !== null && { timedMetadataId3Frame: input.TimedMetadataId3Frame }),
        ...(input.TimedMetadataId3Period !== undefined &&
            input.TimedMetadataId3Period !== null && { timedMetadataId3Period: input.TimedMetadataId3Period }),
    };
};
const serializeAws_restJson1UdpOutputSettings = (input, context) => {
    return {
        ...(input.BufferMsec !== undefined && input.BufferMsec !== null && { bufferMsec: input.BufferMsec }),
        ...(input.ContainerSettings !== undefined &&
            input.ContainerSettings !== null && {
            containerSettings: serializeAws_restJson1UdpContainerSettings(input.ContainerSettings, context),
        }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && {
            destination: serializeAws_restJson1OutputLocationRef(input.Destination, context),
        }),
        ...(input.FecOutputSettings !== undefined &&
            input.FecOutputSettings !== null && {
            fecOutputSettings: serializeAws_restJson1FecOutputSettings(input.FecOutputSettings, context),
        }),
    };
};
const serializeAws_restJson1VideoBlackFailoverSettings = (input, context) => {
    return {
        ...(input.BlackDetectThreshold !== undefined &&
            input.BlackDetectThreshold !== null && { blackDetectThreshold: input.BlackDetectThreshold }),
        ...(input.VideoBlackThresholdMsec !== undefined &&
            input.VideoBlackThresholdMsec !== null && { videoBlackThresholdMsec: input.VideoBlackThresholdMsec }),
    };
};
const serializeAws_restJson1VideoCodecSettings = (input, context) => {
    return {
        ...(input.FrameCaptureSettings !== undefined &&
            input.FrameCaptureSettings !== null && {
            frameCaptureSettings: serializeAws_restJson1FrameCaptureSettings(input.FrameCaptureSettings, context),
        }),
        ...(input.H264Settings !== undefined &&
            input.H264Settings !== null && { h264Settings: serializeAws_restJson1H264Settings(input.H264Settings, context) }),
        ...(input.H265Settings !== undefined &&
            input.H265Settings !== null && { h265Settings: serializeAws_restJson1H265Settings(input.H265Settings, context) }),
        ...(input.Mpeg2Settings !== undefined &&
            input.Mpeg2Settings !== null && {
            mpeg2Settings: serializeAws_restJson1Mpeg2Settings(input.Mpeg2Settings, context),
        }),
    };
};
const serializeAws_restJson1VideoDescription = (input, context) => {
    return {
        ...(input.CodecSettings !== undefined &&
            input.CodecSettings !== null && {
            codecSettings: serializeAws_restJson1VideoCodecSettings(input.CodecSettings, context),
        }),
        ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.RespondToAfd !== undefined && input.RespondToAfd !== null && { respondToAfd: input.RespondToAfd }),
        ...(input.ScalingBehavior !== undefined &&
            input.ScalingBehavior !== null && { scalingBehavior: input.ScalingBehavior }),
        ...(input.Sharpness !== undefined && input.Sharpness !== null && { sharpness: input.Sharpness }),
        ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
    };
};
const serializeAws_restJson1VideoSelector = (input, context) => {
    return {
        ...(input.ColorSpace !== undefined && input.ColorSpace !== null && { colorSpace: input.ColorSpace }),
        ...(input.ColorSpaceSettings !== undefined &&
            input.ColorSpaceSettings !== null && {
            colorSpaceSettings: serializeAws_restJson1VideoSelectorColorSpaceSettings(input.ColorSpaceSettings, context),
        }),
        ...(input.ColorSpaceUsage !== undefined &&
            input.ColorSpaceUsage !== null && { colorSpaceUsage: input.ColorSpaceUsage }),
        ...(input.SelectorSettings !== undefined &&
            input.SelectorSettings !== null && {
            selectorSettings: serializeAws_restJson1VideoSelectorSettings(input.SelectorSettings, context),
        }),
    };
};
const serializeAws_restJson1VideoSelectorColorSpaceSettings = (input, context) => {
    return {
        ...(input.Hdr10Settings !== undefined &&
            input.Hdr10Settings !== null && {
            hdr10Settings: serializeAws_restJson1Hdr10Settings(input.Hdr10Settings, context),
        }),
    };
};
const serializeAws_restJson1VideoSelectorPid = (input, context) => {
    return {
        ...(input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }),
    };
};
const serializeAws_restJson1VideoSelectorProgramId = (input, context) => {
    return {
        ...(input.ProgramId !== undefined && input.ProgramId !== null && { programId: input.ProgramId }),
    };
};
const serializeAws_restJson1VideoSelectorSettings = (input, context) => {
    return {
        ...(input.VideoSelectorPid !== undefined &&
            input.VideoSelectorPid !== null && {
            videoSelectorPid: serializeAws_restJson1VideoSelectorPid(input.VideoSelectorPid, context),
        }),
        ...(input.VideoSelectorProgramId !== undefined &&
            input.VideoSelectorProgramId !== null && {
            videoSelectorProgramId: serializeAws_restJson1VideoSelectorProgramId(input.VideoSelectorProgramId, context),
        }),
    };
};
const serializeAws_restJson1VpcOutputSettings = (input, context) => {
    return {
        ...(input.PublicAddressAllocationIds !== undefined &&
            input.PublicAddressAllocationIds !== null && {
            publicAddressAllocationIds: serializeAws_restJson1__listOf__string(input.PublicAddressAllocationIds, context),
        }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1__listOf__string(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { subnetIds: serializeAws_restJson1__listOf__string(input.SubnetIds, context) }),
    };
};
const serializeAws_restJson1WavSettings = (input, context) => {
    return {
        ...(input.BitDepth !== undefined && input.BitDepth !== null && { bitDepth: input.BitDepth }),
        ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
        ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    };
};
const serializeAws_restJson1WebvttDestinationSettings = (input, context) => {
    return {};
};
const deserializeAws_restJson1__listOf__integer = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOf__string = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfAudioChannelMapping = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioChannelMapping(entry, context);
    });
};
const deserializeAws_restJson1__listOfAudioDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioDescription(entry, context);
    });
};
const deserializeAws_restJson1__listOfAudioSelector = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioSelector(entry, context);
    });
};
const deserializeAws_restJson1__listOfAudioTrack = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioTrack(entry, context);
    });
};
const deserializeAws_restJson1__listOfBatchFailedResultModel = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchFailedResultModel(entry, context);
    });
};
const deserializeAws_restJson1__listOfBatchSuccessfulResultModel = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchSuccessfulResultModel(entry, context);
    });
};
const deserializeAws_restJson1__listOfCaptionDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionDescription(entry, context);
    });
};
const deserializeAws_restJson1__listOfCaptionLanguageMapping = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionLanguageMapping(entry, context);
    });
};
const deserializeAws_restJson1__listOfCaptionSelector = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionSelector(entry, context);
    });
};
const deserializeAws_restJson1__listOfChannelEgressEndpoint = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChannelEgressEndpoint(entry, context);
    });
};
const deserializeAws_restJson1__listOfChannelSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChannelSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfFailoverCondition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FailoverCondition(entry, context);
    });
};
const deserializeAws_restJson1__listOfHlsAdMarkers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfInput = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Input(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputAttachment = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputAttachment(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputChannelLevel = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputChannelLevel(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputDestination = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputDestination(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputDeviceSettings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputDeviceSettings(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputDeviceSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputDeviceSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputSecurityGroup = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputSecurityGroup(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputSource = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputSource(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputWhitelistRule = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputWhitelistRule(entry, context);
    });
};
const deserializeAws_restJson1__listOfMediaConnectFlow = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaConnectFlow(entry, context);
    });
};
const deserializeAws_restJson1__listOfMediaPackageOutputDestinationSettings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaPackageOutputDestinationSettings(entry, context);
    });
};
const deserializeAws_restJson1__listOfMultiplexOutputDestination = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MultiplexOutputDestination(entry, context);
    });
};
const deserializeAws_restJson1__listOfMultiplexProgramPipelineDetail = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MultiplexProgramPipelineDetail(entry, context);
    });
};
const deserializeAws_restJson1__listOfMultiplexProgramSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MultiplexProgramSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfMultiplexSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MultiplexSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfOffering = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Offering(entry, context);
    });
};
const deserializeAws_restJson1__listOfOutput = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Output(entry, context);
    });
};
const deserializeAws_restJson1__listOfOutputDestination = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputDestination(entry, context);
    });
};
const deserializeAws_restJson1__listOfOutputDestinationSettings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputDestinationSettings(entry, context);
    });
};
const deserializeAws_restJson1__listOfOutputGroup = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputGroup(entry, context);
    });
};
const deserializeAws_restJson1__listOfPipelineDetail = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PipelineDetail(entry, context);
    });
};
const deserializeAws_restJson1__listOfPipelinePauseStateSettings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PipelinePauseStateSettings(entry, context);
    });
};
const deserializeAws_restJson1__listOfReservation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Reservation(entry, context);
    });
};
const deserializeAws_restJson1__listOfRtmpAdMarkers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfScheduleAction = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ScheduleAction(entry, context);
    });
};
const deserializeAws_restJson1__listOfScte35Descriptor = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Scte35Descriptor(entry, context);
    });
};
const deserializeAws_restJson1__listOfTransferringInputDeviceSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TransferringInputDeviceSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfValidationError = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationError(entry, context);
    });
};
const deserializeAws_restJson1__listOfVideoDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VideoDescription(entry, context);
    });
};
const deserializeAws_restJson1AacSettings = (output, context) => {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        InputType: output.inputType !== undefined && output.inputType !== null ? output.inputType : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        RawFormat: output.rawFormat !== undefined && output.rawFormat !== null ? output.rawFormat : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
        Spec: output.spec !== undefined && output.spec !== null ? output.spec : undefined,
        VbrQuality: output.vbrQuality !== undefined && output.vbrQuality !== null ? output.vbrQuality : undefined,
    };
};
const deserializeAws_restJson1Ac3Settings = (output, context) => {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BitstreamMode: output.bitstreamMode !== undefined && output.bitstreamMode !== null ? output.bitstreamMode : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        Dialnorm: output.dialnorm !== undefined && output.dialnorm !== null ? output.dialnorm : undefined,
        DrcProfile: output.drcProfile !== undefined && output.drcProfile !== null ? output.drcProfile : undefined,
        LfeFilter: output.lfeFilter !== undefined && output.lfeFilter !== null ? output.lfeFilter : undefined,
        MetadataControl: output.metadataControl !== undefined && output.metadataControl !== null ? output.metadataControl : undefined,
    };
};
const deserializeAws_restJson1AncillarySourceSettings = (output, context) => {
    return {
        SourceAncillaryChannelNumber: output.sourceAncillaryChannelNumber !== undefined && output.sourceAncillaryChannelNumber !== null
            ? output.sourceAncillaryChannelNumber
            : undefined,
    };
};
const deserializeAws_restJson1ArchiveCdnSettings = (output, context) => {
    return {
        ArchiveS3Settings: output.archiveS3Settings !== undefined && output.archiveS3Settings !== null
            ? deserializeAws_restJson1ArchiveS3Settings(output.archiveS3Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1ArchiveContainerSettings = (output, context) => {
    return {
        M2tsSettings: output.m2tsSettings !== undefined && output.m2tsSettings !== null
            ? deserializeAws_restJson1M2tsSettings(output.m2tsSettings, context)
            : undefined,
        RawSettings: output.rawSettings !== undefined && output.rawSettings !== null
            ? deserializeAws_restJson1RawSettings(output.rawSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1ArchiveGroupSettings = (output, context) => {
    return {
        ArchiveCdnSettings: output.archiveCdnSettings !== undefined && output.archiveCdnSettings !== null
            ? deserializeAws_restJson1ArchiveCdnSettings(output.archiveCdnSettings, context)
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
        RolloverInterval: output.rolloverInterval !== undefined && output.rolloverInterval !== null ? output.rolloverInterval : undefined,
    };
};
const deserializeAws_restJson1ArchiveOutputSettings = (output, context) => {
    return {
        ContainerSettings: output.containerSettings !== undefined && output.containerSettings !== null
            ? deserializeAws_restJson1ArchiveContainerSettings(output.containerSettings, context)
            : undefined,
        Extension: output.extension !== undefined && output.extension !== null ? output.extension : undefined,
        NameModifier: output.nameModifier !== undefined && output.nameModifier !== null ? output.nameModifier : undefined,
    };
};
const deserializeAws_restJson1ArchiveS3Settings = (output, context) => {
    return {
        CannedAcl: output.cannedAcl !== undefined && output.cannedAcl !== null ? output.cannedAcl : undefined,
    };
};
const deserializeAws_restJson1AribDestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1AribSourceSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1AudioChannelMapping = (output, context) => {
    return {
        InputChannelLevels: output.inputChannelLevels !== undefined && output.inputChannelLevels !== null
            ? deserializeAws_restJson1__listOfInputChannelLevel(output.inputChannelLevels, context)
            : undefined,
        OutputChannel: output.outputChannel !== undefined && output.outputChannel !== null ? output.outputChannel : undefined,
    };
};
const deserializeAws_restJson1AudioCodecSettings = (output, context) => {
    return {
        AacSettings: output.aacSettings !== undefined && output.aacSettings !== null
            ? deserializeAws_restJson1AacSettings(output.aacSettings, context)
            : undefined,
        Ac3Settings: output.ac3Settings !== undefined && output.ac3Settings !== null
            ? deserializeAws_restJson1Ac3Settings(output.ac3Settings, context)
            : undefined,
        Eac3Settings: output.eac3Settings !== undefined && output.eac3Settings !== null
            ? deserializeAws_restJson1Eac3Settings(output.eac3Settings, context)
            : undefined,
        Mp2Settings: output.mp2Settings !== undefined && output.mp2Settings !== null
            ? deserializeAws_restJson1Mp2Settings(output.mp2Settings, context)
            : undefined,
        PassThroughSettings: output.passThroughSettings !== undefined && output.passThroughSettings !== null
            ? deserializeAws_restJson1PassThroughSettings(output.passThroughSettings, context)
            : undefined,
        WavSettings: output.wavSettings !== undefined && output.wavSettings !== null
            ? deserializeAws_restJson1WavSettings(output.wavSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1AudioDescription = (output, context) => {
    return {
        AudioNormalizationSettings: output.audioNormalizationSettings !== undefined && output.audioNormalizationSettings !== null
            ? deserializeAws_restJson1AudioNormalizationSettings(output.audioNormalizationSettings, context)
            : undefined,
        AudioSelectorName: output.audioSelectorName !== undefined && output.audioSelectorName !== null
            ? output.audioSelectorName
            : undefined,
        AudioType: output.audioType !== undefined && output.audioType !== null ? output.audioType : undefined,
        AudioTypeControl: output.audioTypeControl !== undefined && output.audioTypeControl !== null ? output.audioTypeControl : undefined,
        CodecSettings: output.codecSettings !== undefined && output.codecSettings !== null
            ? deserializeAws_restJson1AudioCodecSettings(output.codecSettings, context)
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageCodeControl: output.languageCodeControl !== undefined && output.languageCodeControl !== null
            ? output.languageCodeControl
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        RemixSettings: output.remixSettings !== undefined && output.remixSettings !== null
            ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
            : undefined,
        StreamName: output.streamName !== undefined && output.streamName !== null ? output.streamName : undefined,
    };
};
const deserializeAws_restJson1AudioLanguageSelection = (output, context) => {
    return {
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageSelectionPolicy: output.languageSelectionPolicy !== undefined && output.languageSelectionPolicy !== null
            ? output.languageSelectionPolicy
            : undefined,
    };
};
const deserializeAws_restJson1AudioNormalizationSettings = (output, context) => {
    return {
        Algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
        AlgorithmControl: output.algorithmControl !== undefined && output.algorithmControl !== null ? output.algorithmControl : undefined,
        TargetLkfs: output.targetLkfs !== undefined && output.targetLkfs !== null ? output.targetLkfs : undefined,
    };
};
const deserializeAws_restJson1AudioOnlyHlsSettings = (output, context) => {
    return {
        AudioGroupId: output.audioGroupId !== undefined && output.audioGroupId !== null ? output.audioGroupId : undefined,
        AudioOnlyImage: output.audioOnlyImage !== undefined && output.audioOnlyImage !== null
            ? deserializeAws_restJson1InputLocation(output.audioOnlyImage, context)
            : undefined,
        AudioTrackType: output.audioTrackType !== undefined && output.audioTrackType !== null ? output.audioTrackType : undefined,
        SegmentType: output.segmentType !== undefined && output.segmentType !== null ? output.segmentType : undefined,
    };
};
const deserializeAws_restJson1AudioPidSelection = (output, context) => {
    return {
        Pid: output.pid !== undefined && output.pid !== null ? output.pid : undefined,
    };
};
const deserializeAws_restJson1AudioSelector = (output, context) => {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SelectorSettings: output.selectorSettings !== undefined && output.selectorSettings !== null
            ? deserializeAws_restJson1AudioSelectorSettings(output.selectorSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1AudioSelectorSettings = (output, context) => {
    return {
        AudioLanguageSelection: output.audioLanguageSelection !== undefined && output.audioLanguageSelection !== null
            ? deserializeAws_restJson1AudioLanguageSelection(output.audioLanguageSelection, context)
            : undefined,
        AudioPidSelection: output.audioPidSelection !== undefined && output.audioPidSelection !== null
            ? deserializeAws_restJson1AudioPidSelection(output.audioPidSelection, context)
            : undefined,
        AudioTrackSelection: output.audioTrackSelection !== undefined && output.audioTrackSelection !== null
            ? deserializeAws_restJson1AudioTrackSelection(output.audioTrackSelection, context)
            : undefined,
    };
};
const deserializeAws_restJson1AudioSilenceFailoverSettings = (output, context) => {
    return {
        AudioSelectorName: output.audioSelectorName !== undefined && output.audioSelectorName !== null
            ? output.audioSelectorName
            : undefined,
        AudioSilenceThresholdMsec: output.audioSilenceThresholdMsec !== undefined && output.audioSilenceThresholdMsec !== null
            ? output.audioSilenceThresholdMsec
            : undefined,
    };
};
const deserializeAws_restJson1AudioTrack = (output, context) => {
    return {
        Track: output.track !== undefined && output.track !== null ? output.track : undefined,
    };
};
const deserializeAws_restJson1AudioTrackSelection = (output, context) => {
    return {
        Tracks: output.tracks !== undefined && output.tracks !== null
            ? deserializeAws_restJson1__listOfAudioTrack(output.tracks, context)
            : undefined,
    };
};
const deserializeAws_restJson1AutomaticInputFailoverSettings = (output, context) => {
    return {
        ErrorClearTimeMsec: output.errorClearTimeMsec !== undefined && output.errorClearTimeMsec !== null
            ? output.errorClearTimeMsec
            : undefined,
        FailoverConditions: output.failoverConditions !== undefined && output.failoverConditions !== null
            ? deserializeAws_restJson1__listOfFailoverCondition(output.failoverConditions, context)
            : undefined,
        InputPreference: output.inputPreference !== undefined && output.inputPreference !== null ? output.inputPreference : undefined,
        SecondaryInputId: output.secondaryInputId !== undefined && output.secondaryInputId !== null ? output.secondaryInputId : undefined,
    };
};
const deserializeAws_restJson1AvailBlanking = (output, context) => {
    return {
        AvailBlankingImage: output.availBlankingImage !== undefined && output.availBlankingImage !== null
            ? deserializeAws_restJson1InputLocation(output.availBlankingImage, context)
            : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1AvailConfiguration = (output, context) => {
    return {
        AvailSettings: output.availSettings !== undefined && output.availSettings !== null
            ? deserializeAws_restJson1AvailSettings(output.availSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1AvailSettings = (output, context) => {
    return {
        Scte35SpliceInsert: output.scte35SpliceInsert !== undefined && output.scte35SpliceInsert !== null
            ? deserializeAws_restJson1Scte35SpliceInsert(output.scte35SpliceInsert, context)
            : undefined,
        Scte35TimeSignalApos: output.scte35TimeSignalApos !== undefined && output.scte35TimeSignalApos !== null
            ? deserializeAws_restJson1Scte35TimeSignalApos(output.scte35TimeSignalApos, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchFailedResultModel = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Code: output.code !== undefined && output.code !== null ? output.code : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1BatchScheduleActionCreateResult = (output, context) => {
    return {
        ScheduleActions: output.scheduleActions !== undefined && output.scheduleActions !== null
            ? deserializeAws_restJson1__listOfScheduleAction(output.scheduleActions, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchScheduleActionDeleteResult = (output, context) => {
    return {
        ScheduleActions: output.scheduleActions !== undefined && output.scheduleActions !== null
            ? deserializeAws_restJson1__listOfScheduleAction(output.scheduleActions, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchSuccessfulResultModel = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1BlackoutSlate = (output, context) => {
    return {
        BlackoutSlateImage: output.blackoutSlateImage !== undefined && output.blackoutSlateImage !== null
            ? deserializeAws_restJson1InputLocation(output.blackoutSlateImage, context)
            : undefined,
        NetworkEndBlackout: output.networkEndBlackout !== undefined && output.networkEndBlackout !== null
            ? output.networkEndBlackout
            : undefined,
        NetworkEndBlackoutImage: output.networkEndBlackoutImage !== undefined && output.networkEndBlackoutImage !== null
            ? deserializeAws_restJson1InputLocation(output.networkEndBlackoutImage, context)
            : undefined,
        NetworkId: output.networkId !== undefined && output.networkId !== null ? output.networkId : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1BurnInDestinationSettings = (output, context) => {
    return {
        Alignment: output.alignment !== undefined && output.alignment !== null ? output.alignment : undefined,
        BackgroundColor: output.backgroundColor !== undefined && output.backgroundColor !== null ? output.backgroundColor : undefined,
        BackgroundOpacity: output.backgroundOpacity !== undefined && output.backgroundOpacity !== null
            ? output.backgroundOpacity
            : undefined,
        Font: output.font !== undefined && output.font !== null
            ? deserializeAws_restJson1InputLocation(output.font, context)
            : undefined,
        FontColor: output.fontColor !== undefined && output.fontColor !== null ? output.fontColor : undefined,
        FontOpacity: output.fontOpacity !== undefined && output.fontOpacity !== null ? output.fontOpacity : undefined,
        FontResolution: output.fontResolution !== undefined && output.fontResolution !== null ? output.fontResolution : undefined,
        FontSize: output.fontSize !== undefined && output.fontSize !== null ? output.fontSize : undefined,
        OutlineColor: output.outlineColor !== undefined && output.outlineColor !== null ? output.outlineColor : undefined,
        OutlineSize: output.outlineSize !== undefined && output.outlineSize !== null ? output.outlineSize : undefined,
        ShadowColor: output.shadowColor !== undefined && output.shadowColor !== null ? output.shadowColor : undefined,
        ShadowOpacity: output.shadowOpacity !== undefined && output.shadowOpacity !== null ? output.shadowOpacity : undefined,
        ShadowXOffset: output.shadowXOffset !== undefined && output.shadowXOffset !== null ? output.shadowXOffset : undefined,
        ShadowYOffset: output.shadowYOffset !== undefined && output.shadowYOffset !== null ? output.shadowYOffset : undefined,
        TeletextGridControl: output.teletextGridControl !== undefined && output.teletextGridControl !== null
            ? output.teletextGridControl
            : undefined,
        XPosition: output.xPosition !== undefined && output.xPosition !== null ? output.xPosition : undefined,
        YPosition: output.yPosition !== undefined && output.yPosition !== null ? output.yPosition : undefined,
    };
};
const deserializeAws_restJson1CaptionDescription = (output, context) => {
    return {
        CaptionSelectorName: output.captionSelectorName !== undefined && output.captionSelectorName !== null
            ? output.captionSelectorName
            : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1CaptionDestinationSettings(output.destinationSettings, context)
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageDescription: output.languageDescription !== undefined && output.languageDescription !== null
            ? output.languageDescription
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1CaptionDestinationSettings = (output, context) => {
    return {
        AribDestinationSettings: output.aribDestinationSettings !== undefined && output.aribDestinationSettings !== null
            ? deserializeAws_restJson1AribDestinationSettings(output.aribDestinationSettings, context)
            : undefined,
        BurnInDestinationSettings: output.burnInDestinationSettings !== undefined && output.burnInDestinationSettings !== null
            ? deserializeAws_restJson1BurnInDestinationSettings(output.burnInDestinationSettings, context)
            : undefined,
        DvbSubDestinationSettings: output.dvbSubDestinationSettings !== undefined && output.dvbSubDestinationSettings !== null
            ? deserializeAws_restJson1DvbSubDestinationSettings(output.dvbSubDestinationSettings, context)
            : undefined,
        EbuTtDDestinationSettings: output.ebuTtDDestinationSettings !== undefined && output.ebuTtDDestinationSettings !== null
            ? deserializeAws_restJson1EbuTtDDestinationSettings(output.ebuTtDDestinationSettings, context)
            : undefined,
        EmbeddedDestinationSettings: output.embeddedDestinationSettings !== undefined && output.embeddedDestinationSettings !== null
            ? deserializeAws_restJson1EmbeddedDestinationSettings(output.embeddedDestinationSettings, context)
            : undefined,
        EmbeddedPlusScte20DestinationSettings: output.embeddedPlusScte20DestinationSettings !== undefined &&
            output.embeddedPlusScte20DestinationSettings !== null
            ? deserializeAws_restJson1EmbeddedPlusScte20DestinationSettings(output.embeddedPlusScte20DestinationSettings, context)
            : undefined,
        RtmpCaptionInfoDestinationSettings: output.rtmpCaptionInfoDestinationSettings !== undefined && output.rtmpCaptionInfoDestinationSettings !== null
            ? deserializeAws_restJson1RtmpCaptionInfoDestinationSettings(output.rtmpCaptionInfoDestinationSettings, context)
            : undefined,
        Scte20PlusEmbeddedDestinationSettings: output.scte20PlusEmbeddedDestinationSettings !== undefined &&
            output.scte20PlusEmbeddedDestinationSettings !== null
            ? deserializeAws_restJson1Scte20PlusEmbeddedDestinationSettings(output.scte20PlusEmbeddedDestinationSettings, context)
            : undefined,
        Scte27DestinationSettings: output.scte27DestinationSettings !== undefined && output.scte27DestinationSettings !== null
            ? deserializeAws_restJson1Scte27DestinationSettings(output.scte27DestinationSettings, context)
            : undefined,
        SmpteTtDestinationSettings: output.smpteTtDestinationSettings !== undefined && output.smpteTtDestinationSettings !== null
            ? deserializeAws_restJson1SmpteTtDestinationSettings(output.smpteTtDestinationSettings, context)
            : undefined,
        TeletextDestinationSettings: output.teletextDestinationSettings !== undefined && output.teletextDestinationSettings !== null
            ? deserializeAws_restJson1TeletextDestinationSettings(output.teletextDestinationSettings, context)
            : undefined,
        TtmlDestinationSettings: output.ttmlDestinationSettings !== undefined && output.ttmlDestinationSettings !== null
            ? deserializeAws_restJson1TtmlDestinationSettings(output.ttmlDestinationSettings, context)
            : undefined,
        WebvttDestinationSettings: output.webvttDestinationSettings !== undefined && output.webvttDestinationSettings !== null
            ? deserializeAws_restJson1WebvttDestinationSettings(output.webvttDestinationSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1CaptionLanguageMapping = (output, context) => {
    return {
        CaptionChannel: output.captionChannel !== undefined && output.captionChannel !== null ? output.captionChannel : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageDescription: output.languageDescription !== undefined && output.languageDescription !== null
            ? output.languageDescription
            : undefined,
    };
};
const deserializeAws_restJson1CaptionRectangle = (output, context) => {
    return {
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        LeftOffset: output.leftOffset !== undefined && output.leftOffset !== null ? output.leftOffset : undefined,
        TopOffset: output.topOffset !== undefined && output.topOffset !== null ? output.topOffset : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
const deserializeAws_restJson1CaptionSelector = (output, context) => {
    return {
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SelectorSettings: output.selectorSettings !== undefined && output.selectorSettings !== null
            ? deserializeAws_restJson1CaptionSelectorSettings(output.selectorSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1CaptionSelectorSettings = (output, context) => {
    return {
        AncillarySourceSettings: output.ancillarySourceSettings !== undefined && output.ancillarySourceSettings !== null
            ? deserializeAws_restJson1AncillarySourceSettings(output.ancillarySourceSettings, context)
            : undefined,
        AribSourceSettings: output.aribSourceSettings !== undefined && output.aribSourceSettings !== null
            ? deserializeAws_restJson1AribSourceSettings(output.aribSourceSettings, context)
            : undefined,
        DvbSubSourceSettings: output.dvbSubSourceSettings !== undefined && output.dvbSubSourceSettings !== null
            ? deserializeAws_restJson1DvbSubSourceSettings(output.dvbSubSourceSettings, context)
            : undefined,
        EmbeddedSourceSettings: output.embeddedSourceSettings !== undefined && output.embeddedSourceSettings !== null
            ? deserializeAws_restJson1EmbeddedSourceSettings(output.embeddedSourceSettings, context)
            : undefined,
        Scte20SourceSettings: output.scte20SourceSettings !== undefined && output.scte20SourceSettings !== null
            ? deserializeAws_restJson1Scte20SourceSettings(output.scte20SourceSettings, context)
            : undefined,
        Scte27SourceSettings: output.scte27SourceSettings !== undefined && output.scte27SourceSettings !== null
            ? deserializeAws_restJson1Scte27SourceSettings(output.scte27SourceSettings, context)
            : undefined,
        TeletextSourceSettings: output.teletextSourceSettings !== undefined && output.teletextSourceSettings !== null
            ? deserializeAws_restJson1TeletextSourceSettings(output.teletextSourceSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1CdiInputSpecification = (output, context) => {
    return {
        Resolution: output.resolution !== undefined && output.resolution !== null ? output.resolution : undefined,
    };
};
const deserializeAws_restJson1Channel = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CdiInputSpecification: output.cdiInputSpecification !== undefined && output.cdiInputSpecification !== null
            ? deserializeAws_restJson1CdiInputSpecification(output.cdiInputSpecification, context)
            : undefined,
        ChannelClass: output.channelClass !== undefined && output.channelClass !== null ? output.channelClass : undefined,
        Destinations: output.destinations !== undefined && output.destinations !== null
            ? deserializeAws_restJson1__listOfOutputDestination(output.destinations, context)
            : undefined,
        EgressEndpoints: output.egressEndpoints !== undefined && output.egressEndpoints !== null
            ? deserializeAws_restJson1__listOfChannelEgressEndpoint(output.egressEndpoints, context)
            : undefined,
        EncoderSettings: output.encoderSettings !== undefined && output.encoderSettings !== null
            ? deserializeAws_restJson1EncoderSettings(output.encoderSettings, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        InputAttachments: output.inputAttachments !== undefined && output.inputAttachments !== null
            ? deserializeAws_restJson1__listOfInputAttachment(output.inputAttachments, context)
            : undefined,
        InputSpecification: output.inputSpecification !== undefined && output.inputSpecification !== null
            ? deserializeAws_restJson1InputSpecification(output.inputSpecification, context)
            : undefined,
        LogLevel: output.logLevel !== undefined && output.logLevel !== null ? output.logLevel : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        PipelineDetails: output.pipelineDetails !== undefined && output.pipelineDetails !== null
            ? deserializeAws_restJson1__listOfPipelineDetail(output.pipelineDetails, context)
            : undefined,
        PipelinesRunningCount: output.pipelinesRunningCount !== undefined && output.pipelinesRunningCount !== null
            ? output.pipelinesRunningCount
            : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        Vpc: output.vpc !== undefined && output.vpc !== null
            ? deserializeAws_restJson1VpcOutputSettingsDescription(output.vpc, context)
            : undefined,
    };
};
const deserializeAws_restJson1ChannelEgressEndpoint = (output, context) => {
    return {
        SourceIp: output.sourceIp !== undefined && output.sourceIp !== null ? output.sourceIp : undefined,
    };
};
const deserializeAws_restJson1ChannelSummary = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CdiInputSpecification: output.cdiInputSpecification !== undefined && output.cdiInputSpecification !== null
            ? deserializeAws_restJson1CdiInputSpecification(output.cdiInputSpecification, context)
            : undefined,
        ChannelClass: output.channelClass !== undefined && output.channelClass !== null ? output.channelClass : undefined,
        Destinations: output.destinations !== undefined && output.destinations !== null
            ? deserializeAws_restJson1__listOfOutputDestination(output.destinations, context)
            : undefined,
        EgressEndpoints: output.egressEndpoints !== undefined && output.egressEndpoints !== null
            ? deserializeAws_restJson1__listOfChannelEgressEndpoint(output.egressEndpoints, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        InputAttachments: output.inputAttachments !== undefined && output.inputAttachments !== null
            ? deserializeAws_restJson1__listOfInputAttachment(output.inputAttachments, context)
            : undefined,
        InputSpecification: output.inputSpecification !== undefined && output.inputSpecification !== null
            ? deserializeAws_restJson1InputSpecification(output.inputSpecification, context)
            : undefined,
        LogLevel: output.logLevel !== undefined && output.logLevel !== null ? output.logLevel : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        PipelinesRunningCount: output.pipelinesRunningCount !== undefined && output.pipelinesRunningCount !== null
            ? output.pipelinesRunningCount
            : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        Vpc: output.vpc !== undefined && output.vpc !== null
            ? deserializeAws_restJson1VpcOutputSettingsDescription(output.vpc, context)
            : undefined,
    };
};
const deserializeAws_restJson1ColorSpacePassthroughSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1DvbNitSettings = (output, context) => {
    return {
        NetworkId: output.networkId !== undefined && output.networkId !== null ? output.networkId : undefined,
        NetworkName: output.networkName !== undefined && output.networkName !== null ? output.networkName : undefined,
        RepInterval: output.repInterval !== undefined && output.repInterval !== null ? output.repInterval : undefined,
    };
};
const deserializeAws_restJson1DvbSdtSettings = (output, context) => {
    return {
        OutputSdt: output.outputSdt !== undefined && output.outputSdt !== null ? output.outputSdt : undefined,
        RepInterval: output.repInterval !== undefined && output.repInterval !== null ? output.repInterval : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
        ServiceProviderName: output.serviceProviderName !== undefined && output.serviceProviderName !== null
            ? output.serviceProviderName
            : undefined,
    };
};
const deserializeAws_restJson1DvbSubDestinationSettings = (output, context) => {
    return {
        Alignment: output.alignment !== undefined && output.alignment !== null ? output.alignment : undefined,
        BackgroundColor: output.backgroundColor !== undefined && output.backgroundColor !== null ? output.backgroundColor : undefined,
        BackgroundOpacity: output.backgroundOpacity !== undefined && output.backgroundOpacity !== null
            ? output.backgroundOpacity
            : undefined,
        Font: output.font !== undefined && output.font !== null
            ? deserializeAws_restJson1InputLocation(output.font, context)
            : undefined,
        FontColor: output.fontColor !== undefined && output.fontColor !== null ? output.fontColor : undefined,
        FontOpacity: output.fontOpacity !== undefined && output.fontOpacity !== null ? output.fontOpacity : undefined,
        FontResolution: output.fontResolution !== undefined && output.fontResolution !== null ? output.fontResolution : undefined,
        FontSize: output.fontSize !== undefined && output.fontSize !== null ? output.fontSize : undefined,
        OutlineColor: output.outlineColor !== undefined && output.outlineColor !== null ? output.outlineColor : undefined,
        OutlineSize: output.outlineSize !== undefined && output.outlineSize !== null ? output.outlineSize : undefined,
        ShadowColor: output.shadowColor !== undefined && output.shadowColor !== null ? output.shadowColor : undefined,
        ShadowOpacity: output.shadowOpacity !== undefined && output.shadowOpacity !== null ? output.shadowOpacity : undefined,
        ShadowXOffset: output.shadowXOffset !== undefined && output.shadowXOffset !== null ? output.shadowXOffset : undefined,
        ShadowYOffset: output.shadowYOffset !== undefined && output.shadowYOffset !== null ? output.shadowYOffset : undefined,
        TeletextGridControl: output.teletextGridControl !== undefined && output.teletextGridControl !== null
            ? output.teletextGridControl
            : undefined,
        XPosition: output.xPosition !== undefined && output.xPosition !== null ? output.xPosition : undefined,
        YPosition: output.yPosition !== undefined && output.yPosition !== null ? output.yPosition : undefined,
    };
};
const deserializeAws_restJson1DvbSubSourceSettings = (output, context) => {
    return {
        Pid: output.pid !== undefined && output.pid !== null ? output.pid : undefined,
    };
};
const deserializeAws_restJson1DvbTdtSettings = (output, context) => {
    return {
        RepInterval: output.repInterval !== undefined && output.repInterval !== null ? output.repInterval : undefined,
    };
};
const deserializeAws_restJson1Eac3Settings = (output, context) => {
    return {
        AttenuationControl: output.attenuationControl !== undefined && output.attenuationControl !== null
            ? output.attenuationControl
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BitstreamMode: output.bitstreamMode !== undefined && output.bitstreamMode !== null ? output.bitstreamMode : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        DcFilter: output.dcFilter !== undefined && output.dcFilter !== null ? output.dcFilter : undefined,
        Dialnorm: output.dialnorm !== undefined && output.dialnorm !== null ? output.dialnorm : undefined,
        DrcLine: output.drcLine !== undefined && output.drcLine !== null ? output.drcLine : undefined,
        DrcRf: output.drcRf !== undefined && output.drcRf !== null ? output.drcRf : undefined,
        LfeControl: output.lfeControl !== undefined && output.lfeControl !== null ? output.lfeControl : undefined,
        LfeFilter: output.lfeFilter !== undefined && output.lfeFilter !== null ? output.lfeFilter : undefined,
        LoRoCenterMixLevel: output.loRoCenterMixLevel !== undefined && output.loRoCenterMixLevel !== null
            ? output.loRoCenterMixLevel
            : undefined,
        LoRoSurroundMixLevel: output.loRoSurroundMixLevel !== undefined && output.loRoSurroundMixLevel !== null
            ? output.loRoSurroundMixLevel
            : undefined,
        LtRtCenterMixLevel: output.ltRtCenterMixLevel !== undefined && output.ltRtCenterMixLevel !== null
            ? output.ltRtCenterMixLevel
            : undefined,
        LtRtSurroundMixLevel: output.ltRtSurroundMixLevel !== undefined && output.ltRtSurroundMixLevel !== null
            ? output.ltRtSurroundMixLevel
            : undefined,
        MetadataControl: output.metadataControl !== undefined && output.metadataControl !== null ? output.metadataControl : undefined,
        PassthroughControl: output.passthroughControl !== undefined && output.passthroughControl !== null
            ? output.passthroughControl
            : undefined,
        PhaseControl: output.phaseControl !== undefined && output.phaseControl !== null ? output.phaseControl : undefined,
        StereoDownmix: output.stereoDownmix !== undefined && output.stereoDownmix !== null ? output.stereoDownmix : undefined,
        SurroundExMode: output.surroundExMode !== undefined && output.surroundExMode !== null ? output.surroundExMode : undefined,
        SurroundMode: output.surroundMode !== undefined && output.surroundMode !== null ? output.surroundMode : undefined,
    };
};
const deserializeAws_restJson1EbuTtDDestinationSettings = (output, context) => {
    return {
        CopyrightHolder: output.copyrightHolder !== undefined && output.copyrightHolder !== null ? output.copyrightHolder : undefined,
        FillLineGap: output.fillLineGap !== undefined && output.fillLineGap !== null ? output.fillLineGap : undefined,
        FontFamily: output.fontFamily !== undefined && output.fontFamily !== null ? output.fontFamily : undefined,
        StyleControl: output.styleControl !== undefined && output.styleControl !== null ? output.styleControl : undefined,
    };
};
const deserializeAws_restJson1EmbeddedDestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1EmbeddedPlusScte20DestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1EmbeddedSourceSettings = (output, context) => {
    return {
        Convert608To708: output.convert608To708 !== undefined && output.convert608To708 !== null ? output.convert608To708 : undefined,
        Scte20Detection: output.scte20Detection !== undefined && output.scte20Detection !== null ? output.scte20Detection : undefined,
        Source608ChannelNumber: output.source608ChannelNumber !== undefined && output.source608ChannelNumber !== null
            ? output.source608ChannelNumber
            : undefined,
        Source608TrackNumber: output.source608TrackNumber !== undefined && output.source608TrackNumber !== null
            ? output.source608TrackNumber
            : undefined,
    };
};
const deserializeAws_restJson1EncoderSettings = (output, context) => {
    return {
        AudioDescriptions: output.audioDescriptions !== undefined && output.audioDescriptions !== null
            ? deserializeAws_restJson1__listOfAudioDescription(output.audioDescriptions, context)
            : undefined,
        AvailBlanking: output.availBlanking !== undefined && output.availBlanking !== null
            ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
            : undefined,
        AvailConfiguration: output.availConfiguration !== undefined && output.availConfiguration !== null
            ? deserializeAws_restJson1AvailConfiguration(output.availConfiguration, context)
            : undefined,
        BlackoutSlate: output.blackoutSlate !== undefined && output.blackoutSlate !== null
            ? deserializeAws_restJson1BlackoutSlate(output.blackoutSlate, context)
            : undefined,
        CaptionDescriptions: output.captionDescriptions !== undefined && output.captionDescriptions !== null
            ? deserializeAws_restJson1__listOfCaptionDescription(output.captionDescriptions, context)
            : undefined,
        FeatureActivations: output.featureActivations !== undefined && output.featureActivations !== null
            ? deserializeAws_restJson1FeatureActivations(output.featureActivations, context)
            : undefined,
        GlobalConfiguration: output.globalConfiguration !== undefined && output.globalConfiguration !== null
            ? deserializeAws_restJson1GlobalConfiguration(output.globalConfiguration, context)
            : undefined,
        MotionGraphicsConfiguration: output.motionGraphicsConfiguration !== undefined && output.motionGraphicsConfiguration !== null
            ? deserializeAws_restJson1MotionGraphicsConfiguration(output.motionGraphicsConfiguration, context)
            : undefined,
        NielsenConfiguration: output.nielsenConfiguration !== undefined && output.nielsenConfiguration !== null
            ? deserializeAws_restJson1NielsenConfiguration(output.nielsenConfiguration, context)
            : undefined,
        OutputGroups: output.outputGroups !== undefined && output.outputGroups !== null
            ? deserializeAws_restJson1__listOfOutputGroup(output.outputGroups, context)
            : undefined,
        TimecodeConfig: output.timecodeConfig !== undefined && output.timecodeConfig !== null
            ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
            : undefined,
        VideoDescriptions: output.videoDescriptions !== undefined && output.videoDescriptions !== null
            ? deserializeAws_restJson1__listOfVideoDescription(output.videoDescriptions, context)
            : undefined,
    };
};
const deserializeAws_restJson1FailoverCondition = (output, context) => {
    return {
        FailoverConditionSettings: output.failoverConditionSettings !== undefined && output.failoverConditionSettings !== null
            ? deserializeAws_restJson1FailoverConditionSettings(output.failoverConditionSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1FailoverConditionSettings = (output, context) => {
    return {
        AudioSilenceSettings: output.audioSilenceSettings !== undefined && output.audioSilenceSettings !== null
            ? deserializeAws_restJson1AudioSilenceFailoverSettings(output.audioSilenceSettings, context)
            : undefined,
        InputLossSettings: output.inputLossSettings !== undefined && output.inputLossSettings !== null
            ? deserializeAws_restJson1InputLossFailoverSettings(output.inputLossSettings, context)
            : undefined,
        VideoBlackSettings: output.videoBlackSettings !== undefined && output.videoBlackSettings !== null
            ? deserializeAws_restJson1VideoBlackFailoverSettings(output.videoBlackSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1FeatureActivations = (output, context) => {
    return {
        InputPrepareScheduleActions: output.inputPrepareScheduleActions !== undefined && output.inputPrepareScheduleActions !== null
            ? output.inputPrepareScheduleActions
            : undefined,
    };
};
const deserializeAws_restJson1FecOutputSettings = (output, context) => {
    return {
        ColumnDepth: output.columnDepth !== undefined && output.columnDepth !== null ? output.columnDepth : undefined,
        IncludeFec: output.includeFec !== undefined && output.includeFec !== null ? output.includeFec : undefined,
        RowLength: output.rowLength !== undefined && output.rowLength !== null ? output.rowLength : undefined,
    };
};
const deserializeAws_restJson1FixedModeScheduleActionStartSettings = (output, context) => {
    return {
        Time: output.time !== undefined && output.time !== null ? output.time : undefined,
    };
};
const deserializeAws_restJson1Fmp4HlsSettings = (output, context) => {
    return {
        AudioRenditionSets: output.audioRenditionSets !== undefined && output.audioRenditionSets !== null
            ? output.audioRenditionSets
            : undefined,
        NielsenId3Behavior: output.nielsenId3Behavior !== undefined && output.nielsenId3Behavior !== null
            ? output.nielsenId3Behavior
            : undefined,
        TimedMetadataBehavior: output.timedMetadataBehavior !== undefined && output.timedMetadataBehavior !== null
            ? output.timedMetadataBehavior
            : undefined,
    };
};
const deserializeAws_restJson1FollowModeScheduleActionStartSettings = (output, context) => {
    return {
        FollowPoint: output.followPoint !== undefined && output.followPoint !== null ? output.followPoint : undefined,
        ReferenceActionName: output.referenceActionName !== undefined && output.referenceActionName !== null
            ? output.referenceActionName
            : undefined,
    };
};
const deserializeAws_restJson1FrameCaptureCdnSettings = (output, context) => {
    return {
        FrameCaptureS3Settings: output.frameCaptureS3Settings !== undefined && output.frameCaptureS3Settings !== null
            ? deserializeAws_restJson1FrameCaptureS3Settings(output.frameCaptureS3Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1FrameCaptureGroupSettings = (output, context) => {
    return {
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
        FrameCaptureCdnSettings: output.frameCaptureCdnSettings !== undefined && output.frameCaptureCdnSettings !== null
            ? deserializeAws_restJson1FrameCaptureCdnSettings(output.frameCaptureCdnSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1FrameCaptureHlsSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1FrameCaptureOutputSettings = (output, context) => {
    return {
        NameModifier: output.nameModifier !== undefined && output.nameModifier !== null ? output.nameModifier : undefined,
    };
};
const deserializeAws_restJson1FrameCaptureS3Settings = (output, context) => {
    return {
        CannedAcl: output.cannedAcl !== undefined && output.cannedAcl !== null ? output.cannedAcl : undefined,
    };
};
const deserializeAws_restJson1FrameCaptureSettings = (output, context) => {
    return {
        CaptureInterval: output.captureInterval !== undefined && output.captureInterval !== null ? output.captureInterval : undefined,
        CaptureIntervalUnits: output.captureIntervalUnits !== undefined && output.captureIntervalUnits !== null
            ? output.captureIntervalUnits
            : undefined,
    };
};
const deserializeAws_restJson1GlobalConfiguration = (output, context) => {
    return {
        InitialAudioGain: output.initialAudioGain !== undefined && output.initialAudioGain !== null ? output.initialAudioGain : undefined,
        InputEndAction: output.inputEndAction !== undefined && output.inputEndAction !== null ? output.inputEndAction : undefined,
        InputLossBehavior: output.inputLossBehavior !== undefined && output.inputLossBehavior !== null
            ? deserializeAws_restJson1InputLossBehavior(output.inputLossBehavior, context)
            : undefined,
        OutputLockingMode: output.outputLockingMode !== undefined && output.outputLockingMode !== null
            ? output.outputLockingMode
            : undefined,
        OutputTimingSource: output.outputTimingSource !== undefined && output.outputTimingSource !== null
            ? output.outputTimingSource
            : undefined,
        SupportLowFramerateInputs: output.supportLowFramerateInputs !== undefined && output.supportLowFramerateInputs !== null
            ? output.supportLowFramerateInputs
            : undefined,
    };
};
const deserializeAws_restJson1H264ColorSpaceSettings = (output, context) => {
    return {
        ColorSpacePassthroughSettings: output.colorSpacePassthroughSettings !== undefined && output.colorSpacePassthroughSettings !== null
            ? deserializeAws_restJson1ColorSpacePassthroughSettings(output.colorSpacePassthroughSettings, context)
            : undefined,
        Rec601Settings: output.rec601Settings !== undefined && output.rec601Settings !== null
            ? deserializeAws_restJson1Rec601Settings(output.rec601Settings, context)
            : undefined,
        Rec709Settings: output.rec709Settings !== undefined && output.rec709Settings !== null
            ? deserializeAws_restJson1Rec709Settings(output.rec709Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1H264FilterSettings = (output, context) => {
    return {
        TemporalFilterSettings: output.temporalFilterSettings !== undefined && output.temporalFilterSettings !== null
            ? deserializeAws_restJson1TemporalFilterSettings(output.temporalFilterSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1H264Settings = (output, context) => {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        AfdSignaling: output.afdSignaling !== undefined && output.afdSignaling !== null ? output.afdSignaling : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BufFillPct: output.bufFillPct !== undefined && output.bufFillPct !== null ? output.bufFillPct : undefined,
        BufSize: output.bufSize !== undefined && output.bufSize !== null ? output.bufSize : undefined,
        ColorMetadata: output.colorMetadata !== undefined && output.colorMetadata !== null ? output.colorMetadata : undefined,
        ColorSpaceSettings: output.colorSpaceSettings !== undefined && output.colorSpaceSettings !== null
            ? deserializeAws_restJson1H264ColorSpaceSettings(output.colorSpaceSettings, context)
            : undefined,
        EntropyEncoding: output.entropyEncoding !== undefined && output.entropyEncoding !== null ? output.entropyEncoding : undefined,
        FilterSettings: output.filterSettings !== undefined && output.filterSettings !== null
            ? deserializeAws_restJson1H264FilterSettings(output.filterSettings, context)
            : undefined,
        FixedAfd: output.fixedAfd !== undefined && output.fixedAfd !== null ? output.fixedAfd : undefined,
        FlickerAq: output.flickerAq !== undefined && output.flickerAq !== null ? output.flickerAq : undefined,
        ForceFieldPictures: output.forceFieldPictures !== undefined && output.forceFieldPictures !== null
            ? output.forceFieldPictures
            : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopBReference: output.gopBReference !== undefined && output.gopBReference !== null ? output.gopBReference : undefined,
        GopClosedCadence: output.gopClosedCadence !== undefined && output.gopClosedCadence !== null ? output.gopClosedCadence : undefined,
        GopNumBFrames: output.gopNumBFrames !== undefined && output.gopNumBFrames !== null ? output.gopNumBFrames : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        GopSizeUnits: output.gopSizeUnits !== undefined && output.gopSizeUnits !== null ? output.gopSizeUnits : undefined,
        Level: output.level !== undefined && output.level !== null ? output.level : undefined,
        LookAheadRateControl: output.lookAheadRateControl !== undefined && output.lookAheadRateControl !== null
            ? output.lookAheadRateControl
            : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MinIInterval: output.minIInterval !== undefined && output.minIInterval !== null ? output.minIInterval : undefined,
        NumRefFrames: output.numRefFrames !== undefined && output.numRefFrames !== null ? output.numRefFrames : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
        QualityLevel: output.qualityLevel !== undefined && output.qualityLevel !== null ? output.qualityLevel : undefined,
        QvbrQualityLevel: output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null ? output.qvbrQualityLevel : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        ScanType: output.scanType !== undefined && output.scanType !== null ? output.scanType : undefined,
        SceneChangeDetect: output.sceneChangeDetect !== undefined && output.sceneChangeDetect !== null
            ? output.sceneChangeDetect
            : undefined,
        Slices: output.slices !== undefined && output.slices !== null ? output.slices : undefined,
        Softness: output.softness !== undefined && output.softness !== null ? output.softness : undefined,
        SpatialAq: output.spatialAq !== undefined && output.spatialAq !== null ? output.spatialAq : undefined,
        SubgopLength: output.subgopLength !== undefined && output.subgopLength !== null ? output.subgopLength : undefined,
        Syntax: output.syntax !== undefined && output.syntax !== null ? output.syntax : undefined,
        TemporalAq: output.temporalAq !== undefined && output.temporalAq !== null ? output.temporalAq : undefined,
        TimecodeInsertion: output.timecodeInsertion !== undefined && output.timecodeInsertion !== null
            ? output.timecodeInsertion
            : undefined,
    };
};
const deserializeAws_restJson1H265ColorSpaceSettings = (output, context) => {
    return {
        ColorSpacePassthroughSettings: output.colorSpacePassthroughSettings !== undefined && output.colorSpacePassthroughSettings !== null
            ? deserializeAws_restJson1ColorSpacePassthroughSettings(output.colorSpacePassthroughSettings, context)
            : undefined,
        Hdr10Settings: output.hdr10Settings !== undefined && output.hdr10Settings !== null
            ? deserializeAws_restJson1Hdr10Settings(output.hdr10Settings, context)
            : undefined,
        Rec601Settings: output.rec601Settings !== undefined && output.rec601Settings !== null
            ? deserializeAws_restJson1Rec601Settings(output.rec601Settings, context)
            : undefined,
        Rec709Settings: output.rec709Settings !== undefined && output.rec709Settings !== null
            ? deserializeAws_restJson1Rec709Settings(output.rec709Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1H265FilterSettings = (output, context) => {
    return {
        TemporalFilterSettings: output.temporalFilterSettings !== undefined && output.temporalFilterSettings !== null
            ? deserializeAws_restJson1TemporalFilterSettings(output.temporalFilterSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1H265Settings = (output, context) => {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        AfdSignaling: output.afdSignaling !== undefined && output.afdSignaling !== null ? output.afdSignaling : undefined,
        AlternativeTransferFunction: output.alternativeTransferFunction !== undefined && output.alternativeTransferFunction !== null
            ? output.alternativeTransferFunction
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BufSize: output.bufSize !== undefined && output.bufSize !== null ? output.bufSize : undefined,
        ColorMetadata: output.colorMetadata !== undefined && output.colorMetadata !== null ? output.colorMetadata : undefined,
        ColorSpaceSettings: output.colorSpaceSettings !== undefined && output.colorSpaceSettings !== null
            ? deserializeAws_restJson1H265ColorSpaceSettings(output.colorSpaceSettings, context)
            : undefined,
        FilterSettings: output.filterSettings !== undefined && output.filterSettings !== null
            ? deserializeAws_restJson1H265FilterSettings(output.filterSettings, context)
            : undefined,
        FixedAfd: output.fixedAfd !== undefined && output.fixedAfd !== null ? output.fixedAfd : undefined,
        FlickerAq: output.flickerAq !== undefined && output.flickerAq !== null ? output.flickerAq : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopClosedCadence: output.gopClosedCadence !== undefined && output.gopClosedCadence !== null ? output.gopClosedCadence : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        GopSizeUnits: output.gopSizeUnits !== undefined && output.gopSizeUnits !== null ? output.gopSizeUnits : undefined,
        Level: output.level !== undefined && output.level !== null ? output.level : undefined,
        LookAheadRateControl: output.lookAheadRateControl !== undefined && output.lookAheadRateControl !== null
            ? output.lookAheadRateControl
            : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MinIInterval: output.minIInterval !== undefined && output.minIInterval !== null ? output.minIInterval : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
        QvbrQualityLevel: output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null ? output.qvbrQualityLevel : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        ScanType: output.scanType !== undefined && output.scanType !== null ? output.scanType : undefined,
        SceneChangeDetect: output.sceneChangeDetect !== undefined && output.sceneChangeDetect !== null
            ? output.sceneChangeDetect
            : undefined,
        Slices: output.slices !== undefined && output.slices !== null ? output.slices : undefined,
        Tier: output.tier !== undefined && output.tier !== null ? output.tier : undefined,
        TimecodeInsertion: output.timecodeInsertion !== undefined && output.timecodeInsertion !== null
            ? output.timecodeInsertion
            : undefined,
    };
};
const deserializeAws_restJson1Hdr10Settings = (output, context) => {
    return {
        MaxCll: output.maxCll !== undefined && output.maxCll !== null ? output.maxCll : undefined,
        MaxFall: output.maxFall !== undefined && output.maxFall !== null ? output.maxFall : undefined,
    };
};
const deserializeAws_restJson1HlsAkamaiSettings = (output, context) => {
    return {
        ConnectionRetryInterval: output.connectionRetryInterval !== undefined && output.connectionRetryInterval !== null
            ? output.connectionRetryInterval
            : undefined,
        FilecacheDuration: output.filecacheDuration !== undefined && output.filecacheDuration !== null
            ? output.filecacheDuration
            : undefined,
        HttpTransferMode: output.httpTransferMode !== undefined && output.httpTransferMode !== null ? output.httpTransferMode : undefined,
        NumRetries: output.numRetries !== undefined && output.numRetries !== null ? output.numRetries : undefined,
        RestartDelay: output.restartDelay !== undefined && output.restartDelay !== null ? output.restartDelay : undefined,
        Salt: output.salt !== undefined && output.salt !== null ? output.salt : undefined,
        Token: output.token !== undefined && output.token !== null ? output.token : undefined,
    };
};
const deserializeAws_restJson1HlsBasicPutSettings = (output, context) => {
    return {
        ConnectionRetryInterval: output.connectionRetryInterval !== undefined && output.connectionRetryInterval !== null
            ? output.connectionRetryInterval
            : undefined,
        FilecacheDuration: output.filecacheDuration !== undefined && output.filecacheDuration !== null
            ? output.filecacheDuration
            : undefined,
        NumRetries: output.numRetries !== undefined && output.numRetries !== null ? output.numRetries : undefined,
        RestartDelay: output.restartDelay !== undefined && output.restartDelay !== null ? output.restartDelay : undefined,
    };
};
const deserializeAws_restJson1HlsCdnSettings = (output, context) => {
    return {
        HlsAkamaiSettings: output.hlsAkamaiSettings !== undefined && output.hlsAkamaiSettings !== null
            ? deserializeAws_restJson1HlsAkamaiSettings(output.hlsAkamaiSettings, context)
            : undefined,
        HlsBasicPutSettings: output.hlsBasicPutSettings !== undefined && output.hlsBasicPutSettings !== null
            ? deserializeAws_restJson1HlsBasicPutSettings(output.hlsBasicPutSettings, context)
            : undefined,
        HlsMediaStoreSettings: output.hlsMediaStoreSettings !== undefined && output.hlsMediaStoreSettings !== null
            ? deserializeAws_restJson1HlsMediaStoreSettings(output.hlsMediaStoreSettings, context)
            : undefined,
        HlsS3Settings: output.hlsS3Settings !== undefined && output.hlsS3Settings !== null
            ? deserializeAws_restJson1HlsS3Settings(output.hlsS3Settings, context)
            : undefined,
        HlsWebdavSettings: output.hlsWebdavSettings !== undefined && output.hlsWebdavSettings !== null
            ? deserializeAws_restJson1HlsWebdavSettings(output.hlsWebdavSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1HlsGroupSettings = (output, context) => {
    return {
        AdMarkers: output.adMarkers !== undefined && output.adMarkers !== null
            ? deserializeAws_restJson1__listOfHlsAdMarkers(output.adMarkers, context)
            : undefined,
        BaseUrlContent: output.baseUrlContent !== undefined && output.baseUrlContent !== null ? output.baseUrlContent : undefined,
        BaseUrlContent1: output.baseUrlContent1 !== undefined && output.baseUrlContent1 !== null ? output.baseUrlContent1 : undefined,
        BaseUrlManifest: output.baseUrlManifest !== undefined && output.baseUrlManifest !== null ? output.baseUrlManifest : undefined,
        BaseUrlManifest1: output.baseUrlManifest1 !== undefined && output.baseUrlManifest1 !== null ? output.baseUrlManifest1 : undefined,
        CaptionLanguageMappings: output.captionLanguageMappings !== undefined && output.captionLanguageMappings !== null
            ? deserializeAws_restJson1__listOfCaptionLanguageMapping(output.captionLanguageMappings, context)
            : undefined,
        CaptionLanguageSetting: output.captionLanguageSetting !== undefined && output.captionLanguageSetting !== null
            ? output.captionLanguageSetting
            : undefined,
        ClientCache: output.clientCache !== undefined && output.clientCache !== null ? output.clientCache : undefined,
        CodecSpecification: output.codecSpecification !== undefined && output.codecSpecification !== null
            ? output.codecSpecification
            : undefined,
        ConstantIv: output.constantIv !== undefined && output.constantIv !== null ? output.constantIv : undefined,
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
        DirectoryStructure: output.directoryStructure !== undefined && output.directoryStructure !== null
            ? output.directoryStructure
            : undefined,
        DiscontinuityTags: output.discontinuityTags !== undefined && output.discontinuityTags !== null
            ? output.discontinuityTags
            : undefined,
        EncryptionType: output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
        HlsCdnSettings: output.hlsCdnSettings !== undefined && output.hlsCdnSettings !== null
            ? deserializeAws_restJson1HlsCdnSettings(output.hlsCdnSettings, context)
            : undefined,
        HlsId3SegmentTagging: output.hlsId3SegmentTagging !== undefined && output.hlsId3SegmentTagging !== null
            ? output.hlsId3SegmentTagging
            : undefined,
        IFrameOnlyPlaylists: output.iFrameOnlyPlaylists !== undefined && output.iFrameOnlyPlaylists !== null
            ? output.iFrameOnlyPlaylists
            : undefined,
        IncompleteSegmentBehavior: output.incompleteSegmentBehavior !== undefined && output.incompleteSegmentBehavior !== null
            ? output.incompleteSegmentBehavior
            : undefined,
        IndexNSegments: output.indexNSegments !== undefined && output.indexNSegments !== null ? output.indexNSegments : undefined,
        InputLossAction: output.inputLossAction !== undefined && output.inputLossAction !== null ? output.inputLossAction : undefined,
        IvInManifest: output.ivInManifest !== undefined && output.ivInManifest !== null ? output.ivInManifest : undefined,
        IvSource: output.ivSource !== undefined && output.ivSource !== null ? output.ivSource : undefined,
        KeepSegments: output.keepSegments !== undefined && output.keepSegments !== null ? output.keepSegments : undefined,
        KeyFormat: output.keyFormat !== undefined && output.keyFormat !== null ? output.keyFormat : undefined,
        KeyFormatVersions: output.keyFormatVersions !== undefined && output.keyFormatVersions !== null
            ? output.keyFormatVersions
            : undefined,
        KeyProviderSettings: output.keyProviderSettings !== undefined && output.keyProviderSettings !== null
            ? deserializeAws_restJson1KeyProviderSettings(output.keyProviderSettings, context)
            : undefined,
        ManifestCompression: output.manifestCompression !== undefined && output.manifestCompression !== null
            ? output.manifestCompression
            : undefined,
        ManifestDurationFormat: output.manifestDurationFormat !== undefined && output.manifestDurationFormat !== null
            ? output.manifestDurationFormat
            : undefined,
        MinSegmentLength: output.minSegmentLength !== undefined && output.minSegmentLength !== null ? output.minSegmentLength : undefined,
        Mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
        OutputSelection: output.outputSelection !== undefined && output.outputSelection !== null ? output.outputSelection : undefined,
        ProgramDateTime: output.programDateTime !== undefined && output.programDateTime !== null ? output.programDateTime : undefined,
        ProgramDateTimePeriod: output.programDateTimePeriod !== undefined && output.programDateTimePeriod !== null
            ? output.programDateTimePeriod
            : undefined,
        RedundantManifest: output.redundantManifest !== undefined && output.redundantManifest !== null
            ? output.redundantManifest
            : undefined,
        SegmentLength: output.segmentLength !== undefined && output.segmentLength !== null ? output.segmentLength : undefined,
        SegmentationMode: output.segmentationMode !== undefined && output.segmentationMode !== null ? output.segmentationMode : undefined,
        SegmentsPerSubdirectory: output.segmentsPerSubdirectory !== undefined && output.segmentsPerSubdirectory !== null
            ? output.segmentsPerSubdirectory
            : undefined,
        StreamInfResolution: output.streamInfResolution !== undefined && output.streamInfResolution !== null
            ? output.streamInfResolution
            : undefined,
        TimedMetadataId3Frame: output.timedMetadataId3Frame !== undefined && output.timedMetadataId3Frame !== null
            ? output.timedMetadataId3Frame
            : undefined,
        TimedMetadataId3Period: output.timedMetadataId3Period !== undefined && output.timedMetadataId3Period !== null
            ? output.timedMetadataId3Period
            : undefined,
        TimestampDeltaMilliseconds: output.timestampDeltaMilliseconds !== undefined && output.timestampDeltaMilliseconds !== null
            ? output.timestampDeltaMilliseconds
            : undefined,
        TsFileMode: output.tsFileMode !== undefined && output.tsFileMode !== null ? output.tsFileMode : undefined,
    };
};
const deserializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings = (output, context) => {
    return {
        Tag: output.tag !== undefined && output.tag !== null ? output.tag : undefined,
    };
};
const deserializeAws_restJson1HlsInputSettings = (output, context) => {
    return {
        Bandwidth: output.bandwidth !== undefined && output.bandwidth !== null ? output.bandwidth : undefined,
        BufferSegments: output.bufferSegments !== undefined && output.bufferSegments !== null ? output.bufferSegments : undefined,
        Retries: output.retries !== undefined && output.retries !== null ? output.retries : undefined,
        RetryInterval: output.retryInterval !== undefined && output.retryInterval !== null ? output.retryInterval : undefined,
    };
};
const deserializeAws_restJson1HlsMediaStoreSettings = (output, context) => {
    return {
        ConnectionRetryInterval: output.connectionRetryInterval !== undefined && output.connectionRetryInterval !== null
            ? output.connectionRetryInterval
            : undefined,
        FilecacheDuration: output.filecacheDuration !== undefined && output.filecacheDuration !== null
            ? output.filecacheDuration
            : undefined,
        MediaStoreStorageClass: output.mediaStoreStorageClass !== undefined && output.mediaStoreStorageClass !== null
            ? output.mediaStoreStorageClass
            : undefined,
        NumRetries: output.numRetries !== undefined && output.numRetries !== null ? output.numRetries : undefined,
        RestartDelay: output.restartDelay !== undefined && output.restartDelay !== null ? output.restartDelay : undefined,
    };
};
const deserializeAws_restJson1HlsOutputSettings = (output, context) => {
    return {
        H265PackagingType: output.h265PackagingType !== undefined && output.h265PackagingType !== null
            ? output.h265PackagingType
            : undefined,
        HlsSettings: output.hlsSettings !== undefined && output.hlsSettings !== null
            ? deserializeAws_restJson1HlsSettings(output.hlsSettings, context)
            : undefined,
        NameModifier: output.nameModifier !== undefined && output.nameModifier !== null ? output.nameModifier : undefined,
        SegmentModifier: output.segmentModifier !== undefined && output.segmentModifier !== null ? output.segmentModifier : undefined,
    };
};
const deserializeAws_restJson1HlsS3Settings = (output, context) => {
    return {
        CannedAcl: output.cannedAcl !== undefined && output.cannedAcl !== null ? output.cannedAcl : undefined,
    };
};
const deserializeAws_restJson1HlsSettings = (output, context) => {
    return {
        AudioOnlyHlsSettings: output.audioOnlyHlsSettings !== undefined && output.audioOnlyHlsSettings !== null
            ? deserializeAws_restJson1AudioOnlyHlsSettings(output.audioOnlyHlsSettings, context)
            : undefined,
        Fmp4HlsSettings: output.fmp4HlsSettings !== undefined && output.fmp4HlsSettings !== null
            ? deserializeAws_restJson1Fmp4HlsSettings(output.fmp4HlsSettings, context)
            : undefined,
        FrameCaptureHlsSettings: output.frameCaptureHlsSettings !== undefined && output.frameCaptureHlsSettings !== null
            ? deserializeAws_restJson1FrameCaptureHlsSettings(output.frameCaptureHlsSettings, context)
            : undefined,
        StandardHlsSettings: output.standardHlsSettings !== undefined && output.standardHlsSettings !== null
            ? deserializeAws_restJson1StandardHlsSettings(output.standardHlsSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1HlsTimedMetadataScheduleActionSettings = (output, context) => {
    return {
        Id3: output.id3 !== undefined && output.id3 !== null ? output.id3 : undefined,
    };
};
const deserializeAws_restJson1HlsWebdavSettings = (output, context) => {
    return {
        ConnectionRetryInterval: output.connectionRetryInterval !== undefined && output.connectionRetryInterval !== null
            ? output.connectionRetryInterval
            : undefined,
        FilecacheDuration: output.filecacheDuration !== undefined && output.filecacheDuration !== null
            ? output.filecacheDuration
            : undefined,
        HttpTransferMode: output.httpTransferMode !== undefined && output.httpTransferMode !== null ? output.httpTransferMode : undefined,
        NumRetries: output.numRetries !== undefined && output.numRetries !== null ? output.numRetries : undefined,
        RestartDelay: output.restartDelay !== undefined && output.restartDelay !== null ? output.restartDelay : undefined,
    };
};
const deserializeAws_restJson1HtmlMotionGraphicsSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1ImmediateModeScheduleActionStartSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1Input = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        AttachedChannels: output.attachedChannels !== undefined && output.attachedChannels !== null
            ? deserializeAws_restJson1__listOf__string(output.attachedChannels, context)
            : undefined,
        Destinations: output.destinations !== undefined && output.destinations !== null
            ? deserializeAws_restJson1__listOfInputDestination(output.destinations, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        InputClass: output.inputClass !== undefined && output.inputClass !== null ? output.inputClass : undefined,
        InputDevices: output.inputDevices !== undefined && output.inputDevices !== null
            ? deserializeAws_restJson1__listOfInputDeviceSettings(output.inputDevices, context)
            : undefined,
        InputPartnerIds: output.inputPartnerIds !== undefined && output.inputPartnerIds !== null
            ? deserializeAws_restJson1__listOf__string(output.inputPartnerIds, context)
            : undefined,
        InputSourceType: output.inputSourceType !== undefined && output.inputSourceType !== null ? output.inputSourceType : undefined,
        MediaConnectFlows: output.mediaConnectFlows !== undefined && output.mediaConnectFlows !== null
            ? deserializeAws_restJson1__listOfMediaConnectFlow(output.mediaConnectFlows, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SecurityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1__listOf__string(output.securityGroups, context)
            : undefined,
        Sources: output.sources !== undefined && output.sources !== null
            ? deserializeAws_restJson1__listOfInputSource(output.sources, context)
            : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1InputAttachment = (output, context) => {
    return {
        AutomaticInputFailoverSettings: output.automaticInputFailoverSettings !== undefined && output.automaticInputFailoverSettings !== null
            ? deserializeAws_restJson1AutomaticInputFailoverSettings(output.automaticInputFailoverSettings, context)
            : undefined,
        InputAttachmentName: output.inputAttachmentName !== undefined && output.inputAttachmentName !== null
            ? output.inputAttachmentName
            : undefined,
        InputId: output.inputId !== undefined && output.inputId !== null ? output.inputId : undefined,
        InputSettings: output.inputSettings !== undefined && output.inputSettings !== null
            ? deserializeAws_restJson1InputSettings(output.inputSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputChannelLevel = (output, context) => {
    return {
        Gain: output.gain !== undefined && output.gain !== null ? output.gain : undefined,
        InputChannel: output.inputChannel !== undefined && output.inputChannel !== null ? output.inputChannel : undefined,
    };
};
const deserializeAws_restJson1InputClippingSettings = (output, context) => {
    return {
        InputTimecodeSource: output.inputTimecodeSource !== undefined && output.inputTimecodeSource !== null
            ? output.inputTimecodeSource
            : undefined,
        StartTimecode: output.startTimecode !== undefined && output.startTimecode !== null
            ? deserializeAws_restJson1StartTimecode(output.startTimecode, context)
            : undefined,
        StopTimecode: output.stopTimecode !== undefined && output.stopTimecode !== null
            ? deserializeAws_restJson1StopTimecode(output.stopTimecode, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputDestination = (output, context) => {
    return {
        Ip: output.ip !== undefined && output.ip !== null ? output.ip : undefined,
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
        Vpc: output.vpc !== undefined && output.vpc !== null
            ? deserializeAws_restJson1InputDestinationVpc(output.vpc, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputDestinationVpc = (output, context) => {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        NetworkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
    };
};
const deserializeAws_restJson1InputDeviceHdSettings = (output, context) => {
    return {
        ActiveInput: output.activeInput !== undefined && output.activeInput !== null ? output.activeInput : undefined,
        ConfiguredInput: output.configuredInput !== undefined && output.configuredInput !== null ? output.configuredInput : undefined,
        DeviceState: output.deviceState !== undefined && output.deviceState !== null ? output.deviceState : undefined,
        Framerate: output.framerate !== undefined && output.framerate !== null ? output.framerate : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        ScanType: output.scanType !== undefined && output.scanType !== null ? output.scanType : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
const deserializeAws_restJson1InputDeviceNetworkSettings = (output, context) => {
    return {
        DnsAddresses: output.dnsAddresses !== undefined && output.dnsAddresses !== null
            ? deserializeAws_restJson1__listOf__string(output.dnsAddresses, context)
            : undefined,
        Gateway: output.gateway !== undefined && output.gateway !== null ? output.gateway : undefined,
        IpAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
        IpScheme: output.ipScheme !== undefined && output.ipScheme !== null ? output.ipScheme : undefined,
        SubnetMask: output.subnetMask !== undefined && output.subnetMask !== null ? output.subnetMask : undefined,
    };
};
const deserializeAws_restJson1InputDeviceSettings = (output, context) => {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1InputDeviceSummary = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        ConnectionState: output.connectionState !== undefined && output.connectionState !== null ? output.connectionState : undefined,
        DeviceSettingsSyncState: output.deviceSettingsSyncState !== undefined && output.deviceSettingsSyncState !== null
            ? output.deviceSettingsSyncState
            : undefined,
        DeviceUpdateStatus: output.deviceUpdateStatus !== undefined && output.deviceUpdateStatus !== null
            ? output.deviceUpdateStatus
            : undefined,
        HdDeviceSettings: output.hdDeviceSettings !== undefined && output.hdDeviceSettings !== null
            ? deserializeAws_restJson1InputDeviceHdSettings(output.hdDeviceSettings, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        MacAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        NetworkSettings: output.networkSettings !== undefined && output.networkSettings !== null
            ? deserializeAws_restJson1InputDeviceNetworkSettings(output.networkSettings, context)
            : undefined,
        SerialNumber: output.serialNumber !== undefined && output.serialNumber !== null ? output.serialNumber : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
        UhdDeviceSettings: output.uhdDeviceSettings !== undefined && output.uhdDeviceSettings !== null
            ? deserializeAws_restJson1InputDeviceUhdSettings(output.uhdDeviceSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputDeviceUhdSettings = (output, context) => {
    return {
        ActiveInput: output.activeInput !== undefined && output.activeInput !== null ? output.activeInput : undefined,
        ConfiguredInput: output.configuredInput !== undefined && output.configuredInput !== null ? output.configuredInput : undefined,
        DeviceState: output.deviceState !== undefined && output.deviceState !== null ? output.deviceState : undefined,
        Framerate: output.framerate !== undefined && output.framerate !== null ? output.framerate : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        ScanType: output.scanType !== undefined && output.scanType !== null ? output.scanType : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
const deserializeAws_restJson1InputLocation = (output, context) => {
    return {
        PasswordParam: output.passwordParam !== undefined && output.passwordParam !== null ? output.passwordParam : undefined,
        Uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
        Username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_restJson1InputLossBehavior = (output, context) => {
    return {
        BlackFrameMsec: output.blackFrameMsec !== undefined && output.blackFrameMsec !== null ? output.blackFrameMsec : undefined,
        InputLossImageColor: output.inputLossImageColor !== undefined && output.inputLossImageColor !== null
            ? output.inputLossImageColor
            : undefined,
        InputLossImageSlate: output.inputLossImageSlate !== undefined && output.inputLossImageSlate !== null
            ? deserializeAws_restJson1InputLocation(output.inputLossImageSlate, context)
            : undefined,
        InputLossImageType: output.inputLossImageType !== undefined && output.inputLossImageType !== null
            ? output.inputLossImageType
            : undefined,
        RepeatFrameMsec: output.repeatFrameMsec !== undefined && output.repeatFrameMsec !== null ? output.repeatFrameMsec : undefined,
    };
};
const deserializeAws_restJson1InputLossFailoverSettings = (output, context) => {
    return {
        InputLossThresholdMsec: output.inputLossThresholdMsec !== undefined && output.inputLossThresholdMsec !== null
            ? output.inputLossThresholdMsec
            : undefined,
    };
};
const deserializeAws_restJson1InputPrepareScheduleActionSettings = (output, context) => {
    return {
        InputAttachmentNameReference: output.inputAttachmentNameReference !== undefined && output.inputAttachmentNameReference !== null
            ? output.inputAttachmentNameReference
            : undefined,
        InputClippingSettings: output.inputClippingSettings !== undefined && output.inputClippingSettings !== null
            ? deserializeAws_restJson1InputClippingSettings(output.inputClippingSettings, context)
            : undefined,
        UrlPath: output.urlPath !== undefined && output.urlPath !== null
            ? deserializeAws_restJson1__listOf__string(output.urlPath, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputSecurityGroup = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Inputs: output.inputs !== undefined && output.inputs !== null
            ? deserializeAws_restJson1__listOf__string(output.inputs, context)
            : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        WhitelistRules: output.whitelistRules !== undefined && output.whitelistRules !== null
            ? deserializeAws_restJson1__listOfInputWhitelistRule(output.whitelistRules, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputSettings = (output, context) => {
    return {
        AudioSelectors: output.audioSelectors !== undefined && output.audioSelectors !== null
            ? deserializeAws_restJson1__listOfAudioSelector(output.audioSelectors, context)
            : undefined,
        CaptionSelectors: output.captionSelectors !== undefined && output.captionSelectors !== null
            ? deserializeAws_restJson1__listOfCaptionSelector(output.captionSelectors, context)
            : undefined,
        DeblockFilter: output.deblockFilter !== undefined && output.deblockFilter !== null ? output.deblockFilter : undefined,
        DenoiseFilter: output.denoiseFilter !== undefined && output.denoiseFilter !== null ? output.denoiseFilter : undefined,
        FilterStrength: output.filterStrength !== undefined && output.filterStrength !== null ? output.filterStrength : undefined,
        InputFilter: output.inputFilter !== undefined && output.inputFilter !== null ? output.inputFilter : undefined,
        NetworkInputSettings: output.networkInputSettings !== undefined && output.networkInputSettings !== null
            ? deserializeAws_restJson1NetworkInputSettings(output.networkInputSettings, context)
            : undefined,
        Smpte2038DataPreference: output.smpte2038DataPreference !== undefined && output.smpte2038DataPreference !== null
            ? output.smpte2038DataPreference
            : undefined,
        SourceEndBehavior: output.sourceEndBehavior !== undefined && output.sourceEndBehavior !== null
            ? output.sourceEndBehavior
            : undefined,
        VideoSelector: output.videoSelector !== undefined && output.videoSelector !== null
            ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputSource = (output, context) => {
    return {
        PasswordParam: output.passwordParam !== undefined && output.passwordParam !== null ? output.passwordParam : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
        Username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_restJson1InputSpecification = (output, context) => {
    return {
        Codec: output.codec !== undefined && output.codec !== null ? output.codec : undefined,
        MaximumBitrate: output.maximumBitrate !== undefined && output.maximumBitrate !== null ? output.maximumBitrate : undefined,
        Resolution: output.resolution !== undefined && output.resolution !== null ? output.resolution : undefined,
    };
};
const deserializeAws_restJson1InputSwitchScheduleActionSettings = (output, context) => {
    return {
        InputAttachmentNameReference: output.inputAttachmentNameReference !== undefined && output.inputAttachmentNameReference !== null
            ? output.inputAttachmentNameReference
            : undefined,
        InputClippingSettings: output.inputClippingSettings !== undefined && output.inputClippingSettings !== null
            ? deserializeAws_restJson1InputClippingSettings(output.inputClippingSettings, context)
            : undefined,
        UrlPath: output.urlPath !== undefined && output.urlPath !== null
            ? deserializeAws_restJson1__listOf__string(output.urlPath, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputWhitelistRule = (output, context) => {
    return {
        Cidr: output.cidr !== undefined && output.cidr !== null ? output.cidr : undefined,
    };
};
const deserializeAws_restJson1KeyProviderSettings = (output, context) => {
    return {
        StaticKeySettings: output.staticKeySettings !== undefined && output.staticKeySettings !== null
            ? deserializeAws_restJson1StaticKeySettings(output.staticKeySettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1M2tsSettings = (output, context) => {
    return {
        AbsentInputAudioBehavior: output.absentInputAudioBehavior !== undefined && output.absentInputAudioBehavior !== null
            ? output.absentInputAudioBehavior
            : undefined,
        Arib: output.arib !== undefined && output.arib !== null ? output.arib : undefined,
        AribCaptionsPid: output.aribCaptionsPid !== undefined && output.aribCaptionsPid !== null ? output.aribCaptionsPid : undefined,
        AribCaptionsPidControl: output.aribCaptionsPidControl !== undefined && output.aribCaptionsPidControl !== null
            ? output.aribCaptionsPidControl
            : undefined,
        AudioBufferModel: output.audioBufferModel !== undefined && output.audioBufferModel !== null ? output.audioBufferModel : undefined,
        AudioFramesPerPes: output.audioFramesPerPes !== undefined && output.audioFramesPerPes !== null
            ? output.audioFramesPerPes
            : undefined,
        AudioPids: output.audioPids !== undefined && output.audioPids !== null ? output.audioPids : undefined,
        AudioStreamType: output.audioStreamType !== undefined && output.audioStreamType !== null ? output.audioStreamType : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BufferModel: output.bufferModel !== undefined && output.bufferModel !== null ? output.bufferModel : undefined,
        CcDescriptor: output.ccDescriptor !== undefined && output.ccDescriptor !== null ? output.ccDescriptor : undefined,
        DvbNitSettings: output.dvbNitSettings !== undefined && output.dvbNitSettings !== null
            ? deserializeAws_restJson1DvbNitSettings(output.dvbNitSettings, context)
            : undefined,
        DvbSdtSettings: output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null
            ? deserializeAws_restJson1DvbSdtSettings(output.dvbSdtSettings, context)
            : undefined,
        DvbSubPids: output.dvbSubPids !== undefined && output.dvbSubPids !== null ? output.dvbSubPids : undefined,
        DvbTdtSettings: output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null
            ? deserializeAws_restJson1DvbTdtSettings(output.dvbTdtSettings, context)
            : undefined,
        DvbTeletextPid: output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null ? output.dvbTeletextPid : undefined,
        Ebif: output.ebif !== undefined && output.ebif !== null ? output.ebif : undefined,
        EbpAudioInterval: output.ebpAudioInterval !== undefined && output.ebpAudioInterval !== null ? output.ebpAudioInterval : undefined,
        EbpLookaheadMs: output.ebpLookaheadMs !== undefined && output.ebpLookaheadMs !== null ? output.ebpLookaheadMs : undefined,
        EbpPlacement: output.ebpPlacement !== undefined && output.ebpPlacement !== null ? output.ebpPlacement : undefined,
        EcmPid: output.ecmPid !== undefined && output.ecmPid !== null ? output.ecmPid : undefined,
        EsRateInPes: output.esRateInPes !== undefined && output.esRateInPes !== null ? output.esRateInPes : undefined,
        EtvPlatformPid: output.etvPlatformPid !== undefined && output.etvPlatformPid !== null ? output.etvPlatformPid : undefined,
        EtvSignalPid: output.etvSignalPid !== undefined && output.etvSignalPid !== null ? output.etvSignalPid : undefined,
        FragmentTime: output.fragmentTime !== undefined && output.fragmentTime !== null ? output.fragmentTime : undefined,
        Klv: output.klv !== undefined && output.klv !== null ? output.klv : undefined,
        KlvDataPids: output.klvDataPids !== undefined && output.klvDataPids !== null ? output.klvDataPids : undefined,
        NielsenId3Behavior: output.nielsenId3Behavior !== undefined && output.nielsenId3Behavior !== null
            ? output.nielsenId3Behavior
            : undefined,
        NullPacketBitrate: output.nullPacketBitrate !== undefined && output.nullPacketBitrate !== null
            ? output.nullPacketBitrate
            : undefined,
        PatInterval: output.patInterval !== undefined && output.patInterval !== null ? output.patInterval : undefined,
        PcrControl: output.pcrControl !== undefined && output.pcrControl !== null ? output.pcrControl : undefined,
        PcrPeriod: output.pcrPeriod !== undefined && output.pcrPeriod !== null ? output.pcrPeriod : undefined,
        PcrPid: output.pcrPid !== undefined && output.pcrPid !== null ? output.pcrPid : undefined,
        PmtInterval: output.pmtInterval !== undefined && output.pmtInterval !== null ? output.pmtInterval : undefined,
        PmtPid: output.pmtPid !== undefined && output.pmtPid !== null ? output.pmtPid : undefined,
        ProgramNum: output.programNum !== undefined && output.programNum !== null ? output.programNum : undefined,
        RateMode: output.rateMode !== undefined && output.rateMode !== null ? output.rateMode : undefined,
        Scte27Pids: output.scte27Pids !== undefined && output.scte27Pids !== null ? output.scte27Pids : undefined,
        Scte35Control: output.scte35Control !== undefined && output.scte35Control !== null ? output.scte35Control : undefined,
        Scte35Pid: output.scte35Pid !== undefined && output.scte35Pid !== null ? output.scte35Pid : undefined,
        SegmentationMarkers: output.segmentationMarkers !== undefined && output.segmentationMarkers !== null
            ? output.segmentationMarkers
            : undefined,
        SegmentationStyle: output.segmentationStyle !== undefined && output.segmentationStyle !== null
            ? output.segmentationStyle
            : undefined,
        SegmentationTime: output.segmentationTime !== undefined && output.segmentationTime !== null ? output.segmentationTime : undefined,
        TimedMetadataBehavior: output.timedMetadataBehavior !== undefined && output.timedMetadataBehavior !== null
            ? output.timedMetadataBehavior
            : undefined,
        TimedMetadataPid: output.timedMetadataPid !== undefined && output.timedMetadataPid !== null ? output.timedMetadataPid : undefined,
        TransportStreamId: output.transportStreamId !== undefined && output.transportStreamId !== null
            ? output.transportStreamId
            : undefined,
        VideoPid: output.videoPid !== undefined && output.videoPid !== null ? output.videoPid : undefined,
    };
};
const deserializeAws_restJson1M3u8Settings = (output, context) => {
    return {
        AudioFramesPerPes: output.audioFramesPerPes !== undefined && output.audioFramesPerPes !== null
            ? output.audioFramesPerPes
            : undefined,
        AudioPids: output.audioPids !== undefined && output.audioPids !== null ? output.audioPids : undefined,
        EcmPid: output.ecmPid !== undefined && output.ecmPid !== null ? output.ecmPid : undefined,
        NielsenId3Behavior: output.nielsenId3Behavior !== undefined && output.nielsenId3Behavior !== null
            ? output.nielsenId3Behavior
            : undefined,
        PatInterval: output.patInterval !== undefined && output.patInterval !== null ? output.patInterval : undefined,
        PcrControl: output.pcrControl !== undefined && output.pcrControl !== null ? output.pcrControl : undefined,
        PcrPeriod: output.pcrPeriod !== undefined && output.pcrPeriod !== null ? output.pcrPeriod : undefined,
        PcrPid: output.pcrPid !== undefined && output.pcrPid !== null ? output.pcrPid : undefined,
        PmtInterval: output.pmtInterval !== undefined && output.pmtInterval !== null ? output.pmtInterval : undefined,
        PmtPid: output.pmtPid !== undefined && output.pmtPid !== null ? output.pmtPid : undefined,
        ProgramNum: output.programNum !== undefined && output.programNum !== null ? output.programNum : undefined,
        Scte35Behavior: output.scte35Behavior !== undefined && output.scte35Behavior !== null ? output.scte35Behavior : undefined,
        Scte35Pid: output.scte35Pid !== undefined && output.scte35Pid !== null ? output.scte35Pid : undefined,
        TimedMetadataBehavior: output.timedMetadataBehavior !== undefined && output.timedMetadataBehavior !== null
            ? output.timedMetadataBehavior
            : undefined,
        TimedMetadataPid: output.timedMetadataPid !== undefined && output.timedMetadataPid !== null ? output.timedMetadataPid : undefined,
        TransportStreamId: output.transportStreamId !== undefined && output.transportStreamId !== null
            ? output.transportStreamId
            : undefined,
        VideoPid: output.videoPid !== undefined && output.videoPid !== null ? output.videoPid : undefined,
    };
};
const deserializeAws_restJson1MediaConnectFlow = (output, context) => {
    return {
        FlowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
    };
};
const deserializeAws_restJson1MediaPackageGroupSettings = (output, context) => {
    return {
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
    };
};
const deserializeAws_restJson1MediaPackageOutputDestinationSettings = (output, context) => {
    return {
        ChannelId: output.channelId !== undefined && output.channelId !== null ? output.channelId : undefined,
    };
};
const deserializeAws_restJson1MediaPackageOutputSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1MotionGraphicsActivateScheduleActionSettings = (output, context) => {
    return {
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        PasswordParam: output.passwordParam !== undefined && output.passwordParam !== null ? output.passwordParam : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
        Username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_restJson1MotionGraphicsConfiguration = (output, context) => {
    return {
        MotionGraphicsInsertion: output.motionGraphicsInsertion !== undefined && output.motionGraphicsInsertion !== null
            ? output.motionGraphicsInsertion
            : undefined,
        MotionGraphicsSettings: output.motionGraphicsSettings !== undefined && output.motionGraphicsSettings !== null
            ? deserializeAws_restJson1MotionGraphicsSettings(output.motionGraphicsSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1MotionGraphicsDeactivateScheduleActionSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1MotionGraphicsSettings = (output, context) => {
    return {
        HtmlMotionGraphicsSettings: output.htmlMotionGraphicsSettings !== undefined && output.htmlMotionGraphicsSettings !== null
            ? deserializeAws_restJson1HtmlMotionGraphicsSettings(output.htmlMotionGraphicsSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1Mp2Settings = (output, context) => {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
const deserializeAws_restJson1Mpeg2FilterSettings = (output, context) => {
    return {
        TemporalFilterSettings: output.temporalFilterSettings !== undefined && output.temporalFilterSettings !== null
            ? deserializeAws_restJson1TemporalFilterSettings(output.temporalFilterSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1Mpeg2Settings = (output, context) => {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        AfdSignaling: output.afdSignaling !== undefined && output.afdSignaling !== null ? output.afdSignaling : undefined,
        ColorMetadata: output.colorMetadata !== undefined && output.colorMetadata !== null ? output.colorMetadata : undefined,
        ColorSpace: output.colorSpace !== undefined && output.colorSpace !== null ? output.colorSpace : undefined,
        DisplayAspectRatio: output.displayAspectRatio !== undefined && output.displayAspectRatio !== null
            ? output.displayAspectRatio
            : undefined,
        FilterSettings: output.filterSettings !== undefined && output.filterSettings !== null
            ? deserializeAws_restJson1Mpeg2FilterSettings(output.filterSettings, context)
            : undefined,
        FixedAfd: output.fixedAfd !== undefined && output.fixedAfd !== null ? output.fixedAfd : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopClosedCadence: output.gopClosedCadence !== undefined && output.gopClosedCadence !== null ? output.gopClosedCadence : undefined,
        GopNumBFrames: output.gopNumBFrames !== undefined && output.gopNumBFrames !== null ? output.gopNumBFrames : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        GopSizeUnits: output.gopSizeUnits !== undefined && output.gopSizeUnits !== null ? output.gopSizeUnits : undefined,
        ScanType: output.scanType !== undefined && output.scanType !== null ? output.scanType : undefined,
        SubgopLength: output.subgopLength !== undefined && output.subgopLength !== null ? output.subgopLength : undefined,
        TimecodeInsertion: output.timecodeInsertion !== undefined && output.timecodeInsertion !== null
            ? output.timecodeInsertion
            : undefined,
    };
};
const deserializeAws_restJson1MsSmoothGroupSettings = (output, context) => {
    return {
        AcquisitionPointId: output.acquisitionPointId !== undefined && output.acquisitionPointId !== null
            ? output.acquisitionPointId
            : undefined,
        AudioOnlyTimecodeControl: output.audioOnlyTimecodeControl !== undefined && output.audioOnlyTimecodeControl !== null
            ? output.audioOnlyTimecodeControl
            : undefined,
        CertificateMode: output.certificateMode !== undefined && output.certificateMode !== null ? output.certificateMode : undefined,
        ConnectionRetryInterval: output.connectionRetryInterval !== undefined && output.connectionRetryInterval !== null
            ? output.connectionRetryInterval
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
        EventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        EventIdMode: output.eventIdMode !== undefined && output.eventIdMode !== null ? output.eventIdMode : undefined,
        EventStopBehavior: output.eventStopBehavior !== undefined && output.eventStopBehavior !== null
            ? output.eventStopBehavior
            : undefined,
        FilecacheDuration: output.filecacheDuration !== undefined && output.filecacheDuration !== null
            ? output.filecacheDuration
            : undefined,
        FragmentLength: output.fragmentLength !== undefined && output.fragmentLength !== null ? output.fragmentLength : undefined,
        InputLossAction: output.inputLossAction !== undefined && output.inputLossAction !== null ? output.inputLossAction : undefined,
        NumRetries: output.numRetries !== undefined && output.numRetries !== null ? output.numRetries : undefined,
        RestartDelay: output.restartDelay !== undefined && output.restartDelay !== null ? output.restartDelay : undefined,
        SegmentationMode: output.segmentationMode !== undefined && output.segmentationMode !== null ? output.segmentationMode : undefined,
        SendDelayMs: output.sendDelayMs !== undefined && output.sendDelayMs !== null ? output.sendDelayMs : undefined,
        SparseTrackType: output.sparseTrackType !== undefined && output.sparseTrackType !== null ? output.sparseTrackType : undefined,
        StreamManifestBehavior: output.streamManifestBehavior !== undefined && output.streamManifestBehavior !== null
            ? output.streamManifestBehavior
            : undefined,
        TimestampOffset: output.timestampOffset !== undefined && output.timestampOffset !== null ? output.timestampOffset : undefined,
        TimestampOffsetMode: output.timestampOffsetMode !== undefined && output.timestampOffsetMode !== null
            ? output.timestampOffsetMode
            : undefined,
    };
};
const deserializeAws_restJson1MsSmoothOutputSettings = (output, context) => {
    return {
        H265PackagingType: output.h265PackagingType !== undefined && output.h265PackagingType !== null
            ? output.h265PackagingType
            : undefined,
        NameModifier: output.nameModifier !== undefined && output.nameModifier !== null ? output.nameModifier : undefined,
    };
};
const deserializeAws_restJson1Multiplex = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        AvailabilityZones: output.availabilityZones !== undefined && output.availabilityZones !== null
            ? deserializeAws_restJson1__listOf__string(output.availabilityZones, context)
            : undefined,
        Destinations: output.destinations !== undefined && output.destinations !== null
            ? deserializeAws_restJson1__listOfMultiplexOutputDestination(output.destinations, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        MultiplexSettings: output.multiplexSettings !== undefined && output.multiplexSettings !== null
            ? deserializeAws_restJson1MultiplexSettings(output.multiplexSettings, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        PipelinesRunningCount: output.pipelinesRunningCount !== undefined && output.pipelinesRunningCount !== null
            ? output.pipelinesRunningCount
            : undefined,
        ProgramCount: output.programCount !== undefined && output.programCount !== null ? output.programCount : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexGroupSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1MultiplexMediaConnectOutputDestinationSettings = (output, context) => {
    return {
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
    };
};
const deserializeAws_restJson1MultiplexOutputDestination = (output, context) => {
    return {
        MediaConnectSettings: output.mediaConnectSettings !== undefined && output.mediaConnectSettings !== null
            ? deserializeAws_restJson1MultiplexMediaConnectOutputDestinationSettings(output.mediaConnectSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexOutputSettings = (output, context) => {
    return {
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgram = (output, context) => {
    return {
        ChannelId: output.channelId !== undefined && output.channelId !== null ? output.channelId : undefined,
        MultiplexProgramSettings: output.multiplexProgramSettings !== undefined && output.multiplexProgramSettings !== null
            ? deserializeAws_restJson1MultiplexProgramSettings(output.multiplexProgramSettings, context)
            : undefined,
        PacketIdentifiersMap: output.packetIdentifiersMap !== undefined && output.packetIdentifiersMap !== null
            ? deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap(output.packetIdentifiersMap, context)
            : undefined,
        PipelineDetails: output.pipelineDetails !== undefined && output.pipelineDetails !== null
            ? deserializeAws_restJson1__listOfMultiplexProgramPipelineDetail(output.pipelineDetails, context)
            : undefined,
        ProgramName: output.programName !== undefined && output.programName !== null ? output.programName : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgramChannelDestinationSettings = (output, context) => {
    return {
        MultiplexId: output.multiplexId !== undefined && output.multiplexId !== null ? output.multiplexId : undefined,
        ProgramName: output.programName !== undefined && output.programName !== null ? output.programName : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap = (output, context) => {
    return {
        AudioPids: output.audioPids !== undefined && output.audioPids !== null
            ? deserializeAws_restJson1__listOf__integer(output.audioPids, context)
            : undefined,
        DvbSubPids: output.dvbSubPids !== undefined && output.dvbSubPids !== null
            ? deserializeAws_restJson1__listOf__integer(output.dvbSubPids, context)
            : undefined,
        DvbTeletextPid: output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null ? output.dvbTeletextPid : undefined,
        EtvPlatformPid: output.etvPlatformPid !== undefined && output.etvPlatformPid !== null ? output.etvPlatformPid : undefined,
        EtvSignalPid: output.etvSignalPid !== undefined && output.etvSignalPid !== null ? output.etvSignalPid : undefined,
        KlvDataPids: output.klvDataPids !== undefined && output.klvDataPids !== null
            ? deserializeAws_restJson1__listOf__integer(output.klvDataPids, context)
            : undefined,
        PcrPid: output.pcrPid !== undefined && output.pcrPid !== null ? output.pcrPid : undefined,
        PmtPid: output.pmtPid !== undefined && output.pmtPid !== null ? output.pmtPid : undefined,
        PrivateMetadataPid: output.privateMetadataPid !== undefined && output.privateMetadataPid !== null
            ? output.privateMetadataPid
            : undefined,
        Scte27Pids: output.scte27Pids !== undefined && output.scte27Pids !== null
            ? deserializeAws_restJson1__listOf__integer(output.scte27Pids, context)
            : undefined,
        Scte35Pid: output.scte35Pid !== undefined && output.scte35Pid !== null ? output.scte35Pid : undefined,
        TimedMetadataPid: output.timedMetadataPid !== undefined && output.timedMetadataPid !== null ? output.timedMetadataPid : undefined,
        VideoPid: output.videoPid !== undefined && output.videoPid !== null ? output.videoPid : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgramPipelineDetail = (output, context) => {
    return {
        ActiveChannelPipeline: output.activeChannelPipeline !== undefined && output.activeChannelPipeline !== null
            ? output.activeChannelPipeline
            : undefined,
        PipelineId: output.pipelineId !== undefined && output.pipelineId !== null ? output.pipelineId : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgramServiceDescriptor = (output, context) => {
    return {
        ProviderName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgramSettings = (output, context) => {
    return {
        PreferredChannelPipeline: output.preferredChannelPipeline !== undefined && output.preferredChannelPipeline !== null
            ? output.preferredChannelPipeline
            : undefined,
        ProgramNumber: output.programNumber !== undefined && output.programNumber !== null ? output.programNumber : undefined,
        ServiceDescriptor: output.serviceDescriptor !== undefined && output.serviceDescriptor !== null
            ? deserializeAws_restJson1MultiplexProgramServiceDescriptor(output.serviceDescriptor, context)
            : undefined,
        VideoSettings: output.videoSettings !== undefined && output.videoSettings !== null
            ? deserializeAws_restJson1MultiplexVideoSettings(output.videoSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexProgramSummary = (output, context) => {
    return {
        ChannelId: output.channelId !== undefined && output.channelId !== null ? output.channelId : undefined,
        ProgramName: output.programName !== undefined && output.programName !== null ? output.programName : undefined,
    };
};
const deserializeAws_restJson1MultiplexSettings = (output, context) => {
    return {
        MaximumVideoBufferDelayMilliseconds: output.maximumVideoBufferDelayMilliseconds !== undefined && output.maximumVideoBufferDelayMilliseconds !== null
            ? output.maximumVideoBufferDelayMilliseconds
            : undefined,
        TransportStreamBitrate: output.transportStreamBitrate !== undefined && output.transportStreamBitrate !== null
            ? output.transportStreamBitrate
            : undefined,
        TransportStreamId: output.transportStreamId !== undefined && output.transportStreamId !== null
            ? output.transportStreamId
            : undefined,
        TransportStreamReservedBitrate: output.transportStreamReservedBitrate !== undefined && output.transportStreamReservedBitrate !== null
            ? output.transportStreamReservedBitrate
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexSettingsSummary = (output, context) => {
    return {
        TransportStreamBitrate: output.transportStreamBitrate !== undefined && output.transportStreamBitrate !== null
            ? output.transportStreamBitrate
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexStatmuxVideoSettings = (output, context) => {
    return {
        MaximumBitrate: output.maximumBitrate !== undefined && output.maximumBitrate !== null ? output.maximumBitrate : undefined,
        MinimumBitrate: output.minimumBitrate !== undefined && output.minimumBitrate !== null ? output.minimumBitrate : undefined,
        Priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    };
};
const deserializeAws_restJson1MultiplexSummary = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        AvailabilityZones: output.availabilityZones !== undefined && output.availabilityZones !== null
            ? deserializeAws_restJson1__listOf__string(output.availabilityZones, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        MultiplexSettings: output.multiplexSettings !== undefined && output.multiplexSettings !== null
            ? deserializeAws_restJson1MultiplexSettingsSummary(output.multiplexSettings, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        PipelinesRunningCount: output.pipelinesRunningCount !== undefined && output.pipelinesRunningCount !== null
            ? output.pipelinesRunningCount
            : undefined,
        ProgramCount: output.programCount !== undefined && output.programCount !== null ? output.programCount : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1MultiplexVideoSettings = (output, context) => {
    return {
        ConstantBitrate: output.constantBitrate !== undefined && output.constantBitrate !== null ? output.constantBitrate : undefined,
        StatmuxSettings: output.statmuxSettings !== undefined && output.statmuxSettings !== null
            ? deserializeAws_restJson1MultiplexStatmuxVideoSettings(output.statmuxSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1NetworkInputSettings = (output, context) => {
    return {
        HlsInputSettings: output.hlsInputSettings !== undefined && output.hlsInputSettings !== null
            ? deserializeAws_restJson1HlsInputSettings(output.hlsInputSettings, context)
            : undefined,
        ServerValidation: output.serverValidation !== undefined && output.serverValidation !== null ? output.serverValidation : undefined,
    };
};
const deserializeAws_restJson1NielsenConfiguration = (output, context) => {
    return {
        DistributorId: output.distributorId !== undefined && output.distributorId !== null ? output.distributorId : undefined,
        NielsenPcmToId3Tagging: output.nielsenPcmToId3Tagging !== undefined && output.nielsenPcmToId3Tagging !== null
            ? output.nielsenPcmToId3Tagging
            : undefined,
    };
};
const deserializeAws_restJson1Offering = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CurrencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        DurationUnits: output.durationUnits !== undefined && output.durationUnits !== null ? output.durationUnits : undefined,
        FixedPrice: output.fixedPrice !== undefined && output.fixedPrice !== null ? output.fixedPrice : undefined,
        OfferingDescription: output.offeringDescription !== undefined && output.offeringDescription !== null
            ? output.offeringDescription
            : undefined,
        OfferingId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
        OfferingType: output.offeringType !== undefined && output.offeringType !== null ? output.offeringType : undefined,
        Region: output.region !== undefined && output.region !== null ? output.region : undefined,
        ResourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ReservationResourceSpecification(output.resourceSpecification, context)
            : undefined,
        UsagePrice: output.usagePrice !== undefined && output.usagePrice !== null ? output.usagePrice : undefined,
    };
};
const deserializeAws_restJson1Output = (output, context) => {
    return {
        AudioDescriptionNames: output.audioDescriptionNames !== undefined && output.audioDescriptionNames !== null
            ? deserializeAws_restJson1__listOf__string(output.audioDescriptionNames, context)
            : undefined,
        CaptionDescriptionNames: output.captionDescriptionNames !== undefined && output.captionDescriptionNames !== null
            ? deserializeAws_restJson1__listOf__string(output.captionDescriptionNames, context)
            : undefined,
        OutputName: output.outputName !== undefined && output.outputName !== null ? output.outputName : undefined,
        OutputSettings: output.outputSettings !== undefined && output.outputSettings !== null
            ? deserializeAws_restJson1OutputSettings(output.outputSettings, context)
            : undefined,
        VideoDescriptionName: output.videoDescriptionName !== undefined && output.videoDescriptionName !== null
            ? output.videoDescriptionName
            : undefined,
    };
};
const deserializeAws_restJson1OutputDestination = (output, context) => {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        MediaPackageSettings: output.mediaPackageSettings !== undefined && output.mediaPackageSettings !== null
            ? deserializeAws_restJson1__listOfMediaPackageOutputDestinationSettings(output.mediaPackageSettings, context)
            : undefined,
        MultiplexSettings: output.multiplexSettings !== undefined && output.multiplexSettings !== null
            ? deserializeAws_restJson1MultiplexProgramChannelDestinationSettings(output.multiplexSettings, context)
            : undefined,
        Settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_restJson1__listOfOutputDestinationSettings(output.settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputDestinationSettings = (output, context) => {
    return {
        PasswordParam: output.passwordParam !== undefined && output.passwordParam !== null ? output.passwordParam : undefined,
        StreamName: output.streamName !== undefined && output.streamName !== null ? output.streamName : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
        Username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_restJson1OutputGroup = (output, context) => {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        OutputGroupSettings: output.outputGroupSettings !== undefined && output.outputGroupSettings !== null
            ? deserializeAws_restJson1OutputGroupSettings(output.outputGroupSettings, context)
            : undefined,
        Outputs: output.outputs !== undefined && output.outputs !== null
            ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputGroupSettings = (output, context) => {
    return {
        ArchiveGroupSettings: output.archiveGroupSettings !== undefined && output.archiveGroupSettings !== null
            ? deserializeAws_restJson1ArchiveGroupSettings(output.archiveGroupSettings, context)
            : undefined,
        FrameCaptureGroupSettings: output.frameCaptureGroupSettings !== undefined && output.frameCaptureGroupSettings !== null
            ? deserializeAws_restJson1FrameCaptureGroupSettings(output.frameCaptureGroupSettings, context)
            : undefined,
        HlsGroupSettings: output.hlsGroupSettings !== undefined && output.hlsGroupSettings !== null
            ? deserializeAws_restJson1HlsGroupSettings(output.hlsGroupSettings, context)
            : undefined,
        MediaPackageGroupSettings: output.mediaPackageGroupSettings !== undefined && output.mediaPackageGroupSettings !== null
            ? deserializeAws_restJson1MediaPackageGroupSettings(output.mediaPackageGroupSettings, context)
            : undefined,
        MsSmoothGroupSettings: output.msSmoothGroupSettings !== undefined && output.msSmoothGroupSettings !== null
            ? deserializeAws_restJson1MsSmoothGroupSettings(output.msSmoothGroupSettings, context)
            : undefined,
        MultiplexGroupSettings: output.multiplexGroupSettings !== undefined && output.multiplexGroupSettings !== null
            ? deserializeAws_restJson1MultiplexGroupSettings(output.multiplexGroupSettings, context)
            : undefined,
        RtmpGroupSettings: output.rtmpGroupSettings !== undefined && output.rtmpGroupSettings !== null
            ? deserializeAws_restJson1RtmpGroupSettings(output.rtmpGroupSettings, context)
            : undefined,
        UdpGroupSettings: output.udpGroupSettings !== undefined && output.udpGroupSettings !== null
            ? deserializeAws_restJson1UdpGroupSettings(output.udpGroupSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputLocationRef = (output, context) => {
    return {
        DestinationRefId: output.destinationRefId !== undefined && output.destinationRefId !== null ? output.destinationRefId : undefined,
    };
};
const deserializeAws_restJson1OutputSettings = (output, context) => {
    return {
        ArchiveOutputSettings: output.archiveOutputSettings !== undefined && output.archiveOutputSettings !== null
            ? deserializeAws_restJson1ArchiveOutputSettings(output.archiveOutputSettings, context)
            : undefined,
        FrameCaptureOutputSettings: output.frameCaptureOutputSettings !== undefined && output.frameCaptureOutputSettings !== null
            ? deserializeAws_restJson1FrameCaptureOutputSettings(output.frameCaptureOutputSettings, context)
            : undefined,
        HlsOutputSettings: output.hlsOutputSettings !== undefined && output.hlsOutputSettings !== null
            ? deserializeAws_restJson1HlsOutputSettings(output.hlsOutputSettings, context)
            : undefined,
        MediaPackageOutputSettings: output.mediaPackageOutputSettings !== undefined && output.mediaPackageOutputSettings !== null
            ? deserializeAws_restJson1MediaPackageOutputSettings(output.mediaPackageOutputSettings, context)
            : undefined,
        MsSmoothOutputSettings: output.msSmoothOutputSettings !== undefined && output.msSmoothOutputSettings !== null
            ? deserializeAws_restJson1MsSmoothOutputSettings(output.msSmoothOutputSettings, context)
            : undefined,
        MultiplexOutputSettings: output.multiplexOutputSettings !== undefined && output.multiplexOutputSettings !== null
            ? deserializeAws_restJson1MultiplexOutputSettings(output.multiplexOutputSettings, context)
            : undefined,
        RtmpOutputSettings: output.rtmpOutputSettings !== undefined && output.rtmpOutputSettings !== null
            ? deserializeAws_restJson1RtmpOutputSettings(output.rtmpOutputSettings, context)
            : undefined,
        UdpOutputSettings: output.udpOutputSettings !== undefined && output.udpOutputSettings !== null
            ? deserializeAws_restJson1UdpOutputSettings(output.udpOutputSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1PassThroughSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1PauseStateScheduleActionSettings = (output, context) => {
    return {
        Pipelines: output.pipelines !== undefined && output.pipelines !== null
            ? deserializeAws_restJson1__listOfPipelinePauseStateSettings(output.pipelines, context)
            : undefined,
    };
};
const deserializeAws_restJson1PipelineDetail = (output, context) => {
    return {
        ActiveInputAttachmentName: output.activeInputAttachmentName !== undefined && output.activeInputAttachmentName !== null
            ? output.activeInputAttachmentName
            : undefined,
        ActiveInputSwitchActionName: output.activeInputSwitchActionName !== undefined && output.activeInputSwitchActionName !== null
            ? output.activeInputSwitchActionName
            : undefined,
        ActiveMotionGraphicsActionName: output.activeMotionGraphicsActionName !== undefined && output.activeMotionGraphicsActionName !== null
            ? output.activeMotionGraphicsActionName
            : undefined,
        ActiveMotionGraphicsUri: output.activeMotionGraphicsUri !== undefined && output.activeMotionGraphicsUri !== null
            ? output.activeMotionGraphicsUri
            : undefined,
        PipelineId: output.pipelineId !== undefined && output.pipelineId !== null ? output.pipelineId : undefined,
    };
};
const deserializeAws_restJson1PipelinePauseStateSettings = (output, context) => {
    return {
        PipelineId: output.pipelineId !== undefined && output.pipelineId !== null ? output.pipelineId : undefined,
    };
};
const deserializeAws_restJson1RawSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1Rec601Settings = (output, context) => {
    return {};
};
const deserializeAws_restJson1Rec709Settings = (output, context) => {
    return {};
};
const deserializeAws_restJson1RemixSettings = (output, context) => {
    return {
        ChannelMappings: output.channelMappings !== undefined && output.channelMappings !== null
            ? deserializeAws_restJson1__listOfAudioChannelMapping(output.channelMappings, context)
            : undefined,
        ChannelsIn: output.channelsIn !== undefined && output.channelsIn !== null ? output.channelsIn : undefined,
        ChannelsOut: output.channelsOut !== undefined && output.channelsOut !== null ? output.channelsOut : undefined,
    };
};
const deserializeAws_restJson1Reservation = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Count: output.count !== undefined && output.count !== null ? output.count : undefined,
        CurrencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        DurationUnits: output.durationUnits !== undefined && output.durationUnits !== null ? output.durationUnits : undefined,
        End: output.end !== undefined && output.end !== null ? output.end : undefined,
        FixedPrice: output.fixedPrice !== undefined && output.fixedPrice !== null ? output.fixedPrice : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        OfferingDescription: output.offeringDescription !== undefined && output.offeringDescription !== null
            ? output.offeringDescription
            : undefined,
        OfferingId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
        OfferingType: output.offeringType !== undefined && output.offeringType !== null ? output.offeringType : undefined,
        Region: output.region !== undefined && output.region !== null ? output.region : undefined,
        ReservationId: output.reservationId !== undefined && output.reservationId !== null ? output.reservationId : undefined,
        ResourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ReservationResourceSpecification(output.resourceSpecification, context)
            : undefined,
        Start: output.start !== undefined && output.start !== null ? output.start : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        UsagePrice: output.usagePrice !== undefined && output.usagePrice !== null ? output.usagePrice : undefined,
    };
};
const deserializeAws_restJson1ReservationResourceSpecification = (output, context) => {
    return {
        ChannelClass: output.channelClass !== undefined && output.channelClass !== null ? output.channelClass : undefined,
        Codec: output.codec !== undefined && output.codec !== null ? output.codec : undefined,
        MaximumBitrate: output.maximumBitrate !== undefined && output.maximumBitrate !== null ? output.maximumBitrate : undefined,
        MaximumFramerate: output.maximumFramerate !== undefined && output.maximumFramerate !== null ? output.maximumFramerate : undefined,
        Resolution: output.resolution !== undefined && output.resolution !== null ? output.resolution : undefined,
        ResourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        SpecialFeature: output.specialFeature !== undefined && output.specialFeature !== null ? output.specialFeature : undefined,
        VideoQuality: output.videoQuality !== undefined && output.videoQuality !== null ? output.videoQuality : undefined,
    };
};
const deserializeAws_restJson1RtmpCaptionInfoDestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1RtmpGroupSettings = (output, context) => {
    return {
        AdMarkers: output.adMarkers !== undefined && output.adMarkers !== null
            ? deserializeAws_restJson1__listOfRtmpAdMarkers(output.adMarkers, context)
            : undefined,
        AuthenticationScheme: output.authenticationScheme !== undefined && output.authenticationScheme !== null
            ? output.authenticationScheme
            : undefined,
        CacheFullBehavior: output.cacheFullBehavior !== undefined && output.cacheFullBehavior !== null
            ? output.cacheFullBehavior
            : undefined,
        CacheLength: output.cacheLength !== undefined && output.cacheLength !== null ? output.cacheLength : undefined,
        CaptionData: output.captionData !== undefined && output.captionData !== null ? output.captionData : undefined,
        InputLossAction: output.inputLossAction !== undefined && output.inputLossAction !== null ? output.inputLossAction : undefined,
        RestartDelay: output.restartDelay !== undefined && output.restartDelay !== null ? output.restartDelay : undefined,
    };
};
const deserializeAws_restJson1RtmpOutputSettings = (output, context) => {
    return {
        CertificateMode: output.certificateMode !== undefined && output.certificateMode !== null ? output.certificateMode : undefined,
        ConnectionRetryInterval: output.connectionRetryInterval !== undefined && output.connectionRetryInterval !== null
            ? output.connectionRetryInterval
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
        NumRetries: output.numRetries !== undefined && output.numRetries !== null ? output.numRetries : undefined,
    };
};
const deserializeAws_restJson1ScheduleAction = (output, context) => {
    return {
        ActionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        ScheduleActionSettings: output.scheduleActionSettings !== undefined && output.scheduleActionSettings !== null
            ? deserializeAws_restJson1ScheduleActionSettings(output.scheduleActionSettings, context)
            : undefined,
        ScheduleActionStartSettings: output.scheduleActionStartSettings !== undefined && output.scheduleActionStartSettings !== null
            ? deserializeAws_restJson1ScheduleActionStartSettings(output.scheduleActionStartSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1ScheduleActionSettings = (output, context) => {
    return {
        HlsId3SegmentTaggingSettings: output.hlsId3SegmentTaggingSettings !== undefined && output.hlsId3SegmentTaggingSettings !== null
            ? deserializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings(output.hlsId3SegmentTaggingSettings, context)
            : undefined,
        HlsTimedMetadataSettings: output.hlsTimedMetadataSettings !== undefined && output.hlsTimedMetadataSettings !== null
            ? deserializeAws_restJson1HlsTimedMetadataScheduleActionSettings(output.hlsTimedMetadataSettings, context)
            : undefined,
        InputPrepareSettings: output.inputPrepareSettings !== undefined && output.inputPrepareSettings !== null
            ? deserializeAws_restJson1InputPrepareScheduleActionSettings(output.inputPrepareSettings, context)
            : undefined,
        InputSwitchSettings: output.inputSwitchSettings !== undefined && output.inputSwitchSettings !== null
            ? deserializeAws_restJson1InputSwitchScheduleActionSettings(output.inputSwitchSettings, context)
            : undefined,
        MotionGraphicsImageActivateSettings: output.motionGraphicsImageActivateSettings !== undefined && output.motionGraphicsImageActivateSettings !== null
            ? deserializeAws_restJson1MotionGraphicsActivateScheduleActionSettings(output.motionGraphicsImageActivateSettings, context)
            : undefined,
        MotionGraphicsImageDeactivateSettings: output.motionGraphicsImageDeactivateSettings !== undefined &&
            output.motionGraphicsImageDeactivateSettings !== null
            ? deserializeAws_restJson1MotionGraphicsDeactivateScheduleActionSettings(output.motionGraphicsImageDeactivateSettings, context)
            : undefined,
        PauseStateSettings: output.pauseStateSettings !== undefined && output.pauseStateSettings !== null
            ? deserializeAws_restJson1PauseStateScheduleActionSettings(output.pauseStateSettings, context)
            : undefined,
        Scte35ReturnToNetworkSettings: output.scte35ReturnToNetworkSettings !== undefined && output.scte35ReturnToNetworkSettings !== null
            ? deserializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings(output.scte35ReturnToNetworkSettings, context)
            : undefined,
        Scte35SpliceInsertSettings: output.scte35SpliceInsertSettings !== undefined && output.scte35SpliceInsertSettings !== null
            ? deserializeAws_restJson1Scte35SpliceInsertScheduleActionSettings(output.scte35SpliceInsertSettings, context)
            : undefined,
        Scte35TimeSignalSettings: output.scte35TimeSignalSettings !== undefined && output.scte35TimeSignalSettings !== null
            ? deserializeAws_restJson1Scte35TimeSignalScheduleActionSettings(output.scte35TimeSignalSettings, context)
            : undefined,
        StaticImageActivateSettings: output.staticImageActivateSettings !== undefined && output.staticImageActivateSettings !== null
            ? deserializeAws_restJson1StaticImageActivateScheduleActionSettings(output.staticImageActivateSettings, context)
            : undefined,
        StaticImageDeactivateSettings: output.staticImageDeactivateSettings !== undefined && output.staticImageDeactivateSettings !== null
            ? deserializeAws_restJson1StaticImageDeactivateScheduleActionSettings(output.staticImageDeactivateSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1ScheduleActionStartSettings = (output, context) => {
    return {
        FixedModeScheduleActionStartSettings: output.fixedModeScheduleActionStartSettings !== undefined && output.fixedModeScheduleActionStartSettings !== null
            ? deserializeAws_restJson1FixedModeScheduleActionStartSettings(output.fixedModeScheduleActionStartSettings, context)
            : undefined,
        FollowModeScheduleActionStartSettings: output.followModeScheduleActionStartSettings !== undefined &&
            output.followModeScheduleActionStartSettings !== null
            ? deserializeAws_restJson1FollowModeScheduleActionStartSettings(output.followModeScheduleActionStartSettings, context)
            : undefined,
        ImmediateModeScheduleActionStartSettings: output.immediateModeScheduleActionStartSettings !== undefined &&
            output.immediateModeScheduleActionStartSettings !== null
            ? deserializeAws_restJson1ImmediateModeScheduleActionStartSettings(output.immediateModeScheduleActionStartSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1Scte20PlusEmbeddedDestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1Scte20SourceSettings = (output, context) => {
    return {
        Convert608To708: output.convert608To708 !== undefined && output.convert608To708 !== null ? output.convert608To708 : undefined,
        Source608ChannelNumber: output.source608ChannelNumber !== undefined && output.source608ChannelNumber !== null
            ? output.source608ChannelNumber
            : undefined,
    };
};
const deserializeAws_restJson1Scte27DestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1Scte27SourceSettings = (output, context) => {
    return {
        Pid: output.pid !== undefined && output.pid !== null ? output.pid : undefined,
    };
};
const deserializeAws_restJson1Scte35DeliveryRestrictions = (output, context) => {
    return {
        ArchiveAllowedFlag: output.archiveAllowedFlag !== undefined && output.archiveAllowedFlag !== null
            ? output.archiveAllowedFlag
            : undefined,
        DeviceRestrictions: output.deviceRestrictions !== undefined && output.deviceRestrictions !== null
            ? output.deviceRestrictions
            : undefined,
        NoRegionalBlackoutFlag: output.noRegionalBlackoutFlag !== undefined && output.noRegionalBlackoutFlag !== null
            ? output.noRegionalBlackoutFlag
            : undefined,
        WebDeliveryAllowedFlag: output.webDeliveryAllowedFlag !== undefined && output.webDeliveryAllowedFlag !== null
            ? output.webDeliveryAllowedFlag
            : undefined,
    };
};
const deserializeAws_restJson1Scte35Descriptor = (output, context) => {
    return {
        Scte35DescriptorSettings: output.scte35DescriptorSettings !== undefined && output.scte35DescriptorSettings !== null
            ? deserializeAws_restJson1Scte35DescriptorSettings(output.scte35DescriptorSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1Scte35DescriptorSettings = (output, context) => {
    return {
        SegmentationDescriptorScte35DescriptorSettings: output.segmentationDescriptorScte35DescriptorSettings !== undefined &&
            output.segmentationDescriptorScte35DescriptorSettings !== null
            ? deserializeAws_restJson1Scte35SegmentationDescriptor(output.segmentationDescriptorScte35DescriptorSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings = (output, context) => {
    return {
        SpliceEventId: output.spliceEventId !== undefined && output.spliceEventId !== null ? output.spliceEventId : undefined,
    };
};
const deserializeAws_restJson1Scte35SegmentationDescriptor = (output, context) => {
    return {
        DeliveryRestrictions: output.deliveryRestrictions !== undefined && output.deliveryRestrictions !== null
            ? deserializeAws_restJson1Scte35DeliveryRestrictions(output.deliveryRestrictions, context)
            : undefined,
        SegmentNum: output.segmentNum !== undefined && output.segmentNum !== null ? output.segmentNum : undefined,
        SegmentationCancelIndicator: output.segmentationCancelIndicator !== undefined && output.segmentationCancelIndicator !== null
            ? output.segmentationCancelIndicator
            : undefined,
        SegmentationDuration: output.segmentationDuration !== undefined && output.segmentationDuration !== null
            ? output.segmentationDuration
            : undefined,
        SegmentationEventId: output.segmentationEventId !== undefined && output.segmentationEventId !== null
            ? output.segmentationEventId
            : undefined,
        SegmentationTypeId: output.segmentationTypeId !== undefined && output.segmentationTypeId !== null
            ? output.segmentationTypeId
            : undefined,
        SegmentationUpid: output.segmentationUpid !== undefined && output.segmentationUpid !== null ? output.segmentationUpid : undefined,
        SegmentationUpidType: output.segmentationUpidType !== undefined && output.segmentationUpidType !== null
            ? output.segmentationUpidType
            : undefined,
        SegmentsExpected: output.segmentsExpected !== undefined && output.segmentsExpected !== null ? output.segmentsExpected : undefined,
        SubSegmentNum: output.subSegmentNum !== undefined && output.subSegmentNum !== null ? output.subSegmentNum : undefined,
        SubSegmentsExpected: output.subSegmentsExpected !== undefined && output.subSegmentsExpected !== null
            ? output.subSegmentsExpected
            : undefined,
    };
};
const deserializeAws_restJson1Scte35SpliceInsert = (output, context) => {
    return {
        AdAvailOffset: output.adAvailOffset !== undefined && output.adAvailOffset !== null ? output.adAvailOffset : undefined,
        NoRegionalBlackoutFlag: output.noRegionalBlackoutFlag !== undefined && output.noRegionalBlackoutFlag !== null
            ? output.noRegionalBlackoutFlag
            : undefined,
        WebDeliveryAllowedFlag: output.webDeliveryAllowedFlag !== undefined && output.webDeliveryAllowedFlag !== null
            ? output.webDeliveryAllowedFlag
            : undefined,
    };
};
const deserializeAws_restJson1Scte35SpliceInsertScheduleActionSettings = (output, context) => {
    return {
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        SpliceEventId: output.spliceEventId !== undefined && output.spliceEventId !== null ? output.spliceEventId : undefined,
    };
};
const deserializeAws_restJson1Scte35TimeSignalApos = (output, context) => {
    return {
        AdAvailOffset: output.adAvailOffset !== undefined && output.adAvailOffset !== null ? output.adAvailOffset : undefined,
        NoRegionalBlackoutFlag: output.noRegionalBlackoutFlag !== undefined && output.noRegionalBlackoutFlag !== null
            ? output.noRegionalBlackoutFlag
            : undefined,
        WebDeliveryAllowedFlag: output.webDeliveryAllowedFlag !== undefined && output.webDeliveryAllowedFlag !== null
            ? output.webDeliveryAllowedFlag
            : undefined,
    };
};
const deserializeAws_restJson1Scte35TimeSignalScheduleActionSettings = (output, context) => {
    return {
        Scte35Descriptors: output.scte35Descriptors !== undefined && output.scte35Descriptors !== null
            ? deserializeAws_restJson1__listOfScte35Descriptor(output.scte35Descriptors, context)
            : undefined,
    };
};
const deserializeAws_restJson1SmpteTtDestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1StandardHlsSettings = (output, context) => {
    return {
        AudioRenditionSets: output.audioRenditionSets !== undefined && output.audioRenditionSets !== null
            ? output.audioRenditionSets
            : undefined,
        M3u8Settings: output.m3u8Settings !== undefined && output.m3u8Settings !== null
            ? deserializeAws_restJson1M3u8Settings(output.m3u8Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1StartTimecode = (output, context) => {
    return {
        Timecode: output.timecode !== undefined && output.timecode !== null ? output.timecode : undefined,
    };
};
const deserializeAws_restJson1StaticImageActivateScheduleActionSettings = (output, context) => {
    return {
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        FadeIn: output.fadeIn !== undefined && output.fadeIn !== null ? output.fadeIn : undefined,
        FadeOut: output.fadeOut !== undefined && output.fadeOut !== null ? output.fadeOut : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        Image: output.image !== undefined && output.image !== null
            ? deserializeAws_restJson1InputLocation(output.image, context)
            : undefined,
        ImageX: output.imageX !== undefined && output.imageX !== null ? output.imageX : undefined,
        ImageY: output.imageY !== undefined && output.imageY !== null ? output.imageY : undefined,
        Layer: output.layer !== undefined && output.layer !== null ? output.layer : undefined,
        Opacity: output.opacity !== undefined && output.opacity !== null ? output.opacity : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
const deserializeAws_restJson1StaticImageDeactivateScheduleActionSettings = (output, context) => {
    return {
        FadeOut: output.fadeOut !== undefined && output.fadeOut !== null ? output.fadeOut : undefined,
        Layer: output.layer !== undefined && output.layer !== null ? output.layer : undefined,
    };
};
const deserializeAws_restJson1StaticKeySettings = (output, context) => {
    return {
        KeyProviderServer: output.keyProviderServer !== undefined && output.keyProviderServer !== null
            ? deserializeAws_restJson1InputLocation(output.keyProviderServer, context)
            : undefined,
        StaticKeyValue: output.staticKeyValue !== undefined && output.staticKeyValue !== null ? output.staticKeyValue : undefined,
    };
};
const deserializeAws_restJson1StopTimecode = (output, context) => {
    return {
        LastFrameClippingBehavior: output.lastFrameClippingBehavior !== undefined && output.lastFrameClippingBehavior !== null
            ? output.lastFrameClippingBehavior
            : undefined,
        Timecode: output.timecode !== undefined && output.timecode !== null ? output.timecode : undefined,
    };
};
const deserializeAws_restJson1Tags = (output, context) => {
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
const deserializeAws_restJson1TeletextDestinationSettings = (output, context) => {
    return {};
};
const deserializeAws_restJson1TeletextSourceSettings = (output, context) => {
    return {
        OutputRectangle: output.outputRectangle !== undefined && output.outputRectangle !== null
            ? deserializeAws_restJson1CaptionRectangle(output.outputRectangle, context)
            : undefined,
        PageNumber: output.pageNumber !== undefined && output.pageNumber !== null ? output.pageNumber : undefined,
    };
};
const deserializeAws_restJson1TemporalFilterSettings = (output, context) => {
    return {
        PostFilterSharpening: output.postFilterSharpening !== undefined && output.postFilterSharpening !== null
            ? output.postFilterSharpening
            : undefined,
        Strength: output.strength !== undefined && output.strength !== null ? output.strength : undefined,
    };
};
const deserializeAws_restJson1TimecodeConfig = (output, context) => {
    return {
        Source: output.source !== undefined && output.source !== null ? output.source : undefined,
        SyncThreshold: output.syncThreshold !== undefined && output.syncThreshold !== null ? output.syncThreshold : undefined,
    };
};
const deserializeAws_restJson1TransferringInputDeviceSummary = (output, context) => {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Message: output.message !== undefined && output.message !== null ? output.message : undefined,
        TargetCustomerId: output.targetCustomerId !== undefined && output.targetCustomerId !== null ? output.targetCustomerId : undefined,
        TransferType: output.transferType !== undefined && output.transferType !== null ? output.transferType : undefined,
    };
};
const deserializeAws_restJson1TtmlDestinationSettings = (output, context) => {
    return {
        StyleControl: output.styleControl !== undefined && output.styleControl !== null ? output.styleControl : undefined,
    };
};
const deserializeAws_restJson1UdpContainerSettings = (output, context) => {
    return {
        M2tsSettings: output.m2tsSettings !== undefined && output.m2tsSettings !== null
            ? deserializeAws_restJson1M2tsSettings(output.m2tsSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1UdpGroupSettings = (output, context) => {
    return {
        InputLossAction: output.inputLossAction !== undefined && output.inputLossAction !== null ? output.inputLossAction : undefined,
        TimedMetadataId3Frame: output.timedMetadataId3Frame !== undefined && output.timedMetadataId3Frame !== null
            ? output.timedMetadataId3Frame
            : undefined,
        TimedMetadataId3Period: output.timedMetadataId3Period !== undefined && output.timedMetadataId3Period !== null
            ? output.timedMetadataId3Period
            : undefined,
    };
};
const deserializeAws_restJson1UdpOutputSettings = (output, context) => {
    return {
        BufferMsec: output.bufferMsec !== undefined && output.bufferMsec !== null ? output.bufferMsec : undefined,
        ContainerSettings: output.containerSettings !== undefined && output.containerSettings !== null
            ? deserializeAws_restJson1UdpContainerSettings(output.containerSettings, context)
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
            : undefined,
        FecOutputSettings: output.fecOutputSettings !== undefined && output.fecOutputSettings !== null
            ? deserializeAws_restJson1FecOutputSettings(output.fecOutputSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1ValidationError = (output, context) => {
    return {
        ElementPath: output.elementPath !== undefined && output.elementPath !== null ? output.elementPath : undefined,
        ErrorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
const deserializeAws_restJson1VideoBlackFailoverSettings = (output, context) => {
    return {
        BlackDetectThreshold: output.blackDetectThreshold !== undefined && output.blackDetectThreshold !== null
            ? output.blackDetectThreshold
            : undefined,
        VideoBlackThresholdMsec: output.videoBlackThresholdMsec !== undefined && output.videoBlackThresholdMsec !== null
            ? output.videoBlackThresholdMsec
            : undefined,
    };
};
const deserializeAws_restJson1VideoCodecSettings = (output, context) => {
    return {
        FrameCaptureSettings: output.frameCaptureSettings !== undefined && output.frameCaptureSettings !== null
            ? deserializeAws_restJson1FrameCaptureSettings(output.frameCaptureSettings, context)
            : undefined,
        H264Settings: output.h264Settings !== undefined && output.h264Settings !== null
            ? deserializeAws_restJson1H264Settings(output.h264Settings, context)
            : undefined,
        H265Settings: output.h265Settings !== undefined && output.h265Settings !== null
            ? deserializeAws_restJson1H265Settings(output.h265Settings, context)
            : undefined,
        Mpeg2Settings: output.mpeg2Settings !== undefined && output.mpeg2Settings !== null
            ? deserializeAws_restJson1Mpeg2Settings(output.mpeg2Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1VideoDescription = (output, context) => {
    return {
        CodecSettings: output.codecSettings !== undefined && output.codecSettings !== null
            ? deserializeAws_restJson1VideoCodecSettings(output.codecSettings, context)
            : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        RespondToAfd: output.respondToAfd !== undefined && output.respondToAfd !== null ? output.respondToAfd : undefined,
        ScalingBehavior: output.scalingBehavior !== undefined && output.scalingBehavior !== null ? output.scalingBehavior : undefined,
        Sharpness: output.sharpness !== undefined && output.sharpness !== null ? output.sharpness : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
const deserializeAws_restJson1VideoSelector = (output, context) => {
    return {
        ColorSpace: output.colorSpace !== undefined && output.colorSpace !== null ? output.colorSpace : undefined,
        ColorSpaceSettings: output.colorSpaceSettings !== undefined && output.colorSpaceSettings !== null
            ? deserializeAws_restJson1VideoSelectorColorSpaceSettings(output.colorSpaceSettings, context)
            : undefined,
        ColorSpaceUsage: output.colorSpaceUsage !== undefined && output.colorSpaceUsage !== null ? output.colorSpaceUsage : undefined,
        SelectorSettings: output.selectorSettings !== undefined && output.selectorSettings !== null
            ? deserializeAws_restJson1VideoSelectorSettings(output.selectorSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1VideoSelectorColorSpaceSettings = (output, context) => {
    return {
        Hdr10Settings: output.hdr10Settings !== undefined && output.hdr10Settings !== null
            ? deserializeAws_restJson1Hdr10Settings(output.hdr10Settings, context)
            : undefined,
    };
};
const deserializeAws_restJson1VideoSelectorPid = (output, context) => {
    return {
        Pid: output.pid !== undefined && output.pid !== null ? output.pid : undefined,
    };
};
const deserializeAws_restJson1VideoSelectorProgramId = (output, context) => {
    return {
        ProgramId: output.programId !== undefined && output.programId !== null ? output.programId : undefined,
    };
};
const deserializeAws_restJson1VideoSelectorSettings = (output, context) => {
    return {
        VideoSelectorPid: output.videoSelectorPid !== undefined && output.videoSelectorPid !== null
            ? deserializeAws_restJson1VideoSelectorPid(output.videoSelectorPid, context)
            : undefined,
        VideoSelectorProgramId: output.videoSelectorProgramId !== undefined && output.videoSelectorProgramId !== null
            ? deserializeAws_restJson1VideoSelectorProgramId(output.videoSelectorProgramId, context)
            : undefined,
    };
};
const deserializeAws_restJson1VpcOutputSettingsDescription = (output, context) => {
    return {
        AvailabilityZones: output.availabilityZones !== undefined && output.availabilityZones !== null
            ? deserializeAws_restJson1__listOf__string(output.availabilityZones, context)
            : undefined,
        NetworkInterfaceIds: output.networkInterfaceIds !== undefined && output.networkInterfaceIds !== null
            ? deserializeAws_restJson1__listOf__string(output.networkInterfaceIds, context)
            : undefined,
        SecurityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_restJson1__listOf__string(output.securityGroupIds, context)
            : undefined,
        SubnetIds: output.subnetIds !== undefined && output.subnetIds !== null
            ? deserializeAws_restJson1__listOf__string(output.subnetIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1WavSettings = (output, context) => {
    return {
        BitDepth: output.bitDepth !== undefined && output.bitDepth !== null ? output.bitDepth : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
const deserializeAws_restJson1WebvttDestinationSettings = (output, context) => {
    return {};
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
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
//# sourceMappingURL=Aws_restJson1.js.map