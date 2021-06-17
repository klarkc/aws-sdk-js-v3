import { CompareFacesCommandInput, CompareFacesCommandOutput } from "../commands/CompareFacesCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "../commands/CreateCollectionCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateProjectVersionCommandInput, CreateProjectVersionCommandOutput } from "../commands/CreateProjectVersionCommand";
import { CreateStreamProcessorCommandInput, CreateStreamProcessorCommandOutput } from "../commands/CreateStreamProcessorCommand";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "../commands/DeleteCollectionCommand";
import { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "../commands/DeleteFacesCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteProjectVersionCommandInput, DeleteProjectVersionCommandOutput } from "../commands/DeleteProjectVersionCommand";
import { DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput } from "../commands/DeleteStreamProcessorCommand";
import { DescribeCollectionCommandInput, DescribeCollectionCommandOutput } from "../commands/DescribeCollectionCommand";
import { DescribeProjectVersionsCommandInput, DescribeProjectVersionsCommandOutput } from "../commands/DescribeProjectVersionsCommand";
import { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "../commands/DescribeProjectsCommand";
import { DescribeStreamProcessorCommandInput, DescribeStreamProcessorCommandOutput } from "../commands/DescribeStreamProcessorCommand";
import { DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput } from "../commands/DetectCustomLabelsCommand";
import { DetectFacesCommandInput, DetectFacesCommandOutput } from "../commands/DetectFacesCommand";
import { DetectLabelsCommandInput, DetectLabelsCommandOutput } from "../commands/DetectLabelsCommand";
import { DetectModerationLabelsCommandInput, DetectModerationLabelsCommandOutput } from "../commands/DetectModerationLabelsCommand";
import { DetectProtectiveEquipmentCommandInput, DetectProtectiveEquipmentCommandOutput } from "../commands/DetectProtectiveEquipmentCommand";
import { DetectTextCommandInput, DetectTextCommandOutput } from "../commands/DetectTextCommand";
import { GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput } from "../commands/GetCelebrityInfoCommand";
import { GetCelebrityRecognitionCommandInput, GetCelebrityRecognitionCommandOutput } from "../commands/GetCelebrityRecognitionCommand";
import { GetContentModerationCommandInput, GetContentModerationCommandOutput } from "../commands/GetContentModerationCommand";
import { GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput } from "../commands/GetFaceDetectionCommand";
import { GetFaceSearchCommandInput, GetFaceSearchCommandOutput } from "../commands/GetFaceSearchCommand";
import { GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput } from "../commands/GetLabelDetectionCommand";
import { GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput } from "../commands/GetPersonTrackingCommand";
import { GetSegmentDetectionCommandInput, GetSegmentDetectionCommandOutput } from "../commands/GetSegmentDetectionCommand";
import { GetTextDetectionCommandInput, GetTextDetectionCommandOutput } from "../commands/GetTextDetectionCommand";
import { IndexFacesCommandInput, IndexFacesCommandOutput } from "../commands/IndexFacesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "../commands/ListCollectionsCommand";
import { ListFacesCommandInput, ListFacesCommandOutput } from "../commands/ListFacesCommand";
import { ListStreamProcessorsCommandInput, ListStreamProcessorsCommandOutput } from "../commands/ListStreamProcessorsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { RecognizeCelebritiesCommandInput, RecognizeCelebritiesCommandOutput } from "../commands/RecognizeCelebritiesCommand";
import { SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput } from "../commands/SearchFacesByImageCommand";
import { SearchFacesCommandInput, SearchFacesCommandOutput } from "../commands/SearchFacesCommand";
import { StartCelebrityRecognitionCommandInput, StartCelebrityRecognitionCommandOutput } from "../commands/StartCelebrityRecognitionCommand";
import { StartContentModerationCommandInput, StartContentModerationCommandOutput } from "../commands/StartContentModerationCommand";
import { StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput } from "../commands/StartFaceDetectionCommand";
import { StartFaceSearchCommandInput, StartFaceSearchCommandOutput } from "../commands/StartFaceSearchCommand";
import { StartLabelDetectionCommandInput, StartLabelDetectionCommandOutput } from "../commands/StartLabelDetectionCommand";
import { StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput } from "../commands/StartPersonTrackingCommand";
import { StartProjectVersionCommandInput, StartProjectVersionCommandOutput } from "../commands/StartProjectVersionCommand";
import { StartSegmentDetectionCommandInput, StartSegmentDetectionCommandOutput } from "../commands/StartSegmentDetectionCommand";
import { StartStreamProcessorCommandInput, StartStreamProcessorCommandOutput } from "../commands/StartStreamProcessorCommand";
import { StartTextDetectionCommandInput, StartTextDetectionCommandOutput } from "../commands/StartTextDetectionCommand";
import { StopProjectVersionCommandInput, StopProjectVersionCommandOutput } from "../commands/StopProjectVersionCommand";
import { StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput } from "../commands/StopStreamProcessorCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CompareFacesCommand: (input: CompareFacesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateCollectionCommand: (input: CreateCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateProjectCommand: (input: CreateProjectCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateProjectVersionCommand: (input: CreateProjectVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateStreamProcessorCommand: (input: CreateStreamProcessorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteCollectionCommand: (input: DeleteCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteFacesCommand: (input: DeleteFacesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteProjectCommand: (input: DeleteProjectCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteProjectVersionCommand: (input: DeleteProjectVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteStreamProcessorCommand: (input: DeleteStreamProcessorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeCollectionCommand: (input: DescribeCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeProjectsCommand: (input: DescribeProjectsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeProjectVersionsCommand: (input: DescribeProjectVersionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeStreamProcessorCommand: (input: DescribeStreamProcessorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectCustomLabelsCommand: (input: DetectCustomLabelsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectFacesCommand: (input: DetectFacesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectLabelsCommand: (input: DetectLabelsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectModerationLabelsCommand: (input: DetectModerationLabelsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectProtectiveEquipmentCommand: (input: DetectProtectiveEquipmentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectTextCommand: (input: DetectTextCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCelebrityInfoCommand: (input: GetCelebrityInfoCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCelebrityRecognitionCommand: (input: GetCelebrityRecognitionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetContentModerationCommand: (input: GetContentModerationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetFaceDetectionCommand: (input: GetFaceDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetFaceSearchCommand: (input: GetFaceSearchCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLabelDetectionCommand: (input: GetLabelDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetPersonTrackingCommand: (input: GetPersonTrackingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetSegmentDetectionCommand: (input: GetSegmentDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetTextDetectionCommand: (input: GetTextDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1IndexFacesCommand: (input: IndexFacesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListCollectionsCommand: (input: ListCollectionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListFacesCommand: (input: ListFacesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListStreamProcessorsCommand: (input: ListStreamProcessorsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RecognizeCelebritiesCommand: (input: RecognizeCelebritiesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchFacesCommand: (input: SearchFacesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchFacesByImageCommand: (input: SearchFacesByImageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartCelebrityRecognitionCommand: (input: StartCelebrityRecognitionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartContentModerationCommand: (input: StartContentModerationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartFaceDetectionCommand: (input: StartFaceDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartFaceSearchCommand: (input: StartFaceSearchCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartLabelDetectionCommand: (input: StartLabelDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartPersonTrackingCommand: (input: StartPersonTrackingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartProjectVersionCommand: (input: StartProjectVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartSegmentDetectionCommand: (input: StartSegmentDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartStreamProcessorCommand: (input: StartStreamProcessorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartTextDetectionCommand: (input: StartTextDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopProjectVersionCommand: (input: StopProjectVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopStreamProcessorCommand: (input: StopStreamProcessorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CompareFacesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CompareFacesCommandOutput>;
export declare const deserializeAws_json1_1CreateCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateCollectionCommandOutput>;
export declare const deserializeAws_json1_1CreateProjectCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateProjectCommandOutput>;
export declare const deserializeAws_json1_1CreateProjectVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateProjectVersionCommandOutput>;
export declare const deserializeAws_json1_1CreateStreamProcessorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateStreamProcessorCommandOutput>;
export declare const deserializeAws_json1_1DeleteCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteCollectionCommandOutput>;
export declare const deserializeAws_json1_1DeleteFacesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteFacesCommandOutput>;
export declare const deserializeAws_json1_1DeleteProjectCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteProjectCommandOutput>;
export declare const deserializeAws_json1_1DeleteProjectVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteProjectVersionCommandOutput>;
export declare const deserializeAws_json1_1DeleteStreamProcessorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteStreamProcessorCommandOutput>;
export declare const deserializeAws_json1_1DescribeCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeCollectionCommandOutput>;
export declare const deserializeAws_json1_1DescribeProjectsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeProjectsCommandOutput>;
export declare const deserializeAws_json1_1DescribeProjectVersionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeProjectVersionsCommandOutput>;
export declare const deserializeAws_json1_1DescribeStreamProcessorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeStreamProcessorCommandOutput>;
export declare const deserializeAws_json1_1DetectCustomLabelsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectCustomLabelsCommandOutput>;
export declare const deserializeAws_json1_1DetectFacesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectFacesCommandOutput>;
export declare const deserializeAws_json1_1DetectLabelsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectLabelsCommandOutput>;
export declare const deserializeAws_json1_1DetectModerationLabelsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectModerationLabelsCommandOutput>;
export declare const deserializeAws_json1_1DetectProtectiveEquipmentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectProtectiveEquipmentCommandOutput>;
export declare const deserializeAws_json1_1DetectTextCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectTextCommandOutput>;
export declare const deserializeAws_json1_1GetCelebrityInfoCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCelebrityInfoCommandOutput>;
export declare const deserializeAws_json1_1GetCelebrityRecognitionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCelebrityRecognitionCommandOutput>;
export declare const deserializeAws_json1_1GetContentModerationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetContentModerationCommandOutput>;
export declare const deserializeAws_json1_1GetFaceDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetFaceDetectionCommandOutput>;
export declare const deserializeAws_json1_1GetFaceSearchCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetFaceSearchCommandOutput>;
export declare const deserializeAws_json1_1GetLabelDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLabelDetectionCommandOutput>;
export declare const deserializeAws_json1_1GetPersonTrackingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPersonTrackingCommandOutput>;
export declare const deserializeAws_json1_1GetSegmentDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSegmentDetectionCommandOutput>;
export declare const deserializeAws_json1_1GetTextDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTextDetectionCommandOutput>;
export declare const deserializeAws_json1_1IndexFacesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<IndexFacesCommandOutput>;
export declare const deserializeAws_json1_1ListCollectionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListCollectionsCommandOutput>;
export declare const deserializeAws_json1_1ListFacesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListFacesCommandOutput>;
export declare const deserializeAws_json1_1ListStreamProcessorsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListStreamProcessorsCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1RecognizeCelebritiesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RecognizeCelebritiesCommandOutput>;
export declare const deserializeAws_json1_1SearchFacesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchFacesCommandOutput>;
export declare const deserializeAws_json1_1SearchFacesByImageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchFacesByImageCommandOutput>;
export declare const deserializeAws_json1_1StartCelebrityRecognitionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartCelebrityRecognitionCommandOutput>;
export declare const deserializeAws_json1_1StartContentModerationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartContentModerationCommandOutput>;
export declare const deserializeAws_json1_1StartFaceDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartFaceDetectionCommandOutput>;
export declare const deserializeAws_json1_1StartFaceSearchCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartFaceSearchCommandOutput>;
export declare const deserializeAws_json1_1StartLabelDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartLabelDetectionCommandOutput>;
export declare const deserializeAws_json1_1StartPersonTrackingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartPersonTrackingCommandOutput>;
export declare const deserializeAws_json1_1StartProjectVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartProjectVersionCommandOutput>;
export declare const deserializeAws_json1_1StartSegmentDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartSegmentDetectionCommandOutput>;
export declare const deserializeAws_json1_1StartStreamProcessorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartStreamProcessorCommandOutput>;
export declare const deserializeAws_json1_1StartTextDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartTextDetectionCommandOutput>;
export declare const deserializeAws_json1_1StopProjectVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopProjectVersionCommandOutput>;
export declare const deserializeAws_json1_1StopStreamProcessorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopStreamProcessorCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
