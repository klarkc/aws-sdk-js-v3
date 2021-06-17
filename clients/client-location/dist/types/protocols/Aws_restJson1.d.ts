import { AssociateTrackerConsumerCommandInput, AssociateTrackerConsumerCommandOutput } from "../commands/AssociateTrackerConsumerCommand";
import { BatchDeleteDevicePositionHistoryCommandInput, BatchDeleteDevicePositionHistoryCommandOutput } from "../commands/BatchDeleteDevicePositionHistoryCommand";
import { BatchDeleteGeofenceCommandInput, BatchDeleteGeofenceCommandOutput } from "../commands/BatchDeleteGeofenceCommand";
import { BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput } from "../commands/BatchEvaluateGeofencesCommand";
import { BatchGetDevicePositionCommandInput, BatchGetDevicePositionCommandOutput } from "../commands/BatchGetDevicePositionCommand";
import { BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput } from "../commands/BatchPutGeofenceCommand";
import { BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput } from "../commands/BatchUpdateDevicePositionCommand";
import { CalculateRouteCommandInput, CalculateRouteCommandOutput } from "../commands/CalculateRouteCommand";
import { CreateGeofenceCollectionCommandInput, CreateGeofenceCollectionCommandOutput } from "../commands/CreateGeofenceCollectionCommand";
import { CreateMapCommandInput, CreateMapCommandOutput } from "../commands/CreateMapCommand";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "../commands/CreatePlaceIndexCommand";
import { CreateRouteCalculatorCommandInput, CreateRouteCalculatorCommandOutput } from "../commands/CreateRouteCalculatorCommand";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "../commands/CreateTrackerCommand";
import { DeleteGeofenceCollectionCommandInput, DeleteGeofenceCollectionCommandOutput } from "../commands/DeleteGeofenceCollectionCommand";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "../commands/DeleteMapCommand";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "../commands/DeletePlaceIndexCommand";
import { DeleteRouteCalculatorCommandInput, DeleteRouteCalculatorCommandOutput } from "../commands/DeleteRouteCalculatorCommand";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "../commands/DeleteTrackerCommand";
import { DescribeGeofenceCollectionCommandInput, DescribeGeofenceCollectionCommandOutput } from "../commands/DescribeGeofenceCollectionCommand";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "../commands/DescribeMapCommand";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "../commands/DescribePlaceIndexCommand";
import { DescribeRouteCalculatorCommandInput, DescribeRouteCalculatorCommandOutput } from "../commands/DescribeRouteCalculatorCommand";
import { DescribeTrackerCommandInput, DescribeTrackerCommandOutput } from "../commands/DescribeTrackerCommand";
import { DisassociateTrackerConsumerCommandInput, DisassociateTrackerConsumerCommandOutput } from "../commands/DisassociateTrackerConsumerCommand";
import { GetDevicePositionCommandInput, GetDevicePositionCommandOutput } from "../commands/GetDevicePositionCommand";
import { GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput } from "../commands/GetDevicePositionHistoryCommand";
import { GetGeofenceCommandInput, GetGeofenceCommandOutput } from "../commands/GetGeofenceCommand";
import { GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput } from "../commands/GetMapGlyphsCommand";
import { GetMapSpritesCommandInput, GetMapSpritesCommandOutput } from "../commands/GetMapSpritesCommand";
import { GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput } from "../commands/GetMapStyleDescriptorCommand";
import { GetMapTileCommandInput, GetMapTileCommandOutput } from "../commands/GetMapTileCommand";
import { ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput } from "../commands/ListDevicePositionsCommand";
import { ListGeofenceCollectionsCommandInput, ListGeofenceCollectionsCommandOutput } from "../commands/ListGeofenceCollectionsCommand";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "../commands/ListGeofencesCommand";
import { ListMapsCommandInput, ListMapsCommandOutput } from "../commands/ListMapsCommand";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "../commands/ListPlaceIndexesCommand";
import { ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput } from "../commands/ListRouteCalculatorsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { ListTrackerConsumersCommandInput, ListTrackerConsumersCommandOutput } from "../commands/ListTrackerConsumersCommand";
import { ListTrackersCommandInput, ListTrackersCommandOutput } from "../commands/ListTrackersCommand";
import { PutGeofenceCommandInput, PutGeofenceCommandOutput } from "../commands/PutGeofenceCommand";
import { SearchPlaceIndexForPositionCommandInput, SearchPlaceIndexForPositionCommandOutput } from "../commands/SearchPlaceIndexForPositionCommand";
import { SearchPlaceIndexForTextCommandInput, SearchPlaceIndexForTextCommandOutput } from "../commands/SearchPlaceIndexForTextCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AssociateTrackerConsumerCommand: (input: AssociateTrackerConsumerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand: (input: BatchDeleteDevicePositionHistoryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchDeleteGeofenceCommand: (input: BatchDeleteGeofenceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchEvaluateGeofencesCommand: (input: BatchEvaluateGeofencesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchGetDevicePositionCommand: (input: BatchGetDevicePositionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchPutGeofenceCommand: (input: BatchPutGeofenceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchUpdateDevicePositionCommand: (input: BatchUpdateDevicePositionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CalculateRouteCommand: (input: CalculateRouteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateGeofenceCollectionCommand: (input: CreateGeofenceCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateMapCommand: (input: CreateMapCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreatePlaceIndexCommand: (input: CreatePlaceIndexCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateRouteCalculatorCommand: (input: CreateRouteCalculatorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateTrackerCommand: (input: CreateTrackerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteGeofenceCollectionCommand: (input: DeleteGeofenceCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteMapCommand: (input: DeleteMapCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeletePlaceIndexCommand: (input: DeletePlaceIndexCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRouteCalculatorCommand: (input: DeleteRouteCalculatorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteTrackerCommand: (input: DeleteTrackerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeGeofenceCollectionCommand: (input: DescribeGeofenceCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeMapCommand: (input: DescribeMapCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribePlaceIndexCommand: (input: DescribePlaceIndexCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeRouteCalculatorCommand: (input: DescribeRouteCalculatorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeTrackerCommand: (input: DescribeTrackerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateTrackerConsumerCommand: (input: DisassociateTrackerConsumerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDevicePositionCommand: (input: GetDevicePositionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDevicePositionHistoryCommand: (input: GetDevicePositionHistoryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetGeofenceCommand: (input: GetGeofenceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetMapGlyphsCommand: (input: GetMapGlyphsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetMapSpritesCommand: (input: GetMapSpritesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetMapStyleDescriptorCommand: (input: GetMapStyleDescriptorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetMapTileCommand: (input: GetMapTileCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDevicePositionsCommand: (input: ListDevicePositionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListGeofenceCollectionsCommand: (input: ListGeofenceCollectionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListGeofencesCommand: (input: ListGeofencesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListMapsCommand: (input: ListMapsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListPlaceIndexesCommand: (input: ListPlaceIndexesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRouteCalculatorsCommand: (input: ListRouteCalculatorsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTrackerConsumersCommand: (input: ListTrackerConsumersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTrackersCommand: (input: ListTrackersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutGeofenceCommand: (input: PutGeofenceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SearchPlaceIndexForPositionCommand: (input: SearchPlaceIndexForPositionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SearchPlaceIndexForTextCommand: (input: SearchPlaceIndexForTextCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AssociateTrackerConsumerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateTrackerConsumerCommandOutput>;
export declare const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchDeleteDevicePositionHistoryCommandOutput>;
export declare const deserializeAws_restJson1BatchDeleteGeofenceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchDeleteGeofenceCommandOutput>;
export declare const deserializeAws_restJson1BatchEvaluateGeofencesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchEvaluateGeofencesCommandOutput>;
export declare const deserializeAws_restJson1BatchGetDevicePositionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchGetDevicePositionCommandOutput>;
export declare const deserializeAws_restJson1BatchPutGeofenceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchPutGeofenceCommandOutput>;
export declare const deserializeAws_restJson1BatchUpdateDevicePositionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchUpdateDevicePositionCommandOutput>;
export declare const deserializeAws_restJson1CalculateRouteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CalculateRouteCommandOutput>;
export declare const deserializeAws_restJson1CreateGeofenceCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateGeofenceCollectionCommandOutput>;
export declare const deserializeAws_restJson1CreateMapCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateMapCommandOutput>;
export declare const deserializeAws_restJson1CreatePlaceIndexCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePlaceIndexCommandOutput>;
export declare const deserializeAws_restJson1CreateRouteCalculatorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateRouteCalculatorCommandOutput>;
export declare const deserializeAws_restJson1CreateTrackerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTrackerCommandOutput>;
export declare const deserializeAws_restJson1DeleteGeofenceCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteGeofenceCollectionCommandOutput>;
export declare const deserializeAws_restJson1DeleteMapCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteMapCommandOutput>;
export declare const deserializeAws_restJson1DeletePlaceIndexCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeletePlaceIndexCommandOutput>;
export declare const deserializeAws_restJson1DeleteRouteCalculatorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRouteCalculatorCommandOutput>;
export declare const deserializeAws_restJson1DeleteTrackerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTrackerCommandOutput>;
export declare const deserializeAws_restJson1DescribeGeofenceCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeGeofenceCollectionCommandOutput>;
export declare const deserializeAws_restJson1DescribeMapCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeMapCommandOutput>;
export declare const deserializeAws_restJson1DescribePlaceIndexCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribePlaceIndexCommandOutput>;
export declare const deserializeAws_restJson1DescribeRouteCalculatorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeRouteCalculatorCommandOutput>;
export declare const deserializeAws_restJson1DescribeTrackerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTrackerCommandOutput>;
export declare const deserializeAws_restJson1DisassociateTrackerConsumerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateTrackerConsumerCommandOutput>;
export declare const deserializeAws_restJson1GetDevicePositionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDevicePositionCommandOutput>;
export declare const deserializeAws_restJson1GetDevicePositionHistoryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDevicePositionHistoryCommandOutput>;
export declare const deserializeAws_restJson1GetGeofenceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetGeofenceCommandOutput>;
export declare const deserializeAws_restJson1GetMapGlyphsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMapGlyphsCommandOutput>;
export declare const deserializeAws_restJson1GetMapSpritesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMapSpritesCommandOutput>;
export declare const deserializeAws_restJson1GetMapStyleDescriptorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMapStyleDescriptorCommandOutput>;
export declare const deserializeAws_restJson1GetMapTileCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMapTileCommandOutput>;
export declare const deserializeAws_restJson1ListDevicePositionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDevicePositionsCommandOutput>;
export declare const deserializeAws_restJson1ListGeofenceCollectionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListGeofenceCollectionsCommandOutput>;
export declare const deserializeAws_restJson1ListGeofencesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListGeofencesCommandOutput>;
export declare const deserializeAws_restJson1ListMapsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListMapsCommandOutput>;
export declare const deserializeAws_restJson1ListPlaceIndexesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListPlaceIndexesCommandOutput>;
export declare const deserializeAws_restJson1ListRouteCalculatorsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListRouteCalculatorsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1ListTrackerConsumersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrackerConsumersCommandOutput>;
export declare const deserializeAws_restJson1ListTrackersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrackersCommandOutput>;
export declare const deserializeAws_restJson1PutGeofenceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutGeofenceCommandOutput>;
export declare const deserializeAws_restJson1SearchPlaceIndexForPositionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchPlaceIndexForPositionCommandOutput>;
export declare const deserializeAws_restJson1SearchPlaceIndexForTextCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchPlaceIndexForTextCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
