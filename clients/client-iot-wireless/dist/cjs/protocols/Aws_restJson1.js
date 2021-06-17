"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SendDataToWirelessDeviceCommand = exports.serializeAws_restJson1ResetResourceLogLevelCommand = exports.serializeAws_restJson1ResetAllResourceLogLevelsCommand = exports.serializeAws_restJson1PutResourceLogLevelCommand = exports.serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = exports.serializeAws_restJson1ListWirelessGatewaysCommand = exports.serializeAws_restJson1ListWirelessDevicesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListServiceProfilesCommand = exports.serializeAws_restJson1ListPartnerAccountsCommand = exports.serializeAws_restJson1ListDeviceProfilesCommand = exports.serializeAws_restJson1ListDestinationsCommand = exports.serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = exports.serializeAws_restJson1GetWirelessGatewayTaskCommand = exports.serializeAws_restJson1GetWirelessGatewayStatisticsCommand = exports.serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = exports.serializeAws_restJson1GetWirelessGatewayCertificateCommand = exports.serializeAws_restJson1GetWirelessGatewayCommand = exports.serializeAws_restJson1GetWirelessDeviceStatisticsCommand = exports.serializeAws_restJson1GetWirelessDeviceCommand = exports.serializeAws_restJson1GetServiceProfileCommand = exports.serializeAws_restJson1GetServiceEndpointCommand = exports.serializeAws_restJson1GetResourceLogLevelCommand = exports.serializeAws_restJson1GetPartnerAccountCommand = exports.serializeAws_restJson1GetLogLevelsByResourceTypesCommand = exports.serializeAws_restJson1GetDeviceProfileCommand = exports.serializeAws_restJson1GetDestinationCommand = exports.serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = exports.serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = exports.serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = exports.serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = exports.serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = exports.serializeAws_restJson1DeleteWirelessGatewayTaskCommand = exports.serializeAws_restJson1DeleteWirelessGatewayCommand = exports.serializeAws_restJson1DeleteWirelessDeviceCommand = exports.serializeAws_restJson1DeleteServiceProfileCommand = exports.serializeAws_restJson1DeleteDeviceProfileCommand = exports.serializeAws_restJson1DeleteDestinationCommand = exports.serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = exports.serializeAws_restJson1CreateWirelessGatewayTaskCommand = exports.serializeAws_restJson1CreateWirelessGatewayCommand = exports.serializeAws_restJson1CreateWirelessDeviceCommand = exports.serializeAws_restJson1CreateServiceProfileCommand = exports.serializeAws_restJson1CreateDeviceProfileCommand = exports.serializeAws_restJson1CreateDestinationCommand = exports.serializeAws_restJson1AssociateWirelessGatewayWithThingCommand = exports.serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = exports.serializeAws_restJson1AssociateWirelessDeviceWithThingCommand = exports.serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = void 0;
exports.deserializeAws_restJson1ListWirelessDevicesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListServiceProfilesCommand = exports.deserializeAws_restJson1ListPartnerAccountsCommand = exports.deserializeAws_restJson1ListDeviceProfilesCommand = exports.deserializeAws_restJson1ListDestinationsCommand = exports.deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = exports.deserializeAws_restJson1GetWirelessGatewayTaskCommand = exports.deserializeAws_restJson1GetWirelessGatewayStatisticsCommand = exports.deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = exports.deserializeAws_restJson1GetWirelessGatewayCertificateCommand = exports.deserializeAws_restJson1GetWirelessGatewayCommand = exports.deserializeAws_restJson1GetWirelessDeviceStatisticsCommand = exports.deserializeAws_restJson1GetWirelessDeviceCommand = exports.deserializeAws_restJson1GetServiceProfileCommand = exports.deserializeAws_restJson1GetServiceEndpointCommand = exports.deserializeAws_restJson1GetResourceLogLevelCommand = exports.deserializeAws_restJson1GetPartnerAccountCommand = exports.deserializeAws_restJson1GetLogLevelsByResourceTypesCommand = exports.deserializeAws_restJson1GetDeviceProfileCommand = exports.deserializeAws_restJson1GetDestinationCommand = exports.deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = exports.deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = exports.deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = exports.deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = exports.deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = exports.deserializeAws_restJson1DeleteWirelessGatewayTaskCommand = exports.deserializeAws_restJson1DeleteWirelessGatewayCommand = exports.deserializeAws_restJson1DeleteWirelessDeviceCommand = exports.deserializeAws_restJson1DeleteServiceProfileCommand = exports.deserializeAws_restJson1DeleteDeviceProfileCommand = exports.deserializeAws_restJson1DeleteDestinationCommand = exports.deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = exports.deserializeAws_restJson1CreateWirelessGatewayTaskCommand = exports.deserializeAws_restJson1CreateWirelessGatewayCommand = exports.deserializeAws_restJson1CreateWirelessDeviceCommand = exports.deserializeAws_restJson1CreateServiceProfileCommand = exports.deserializeAws_restJson1CreateDeviceProfileCommand = exports.deserializeAws_restJson1CreateDestinationCommand = exports.deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand = exports.deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = exports.deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand = exports.deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = exports.serializeAws_restJson1UpdateWirelessGatewayCommand = exports.serializeAws_restJson1UpdateWirelessDeviceCommand = exports.serializeAws_restJson1UpdatePartnerAccountCommand = exports.serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = exports.serializeAws_restJson1UpdateDestinationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TestWirelessDeviceCommand = void 0;
exports.deserializeAws_restJson1UpdateWirelessGatewayCommand = exports.deserializeAws_restJson1UpdateWirelessDeviceCommand = exports.deserializeAws_restJson1UpdatePartnerAccountCommand = exports.deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = exports.deserializeAws_restJson1UpdateDestinationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TestWirelessDeviceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SendDataToWirelessDeviceCommand = exports.deserializeAws_restJson1ResetResourceLogLevelCommand = exports.deserializeAws_restJson1ResetAllResourceLogLevelsCommand = exports.deserializeAws_restJson1PutResourceLogLevelCommand = exports.deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = exports.deserializeAws_restJson1ListWirelessGatewaysCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/partner-accounts";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Sidewalk !== undefined &&
            input.Sidewalk !== null && { Sidewalk: serializeAws_restJson1SidewalkAccountInfo(input.Sidewalk, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand;
const serializeAws_restJson1AssociateWirelessDeviceWithThingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-devices/{Id}/thing";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ThingArn !== undefined && input.ThingArn !== null && { ThingArn: input.ThingArn }),
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
exports.serializeAws_restJson1AssociateWirelessDeviceWithThingCommand = serializeAws_restJson1AssociateWirelessDeviceWithThingCommand;
const serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-gateways/{Id}/certificate";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.IotCertificateId !== undefined &&
            input.IotCertificateId !== null && { IotCertificateId: input.IotCertificateId }),
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
exports.serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand;
const serializeAws_restJson1AssociateWirelessGatewayWithThingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-gateways/{Id}/thing";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ThingArn !== undefined && input.ThingArn !== null && { ThingArn: input.ThingArn }),
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
exports.serializeAws_restJson1AssociateWirelessGatewayWithThingCommand = serializeAws_restJson1AssociateWirelessGatewayWithThingCommand;
const serializeAws_restJson1CreateDestinationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/destinations";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.ExpressionType !== undefined &&
            input.ExpressionType !== null && { ExpressionType: input.ExpressionType }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateDestinationCommand = serializeAws_restJson1CreateDestinationCommand;
const serializeAws_restJson1CreateDeviceProfileCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/device-profiles";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && { LoRaWAN: serializeAws_restJson1LoRaWANDeviceProfile(input.LoRaWAN, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateDeviceProfileCommand = serializeAws_restJson1CreateDeviceProfileCommand;
const serializeAws_restJson1CreateServiceProfileCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/service-profiles";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && { LoRaWAN: serializeAws_restJson1LoRaWANServiceProfile(input.LoRaWAN, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateServiceProfileCommand = serializeAws_restJson1CreateServiceProfileCommand;
const serializeAws_restJson1CreateWirelessDeviceCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-devices";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DestinationName !== undefined &&
            input.DestinationName !== null && { DestinationName: input.DestinationName }),
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && { LoRaWAN: serializeAws_restJson1LoRaWANDevice(input.LoRaWAN, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
exports.serializeAws_restJson1CreateWirelessDeviceCommand = serializeAws_restJson1CreateWirelessDeviceCommand;
const serializeAws_restJson1CreateWirelessGatewayCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-gateways";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && { LoRaWAN: serializeAws_restJson1LoRaWANGateway(input.LoRaWAN, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateWirelessGatewayCommand = serializeAws_restJson1CreateWirelessGatewayCommand;
const serializeAws_restJson1CreateWirelessGatewayTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-gateways/{Id}/tasks";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.WirelessGatewayTaskDefinitionId !== undefined &&
            input.WirelessGatewayTaskDefinitionId !== null && {
            WirelessGatewayTaskDefinitionId: input.WirelessGatewayTaskDefinitionId,
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
exports.serializeAws_restJson1CreateWirelessGatewayTaskCommand = serializeAws_restJson1CreateWirelessGatewayTaskCommand;
const serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-gateway-task-definitions";
    let body;
    body = JSON.stringify({
        ...(input.AutoCreateTasks !== undefined &&
            input.AutoCreateTasks !== null && { AutoCreateTasks: input.AutoCreateTasks }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.Update !== undefined &&
            input.Update !== null && {
            Update: serializeAws_restJson1UpdateWirelessGatewayTaskCreate(input.Update, context),
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
exports.serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand;
const serializeAws_restJson1DeleteDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/destinations/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1DeleteDestinationCommand = serializeAws_restJson1DeleteDestinationCommand;
const serializeAws_restJson1DeleteDeviceProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/device-profiles/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteDeviceProfileCommand = serializeAws_restJson1DeleteDeviceProfileCommand;
const serializeAws_restJson1DeleteServiceProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/service-profiles/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteServiceProfileCommand = serializeAws_restJson1DeleteServiceProfileCommand;
const serializeAws_restJson1DeleteWirelessDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-devices/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteWirelessDeviceCommand = serializeAws_restJson1DeleteWirelessDeviceCommand;
const serializeAws_restJson1DeleteWirelessGatewayCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteWirelessGatewayCommand = serializeAws_restJson1DeleteWirelessGatewayCommand;
const serializeAws_restJson1DeleteWirelessGatewayTaskCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}/tasks";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteWirelessGatewayTaskCommand = serializeAws_restJson1DeleteWirelessGatewayTaskCommand;
const serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateway-task-definitions/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand;
const serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/partner-accounts/{PartnerAccountId}";
    if (input.PartnerAccountId !== undefined) {
        const labelValue = input.PartnerAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PartnerAccountId.");
        }
        resolvedPath = resolvedPath.replace("{PartnerAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PartnerAccountId.");
    }
    const query = {
        ...(input.PartnerType !== undefined && { partnerType: input.PartnerType }),
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
exports.serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand;
const serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-devices/{Id}/thing";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand;
const serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}/certificate";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand;
const serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}/thing";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand;
const serializeAws_restJson1GetDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/destinations/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1GetDestinationCommand = serializeAws_restJson1GetDestinationCommand;
const serializeAws_restJson1GetDeviceProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/device-profiles/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1GetDeviceProfileCommand = serializeAws_restJson1GetDeviceProfileCommand;
const serializeAws_restJson1GetLogLevelsByResourceTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/log-levels";
    let body;
    body = "";
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
exports.serializeAws_restJson1GetLogLevelsByResourceTypesCommand = serializeAws_restJson1GetLogLevelsByResourceTypesCommand;
const serializeAws_restJson1GetPartnerAccountCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/partner-accounts/{PartnerAccountId}";
    if (input.PartnerAccountId !== undefined) {
        const labelValue = input.PartnerAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PartnerAccountId.");
        }
        resolvedPath = resolvedPath.replace("{PartnerAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PartnerAccountId.");
    }
    const query = {
        ...(input.PartnerType !== undefined && { partnerType: input.PartnerType }),
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
exports.serializeAws_restJson1GetPartnerAccountCommand = serializeAws_restJson1GetPartnerAccountCommand;
const serializeAws_restJson1GetResourceLogLevelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/log-levels/{ResourceIdentifier}";
    if (input.ResourceIdentifier !== undefined) {
        const labelValue = input.ResourceIdentifier;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceIdentifier.");
        }
        resolvedPath = resolvedPath.replace("{ResourceIdentifier}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceIdentifier.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
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
exports.serializeAws_restJson1GetResourceLogLevelCommand = serializeAws_restJson1GetResourceLogLevelCommand;
const serializeAws_restJson1GetServiceEndpointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/service-endpoint";
    const query = {
        ...(input.ServiceType !== undefined && { serviceType: input.ServiceType }),
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
exports.serializeAws_restJson1GetServiceEndpointCommand = serializeAws_restJson1GetServiceEndpointCommand;
const serializeAws_restJson1GetServiceProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/service-profiles/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1GetServiceProfileCommand = serializeAws_restJson1GetServiceProfileCommand;
const serializeAws_restJson1GetWirelessDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-devices/{Identifier}";
    if (input.Identifier !== undefined) {
        const labelValue = input.Identifier;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Identifier.");
        }
        resolvedPath = resolvedPath.replace("{Identifier}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Identifier.");
    }
    const query = {
        ...(input.IdentifierType !== undefined && { identifierType: input.IdentifierType }),
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
exports.serializeAws_restJson1GetWirelessDeviceCommand = serializeAws_restJson1GetWirelessDeviceCommand;
const serializeAws_restJson1GetWirelessDeviceStatisticsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-devices/{WirelessDeviceId}/statistics";
    if (input.WirelessDeviceId !== undefined) {
        const labelValue = input.WirelessDeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WirelessDeviceId.");
        }
        resolvedPath = resolvedPath.replace("{WirelessDeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WirelessDeviceId.");
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
exports.serializeAws_restJson1GetWirelessDeviceStatisticsCommand = serializeAws_restJson1GetWirelessDeviceStatisticsCommand;
const serializeAws_restJson1GetWirelessGatewayCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Identifier}";
    if (input.Identifier !== undefined) {
        const labelValue = input.Identifier;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Identifier.");
        }
        resolvedPath = resolvedPath.replace("{Identifier}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Identifier.");
    }
    const query = {
        ...(input.IdentifierType !== undefined && { identifierType: input.IdentifierType }),
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
exports.serializeAws_restJson1GetWirelessGatewayCommand = serializeAws_restJson1GetWirelessGatewayCommand;
const serializeAws_restJson1GetWirelessGatewayCertificateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}/certificate";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1GetWirelessGatewayCertificateCommand = serializeAws_restJson1GetWirelessGatewayCertificateCommand;
const serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}/firmware-information";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand;
const serializeAws_restJson1GetWirelessGatewayStatisticsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{WirelessGatewayId}/statistics";
    if (input.WirelessGatewayId !== undefined) {
        const labelValue = input.WirelessGatewayId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WirelessGatewayId.");
        }
        resolvedPath = resolvedPath.replace("{WirelessGatewayId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WirelessGatewayId.");
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
exports.serializeAws_restJson1GetWirelessGatewayStatisticsCommand = serializeAws_restJson1GetWirelessGatewayStatisticsCommand;
const serializeAws_restJson1GetWirelessGatewayTaskCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways/{Id}/tasks";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1GetWirelessGatewayTaskCommand = serializeAws_restJson1GetWirelessGatewayTaskCommand;
const serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateway-task-definitions/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand;
const serializeAws_restJson1ListDestinationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/destinations";
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
exports.serializeAws_restJson1ListDestinationsCommand = serializeAws_restJson1ListDestinationsCommand;
const serializeAws_restJson1ListDeviceProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/device-profiles";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListDeviceProfilesCommand = serializeAws_restJson1ListDeviceProfilesCommand;
const serializeAws_restJson1ListPartnerAccountsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/partner-accounts";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListPartnerAccountsCommand = serializeAws_restJson1ListPartnerAccountsCommand;
const serializeAws_restJson1ListServiceProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/service-profiles";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListServiceProfilesCommand = serializeAws_restJson1ListServiceProfilesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags";
    const query = {
        ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListWirelessDevicesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-devices";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.DestinationName !== undefined && { destinationName: input.DestinationName }),
        ...(input.DeviceProfileId !== undefined && { deviceProfileId: input.DeviceProfileId }),
        ...(input.ServiceProfileId !== undefined && { serviceProfileId: input.ServiceProfileId }),
        ...(input.WirelessDeviceType !== undefined && { wirelessDeviceType: input.WirelessDeviceType }),
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
exports.serializeAws_restJson1ListWirelessDevicesCommand = serializeAws_restJson1ListWirelessDevicesCommand;
const serializeAws_restJson1ListWirelessGatewaysCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateways";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListWirelessGatewaysCommand = serializeAws_restJson1ListWirelessGatewaysCommand;
const serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-gateway-task-definitions";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.TaskDefinitionType !== undefined && { taskDefinitionType: input.TaskDefinitionType }),
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
exports.serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand;
const serializeAws_restJson1PutResourceLogLevelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/log-levels/{ResourceIdentifier}";
    if (input.ResourceIdentifier !== undefined) {
        const labelValue = input.ResourceIdentifier;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceIdentifier.");
        }
        resolvedPath = resolvedPath.replace("{ResourceIdentifier}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceIdentifier.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
    };
    let body;
    body = JSON.stringify({
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1PutResourceLogLevelCommand = serializeAws_restJson1PutResourceLogLevelCommand;
const serializeAws_restJson1ResetAllResourceLogLevelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/log-levels";
    let body;
    body = "";
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
exports.serializeAws_restJson1ResetAllResourceLogLevelsCommand = serializeAws_restJson1ResetAllResourceLogLevelsCommand;
const serializeAws_restJson1ResetResourceLogLevelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/log-levels/{ResourceIdentifier}";
    if (input.ResourceIdentifier !== undefined) {
        const labelValue = input.ResourceIdentifier;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceIdentifier.");
        }
        resolvedPath = resolvedPath.replace("{ResourceIdentifier}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceIdentifier.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
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
exports.serializeAws_restJson1ResetResourceLogLevelCommand = serializeAws_restJson1ResetResourceLogLevelCommand;
const serializeAws_restJson1SendDataToWirelessDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-devices/{Id}/data";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.PayloadData !== undefined && input.PayloadData !== null && { PayloadData: input.PayloadData }),
        ...(input.TransmitMode !== undefined && input.TransmitMode !== null && { TransmitMode: input.TransmitMode }),
        ...(input.WirelessMetadata !== undefined &&
            input.WirelessMetadata !== null && {
            WirelessMetadata: serializeAws_restJson1WirelessMetadata(input.WirelessMetadata, context),
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
exports.serializeAws_restJson1SendDataToWirelessDeviceCommand = serializeAws_restJson1SendDataToWirelessDeviceCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags";
    const query = {
        ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1TestWirelessDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/wireless-devices/{Id}/test";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1TestWirelessDeviceCommand = serializeAws_restJson1TestWirelessDeviceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags";
    const query = {
        ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/destinations/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.ExpressionType !== undefined &&
            input.ExpressionType !== null && { ExpressionType: input.ExpressionType }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDestinationCommand = serializeAws_restJson1UpdateDestinationCommand;
const serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/log-levels";
    let body;
    body = JSON.stringify({
        ...(input.DefaultLogLevel !== undefined &&
            input.DefaultLogLevel !== null && { DefaultLogLevel: input.DefaultLogLevel }),
        ...(input.WirelessDeviceLogOptions !== undefined &&
            input.WirelessDeviceLogOptions !== null && {
            WirelessDeviceLogOptions: serializeAws_restJson1WirelessDeviceLogOptionList(input.WirelessDeviceLogOptions, context),
        }),
        ...(input.WirelessGatewayLogOptions !== undefined &&
            input.WirelessGatewayLogOptions !== null && {
            WirelessGatewayLogOptions: serializeAws_restJson1WirelessGatewayLogOptionList(input.WirelessGatewayLogOptions, context),
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
exports.serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand;
const serializeAws_restJson1UpdatePartnerAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/partner-accounts/{PartnerAccountId}";
    if (input.PartnerAccountId !== undefined) {
        const labelValue = input.PartnerAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PartnerAccountId.");
        }
        resolvedPath = resolvedPath.replace("{PartnerAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PartnerAccountId.");
    }
    const query = {
        ...(input.PartnerType !== undefined && { partnerType: input.PartnerType }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Sidewalk !== undefined &&
            input.Sidewalk !== null && { Sidewalk: serializeAws_restJson1SidewalkUpdateAccount(input.Sidewalk, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdatePartnerAccountCommand = serializeAws_restJson1UpdatePartnerAccountCommand;
const serializeAws_restJson1UpdateWirelessDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-devices/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DestinationName !== undefined &&
            input.DestinationName !== null && { DestinationName: input.DestinationName }),
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && { LoRaWAN: serializeAws_restJson1LoRaWANUpdateDevice(input.LoRaWAN, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateWirelessDeviceCommand = serializeAws_restJson1UpdateWirelessDeviceCommand;
const serializeAws_restJson1UpdateWirelessGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/wireless-gateways/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.JoinEuiFilters !== undefined &&
            input.JoinEuiFilters !== null && {
            JoinEuiFilters: serializeAws_restJson1JoinEuiFilters(input.JoinEuiFilters, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NetIdFilters !== undefined &&
            input.NetIdFilters !== null && { NetIdFilters: serializeAws_restJson1NetIdFilters(input.NetIdFilters, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateWirelessGatewayCommand = serializeAws_restJson1UpdateWirelessGatewayCommand;
const deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Sidewalk: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Sidewalk !== undefined && data.Sidewalk !== null) {
        contents.Sidewalk = deserializeAws_restJson1SidewalkAccountInfo(data.Sidewalk, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand;
const deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateWirelessDeviceWithThingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand = deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand;
const deserializeAws_restJson1AssociateWirelessDeviceWithThingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IotCertificateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IotCertificateId !== undefined && data.IotCertificateId !== null) {
        contents.IotCertificateId = data.IotCertificateId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand;
const deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateWirelessGatewayWithThingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand = deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand;
const deserializeAws_restJson1AssociateWirelessGatewayWithThingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateDestinationCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDestinationCommand = deserializeAws_restJson1CreateDestinationCommand;
const deserializeAws_restJson1CreateDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateDeviceProfileCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeviceProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeviceProfileCommand = deserializeAws_restJson1CreateDeviceProfileCommand;
const deserializeAws_restJson1CreateDeviceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateServiceProfileCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateServiceProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateServiceProfileCommand = deserializeAws_restJson1CreateServiceProfileCommand;
const deserializeAws_restJson1CreateServiceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateWirelessDeviceCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWirelessDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWirelessDeviceCommand = deserializeAws_restJson1CreateWirelessDeviceCommand;
const deserializeAws_restJson1CreateWirelessDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateWirelessGatewayCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWirelessGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWirelessGatewayCommand = deserializeAws_restJson1CreateWirelessGatewayCommand;
const deserializeAws_restJson1CreateWirelessGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateWirelessGatewayTaskCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWirelessGatewayTaskCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Status: undefined,
        WirelessGatewayTaskDefinitionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.WirelessGatewayTaskDefinitionId !== undefined && data.WirelessGatewayTaskDefinitionId !== null) {
        contents.WirelessGatewayTaskDefinitionId = data.WirelessGatewayTaskDefinitionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWirelessGatewayTaskCommand = deserializeAws_restJson1CreateWirelessGatewayTaskCommand;
const deserializeAws_restJson1CreateWirelessGatewayTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand;
const deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteDestinationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDestinationCommand = deserializeAws_restJson1DeleteDestinationCommand;
const deserializeAws_restJson1DeleteDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteDeviceProfileCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDeviceProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDeviceProfileCommand = deserializeAws_restJson1DeleteDeviceProfileCommand;
const deserializeAws_restJson1DeleteDeviceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteServiceProfileCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteServiceProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteServiceProfileCommand = deserializeAws_restJson1DeleteServiceProfileCommand;
const deserializeAws_restJson1DeleteServiceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteWirelessDeviceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWirelessDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWirelessDeviceCommand = deserializeAws_restJson1DeleteWirelessDeviceCommand;
const deserializeAws_restJson1DeleteWirelessDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteWirelessGatewayCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWirelessGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWirelessGatewayCommand = deserializeAws_restJson1DeleteWirelessGatewayCommand;
const deserializeAws_restJson1DeleteWirelessGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteWirelessGatewayTaskCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWirelessGatewayTaskCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWirelessGatewayTaskCommand = deserializeAws_restJson1DeleteWirelessGatewayTaskCommand;
const deserializeAws_restJson1DeleteWirelessGatewayTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand;
const deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand;
const deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand;
const deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand;
const deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand;
const deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Description: undefined,
        Expression: undefined,
        ExpressionType: undefined,
        Name: undefined,
        RoleArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Expression !== undefined && data.Expression !== null) {
        contents.Expression = data.Expression;
    }
    if (data.ExpressionType !== undefined && data.ExpressionType !== null) {
        contents.ExpressionType = data.ExpressionType;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDestinationCommand = deserializeAws_restJson1GetDestinationCommand;
const deserializeAws_restJson1GetDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDeviceProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeviceProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
        LoRaWAN: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LoRaWAN !== undefined && data.LoRaWAN !== null) {
        contents.LoRaWAN = deserializeAws_restJson1LoRaWANDeviceProfile(data.LoRaWAN, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeviceProfileCommand = deserializeAws_restJson1GetDeviceProfileCommand;
const deserializeAws_restJson1GetDeviceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetLogLevelsByResourceTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLogLevelsByResourceTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DefaultLogLevel: undefined,
        WirelessDeviceLogOptions: undefined,
        WirelessGatewayLogOptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DefaultLogLevel !== undefined && data.DefaultLogLevel !== null) {
        contents.DefaultLogLevel = data.DefaultLogLevel;
    }
    if (data.WirelessDeviceLogOptions !== undefined && data.WirelessDeviceLogOptions !== null) {
        contents.WirelessDeviceLogOptions = deserializeAws_restJson1WirelessDeviceLogOptionList(data.WirelessDeviceLogOptions, context);
    }
    if (data.WirelessGatewayLogOptions !== undefined && data.WirelessGatewayLogOptions !== null) {
        contents.WirelessGatewayLogOptions = deserializeAws_restJson1WirelessGatewayLogOptionList(data.WirelessGatewayLogOptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLogLevelsByResourceTypesCommand = deserializeAws_restJson1GetLogLevelsByResourceTypesCommand;
const deserializeAws_restJson1GetLogLevelsByResourceTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetPartnerAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPartnerAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountLinked: undefined,
        Sidewalk: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountLinked !== undefined && data.AccountLinked !== null) {
        contents.AccountLinked = data.AccountLinked;
    }
    if (data.Sidewalk !== undefined && data.Sidewalk !== null) {
        contents.Sidewalk = deserializeAws_restJson1SidewalkAccountInfoWithFingerprint(data.Sidewalk, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPartnerAccountCommand = deserializeAws_restJson1GetPartnerAccountCommand;
const deserializeAws_restJson1GetPartnerAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetResourceLogLevelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceLogLevelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LogLevel: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LogLevel !== undefined && data.LogLevel !== null) {
        contents.LogLevel = data.LogLevel;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceLogLevelCommand = deserializeAws_restJson1GetResourceLogLevelCommand;
const deserializeAws_restJson1GetResourceLogLevelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetServiceEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetServiceEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ServerTrust: undefined,
        ServiceEndpoint: undefined,
        ServiceType: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ServerTrust !== undefined && data.ServerTrust !== null) {
        contents.ServerTrust = data.ServerTrust;
    }
    if (data.ServiceEndpoint !== undefined && data.ServiceEndpoint !== null) {
        contents.ServiceEndpoint = data.ServiceEndpoint;
    }
    if (data.ServiceType !== undefined && data.ServiceType !== null) {
        contents.ServiceType = data.ServiceType;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetServiceEndpointCommand = deserializeAws_restJson1GetServiceEndpointCommand;
const deserializeAws_restJson1GetServiceEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetServiceProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetServiceProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
        LoRaWAN: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LoRaWAN !== undefined && data.LoRaWAN !== null) {
        contents.LoRaWAN = deserializeAws_restJson1LoRaWANGetServiceProfileInfo(data.LoRaWAN, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetServiceProfileCommand = deserializeAws_restJson1GetServiceProfileCommand;
const deserializeAws_restJson1GetServiceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Description: undefined,
        DestinationName: undefined,
        Id: undefined,
        LoRaWAN: undefined,
        Name: undefined,
        Sidewalk: undefined,
        ThingArn: undefined,
        ThingName: undefined,
        Type: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.DestinationName !== undefined && data.DestinationName !== null) {
        contents.DestinationName = data.DestinationName;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LoRaWAN !== undefined && data.LoRaWAN !== null) {
        contents.LoRaWAN = deserializeAws_restJson1LoRaWANDevice(data.LoRaWAN, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Sidewalk !== undefined && data.Sidewalk !== null) {
        contents.Sidewalk = deserializeAws_restJson1SidewalkDevice(data.Sidewalk, context);
    }
    if (data.ThingArn !== undefined && data.ThingArn !== null) {
        contents.ThingArn = data.ThingArn;
    }
    if (data.ThingName !== undefined && data.ThingName !== null) {
        contents.ThingName = data.ThingName;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessDeviceCommand = deserializeAws_restJson1GetWirelessDeviceCommand;
const deserializeAws_restJson1GetWirelessDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessDeviceStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessDeviceStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LastUplinkReceivedAt: undefined,
        LoRaWAN: undefined,
        Sidewalk: undefined,
        WirelessDeviceId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LastUplinkReceivedAt !== undefined && data.LastUplinkReceivedAt !== null) {
        contents.LastUplinkReceivedAt = data.LastUplinkReceivedAt;
    }
    if (data.LoRaWAN !== undefined && data.LoRaWAN !== null) {
        contents.LoRaWAN = deserializeAws_restJson1LoRaWANDeviceMetadata(data.LoRaWAN, context);
    }
    if (data.Sidewalk !== undefined && data.Sidewalk !== null) {
        contents.Sidewalk = deserializeAws_restJson1SidewalkDeviceMetadata(data.Sidewalk, context);
    }
    if (data.WirelessDeviceId !== undefined && data.WirelessDeviceId !== null) {
        contents.WirelessDeviceId = data.WirelessDeviceId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessDeviceStatisticsCommand = deserializeAws_restJson1GetWirelessDeviceStatisticsCommand;
const deserializeAws_restJson1GetWirelessDeviceStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Description: undefined,
        Id: undefined,
        LoRaWAN: undefined,
        Name: undefined,
        ThingArn: undefined,
        ThingName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LoRaWAN !== undefined && data.LoRaWAN !== null) {
        contents.LoRaWAN = deserializeAws_restJson1LoRaWANGateway(data.LoRaWAN, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.ThingArn !== undefined && data.ThingArn !== null) {
        contents.ThingArn = data.ThingArn;
    }
    if (data.ThingName !== undefined && data.ThingName !== null) {
        contents.ThingName = data.ThingName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessGatewayCommand = deserializeAws_restJson1GetWirelessGatewayCommand;
const deserializeAws_restJson1GetWirelessGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessGatewayCertificateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessGatewayCertificateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IotCertificateId: undefined,
        LoRaWANNetworkServerCertificateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IotCertificateId !== undefined && data.IotCertificateId !== null) {
        contents.IotCertificateId = data.IotCertificateId;
    }
    if (data.LoRaWANNetworkServerCertificateId !== undefined && data.LoRaWANNetworkServerCertificateId !== null) {
        contents.LoRaWANNetworkServerCertificateId = data.LoRaWANNetworkServerCertificateId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessGatewayCertificateCommand = deserializeAws_restJson1GetWirelessGatewayCertificateCommand;
const deserializeAws_restJson1GetWirelessGatewayCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LoRaWAN: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LoRaWAN !== undefined && data.LoRaWAN !== null) {
        contents.LoRaWAN = deserializeAws_restJson1LoRaWANGatewayCurrentVersion(data.LoRaWAN, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand;
const deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessGatewayStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessGatewayStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConnectionStatus: undefined,
        LastUplinkReceivedAt: undefined,
        WirelessGatewayId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConnectionStatus !== undefined && data.ConnectionStatus !== null) {
        contents.ConnectionStatus = data.ConnectionStatus;
    }
    if (data.LastUplinkReceivedAt !== undefined && data.LastUplinkReceivedAt !== null) {
        contents.LastUplinkReceivedAt = data.LastUplinkReceivedAt;
    }
    if (data.WirelessGatewayId !== undefined && data.WirelessGatewayId !== null) {
        contents.WirelessGatewayId = data.WirelessGatewayId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessGatewayStatisticsCommand = deserializeAws_restJson1GetWirelessGatewayStatisticsCommand;
const deserializeAws_restJson1GetWirelessGatewayStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessGatewayTaskCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessGatewayTaskCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LastUplinkReceivedAt: undefined,
        Status: undefined,
        TaskCreatedAt: undefined,
        WirelessGatewayId: undefined,
        WirelessGatewayTaskDefinitionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LastUplinkReceivedAt !== undefined && data.LastUplinkReceivedAt !== null) {
        contents.LastUplinkReceivedAt = data.LastUplinkReceivedAt;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.TaskCreatedAt !== undefined && data.TaskCreatedAt !== null) {
        contents.TaskCreatedAt = data.TaskCreatedAt;
    }
    if (data.WirelessGatewayId !== undefined && data.WirelessGatewayId !== null) {
        contents.WirelessGatewayId = data.WirelessGatewayId;
    }
    if (data.WirelessGatewayTaskDefinitionId !== undefined && data.WirelessGatewayTaskDefinitionId !== null) {
        contents.WirelessGatewayTaskDefinitionId = data.WirelessGatewayTaskDefinitionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessGatewayTaskCommand = deserializeAws_restJson1GetWirelessGatewayTaskCommand;
const deserializeAws_restJson1GetWirelessGatewayTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AutoCreateTasks: undefined,
        Name: undefined,
        Update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AutoCreateTasks !== undefined && data.AutoCreateTasks !== null) {
        contents.AutoCreateTasks = data.AutoCreateTasks;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Update !== undefined && data.Update !== null) {
        contents.Update = deserializeAws_restJson1UpdateWirelessGatewayTaskCreate(data.Update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand;
const deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListDestinationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDestinationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DestinationList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DestinationList !== undefined && data.DestinationList !== null) {
        contents.DestinationList = deserializeAws_restJson1DestinationList(data.DestinationList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDestinationsCommand = deserializeAws_restJson1ListDestinationsCommand;
const deserializeAws_restJson1ListDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListDeviceProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeviceProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceProfileList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeviceProfileList !== undefined && data.DeviceProfileList !== null) {
        contents.DeviceProfileList = deserializeAws_restJson1DeviceProfileList(data.DeviceProfileList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeviceProfilesCommand = deserializeAws_restJson1ListDeviceProfilesCommand;
const deserializeAws_restJson1ListDeviceProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListPartnerAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPartnerAccountsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Sidewalk: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Sidewalk !== undefined && data.Sidewalk !== null) {
        contents.Sidewalk = deserializeAws_restJson1SidewalkAccountList(data.Sidewalk, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPartnerAccountsCommand = deserializeAws_restJson1ListPartnerAccountsCommand;
const deserializeAws_restJson1ListPartnerAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListServiceProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListServiceProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ServiceProfileList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ServiceProfileList !== undefined && data.ServiceProfileList !== null) {
        contents.ServiceProfileList = deserializeAws_restJson1ServiceProfileList(data.ServiceProfileList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListServiceProfilesCommand = deserializeAws_restJson1ListServiceProfilesCommand;
const deserializeAws_restJson1ListServiceProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListWirelessDevicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWirelessDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        WirelessDeviceList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WirelessDeviceList !== undefined && data.WirelessDeviceList !== null) {
        contents.WirelessDeviceList = deserializeAws_restJson1WirelessDeviceStatisticsList(data.WirelessDeviceList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWirelessDevicesCommand = deserializeAws_restJson1ListWirelessDevicesCommand;
const deserializeAws_restJson1ListWirelessDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListWirelessGatewaysCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWirelessGatewaysCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        WirelessGatewayList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WirelessGatewayList !== undefined && data.WirelessGatewayList !== null) {
        contents.WirelessGatewayList = deserializeAws_restJson1WirelessGatewayStatisticsList(data.WirelessGatewayList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWirelessGatewaysCommand = deserializeAws_restJson1ListWirelessGatewaysCommand;
const deserializeAws_restJson1ListWirelessGatewaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        TaskDefinitions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TaskDefinitions !== undefined && data.TaskDefinitions !== null) {
        contents.TaskDefinitions = deserializeAws_restJson1WirelessGatewayTaskDefinitionList(data.TaskDefinitions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand;
const deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutResourceLogLevelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutResourceLogLevelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutResourceLogLevelCommand = deserializeAws_restJson1PutResourceLogLevelCommand;
const deserializeAws_restJson1PutResourceLogLevelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ResetAllResourceLogLevelsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1ResetAllResourceLogLevelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ResetAllResourceLogLevelsCommand = deserializeAws_restJson1ResetAllResourceLogLevelsCommand;
const deserializeAws_restJson1ResetAllResourceLogLevelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ResetResourceLogLevelCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1ResetResourceLogLevelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ResetResourceLogLevelCommand = deserializeAws_restJson1ResetResourceLogLevelCommand;
const deserializeAws_restJson1ResetResourceLogLevelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SendDataToWirelessDeviceCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendDataToWirelessDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MessageId !== undefined && data.MessageId !== null) {
        contents.MessageId = data.MessageId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendDataToWirelessDeviceCommand = deserializeAws_restJson1SendDataToWirelessDeviceCommand;
const deserializeAws_restJson1SendDataToWirelessDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.iotwireless#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TestWirelessDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TestWirelessDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Result: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Result !== undefined && data.Result !== null) {
        contents.Result = data.Result;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TestWirelessDeviceCommand = deserializeAws_restJson1TestWirelessDeviceCommand;
const deserializeAws_restJson1TestWirelessDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateDestinationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDestinationCommand = deserializeAws_restJson1UpdateDestinationCommand;
const deserializeAws_restJson1UpdateDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand;
const deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.iotwireless#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdatePartnerAccountCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePartnerAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePartnerAccountCommand = deserializeAws_restJson1UpdatePartnerAccountCommand;
const deserializeAws_restJson1UpdatePartnerAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateWirelessDeviceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateWirelessDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateWirelessDeviceCommand = deserializeAws_restJson1UpdateWirelessDeviceCommand;
const deserializeAws_restJson1UpdateWirelessDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateWirelessGatewayCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateWirelessGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateWirelessGatewayCommand = deserializeAws_restJson1UpdateWirelessGatewayCommand;
const deserializeAws_restJson1UpdateWirelessGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.iotwireless#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotwireless#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotwireless#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotwireless#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotwireless#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1AbpV1_0_x = (input, context) => {
    return {
        ...(input.DevAddr !== undefined && input.DevAddr !== null && { DevAddr: input.DevAddr }),
        ...(input.SessionKeys !== undefined &&
            input.SessionKeys !== null && {
            SessionKeys: serializeAws_restJson1SessionKeysAbpV1_0_x(input.SessionKeys, context),
        }),
    };
};
const serializeAws_restJson1AbpV1_1 = (input, context) => {
    return {
        ...(input.DevAddr !== undefined && input.DevAddr !== null && { DevAddr: input.DevAddr }),
        ...(input.SessionKeys !== undefined &&
            input.SessionKeys !== null && {
            SessionKeys: serializeAws_restJson1SessionKeysAbpV1_1(input.SessionKeys, context),
        }),
    };
};
const serializeAws_restJson1FactoryPresetFreqsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1JoinEuiFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JoinEuiRange(entry, context);
    });
};
const serializeAws_restJson1JoinEuiRange = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LoRaWANDevice = (input, context) => {
    return {
        ...(input.AbpV1_0_x !== undefined &&
            input.AbpV1_0_x !== null && { AbpV1_0_x: serializeAws_restJson1AbpV1_0_x(input.AbpV1_0_x, context) }),
        ...(input.AbpV1_1 !== undefined &&
            input.AbpV1_1 !== null && { AbpV1_1: serializeAws_restJson1AbpV1_1(input.AbpV1_1, context) }),
        ...(input.DevEui !== undefined && input.DevEui !== null && { DevEui: input.DevEui }),
        ...(input.DeviceProfileId !== undefined &&
            input.DeviceProfileId !== null && { DeviceProfileId: input.DeviceProfileId }),
        ...(input.OtaaV1_0_x !== undefined &&
            input.OtaaV1_0_x !== null && { OtaaV1_0_x: serializeAws_restJson1OtaaV1_0_x(input.OtaaV1_0_x, context) }),
        ...(input.OtaaV1_1 !== undefined &&
            input.OtaaV1_1 !== null && { OtaaV1_1: serializeAws_restJson1OtaaV1_1(input.OtaaV1_1, context) }),
        ...(input.ServiceProfileId !== undefined &&
            input.ServiceProfileId !== null && { ServiceProfileId: input.ServiceProfileId }),
    };
};
const serializeAws_restJson1LoRaWANDeviceProfile = (input, context) => {
    return {
        ...(input.ClassBTimeout !== undefined && input.ClassBTimeout !== null && { ClassBTimeout: input.ClassBTimeout }),
        ...(input.ClassCTimeout !== undefined && input.ClassCTimeout !== null && { ClassCTimeout: input.ClassCTimeout }),
        ...(input.FactoryPresetFreqsList !== undefined &&
            input.FactoryPresetFreqsList !== null && {
            FactoryPresetFreqsList: serializeAws_restJson1FactoryPresetFreqsList(input.FactoryPresetFreqsList, context),
        }),
        ...(input.MacVersion !== undefined && input.MacVersion !== null && { MacVersion: input.MacVersion }),
        ...(input.MaxDutyCycle !== undefined && input.MaxDutyCycle !== null && { MaxDutyCycle: input.MaxDutyCycle }),
        ...(input.MaxEirp !== undefined && input.MaxEirp !== null && { MaxEirp: input.MaxEirp }),
        ...(input.PingSlotDr !== undefined && input.PingSlotDr !== null && { PingSlotDr: input.PingSlotDr }),
        ...(input.PingSlotFreq !== undefined && input.PingSlotFreq !== null && { PingSlotFreq: input.PingSlotFreq }),
        ...(input.PingSlotPeriod !== undefined &&
            input.PingSlotPeriod !== null && { PingSlotPeriod: input.PingSlotPeriod }),
        ...(input.RegParamsRevision !== undefined &&
            input.RegParamsRevision !== null && { RegParamsRevision: input.RegParamsRevision }),
        ...(input.RfRegion !== undefined && input.RfRegion !== null && { RfRegion: input.RfRegion }),
        ...(input.RxDataRate2 !== undefined && input.RxDataRate2 !== null && { RxDataRate2: input.RxDataRate2 }),
        ...(input.RxDelay1 !== undefined && input.RxDelay1 !== null && { RxDelay1: input.RxDelay1 }),
        ...(input.RxDrOffset1 !== undefined && input.RxDrOffset1 !== null && { RxDrOffset1: input.RxDrOffset1 }),
        ...(input.RxFreq2 !== undefined && input.RxFreq2 !== null && { RxFreq2: input.RxFreq2 }),
        ...(input.Supports32BitFCnt !== undefined &&
            input.Supports32BitFCnt !== null && { Supports32BitFCnt: input.Supports32BitFCnt }),
        ...(input.SupportsClassB !== undefined &&
            input.SupportsClassB !== null && { SupportsClassB: input.SupportsClassB }),
        ...(input.SupportsClassC !== undefined &&
            input.SupportsClassC !== null && { SupportsClassC: input.SupportsClassC }),
        ...(input.SupportsJoin !== undefined && input.SupportsJoin !== null && { SupportsJoin: input.SupportsJoin }),
    };
};
const serializeAws_restJson1LoRaWANGateway = (input, context) => {
    return {
        ...(input.GatewayEui !== undefined && input.GatewayEui !== null && { GatewayEui: input.GatewayEui }),
        ...(input.JoinEuiFilters !== undefined &&
            input.JoinEuiFilters !== null && {
            JoinEuiFilters: serializeAws_restJson1JoinEuiFilters(input.JoinEuiFilters, context),
        }),
        ...(input.NetIdFilters !== undefined &&
            input.NetIdFilters !== null && { NetIdFilters: serializeAws_restJson1NetIdFilters(input.NetIdFilters, context) }),
        ...(input.RfRegion !== undefined && input.RfRegion !== null && { RfRegion: input.RfRegion }),
        ...(input.SubBands !== undefined &&
            input.SubBands !== null && { SubBands: serializeAws_restJson1SubBands(input.SubBands, context) }),
    };
};
const serializeAws_restJson1LoRaWANGatewayVersion = (input, context) => {
    return {
        ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
        ...(input.PackageVersion !== undefined &&
            input.PackageVersion !== null && { PackageVersion: input.PackageVersion }),
        ...(input.Station !== undefined && input.Station !== null && { Station: input.Station }),
    };
};
const serializeAws_restJson1LoRaWANSendDataToDevice = (input, context) => {
    return {
        ...(input.FPort !== undefined && input.FPort !== null && { FPort: input.FPort }),
    };
};
const serializeAws_restJson1LoRaWANServiceProfile = (input, context) => {
    return {
        ...(input.AddGwMetadata !== undefined && input.AddGwMetadata !== null && { AddGwMetadata: input.AddGwMetadata }),
    };
};
const serializeAws_restJson1LoRaWANUpdateDevice = (input, context) => {
    return {
        ...(input.DeviceProfileId !== undefined &&
            input.DeviceProfileId !== null && { DeviceProfileId: input.DeviceProfileId }),
        ...(input.ServiceProfileId !== undefined &&
            input.ServiceProfileId !== null && { ServiceProfileId: input.ServiceProfileId }),
    };
};
const serializeAws_restJson1LoRaWANUpdateGatewayTaskCreate = (input, context) => {
    return {
        ...(input.CurrentVersion !== undefined &&
            input.CurrentVersion !== null && {
            CurrentVersion: serializeAws_restJson1LoRaWANGatewayVersion(input.CurrentVersion, context),
        }),
        ...(input.SigKeyCrc !== undefined && input.SigKeyCrc !== null && { SigKeyCrc: input.SigKeyCrc }),
        ...(input.UpdateSignature !== undefined &&
            input.UpdateSignature !== null && { UpdateSignature: input.UpdateSignature }),
        ...(input.UpdateVersion !== undefined &&
            input.UpdateVersion !== null && {
            UpdateVersion: serializeAws_restJson1LoRaWANGatewayVersion(input.UpdateVersion, context),
        }),
    };
};
const serializeAws_restJson1NetIdFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1OtaaV1_0_x = (input, context) => {
    return {
        ...(input.AppEui !== undefined && input.AppEui !== null && { AppEui: input.AppEui }),
        ...(input.AppKey !== undefined && input.AppKey !== null && { AppKey: input.AppKey }),
    };
};
const serializeAws_restJson1OtaaV1_1 = (input, context) => {
    return {
        ...(input.AppKey !== undefined && input.AppKey !== null && { AppKey: input.AppKey }),
        ...(input.JoinEui !== undefined && input.JoinEui !== null && { JoinEui: input.JoinEui }),
        ...(input.NwkKey !== undefined && input.NwkKey !== null && { NwkKey: input.NwkKey }),
    };
};
const serializeAws_restJson1SessionKeysAbpV1_0_x = (input, context) => {
    return {
        ...(input.AppSKey !== undefined && input.AppSKey !== null && { AppSKey: input.AppSKey }),
        ...(input.NwkSKey !== undefined && input.NwkSKey !== null && { NwkSKey: input.NwkSKey }),
    };
};
const serializeAws_restJson1SessionKeysAbpV1_1 = (input, context) => {
    return {
        ...(input.AppSKey !== undefined && input.AppSKey !== null && { AppSKey: input.AppSKey }),
        ...(input.FNwkSIntKey !== undefined && input.FNwkSIntKey !== null && { FNwkSIntKey: input.FNwkSIntKey }),
        ...(input.NwkSEncKey !== undefined && input.NwkSEncKey !== null && { NwkSEncKey: input.NwkSEncKey }),
        ...(input.SNwkSIntKey !== undefined && input.SNwkSIntKey !== null && { SNwkSIntKey: input.SNwkSIntKey }),
    };
};
const serializeAws_restJson1SidewalkAccountInfo = (input, context) => {
    return {
        ...(input.AmazonId !== undefined && input.AmazonId !== null && { AmazonId: input.AmazonId }),
        ...(input.AppServerPrivateKey !== undefined &&
            input.AppServerPrivateKey !== null && { AppServerPrivateKey: input.AppServerPrivateKey }),
    };
};
const serializeAws_restJson1SidewalkSendDataToDevice = (input, context) => {
    return {
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.Seq !== undefined && input.Seq !== null && { Seq: input.Seq }),
    };
};
const serializeAws_restJson1SidewalkUpdateAccount = (input, context) => {
    return {
        ...(input.AppServerPrivateKey !== undefined &&
            input.AppServerPrivateKey !== null && { AppServerPrivateKey: input.AppServerPrivateKey }),
    };
};
const serializeAws_restJson1SubBands = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1UpdateWirelessGatewayTaskCreate = (input, context) => {
    return {
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && {
            LoRaWAN: serializeAws_restJson1LoRaWANUpdateGatewayTaskCreate(input.LoRaWAN, context),
        }),
        ...(input.UpdateDataRole !== undefined &&
            input.UpdateDataRole !== null && { UpdateDataRole: input.UpdateDataRole }),
        ...(input.UpdateDataSource !== undefined &&
            input.UpdateDataSource !== null && { UpdateDataSource: input.UpdateDataSource }),
    };
};
const serializeAws_restJson1WirelessDeviceEventLogOption = (input, context) => {
    return {
        ...(input.Event !== undefined && input.Event !== null && { Event: input.Event }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
    };
};
const serializeAws_restJson1WirelessDeviceEventLogOptionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WirelessDeviceEventLogOption(entry, context);
    });
};
const serializeAws_restJson1WirelessDeviceLogOption = (input, context) => {
    return {
        ...(input.Events !== undefined &&
            input.Events !== null && {
            Events: serializeAws_restJson1WirelessDeviceEventLogOptionList(input.Events, context),
        }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1WirelessDeviceLogOptionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WirelessDeviceLogOption(entry, context);
    });
};
const serializeAws_restJson1WirelessGatewayEventLogOption = (input, context) => {
    return {
        ...(input.Event !== undefined && input.Event !== null && { Event: input.Event }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
    };
};
const serializeAws_restJson1WirelessGatewayEventLogOptionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WirelessGatewayEventLogOption(entry, context);
    });
};
const serializeAws_restJson1WirelessGatewayLogOption = (input, context) => {
    return {
        ...(input.Events !== undefined &&
            input.Events !== null && {
            Events: serializeAws_restJson1WirelessGatewayEventLogOptionList(input.Events, context),
        }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1WirelessGatewayLogOptionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WirelessGatewayLogOption(entry, context);
    });
};
const serializeAws_restJson1WirelessMetadata = (input, context) => {
    return {
        ...(input.LoRaWAN !== undefined &&
            input.LoRaWAN !== null && { LoRaWAN: serializeAws_restJson1LoRaWANSendDataToDevice(input.LoRaWAN, context) }),
        ...(input.Sidewalk !== undefined &&
            input.Sidewalk !== null && { Sidewalk: serializeAws_restJson1SidewalkSendDataToDevice(input.Sidewalk, context) }),
    };
};
const deserializeAws_restJson1AbpV1_0_x = (output, context) => {
    return {
        DevAddr: output.DevAddr !== undefined && output.DevAddr !== null ? output.DevAddr : undefined,
        SessionKeys: output.SessionKeys !== undefined && output.SessionKeys !== null
            ? deserializeAws_restJson1SessionKeysAbpV1_0_x(output.SessionKeys, context)
            : undefined,
    };
};
const deserializeAws_restJson1AbpV1_1 = (output, context) => {
    return {
        DevAddr: output.DevAddr !== undefined && output.DevAddr !== null ? output.DevAddr : undefined,
        SessionKeys: output.SessionKeys !== undefined && output.SessionKeys !== null
            ? deserializeAws_restJson1SessionKeysAbpV1_1(output.SessionKeys, context)
            : undefined,
    };
};
const deserializeAws_restJson1CertificateList = (output, context) => {
    return {
        SigningAlg: output.SigningAlg !== undefined && output.SigningAlg !== null ? output.SigningAlg : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1DestinationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Destinations(entry, context);
    });
};
const deserializeAws_restJson1Destinations = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
        ExpressionType: output.ExpressionType !== undefined && output.ExpressionType !== null ? output.ExpressionType : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_restJson1DeviceCertificateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CertificateList(entry, context);
    });
};
const deserializeAws_restJson1DeviceProfile = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1DeviceProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeviceProfile(entry, context);
    });
};
const deserializeAws_restJson1FactoryPresetFreqsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1JoinEuiFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JoinEuiRange(entry, context);
    });
};
const deserializeAws_restJson1JoinEuiRange = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LoRaWANDevice = (output, context) => {
    return {
        AbpV1_0_x: output.AbpV1_0_x !== undefined && output.AbpV1_0_x !== null
            ? deserializeAws_restJson1AbpV1_0_x(output.AbpV1_0_x, context)
            : undefined,
        AbpV1_1: output.AbpV1_1 !== undefined && output.AbpV1_1 !== null
            ? deserializeAws_restJson1AbpV1_1(output.AbpV1_1, context)
            : undefined,
        DevEui: output.DevEui !== undefined && output.DevEui !== null ? output.DevEui : undefined,
        DeviceProfileId: output.DeviceProfileId !== undefined && output.DeviceProfileId !== null ? output.DeviceProfileId : undefined,
        OtaaV1_0_x: output.OtaaV1_0_x !== undefined && output.OtaaV1_0_x !== null
            ? deserializeAws_restJson1OtaaV1_0_x(output.OtaaV1_0_x, context)
            : undefined,
        OtaaV1_1: output.OtaaV1_1 !== undefined && output.OtaaV1_1 !== null
            ? deserializeAws_restJson1OtaaV1_1(output.OtaaV1_1, context)
            : undefined,
        ServiceProfileId: output.ServiceProfileId !== undefined && output.ServiceProfileId !== null ? output.ServiceProfileId : undefined,
    };
};
const deserializeAws_restJson1LoRaWANDeviceMetadata = (output, context) => {
    return {
        DataRate: output.DataRate !== undefined && output.DataRate !== null ? output.DataRate : undefined,
        DevEui: output.DevEui !== undefined && output.DevEui !== null ? output.DevEui : undefined,
        FPort: output.FPort !== undefined && output.FPort !== null ? output.FPort : undefined,
        Frequency: output.Frequency !== undefined && output.Frequency !== null ? output.Frequency : undefined,
        Gateways: output.Gateways !== undefined && output.Gateways !== null
            ? deserializeAws_restJson1LoRaWANGatewayMetadataList(output.Gateways, context)
            : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
    };
};
const deserializeAws_restJson1LoRaWANDeviceProfile = (output, context) => {
    return {
        ClassBTimeout: output.ClassBTimeout !== undefined && output.ClassBTimeout !== null ? output.ClassBTimeout : undefined,
        ClassCTimeout: output.ClassCTimeout !== undefined && output.ClassCTimeout !== null ? output.ClassCTimeout : undefined,
        FactoryPresetFreqsList: output.FactoryPresetFreqsList !== undefined && output.FactoryPresetFreqsList !== null
            ? deserializeAws_restJson1FactoryPresetFreqsList(output.FactoryPresetFreqsList, context)
            : undefined,
        MacVersion: output.MacVersion !== undefined && output.MacVersion !== null ? output.MacVersion : undefined,
        MaxDutyCycle: output.MaxDutyCycle !== undefined && output.MaxDutyCycle !== null ? output.MaxDutyCycle : undefined,
        MaxEirp: output.MaxEirp !== undefined && output.MaxEirp !== null ? output.MaxEirp : undefined,
        PingSlotDr: output.PingSlotDr !== undefined && output.PingSlotDr !== null ? output.PingSlotDr : undefined,
        PingSlotFreq: output.PingSlotFreq !== undefined && output.PingSlotFreq !== null ? output.PingSlotFreq : undefined,
        PingSlotPeriod: output.PingSlotPeriod !== undefined && output.PingSlotPeriod !== null ? output.PingSlotPeriod : undefined,
        RegParamsRevision: output.RegParamsRevision !== undefined && output.RegParamsRevision !== null
            ? output.RegParamsRevision
            : undefined,
        RfRegion: output.RfRegion !== undefined && output.RfRegion !== null ? output.RfRegion : undefined,
        RxDataRate2: output.RxDataRate2 !== undefined && output.RxDataRate2 !== null ? output.RxDataRate2 : undefined,
        RxDelay1: output.RxDelay1 !== undefined && output.RxDelay1 !== null ? output.RxDelay1 : undefined,
        RxDrOffset1: output.RxDrOffset1 !== undefined && output.RxDrOffset1 !== null ? output.RxDrOffset1 : undefined,
        RxFreq2: output.RxFreq2 !== undefined && output.RxFreq2 !== null ? output.RxFreq2 : undefined,
        Supports32BitFCnt: output.Supports32BitFCnt !== undefined && output.Supports32BitFCnt !== null
            ? output.Supports32BitFCnt
            : undefined,
        SupportsClassB: output.SupportsClassB !== undefined && output.SupportsClassB !== null ? output.SupportsClassB : undefined,
        SupportsClassC: output.SupportsClassC !== undefined && output.SupportsClassC !== null ? output.SupportsClassC : undefined,
        SupportsJoin: output.SupportsJoin !== undefined && output.SupportsJoin !== null ? output.SupportsJoin : undefined,
    };
};
const deserializeAws_restJson1LoRaWANGateway = (output, context) => {
    return {
        GatewayEui: output.GatewayEui !== undefined && output.GatewayEui !== null ? output.GatewayEui : undefined,
        JoinEuiFilters: output.JoinEuiFilters !== undefined && output.JoinEuiFilters !== null
            ? deserializeAws_restJson1JoinEuiFilters(output.JoinEuiFilters, context)
            : undefined,
        NetIdFilters: output.NetIdFilters !== undefined && output.NetIdFilters !== null
            ? deserializeAws_restJson1NetIdFilters(output.NetIdFilters, context)
            : undefined,
        RfRegion: output.RfRegion !== undefined && output.RfRegion !== null ? output.RfRegion : undefined,
        SubBands: output.SubBands !== undefined && output.SubBands !== null
            ? deserializeAws_restJson1SubBands(output.SubBands, context)
            : undefined,
    };
};
const deserializeAws_restJson1LoRaWANGatewayCurrentVersion = (output, context) => {
    return {
        CurrentVersion: output.CurrentVersion !== undefined && output.CurrentVersion !== null
            ? deserializeAws_restJson1LoRaWANGatewayVersion(output.CurrentVersion, context)
            : undefined,
    };
};
const deserializeAws_restJson1LoRaWANGatewayMetadata = (output, context) => {
    return {
        GatewayEui: output.GatewayEui !== undefined && output.GatewayEui !== null ? output.GatewayEui : undefined,
        Rssi: output.Rssi !== undefined && output.Rssi !== null ? output.Rssi : undefined,
        Snr: output.Snr !== undefined && output.Snr !== null ? output.Snr : undefined,
    };
};
const deserializeAws_restJson1LoRaWANGatewayMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LoRaWANGatewayMetadata(entry, context);
    });
};
const deserializeAws_restJson1LoRaWANGatewayVersion = (output, context) => {
    return {
        Model: output.Model !== undefined && output.Model !== null ? output.Model : undefined,
        PackageVersion: output.PackageVersion !== undefined && output.PackageVersion !== null ? output.PackageVersion : undefined,
        Station: output.Station !== undefined && output.Station !== null ? output.Station : undefined,
    };
};
const deserializeAws_restJson1LoRaWANGetServiceProfileInfo = (output, context) => {
    return {
        AddGwMetadata: output.AddGwMetadata !== undefined && output.AddGwMetadata !== null ? output.AddGwMetadata : undefined,
        ChannelMask: output.ChannelMask !== undefined && output.ChannelMask !== null ? output.ChannelMask : undefined,
        DevStatusReqFreq: output.DevStatusReqFreq !== undefined && output.DevStatusReqFreq !== null ? output.DevStatusReqFreq : undefined,
        DlBucketSize: output.DlBucketSize !== undefined && output.DlBucketSize !== null ? output.DlBucketSize : undefined,
        DlRate: output.DlRate !== undefined && output.DlRate !== null ? output.DlRate : undefined,
        DlRatePolicy: output.DlRatePolicy !== undefined && output.DlRatePolicy !== null ? output.DlRatePolicy : undefined,
        DrMax: output.DrMax !== undefined && output.DrMax !== null ? output.DrMax : undefined,
        DrMin: output.DrMin !== undefined && output.DrMin !== null ? output.DrMin : undefined,
        HrAllowed: output.HrAllowed !== undefined && output.HrAllowed !== null ? output.HrAllowed : undefined,
        MinGwDiversity: output.MinGwDiversity !== undefined && output.MinGwDiversity !== null ? output.MinGwDiversity : undefined,
        NwkGeoLoc: output.NwkGeoLoc !== undefined && output.NwkGeoLoc !== null ? output.NwkGeoLoc : undefined,
        PrAllowed: output.PrAllowed !== undefined && output.PrAllowed !== null ? output.PrAllowed : undefined,
        RaAllowed: output.RaAllowed !== undefined && output.RaAllowed !== null ? output.RaAllowed : undefined,
        ReportDevStatusBattery: output.ReportDevStatusBattery !== undefined && output.ReportDevStatusBattery !== null
            ? output.ReportDevStatusBattery
            : undefined,
        ReportDevStatusMargin: output.ReportDevStatusMargin !== undefined && output.ReportDevStatusMargin !== null
            ? output.ReportDevStatusMargin
            : undefined,
        TargetPer: output.TargetPer !== undefined && output.TargetPer !== null ? output.TargetPer : undefined,
        UlBucketSize: output.UlBucketSize !== undefined && output.UlBucketSize !== null ? output.UlBucketSize : undefined,
        UlRate: output.UlRate !== undefined && output.UlRate !== null ? output.UlRate : undefined,
        UlRatePolicy: output.UlRatePolicy !== undefined && output.UlRatePolicy !== null ? output.UlRatePolicy : undefined,
    };
};
const deserializeAws_restJson1LoRaWANListDevice = (output, context) => {
    return {
        DevEui: output.DevEui !== undefined && output.DevEui !== null ? output.DevEui : undefined,
    };
};
const deserializeAws_restJson1LoRaWANUpdateGatewayTaskCreate = (output, context) => {
    return {
        CurrentVersion: output.CurrentVersion !== undefined && output.CurrentVersion !== null
            ? deserializeAws_restJson1LoRaWANGatewayVersion(output.CurrentVersion, context)
            : undefined,
        SigKeyCrc: output.SigKeyCrc !== undefined && output.SigKeyCrc !== null ? output.SigKeyCrc : undefined,
        UpdateSignature: output.UpdateSignature !== undefined && output.UpdateSignature !== null ? output.UpdateSignature : undefined,
        UpdateVersion: output.UpdateVersion !== undefined && output.UpdateVersion !== null
            ? deserializeAws_restJson1LoRaWANGatewayVersion(output.UpdateVersion, context)
            : undefined,
    };
};
const deserializeAws_restJson1LoRaWANUpdateGatewayTaskEntry = (output, context) => {
    return {
        CurrentVersion: output.CurrentVersion !== undefined && output.CurrentVersion !== null
            ? deserializeAws_restJson1LoRaWANGatewayVersion(output.CurrentVersion, context)
            : undefined,
        UpdateVersion: output.UpdateVersion !== undefined && output.UpdateVersion !== null
            ? deserializeAws_restJson1LoRaWANGatewayVersion(output.UpdateVersion, context)
            : undefined,
    };
};
const deserializeAws_restJson1NetIdFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1OtaaV1_0_x = (output, context) => {
    return {
        AppEui: output.AppEui !== undefined && output.AppEui !== null ? output.AppEui : undefined,
        AppKey: output.AppKey !== undefined && output.AppKey !== null ? output.AppKey : undefined,
    };
};
const deserializeAws_restJson1OtaaV1_1 = (output, context) => {
    return {
        AppKey: output.AppKey !== undefined && output.AppKey !== null ? output.AppKey : undefined,
        JoinEui: output.JoinEui !== undefined && output.JoinEui !== null ? output.JoinEui : undefined,
        NwkKey: output.NwkKey !== undefined && output.NwkKey !== null ? output.NwkKey : undefined,
    };
};
const deserializeAws_restJson1ServiceProfile = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ServiceProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ServiceProfile(entry, context);
    });
};
const deserializeAws_restJson1SessionKeysAbpV1_0_x = (output, context) => {
    return {
        AppSKey: output.AppSKey !== undefined && output.AppSKey !== null ? output.AppSKey : undefined,
        NwkSKey: output.NwkSKey !== undefined && output.NwkSKey !== null ? output.NwkSKey : undefined,
    };
};
const deserializeAws_restJson1SessionKeysAbpV1_1 = (output, context) => {
    return {
        AppSKey: output.AppSKey !== undefined && output.AppSKey !== null ? output.AppSKey : undefined,
        FNwkSIntKey: output.FNwkSIntKey !== undefined && output.FNwkSIntKey !== null ? output.FNwkSIntKey : undefined,
        NwkSEncKey: output.NwkSEncKey !== undefined && output.NwkSEncKey !== null ? output.NwkSEncKey : undefined,
        SNwkSIntKey: output.SNwkSIntKey !== undefined && output.SNwkSIntKey !== null ? output.SNwkSIntKey : undefined,
    };
};
const deserializeAws_restJson1SidewalkAccountInfo = (output, context) => {
    return {
        AmazonId: output.AmazonId !== undefined && output.AmazonId !== null ? output.AmazonId : undefined,
        AppServerPrivateKey: output.AppServerPrivateKey !== undefined && output.AppServerPrivateKey !== null
            ? output.AppServerPrivateKey
            : undefined,
    };
};
const deserializeAws_restJson1SidewalkAccountInfoWithFingerprint = (output, context) => {
    return {
        AmazonId: output.AmazonId !== undefined && output.AmazonId !== null ? output.AmazonId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Fingerprint: output.Fingerprint !== undefined && output.Fingerprint !== null ? output.Fingerprint : undefined,
    };
};
const deserializeAws_restJson1SidewalkAccountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SidewalkAccountInfoWithFingerprint(entry, context);
    });
};
const deserializeAws_restJson1SidewalkDevice = (output, context) => {
    return {
        DeviceCertificates: output.DeviceCertificates !== undefined && output.DeviceCertificates !== null
            ? deserializeAws_restJson1DeviceCertificateList(output.DeviceCertificates, context)
            : undefined,
        SidewalkId: output.SidewalkId !== undefined && output.SidewalkId !== null ? output.SidewalkId : undefined,
        SidewalkManufacturingSn: output.SidewalkManufacturingSn !== undefined && output.SidewalkManufacturingSn !== null
            ? output.SidewalkManufacturingSn
            : undefined,
    };
};
const deserializeAws_restJson1SidewalkDeviceMetadata = (output, context) => {
    return {
        BatteryLevel: output.BatteryLevel !== undefined && output.BatteryLevel !== null ? output.BatteryLevel : undefined,
        DeviceState: output.DeviceState !== undefined && output.DeviceState !== null ? output.DeviceState : undefined,
        Event: output.Event !== undefined && output.Event !== null ? output.Event : undefined,
        Rssi: output.Rssi !== undefined && output.Rssi !== null ? output.Rssi : undefined,
    };
};
const deserializeAws_restJson1SidewalkListDevice = (output, context) => {
    return {
        AmazonId: output.AmazonId !== undefined && output.AmazonId !== null ? output.AmazonId : undefined,
        DeviceCertificates: output.DeviceCertificates !== undefined && output.DeviceCertificates !== null
            ? deserializeAws_restJson1DeviceCertificateList(output.DeviceCertificates, context)
            : undefined,
        SidewalkId: output.SidewalkId !== undefined && output.SidewalkId !== null ? output.SidewalkId : undefined,
        SidewalkManufacturingSn: output.SidewalkManufacturingSn !== undefined && output.SidewalkManufacturingSn !== null
            ? output.SidewalkManufacturingSn
            : undefined,
    };
};
const deserializeAws_restJson1SubBands = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1UpdateWirelessGatewayTaskCreate = (output, context) => {
    return {
        LoRaWAN: output.LoRaWAN !== undefined && output.LoRaWAN !== null
            ? deserializeAws_restJson1LoRaWANUpdateGatewayTaskCreate(output.LoRaWAN, context)
            : undefined,
        UpdateDataRole: output.UpdateDataRole !== undefined && output.UpdateDataRole !== null ? output.UpdateDataRole : undefined,
        UpdateDataSource: output.UpdateDataSource !== undefined && output.UpdateDataSource !== null ? output.UpdateDataSource : undefined,
    };
};
const deserializeAws_restJson1UpdateWirelessGatewayTaskEntry = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LoRaWAN: output.LoRaWAN !== undefined && output.LoRaWAN !== null
            ? deserializeAws_restJson1LoRaWANUpdateGatewayTaskEntry(output.LoRaWAN, context)
            : undefined,
    };
};
const deserializeAws_restJson1WirelessDeviceEventLogOption = (output, context) => {
    return {
        Event: output.Event !== undefined && output.Event !== null ? output.Event : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
    };
};
const deserializeAws_restJson1WirelessDeviceEventLogOptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WirelessDeviceEventLogOption(entry, context);
    });
};
const deserializeAws_restJson1WirelessDeviceLogOption = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_restJson1WirelessDeviceEventLogOptionList(output.Events, context)
            : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1WirelessDeviceLogOptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WirelessDeviceLogOption(entry, context);
    });
};
const deserializeAws_restJson1WirelessDeviceStatistics = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        DestinationName: output.DestinationName !== undefined && output.DestinationName !== null ? output.DestinationName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastUplinkReceivedAt: output.LastUplinkReceivedAt !== undefined && output.LastUplinkReceivedAt !== null
            ? output.LastUplinkReceivedAt
            : undefined,
        LoRaWAN: output.LoRaWAN !== undefined && output.LoRaWAN !== null
            ? deserializeAws_restJson1LoRaWANListDevice(output.LoRaWAN, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Sidewalk: output.Sidewalk !== undefined && output.Sidewalk !== null
            ? deserializeAws_restJson1SidewalkListDevice(output.Sidewalk, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1WirelessDeviceStatisticsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WirelessDeviceStatistics(entry, context);
    });
};
const deserializeAws_restJson1WirelessGatewayEventLogOption = (output, context) => {
    return {
        Event: output.Event !== undefined && output.Event !== null ? output.Event : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
    };
};
const deserializeAws_restJson1WirelessGatewayEventLogOptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WirelessGatewayEventLogOption(entry, context);
    });
};
const deserializeAws_restJson1WirelessGatewayLogOption = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_restJson1WirelessGatewayEventLogOptionList(output.Events, context)
            : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1WirelessGatewayLogOptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WirelessGatewayLogOption(entry, context);
    });
};
const deserializeAws_restJson1WirelessGatewayStatistics = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastUplinkReceivedAt: output.LastUplinkReceivedAt !== undefined && output.LastUplinkReceivedAt !== null
            ? output.LastUplinkReceivedAt
            : undefined,
        LoRaWAN: output.LoRaWAN !== undefined && output.LoRaWAN !== null
            ? deserializeAws_restJson1LoRaWANGateway(output.LoRaWAN, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1WirelessGatewayStatisticsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WirelessGatewayStatistics(entry, context);
    });
};
const deserializeAws_restJson1WirelessGatewayTaskDefinitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpdateWirelessGatewayTaskEntry(entry, context);
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