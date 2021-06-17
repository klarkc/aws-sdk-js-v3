"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1BatchGetDevicePositionCommand = exports.deserializeAws_restJson1BatchEvaluateGeofencesCommand = exports.deserializeAws_restJson1BatchDeleteGeofenceCommand = exports.deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = exports.deserializeAws_restJson1AssociateTrackerConsumerCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SearchPlaceIndexForTextCommand = exports.serializeAws_restJson1SearchPlaceIndexForPositionCommand = exports.serializeAws_restJson1PutGeofenceCommand = exports.serializeAws_restJson1ListTrackersCommand = exports.serializeAws_restJson1ListTrackerConsumersCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListRouteCalculatorsCommand = exports.serializeAws_restJson1ListPlaceIndexesCommand = exports.serializeAws_restJson1ListMapsCommand = exports.serializeAws_restJson1ListGeofencesCommand = exports.serializeAws_restJson1ListGeofenceCollectionsCommand = exports.serializeAws_restJson1ListDevicePositionsCommand = exports.serializeAws_restJson1GetMapTileCommand = exports.serializeAws_restJson1GetMapStyleDescriptorCommand = exports.serializeAws_restJson1GetMapSpritesCommand = exports.serializeAws_restJson1GetMapGlyphsCommand = exports.serializeAws_restJson1GetGeofenceCommand = exports.serializeAws_restJson1GetDevicePositionHistoryCommand = exports.serializeAws_restJson1GetDevicePositionCommand = exports.serializeAws_restJson1DisassociateTrackerConsumerCommand = exports.serializeAws_restJson1DescribeTrackerCommand = exports.serializeAws_restJson1DescribeRouteCalculatorCommand = exports.serializeAws_restJson1DescribePlaceIndexCommand = exports.serializeAws_restJson1DescribeMapCommand = exports.serializeAws_restJson1DescribeGeofenceCollectionCommand = exports.serializeAws_restJson1DeleteTrackerCommand = exports.serializeAws_restJson1DeleteRouteCalculatorCommand = exports.serializeAws_restJson1DeletePlaceIndexCommand = exports.serializeAws_restJson1DeleteMapCommand = exports.serializeAws_restJson1DeleteGeofenceCollectionCommand = exports.serializeAws_restJson1CreateTrackerCommand = exports.serializeAws_restJson1CreateRouteCalculatorCommand = exports.serializeAws_restJson1CreatePlaceIndexCommand = exports.serializeAws_restJson1CreateMapCommand = exports.serializeAws_restJson1CreateGeofenceCollectionCommand = exports.serializeAws_restJson1CalculateRouteCommand = exports.serializeAws_restJson1BatchUpdateDevicePositionCommand = exports.serializeAws_restJson1BatchPutGeofenceCommand = exports.serializeAws_restJson1BatchGetDevicePositionCommand = exports.serializeAws_restJson1BatchEvaluateGeofencesCommand = exports.serializeAws_restJson1BatchDeleteGeofenceCommand = exports.serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = exports.serializeAws_restJson1AssociateTrackerConsumerCommand = void 0;
exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SearchPlaceIndexForTextCommand = exports.deserializeAws_restJson1SearchPlaceIndexForPositionCommand = exports.deserializeAws_restJson1PutGeofenceCommand = exports.deserializeAws_restJson1ListTrackersCommand = exports.deserializeAws_restJson1ListTrackerConsumersCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListRouteCalculatorsCommand = exports.deserializeAws_restJson1ListPlaceIndexesCommand = exports.deserializeAws_restJson1ListMapsCommand = exports.deserializeAws_restJson1ListGeofencesCommand = exports.deserializeAws_restJson1ListGeofenceCollectionsCommand = exports.deserializeAws_restJson1ListDevicePositionsCommand = exports.deserializeAws_restJson1GetMapTileCommand = exports.deserializeAws_restJson1GetMapStyleDescriptorCommand = exports.deserializeAws_restJson1GetMapSpritesCommand = exports.deserializeAws_restJson1GetMapGlyphsCommand = exports.deserializeAws_restJson1GetGeofenceCommand = exports.deserializeAws_restJson1GetDevicePositionHistoryCommand = exports.deserializeAws_restJson1GetDevicePositionCommand = exports.deserializeAws_restJson1DisassociateTrackerConsumerCommand = exports.deserializeAws_restJson1DescribeTrackerCommand = exports.deserializeAws_restJson1DescribeRouteCalculatorCommand = exports.deserializeAws_restJson1DescribePlaceIndexCommand = exports.deserializeAws_restJson1DescribeMapCommand = exports.deserializeAws_restJson1DescribeGeofenceCollectionCommand = exports.deserializeAws_restJson1DeleteTrackerCommand = exports.deserializeAws_restJson1DeleteRouteCalculatorCommand = exports.deserializeAws_restJson1DeletePlaceIndexCommand = exports.deserializeAws_restJson1DeleteMapCommand = exports.deserializeAws_restJson1DeleteGeofenceCollectionCommand = exports.deserializeAws_restJson1CreateTrackerCommand = exports.deserializeAws_restJson1CreateRouteCalculatorCommand = exports.deserializeAws_restJson1CreatePlaceIndexCommand = exports.deserializeAws_restJson1CreateMapCommand = exports.deserializeAws_restJson1CreateGeofenceCollectionCommand = exports.deserializeAws_restJson1CalculateRouteCommand = exports.deserializeAws_restJson1BatchUpdateDevicePositionCommand = exports.deserializeAws_restJson1BatchPutGeofenceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AssociateTrackerConsumerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/consumers";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConsumerArn !== undefined && input.ConsumerArn !== null && { ConsumerArn: input.ConsumerArn }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1AssociateTrackerConsumerCommand = serializeAws_restJson1AssociateTrackerConsumerCommand;
const serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/delete-positions";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeviceIds !== undefined &&
            input.DeviceIds !== null && { DeviceIds: serializeAws_restJson1DeviceIdsList(input.DeviceIds, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand;
const serializeAws_restJson1BatchDeleteGeofenceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}/delete-geofences";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GeofenceIds !== undefined &&
            input.GeofenceIds !== null && { GeofenceIds: serializeAws_restJson1IdList(input.GeofenceIds, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchDeleteGeofenceCommand = serializeAws_restJson1BatchDeleteGeofenceCommand;
const serializeAws_restJson1BatchEvaluateGeofencesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}/positions";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DevicePositionUpdates !== undefined &&
            input.DevicePositionUpdates !== null && {
            DevicePositionUpdates: serializeAws_restJson1DevicePositionUpdateList(input.DevicePositionUpdates, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchEvaluateGeofencesCommand = serializeAws_restJson1BatchEvaluateGeofencesCommand;
const serializeAws_restJson1BatchGetDevicePositionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/get-positions";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeviceIds !== undefined &&
            input.DeviceIds !== null && { DeviceIds: serializeAws_restJson1IdList(input.DeviceIds, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchGetDevicePositionCommand = serializeAws_restJson1BatchGetDevicePositionCommand;
const serializeAws_restJson1BatchPutGeofenceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}/put-geofences";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Entries !== undefined &&
            input.Entries !== null && {
            Entries: serializeAws_restJson1BatchPutGeofenceRequestEntryList(input.Entries, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchPutGeofenceCommand = serializeAws_restJson1BatchPutGeofenceCommand;
const serializeAws_restJson1BatchUpdateDevicePositionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/positions";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_restJson1DevicePositionUpdateList(input.Updates, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchUpdateDevicePositionCommand = serializeAws_restJson1BatchUpdateDevicePositionCommand;
const serializeAws_restJson1CalculateRouteCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routes/v0/calculators/{CalculatorName}/calculate/route";
    if (input.CalculatorName !== undefined) {
        const labelValue = input.CalculatorName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CalculatorName.");
        }
        resolvedPath = resolvedPath.replace("{CalculatorName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CalculatorName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CarModeOptions !== undefined &&
            input.CarModeOptions !== null && {
            CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
        }),
        ...(input.DepartNow !== undefined && input.DepartNow !== null && { DepartNow: input.DepartNow }),
        ...(input.DeparturePosition !== undefined &&
            input.DeparturePosition !== null && {
            DeparturePosition: serializeAws_restJson1Position(input.DeparturePosition, context),
        }),
        ...(input.DepartureTime !== undefined &&
            input.DepartureTime !== null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
        ...(input.DestinationPosition !== undefined &&
            input.DestinationPosition !== null && {
            DestinationPosition: serializeAws_restJson1Position(input.DestinationPosition, context),
        }),
        ...(input.DistanceUnit !== undefined && input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }),
        ...(input.IncludeLegGeometry !== undefined &&
            input.IncludeLegGeometry !== null && { IncludeLegGeometry: input.IncludeLegGeometry }),
        ...(input.TravelMode !== undefined && input.TravelMode !== null && { TravelMode: input.TravelMode }),
        ...(input.TruckModeOptions !== undefined &&
            input.TruckModeOptions !== null && {
            TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
        }),
        ...(input.WaypointPositions !== undefined &&
            input.WaypointPositions !== null && {
            WaypointPositions: serializeAws_restJson1WaypointPositionList(input.WaypointPositions, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CalculateRouteCommand = serializeAws_restJson1CalculateRouteCommand;
const serializeAws_restJson1CreateGeofenceCollectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/collections";
    let body;
    body = JSON.stringify({
        ...(input.CollectionName !== undefined &&
            input.CollectionName !== null && { CollectionName: input.CollectionName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
        ...(input.PricingPlanDataSource !== undefined &&
            input.PricingPlanDataSource !== null && { PricingPlanDataSource: input.PricingPlanDataSource }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateGeofenceCollectionCommand = serializeAws_restJson1CreateGeofenceCollectionCommand;
const serializeAws_restJson1CreateMapCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/maps/v0/maps";
    let body;
    body = JSON.stringify({
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_restJson1MapConfiguration(input.Configuration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.MapName !== undefined && input.MapName !== null && { MapName: input.MapName }),
        ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateMapCommand = serializeAws_restJson1CreateMapCommand;
const serializeAws_restJson1CreatePlaceIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/places/v0/indexes";
    let body;
    body = JSON.stringify({
        ...(input.DataSource !== undefined && input.DataSource !== null && { DataSource: input.DataSource }),
        ...(input.DataSourceConfiguration !== undefined &&
            input.DataSourceConfiguration !== null && {
            DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePlaceIndexCommand = serializeAws_restJson1CreatePlaceIndexCommand;
const serializeAws_restJson1CreateRouteCalculatorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routes/v0/calculators";
    let body;
    body = JSON.stringify({
        ...(input.CalculatorName !== undefined &&
            input.CalculatorName !== null && { CalculatorName: input.CalculatorName }),
        ...(input.DataSource !== undefined && input.DataSource !== null && { DataSource: input.DataSource }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateRouteCalculatorCommand = serializeAws_restJson1CreateRouteCalculatorCommand;
const serializeAws_restJson1CreateTrackerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers";
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
        ...(input.PricingPlanDataSource !== undefined &&
            input.PricingPlanDataSource !== null && { PricingPlanDataSource: input.PricingPlanDataSource }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.TrackerName !== undefined && input.TrackerName !== null && { TrackerName: input.TrackerName }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTrackerCommand = serializeAws_restJson1CreateTrackerCommand;
const serializeAws_restJson1DeleteGeofenceCollectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteGeofenceCollectionCommand = serializeAws_restJson1DeleteGeofenceCollectionCommand;
const serializeAws_restJson1DeleteMapCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/maps/v0/maps/{MapName}";
    if (input.MapName !== undefined) {
        const labelValue = input.MapName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MapName.");
        }
        resolvedPath = resolvedPath.replace("{MapName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MapName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteMapCommand = serializeAws_restJson1DeleteMapCommand;
const serializeAws_restJson1DeletePlaceIndexCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/places/v0/indexes/{IndexName}";
    if (input.IndexName !== undefined) {
        const labelValue = input.IndexName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IndexName.");
        }
        resolvedPath = resolvedPath.replace("{IndexName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IndexName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeletePlaceIndexCommand = serializeAws_restJson1DeletePlaceIndexCommand;
const serializeAws_restJson1DeleteRouteCalculatorCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/routes/v0/calculators/{CalculatorName}";
    if (input.CalculatorName !== undefined) {
        const labelValue = input.CalculatorName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CalculatorName.");
        }
        resolvedPath = resolvedPath.replace("{CalculatorName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CalculatorName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteRouteCalculatorCommand = serializeAws_restJson1DeleteRouteCalculatorCommand;
const serializeAws_restJson1DeleteTrackerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteTrackerCommand = serializeAws_restJson1DeleteTrackerCommand;
const serializeAws_restJson1DescribeGeofenceCollectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeGeofenceCollectionCommand = serializeAws_restJson1DescribeGeofenceCollectionCommand;
const serializeAws_restJson1DescribeMapCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/maps/v0/maps/{MapName}";
    if (input.MapName !== undefined) {
        const labelValue = input.MapName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MapName.");
        }
        resolvedPath = resolvedPath.replace("{MapName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MapName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeMapCommand = serializeAws_restJson1DescribeMapCommand;
const serializeAws_restJson1DescribePlaceIndexCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/places/v0/indexes/{IndexName}";
    if (input.IndexName !== undefined) {
        const labelValue = input.IndexName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IndexName.");
        }
        resolvedPath = resolvedPath.replace("{IndexName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IndexName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribePlaceIndexCommand = serializeAws_restJson1DescribePlaceIndexCommand;
const serializeAws_restJson1DescribeRouteCalculatorCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/routes/v0/calculators/{CalculatorName}";
    if (input.CalculatorName !== undefined) {
        const labelValue = input.CalculatorName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CalculatorName.");
        }
        resolvedPath = resolvedPath.replace("{CalculatorName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CalculatorName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeRouteCalculatorCommand = serializeAws_restJson1DescribeRouteCalculatorCommand;
const serializeAws_restJson1DescribeTrackerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeTrackerCommand = serializeAws_restJson1DescribeTrackerCommand;
const serializeAws_restJson1DisassociateTrackerConsumerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    if (input.ConsumerArn !== undefined) {
        const labelValue = input.ConsumerArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConsumerArn.");
        }
        resolvedPath = resolvedPath.replace("{ConsumerArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConsumerArn.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DisassociateTrackerConsumerCommand = serializeAws_restJson1DisassociateTrackerConsumerCommand;
const serializeAws_restJson1GetDevicePositionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDevicePositionCommand = serializeAws_restJson1GetDevicePositionCommand;
const serializeAws_restJson1GetDevicePositionHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EndTimeExclusive !== undefined &&
            input.EndTimeExclusive !== null && {
            EndTimeExclusive: input.EndTimeExclusive.toISOString().split(".")[0] + "Z",
        }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTimeInclusive !== undefined &&
            input.StartTimeInclusive !== null && {
            StartTimeInclusive: input.StartTimeInclusive.toISOString().split(".")[0] + "Z",
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDevicePositionHistoryCommand = serializeAws_restJson1GetDevicePositionHistoryCommand;
const serializeAws_restJson1GetGeofenceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    if (input.GeofenceId !== undefined) {
        const labelValue = input.GeofenceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GeofenceId.");
        }
        resolvedPath = resolvedPath.replace("{GeofenceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GeofenceId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetGeofenceCommand = serializeAws_restJson1GetGeofenceCommand;
const serializeAws_restJson1GetMapGlyphsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}";
    if (input.MapName !== undefined) {
        const labelValue = input.MapName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MapName.");
        }
        resolvedPath = resolvedPath.replace("{MapName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MapName.");
    }
    if (input.FontStack !== undefined) {
        const labelValue = input.FontStack;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FontStack.");
        }
        resolvedPath = resolvedPath.replace("{FontStack}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FontStack.");
    }
    if (input.FontUnicodeRange !== undefined) {
        const labelValue = input.FontUnicodeRange;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FontUnicodeRange.");
        }
        resolvedPath = resolvedPath.replace("{FontUnicodeRange}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FontUnicodeRange.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapGlyphsCommand = serializeAws_restJson1GetMapGlyphsCommand;
const serializeAws_restJson1GetMapSpritesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/maps/v0/maps/{MapName}/sprites/{FileName}";
    if (input.MapName !== undefined) {
        const labelValue = input.MapName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MapName.");
        }
        resolvedPath = resolvedPath.replace("{MapName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MapName.");
    }
    if (input.FileName !== undefined) {
        const labelValue = input.FileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileName.");
        }
        resolvedPath = resolvedPath.replace("{FileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapSpritesCommand = serializeAws_restJson1GetMapSpritesCommand;
const serializeAws_restJson1GetMapStyleDescriptorCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/maps/v0/maps/{MapName}/style-descriptor";
    if (input.MapName !== undefined) {
        const labelValue = input.MapName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MapName.");
        }
        resolvedPath = resolvedPath.replace("{MapName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MapName.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapStyleDescriptorCommand = serializeAws_restJson1GetMapStyleDescriptorCommand;
const serializeAws_restJson1GetMapTileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}";
    if (input.MapName !== undefined) {
        const labelValue = input.MapName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MapName.");
        }
        resolvedPath = resolvedPath.replace("{MapName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MapName.");
    }
    if (input.Z !== undefined) {
        const labelValue = input.Z;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Z.");
        }
        resolvedPath = resolvedPath.replace("{Z}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Z.");
    }
    if (input.X !== undefined) {
        const labelValue = input.X;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: X.");
        }
        resolvedPath = resolvedPath.replace("{X}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: X.");
    }
    if (input.Y !== undefined) {
        const labelValue = input.Y;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Y.");
        }
        resolvedPath = resolvedPath.replace("{Y}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Y.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapTileCommand = serializeAws_restJson1GetMapTileCommand;
const serializeAws_restJson1ListDevicePositionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/list-positions";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListDevicePositionsCommand = serializeAws_restJson1ListDevicePositionsCommand;
const serializeAws_restJson1ListGeofenceCollectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/list-collections";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListGeofenceCollectionsCommand = serializeAws_restJson1ListGeofenceCollectionsCommand;
const serializeAws_restJson1ListGeofencesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}/list-geofences";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListGeofencesCommand = serializeAws_restJson1ListGeofencesCommand;
const serializeAws_restJson1ListMapsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/maps/v0/list-maps";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListMapsCommand = serializeAws_restJson1ListMapsCommand;
const serializeAws_restJson1ListPlaceIndexesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/places/v0/list-indexes";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListPlaceIndexesCommand = serializeAws_restJson1ListPlaceIndexesCommand;
const serializeAws_restJson1ListRouteCalculatorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routes/v0/list-calculators";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListRouteCalculatorsCommand = serializeAws_restJson1ListRouteCalculatorsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "metadata." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTrackerConsumersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/trackers/{TrackerName}/list-consumers";
    if (input.TrackerName !== undefined) {
        const labelValue = input.TrackerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TrackerName.");
        }
        resolvedPath = resolvedPath.replace("{TrackerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TrackerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTrackerConsumersCommand = serializeAws_restJson1ListTrackerConsumersCommand;
const serializeAws_restJson1ListTrackersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tracking/v0/list-trackers";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTrackersCommand = serializeAws_restJson1ListTrackersCommand;
const serializeAws_restJson1PutGeofenceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
    if (input.CollectionName !== undefined) {
        const labelValue = input.CollectionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CollectionName.");
        }
        resolvedPath = resolvedPath.replace("{CollectionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CollectionName.");
    }
    if (input.GeofenceId !== undefined) {
        const labelValue = input.GeofenceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GeofenceId.");
        }
        resolvedPath = resolvedPath.replace("{GeofenceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GeofenceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Geometry !== undefined &&
            input.Geometry !== null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutGeofenceCommand = serializeAws_restJson1PutGeofenceCommand;
const serializeAws_restJson1SearchPlaceIndexForPositionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/places/v0/indexes/{IndexName}/search/position";
    if (input.IndexName !== undefined) {
        const labelValue = input.IndexName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IndexName.");
        }
        resolvedPath = resolvedPath.replace("{IndexName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IndexName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Position !== undefined &&
            input.Position !== null && { Position: serializeAws_restJson1Position(input.Position, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchPlaceIndexForPositionCommand = serializeAws_restJson1SearchPlaceIndexForPositionCommand;
const serializeAws_restJson1SearchPlaceIndexForTextCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/places/v0/indexes/{IndexName}/search/text";
    if (input.IndexName !== undefined) {
        const labelValue = input.IndexName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IndexName.");
        }
        resolvedPath = resolvedPath.replace("{IndexName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IndexName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BiasPosition !== undefined &&
            input.BiasPosition !== null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }),
        ...(input.FilterBBox !== undefined &&
            input.FilterBBox !== null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }),
        ...(input.FilterCountries !== undefined &&
            input.FilterCountries !== null && {
            FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchPlaceIndexForTextCommand = serializeAws_restJson1SearchPlaceIndexForTextCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
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
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "metadata." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "metadata." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1AssociateTrackerConsumerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateTrackerConsumerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateTrackerConsumerCommand = deserializeAws_restJson1AssociateTrackerConsumerCommand;
const deserializeAws_restJson1AssociateTrackerConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList(data.Errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand;
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1BatchDeleteGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteGeofenceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1BatchDeleteGeofenceErrorList(data.Errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteGeofenceCommand = deserializeAws_restJson1BatchDeleteGeofenceCommand;
const deserializeAws_restJson1BatchDeleteGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1BatchEvaluateGeofencesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchEvaluateGeofencesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1BatchEvaluateGeofencesErrorList(data.Errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchEvaluateGeofencesCommand = deserializeAws_restJson1BatchEvaluateGeofencesCommand;
const deserializeAws_restJson1BatchEvaluateGeofencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1BatchGetDevicePositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchGetDevicePositionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DevicePositions: undefined,
        Errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DevicePositions !== undefined && data.DevicePositions !== null) {
        contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
    }
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1BatchGetDevicePositionErrorList(data.Errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchGetDevicePositionCommand = deserializeAws_restJson1BatchGetDevicePositionCommand;
const deserializeAws_restJson1BatchGetDevicePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1BatchPutGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchPutGeofenceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Errors: undefined,
        Successes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1BatchPutGeofenceErrorList(data.Errors, context);
    }
    if (data.Successes !== undefined && data.Successes !== null) {
        contents.Successes = deserializeAws_restJson1BatchPutGeofenceSuccessList(data.Successes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchPutGeofenceCommand = deserializeAws_restJson1BatchPutGeofenceCommand;
const deserializeAws_restJson1BatchPutGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1BatchUpdateDevicePositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchUpdateDevicePositionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1BatchUpdateDevicePositionErrorList(data.Errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchUpdateDevicePositionCommand = deserializeAws_restJson1BatchUpdateDevicePositionCommand;
const deserializeAws_restJson1BatchUpdateDevicePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1CalculateRouteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CalculateRouteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Legs: undefined,
        Summary: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Legs !== undefined && data.Legs !== null) {
        contents.Legs = deserializeAws_restJson1LegList(data.Legs, context);
    }
    if (data.Summary !== undefined && data.Summary !== null) {
        contents.Summary = deserializeAws_restJson1CalculateRouteSummary(data.Summary, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CalculateRouteCommand = deserializeAws_restJson1CalculateRouteCommand;
const deserializeAws_restJson1CalculateRouteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1CreateGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGeofenceCollectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CollectionArn: undefined,
        CollectionName: undefined,
        CreateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CollectionArn !== undefined && data.CollectionArn !== null) {
        contents.CollectionArn = data.CollectionArn;
    }
    if (data.CollectionName !== undefined && data.CollectionName !== null) {
        contents.CollectionName = data.CollectionName;
    }
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGeofenceCollectionCommand = deserializeAws_restJson1CreateGeofenceCollectionCommand;
const deserializeAws_restJson1CreateGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1CreateMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMapCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        MapArn: undefined,
        MapName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.MapArn !== undefined && data.MapArn !== null) {
        contents.MapArn = data.MapArn;
    }
    if (data.MapName !== undefined && data.MapName !== null) {
        contents.MapName = data.MapName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMapCommand = deserializeAws_restJson1CreateMapCommand;
const deserializeAws_restJson1CreateMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1CreatePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePlaceIndexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        IndexArn: undefined,
        IndexName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.IndexArn !== undefined && data.IndexArn !== null) {
        contents.IndexArn = data.IndexArn;
    }
    if (data.IndexName !== undefined && data.IndexName !== null) {
        contents.IndexName = data.IndexName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePlaceIndexCommand = deserializeAws_restJson1CreatePlaceIndexCommand;
const deserializeAws_restJson1CreatePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1CreateRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRouteCalculatorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CalculatorArn: undefined,
        CalculatorName: undefined,
        CreateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CalculatorArn !== undefined && data.CalculatorArn !== null) {
        contents.CalculatorArn = data.CalculatorArn;
    }
    if (data.CalculatorName !== undefined && data.CalculatorName !== null) {
        contents.CalculatorName = data.CalculatorName;
    }
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRouteCalculatorCommand = deserializeAws_restJson1CreateRouteCalculatorCommand;
const deserializeAws_restJson1CreateRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1CreateTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTrackerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        TrackerArn: undefined,
        TrackerName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.TrackerArn !== undefined && data.TrackerArn !== null) {
        contents.TrackerArn = data.TrackerArn;
    }
    if (data.TrackerName !== undefined && data.TrackerName !== null) {
        contents.TrackerName = data.TrackerName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTrackerCommand = deserializeAws_restJson1CreateTrackerCommand;
const deserializeAws_restJson1CreateTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DeleteGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGeofenceCollectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGeofenceCollectionCommand = deserializeAws_restJson1DeleteGeofenceCollectionCommand;
const deserializeAws_restJson1DeleteGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DeleteMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMapCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMapCommand = deserializeAws_restJson1DeleteMapCommand;
const deserializeAws_restJson1DeleteMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DeletePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePlaceIndexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePlaceIndexCommand = deserializeAws_restJson1DeletePlaceIndexCommand;
const deserializeAws_restJson1DeletePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DeleteRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRouteCalculatorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRouteCalculatorCommand = deserializeAws_restJson1DeleteRouteCalculatorCommand;
const deserializeAws_restJson1DeleteRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DeleteTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTrackerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTrackerCommand = deserializeAws_restJson1DeleteTrackerCommand;
const deserializeAws_restJson1DeleteTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DescribeGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGeofenceCollectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CollectionArn: undefined,
        CollectionName: undefined,
        CreateTime: undefined,
        Description: undefined,
        KmsKeyId: undefined,
        PricingPlan: undefined,
        PricingPlanDataSource: undefined,
        Tags: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CollectionArn !== undefined && data.CollectionArn !== null) {
        contents.CollectionArn = data.CollectionArn;
    }
    if (data.CollectionName !== undefined && data.CollectionName !== null) {
        contents.CollectionName = data.CollectionName;
    }
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
        contents.KmsKeyId = data.KmsKeyId;
    }
    if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
        contents.PricingPlan = data.PricingPlan;
    }
    if (data.PricingPlanDataSource !== undefined && data.PricingPlanDataSource !== null) {
        contents.PricingPlanDataSource = data.PricingPlanDataSource;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGeofenceCollectionCommand = deserializeAws_restJson1DescribeGeofenceCollectionCommand;
const deserializeAws_restJson1DescribeGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DescribeMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMapCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Configuration: undefined,
        CreateTime: undefined,
        DataSource: undefined,
        Description: undefined,
        MapArn: undefined,
        MapName: undefined,
        PricingPlan: undefined,
        Tags: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Configuration !== undefined && data.Configuration !== null) {
        contents.Configuration = deserializeAws_restJson1MapConfiguration(data.Configuration, context);
    }
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.DataSource !== undefined && data.DataSource !== null) {
        contents.DataSource = data.DataSource;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.MapArn !== undefined && data.MapArn !== null) {
        contents.MapArn = data.MapArn;
    }
    if (data.MapName !== undefined && data.MapName !== null) {
        contents.MapName = data.MapName;
    }
    if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
        contents.PricingPlan = data.PricingPlan;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMapCommand = deserializeAws_restJson1DescribeMapCommand;
const deserializeAws_restJson1DescribeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DescribePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePlaceIndexCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        DataSource: undefined,
        DataSourceConfiguration: undefined,
        Description: undefined,
        IndexArn: undefined,
        IndexName: undefined,
        PricingPlan: undefined,
        Tags: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.DataSource !== undefined && data.DataSource !== null) {
        contents.DataSource = data.DataSource;
    }
    if (data.DataSourceConfiguration !== undefined && data.DataSourceConfiguration !== null) {
        contents.DataSourceConfiguration = deserializeAws_restJson1DataSourceConfiguration(data.DataSourceConfiguration, context);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.IndexArn !== undefined && data.IndexArn !== null) {
        contents.IndexArn = data.IndexArn;
    }
    if (data.IndexName !== undefined && data.IndexName !== null) {
        contents.IndexName = data.IndexName;
    }
    if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
        contents.PricingPlan = data.PricingPlan;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePlaceIndexCommand = deserializeAws_restJson1DescribePlaceIndexCommand;
const deserializeAws_restJson1DescribePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DescribeRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRouteCalculatorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CalculatorArn: undefined,
        CalculatorName: undefined,
        CreateTime: undefined,
        DataSource: undefined,
        Description: undefined,
        PricingPlan: undefined,
        Tags: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CalculatorArn !== undefined && data.CalculatorArn !== null) {
        contents.CalculatorArn = data.CalculatorArn;
    }
    if (data.CalculatorName !== undefined && data.CalculatorName !== null) {
        contents.CalculatorName = data.CalculatorName;
    }
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.DataSource !== undefined && data.DataSource !== null) {
        contents.DataSource = data.DataSource;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
        contents.PricingPlan = data.PricingPlan;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRouteCalculatorCommand = deserializeAws_restJson1DescribeRouteCalculatorCommand;
const deserializeAws_restJson1DescribeRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DescribeTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTrackerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        Description: undefined,
        KmsKeyId: undefined,
        PricingPlan: undefined,
        PricingPlanDataSource: undefined,
        Tags: undefined,
        TrackerArn: undefined,
        TrackerName: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
        contents.KmsKeyId = data.KmsKeyId;
    }
    if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
        contents.PricingPlan = data.PricingPlan;
    }
    if (data.PricingPlanDataSource !== undefined && data.PricingPlanDataSource !== null) {
        contents.PricingPlanDataSource = data.PricingPlanDataSource;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.TrackerArn !== undefined && data.TrackerArn !== null) {
        contents.TrackerArn = data.TrackerArn;
    }
    if (data.TrackerName !== undefined && data.TrackerName !== null) {
        contents.TrackerName = data.TrackerName;
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeTrackerCommand = deserializeAws_restJson1DescribeTrackerCommand;
const deserializeAws_restJson1DescribeTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1DisassociateTrackerConsumerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateTrackerConsumerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateTrackerConsumerCommand = deserializeAws_restJson1DisassociateTrackerConsumerCommand;
const deserializeAws_restJson1DisassociateTrackerConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetDevicePositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDevicePositionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceId: undefined,
        Position: undefined,
        ReceivedTime: undefined,
        SampleTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeviceId !== undefined && data.DeviceId !== null) {
        contents.DeviceId = data.DeviceId;
    }
    if (data.Position !== undefined && data.Position !== null) {
        contents.Position = deserializeAws_restJson1Position(data.Position, context);
    }
    if (data.ReceivedTime !== undefined && data.ReceivedTime !== null) {
        contents.ReceivedTime = new Date(data.ReceivedTime);
    }
    if (data.SampleTime !== undefined && data.SampleTime !== null) {
        contents.SampleTime = new Date(data.SampleTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDevicePositionCommand = deserializeAws_restJson1GetDevicePositionCommand;
const deserializeAws_restJson1GetDevicePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetDevicePositionHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDevicePositionHistoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DevicePositions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DevicePositions !== undefined && data.DevicePositions !== null) {
        contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDevicePositionHistoryCommand = deserializeAws_restJson1GetDevicePositionHistoryCommand;
const deserializeAws_restJson1GetDevicePositionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGeofenceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        GeofenceId: undefined,
        Geometry: undefined,
        Status: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.GeofenceId !== undefined && data.GeofenceId !== null) {
        contents.GeofenceId = data.GeofenceId;
    }
    if (data.Geometry !== undefined && data.Geometry !== null) {
        contents.Geometry = deserializeAws_restJson1GeofenceGeometry(data.Geometry, context);
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGeofenceCommand = deserializeAws_restJson1GetGeofenceCommand;
const deserializeAws_restJson1GetGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetMapGlyphsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapGlyphsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Blob: undefined,
        ContentType: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMapGlyphsCommand = deserializeAws_restJson1GetMapGlyphsCommand;
const deserializeAws_restJson1GetMapGlyphsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetMapSpritesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapSpritesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Blob: undefined,
        ContentType: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMapSpritesCommand = deserializeAws_restJson1GetMapSpritesCommand;
const deserializeAws_restJson1GetMapSpritesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetMapStyleDescriptorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapStyleDescriptorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Blob: undefined,
        ContentType: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMapStyleDescriptorCommand = deserializeAws_restJson1GetMapStyleDescriptorCommand;
const deserializeAws_restJson1GetMapStyleDescriptorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1GetMapTileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapTileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Blob: undefined,
        ContentType: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMapTileCommand = deserializeAws_restJson1GetMapTileCommand;
const deserializeAws_restJson1GetMapTileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListDevicePositionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDevicePositionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListDevicePositionsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDevicePositionsCommand = deserializeAws_restJson1ListDevicePositionsCommand;
const deserializeAws_restJson1ListDevicePositionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListGeofenceCollectionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGeofenceCollectionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGeofenceCollectionsCommand = deserializeAws_restJson1ListGeofenceCollectionsCommand;
const deserializeAws_restJson1ListGeofenceCollectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListGeofencesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGeofencesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListGeofenceResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGeofencesCommand = deserializeAws_restJson1ListGeofencesCommand;
const deserializeAws_restJson1ListGeofencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListMapsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMapsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListMapsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMapsCommand = deserializeAws_restJson1ListMapsCommand;
const deserializeAws_restJson1ListMapsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListPlaceIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPlaceIndexesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListPlaceIndexesResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPlaceIndexesCommand = deserializeAws_restJson1ListPlaceIndexesCommand;
const deserializeAws_restJson1ListPlaceIndexesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListRouteCalculatorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRouteCalculatorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListRouteCalculatorsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRouteCalculatorsCommand = deserializeAws_restJson1ListRouteCalculatorsCommand;
const deserializeAws_restJson1ListRouteCalculatorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListTrackerConsumersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTrackerConsumersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConsumerArns: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConsumerArns !== undefined && data.ConsumerArns !== null) {
        contents.ConsumerArns = deserializeAws_restJson1ArnList(data.ConsumerArns, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTrackerConsumersCommand = deserializeAws_restJson1ListTrackerConsumersCommand;
const deserializeAws_restJson1ListTrackerConsumersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1ListTrackersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTrackersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Entries !== undefined && data.Entries !== null) {
        contents.Entries = deserializeAws_restJson1ListTrackersResponseEntryList(data.Entries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTrackersCommand = deserializeAws_restJson1ListTrackersCommand;
const deserializeAws_restJson1ListTrackersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1PutGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutGeofenceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTime: undefined,
        GeofenceId: undefined,
        UpdateTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateTime !== undefined && data.CreateTime !== null) {
        contents.CreateTime = new Date(data.CreateTime);
    }
    if (data.GeofenceId !== undefined && data.GeofenceId !== null) {
        contents.GeofenceId = data.GeofenceId;
    }
    if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
        contents.UpdateTime = new Date(data.UpdateTime);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutGeofenceCommand = deserializeAws_restJson1PutGeofenceCommand;
const deserializeAws_restJson1PutGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1SearchPlaceIndexForPositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchPlaceIndexForPositionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Results: undefined,
        Summary: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Results !== undefined && data.Results !== null) {
        contents.Results = deserializeAws_restJson1SearchForPositionResultList(data.Results, context);
    }
    if (data.Summary !== undefined && data.Summary !== null) {
        contents.Summary = deserializeAws_restJson1SearchPlaceIndexForPositionSummary(data.Summary, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchPlaceIndexForPositionCommand = deserializeAws_restJson1SearchPlaceIndexForPositionCommand;
const deserializeAws_restJson1SearchPlaceIndexForPositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1SearchPlaceIndexForTextCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchPlaceIndexForTextCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Results: undefined,
        Summary: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Results !== undefined && data.Results !== null) {
        contents.Results = deserializeAws_restJson1SearchForTextResultList(data.Results, context);
    }
    if (data.Summary !== undefined && data.Summary !== null) {
        contents.Summary = deserializeAws_restJson1SearchPlaceIndexForTextSummary(data.Summary, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchPlaceIndexForTextCommand = deserializeAws_restJson1SearchPlaceIndexForTextCommand;
const deserializeAws_restJson1SearchPlaceIndexForTextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
    if (output.statusCode !== 200 && output.statusCode >= 300) {
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
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
    if (output.statusCode !== 200 && output.statusCode >= 300) {
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
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        FieldList: undefined,
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.fieldList !== undefined && data.fieldList !== null) {
        contents.FieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    if (data.reason !== undefined && data.reason !== null) {
        contents.Reason = data.reason;
    }
    return contents;
};
const serializeAws_restJson1BatchPutGeofenceRequestEntry = (input, context) => {
    return {
        ...(input.GeofenceId !== undefined && input.GeofenceId !== null && { GeofenceId: input.GeofenceId }),
        ...(input.Geometry !== undefined &&
            input.Geometry !== null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
    };
};
const serializeAws_restJson1BatchPutGeofenceRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BatchPutGeofenceRequestEntry(entry, context);
    });
};
const serializeAws_restJson1BoundingBox = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1CalculateRouteCarModeOptions = (input, context) => {
    return {
        ...(input.AvoidFerries !== undefined && input.AvoidFerries !== null && { AvoidFerries: input.AvoidFerries }),
        ...(input.AvoidTolls !== undefined && input.AvoidTolls !== null && { AvoidTolls: input.AvoidTolls }),
    };
};
const serializeAws_restJson1CalculateRouteTruckModeOptions = (input, context) => {
    return {
        ...(input.AvoidFerries !== undefined && input.AvoidFerries !== null && { AvoidFerries: input.AvoidFerries }),
        ...(input.AvoidTolls !== undefined && input.AvoidTolls !== null && { AvoidTolls: input.AvoidTolls }),
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_restJson1TruckDimensions(input.Dimensions, context) }),
        ...(input.Weight !== undefined &&
            input.Weight !== null && { Weight: serializeAws_restJson1TruckWeight(input.Weight, context) }),
    };
};
const serializeAws_restJson1CountryCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DataSourceConfiguration = (input, context) => {
    return {
        ...(input.IntendedUse !== undefined && input.IntendedUse !== null && { IntendedUse: input.IntendedUse }),
    };
};
const serializeAws_restJson1DeviceIdsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DevicePositionUpdate = (input, context) => {
    return {
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.Position !== undefined &&
            input.Position !== null && { Position: serializeAws_restJson1Position(input.Position, context) }),
        ...(input.SampleTime !== undefined &&
            input.SampleTime !== null && { SampleTime: input.SampleTime.toISOString().split(".")[0] + "Z" }),
    };
};
const serializeAws_restJson1DevicePositionUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DevicePositionUpdate(entry, context);
    });
};
const serializeAws_restJson1GeofenceGeometry = (input, context) => {
    return {
        ...(input.Polygon !== undefined &&
            input.Polygon !== null && { Polygon: serializeAws_restJson1LinearRings(input.Polygon, context) }),
    };
};
const serializeAws_restJson1IdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LinearRing = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Position(entry, context);
    });
};
const serializeAws_restJson1LinearRings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LinearRing(entry, context);
    });
};
const serializeAws_restJson1MapConfiguration = (input, context) => {
    return {
        ...(input.Style !== undefined && input.Style !== null && { Style: input.Style }),
    };
};
const serializeAws_restJson1Position = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1TruckDimensions = (input, context) => {
    return {
        ...(input.Height !== undefined && input.Height !== null && { Height: input.Height }),
        ...(input.Length !== undefined && input.Length !== null && { Length: input.Length }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
        ...(input.Width !== undefined && input.Width !== null && { Width: input.Width }),
    };
};
const serializeAws_restJson1TruckWeight = (input, context) => {
    return {
        ...(input.Total !== undefined && input.Total !== null && { Total: input.Total }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    };
};
const serializeAws_restJson1WaypointPositionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Position(entry, context);
    });
};
const deserializeAws_restJson1ArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryError = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1BatchItemError(output.Error, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryError(entry, context);
    });
};
const deserializeAws_restJson1BatchDeleteGeofenceError = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1BatchItemError(output.Error, context)
            : undefined,
        GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
    };
};
const deserializeAws_restJson1BatchDeleteGeofenceErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchDeleteGeofenceError(entry, context);
    });
};
const deserializeAws_restJson1BatchEvaluateGeofencesError = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1BatchItemError(output.Error, context)
            : undefined,
        SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
    };
};
const deserializeAws_restJson1BatchEvaluateGeofencesErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchEvaluateGeofencesError(entry, context);
    });
};
const deserializeAws_restJson1BatchGetDevicePositionError = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1BatchItemError(output.Error, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchGetDevicePositionErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchGetDevicePositionError(entry, context);
    });
};
const deserializeAws_restJson1BatchItemError = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1BatchPutGeofenceError = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1BatchItemError(output.Error, context)
            : undefined,
        GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
    };
};
const deserializeAws_restJson1BatchPutGeofenceErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutGeofenceError(entry, context);
    });
};
const deserializeAws_restJson1BatchPutGeofenceSuccess = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1BatchPutGeofenceSuccessList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutGeofenceSuccess(entry, context);
    });
};
const deserializeAws_restJson1BatchUpdateDevicePositionError = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1BatchItemError(output.Error, context)
            : undefined,
        SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
    };
};
const deserializeAws_restJson1BatchUpdateDevicePositionErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchUpdateDevicePositionError(entry, context);
    });
};
const deserializeAws_restJson1BoundingBox = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1CalculateRouteSummary = (output, context) => {
    return {
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        Distance: output.Distance !== undefined && output.Distance !== null ? output.Distance : undefined,
        DistanceUnit: output.DistanceUnit !== undefined && output.DistanceUnit !== null ? output.DistanceUnit : undefined,
        DurationSeconds: output.DurationSeconds !== undefined && output.DurationSeconds !== null ? output.DurationSeconds : undefined,
        RouteBBox: output.RouteBBox !== undefined && output.RouteBBox !== null
            ? deserializeAws_restJson1BoundingBox(output.RouteBBox, context)
            : undefined,
    };
};
const deserializeAws_restJson1CountryCodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DataSourceConfiguration = (output, context) => {
    return {
        IntendedUse: output.IntendedUse !== undefined && output.IntendedUse !== null ? output.IntendedUse : undefined,
    };
};
const deserializeAws_restJson1DevicePosition = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        Position: output.Position !== undefined && output.Position !== null
            ? deserializeAws_restJson1Position(output.Position, context)
            : undefined,
        ReceivedTime: output.ReceivedTime !== undefined && output.ReceivedTime !== null ? new Date(output.ReceivedTime) : undefined,
        SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
    };
};
const deserializeAws_restJson1DevicePositionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DevicePosition(entry, context);
    });
};
const deserializeAws_restJson1GeofenceGeometry = (output, context) => {
    return {
        Polygon: output.Polygon !== undefined && output.Polygon !== null
            ? deserializeAws_restJson1LinearRings(output.Polygon, context)
            : undefined,
    };
};
const deserializeAws_restJson1Leg = (output, context) => {
    return {
        Distance: output.Distance !== undefined && output.Distance !== null ? output.Distance : undefined,
        DurationSeconds: output.DurationSeconds !== undefined && output.DurationSeconds !== null ? output.DurationSeconds : undefined,
        EndPosition: output.EndPosition !== undefined && output.EndPosition !== null
            ? deserializeAws_restJson1Position(output.EndPosition, context)
            : undefined,
        Geometry: output.Geometry !== undefined && output.Geometry !== null
            ? deserializeAws_restJson1LegGeometry(output.Geometry, context)
            : undefined,
        StartPosition: output.StartPosition !== undefined && output.StartPosition !== null
            ? deserializeAws_restJson1Position(output.StartPosition, context)
            : undefined,
        Steps: output.Steps !== undefined && output.Steps !== null
            ? deserializeAws_restJson1StepList(output.Steps, context)
            : undefined,
    };
};
const deserializeAws_restJson1LegGeometry = (output, context) => {
    return {
        LineString: output.LineString !== undefined && output.LineString !== null
            ? deserializeAws_restJson1LineString(output.LineString, context)
            : undefined,
    };
};
const deserializeAws_restJson1LegList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Leg(entry, context);
    });
};
const deserializeAws_restJson1LinearRing = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
};
const deserializeAws_restJson1LinearRings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LinearRing(entry, context);
    });
};
const deserializeAws_restJson1LineString = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
};
const deserializeAws_restJson1ListDevicePositionsResponseEntry = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        Position: output.Position !== undefined && output.Position !== null
            ? deserializeAws_restJson1Position(output.Position, context)
            : undefined,
        SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
    };
};
const deserializeAws_restJson1ListDevicePositionsResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListDevicePositionsResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1ListGeofenceCollectionsResponseEntry = (output, context) => {
    return {
        CollectionName: output.CollectionName !== undefined && output.CollectionName !== null ? output.CollectionName : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
        PricingPlanDataSource: output.PricingPlanDataSource !== undefined && output.PricingPlanDataSource !== null
            ? output.PricingPlanDataSource
            : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGeofenceCollectionsResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1ListGeofenceResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
        Geometry: output.Geometry !== undefined && output.Geometry !== null
            ? deserializeAws_restJson1GeofenceGeometry(output.Geometry, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1ListGeofenceResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGeofenceResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1ListMapsResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        MapName: output.MapName !== undefined && output.MapName !== null ? output.MapName : undefined,
        PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1ListMapsResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListMapsResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1ListPlaceIndexesResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1ListPlaceIndexesResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListPlaceIndexesResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1ListRouteCalculatorsResponseEntry = (output, context) => {
    return {
        CalculatorName: output.CalculatorName !== undefined && output.CalculatorName !== null ? output.CalculatorName : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1ListRouteCalculatorsResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListRouteCalculatorsResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1ListTrackersResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
        PricingPlanDataSource: output.PricingPlanDataSource !== undefined && output.PricingPlanDataSource !== null
            ? output.PricingPlanDataSource
            : undefined,
        TrackerName: output.TrackerName !== undefined && output.TrackerName !== null ? output.TrackerName : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
    };
};
const deserializeAws_restJson1ListTrackersResponseEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListTrackersResponseEntry(entry, context);
    });
};
const deserializeAws_restJson1MapConfiguration = (output, context) => {
    return {
        Style: output.Style !== undefined && output.Style !== null ? output.Style : undefined,
    };
};
const deserializeAws_restJson1Place = (output, context) => {
    return {
        AddressNumber: output.AddressNumber !== undefined && output.AddressNumber !== null ? output.AddressNumber : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        Geometry: output.Geometry !== undefined && output.Geometry !== null
            ? deserializeAws_restJson1PlaceGeometry(output.Geometry, context)
            : undefined,
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        Municipality: output.Municipality !== undefined && output.Municipality !== null ? output.Municipality : undefined,
        Neighborhood: output.Neighborhood !== undefined && output.Neighborhood !== null ? output.Neighborhood : undefined,
        PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Street: output.Street !== undefined && output.Street !== null ? output.Street : undefined,
        SubRegion: output.SubRegion !== undefined && output.SubRegion !== null ? output.SubRegion : undefined,
    };
};
const deserializeAws_restJson1PlaceGeometry = (output, context) => {
    return {
        Point: output.Point !== undefined && output.Point !== null
            ? deserializeAws_restJson1Position(output.Point, context)
            : undefined,
    };
};
const deserializeAws_restJson1Position = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SearchForPositionResult = (output, context) => {
    return {
        Place: output.Place !== undefined && output.Place !== null
            ? deserializeAws_restJson1Place(output.Place, context)
            : undefined,
    };
};
const deserializeAws_restJson1SearchForPositionResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForPositionResult(entry, context);
    });
};
const deserializeAws_restJson1SearchForTextResult = (output, context) => {
    return {
        Place: output.Place !== undefined && output.Place !== null
            ? deserializeAws_restJson1Place(output.Place, context)
            : undefined,
    };
};
const deserializeAws_restJson1SearchForTextResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForTextResult(entry, context);
    });
};
const deserializeAws_restJson1SearchPlaceIndexForPositionSummary = (output, context) => {
    return {
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
        Position: output.Position !== undefined && output.Position !== null
            ? deserializeAws_restJson1Position(output.Position, context)
            : undefined,
    };
};
const deserializeAws_restJson1SearchPlaceIndexForTextSummary = (output, context) => {
    return {
        BiasPosition: output.BiasPosition !== undefined && output.BiasPosition !== null
            ? deserializeAws_restJson1Position(output.BiasPosition, context)
            : undefined,
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        FilterBBox: output.FilterBBox !== undefined && output.FilterBBox !== null
            ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context)
            : undefined,
        FilterCountries: output.FilterCountries !== undefined && output.FilterCountries !== null
            ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
            : undefined,
        MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
        ResultBBox: output.ResultBBox !== undefined && output.ResultBBox !== null
            ? deserializeAws_restJson1BoundingBox(output.ResultBBox, context)
            : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
const deserializeAws_restJson1Step = (output, context) => {
    return {
        Distance: output.Distance !== undefined && output.Distance !== null ? output.Distance : undefined,
        DurationSeconds: output.DurationSeconds !== undefined && output.DurationSeconds !== null ? output.DurationSeconds : undefined,
        EndPosition: output.EndPosition !== undefined && output.EndPosition !== null
            ? deserializeAws_restJson1Position(output.EndPosition, context)
            : undefined,
        GeometryOffset: output.GeometryOffset !== undefined && output.GeometryOffset !== null ? output.GeometryOffset : undefined,
        StartPosition: output.StartPosition !== undefined && output.StartPosition !== null
            ? deserializeAws_restJson1Position(output.StartPosition, context)
            : undefined,
    };
};
const deserializeAws_restJson1StepList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Step(entry, context);
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
    return {
        Message: output.message !== undefined && output.message !== null ? output.message : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
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