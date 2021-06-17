import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Sends Conflict Exception.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>Sends Conflict Exception message.</p>
     */
    message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>Lists all the devices under test</p>
 */
export interface DeviceUnderTest {
    /**
     * <p>Lists devices thing arn</p>
     */
    thingArn?: string;
    /**
     * <p>Lists devices certificate arn</p>
     */
    certificateArn?: string;
}
export declare namespace DeviceUnderTest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceUnderTest) => any;
}
/**
 * <p>Gets Suite Definition Configuration.</p>
 */
export interface SuiteDefinitionConfiguration {
    /**
     * <p>Gets Suite Definition Configuration name.</p>
     */
    suiteDefinitionName?: string;
    /**
     * <p>Gets the devices configured.</p>
     */
    devices?: DeviceUnderTest[];
    /**
     * <p>Gets the tests intended for qualification in a suite.</p>
     */
    intendedForQualification?: boolean;
    /**
     * <p>Gets test suite root group.</p>
     */
    rootGroup?: string;
    /**
     * <p>Gets device permission arn.</p>
     */
    devicePermissionRoleArn?: string;
}
export declare namespace SuiteDefinitionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuiteDefinitionConfiguration) => any;
}
export interface CreateSuiteDefinitionRequest {
    /**
     * <p>Creates a Device Advisor test suite with suite definition configuration.</p>
     */
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
    /**
     * <p>The tags to be attached to the suite definition.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateSuiteDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSuiteDefinitionRequest) => any;
}
export interface CreateSuiteDefinitionResponse {
    /**
     * <p>Creates a Device Advisor test suite with suite UUID.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>Creates a Device Advisor test suite with Amazon Resource name.</p>
     */
    suiteDefinitionArn?: string;
    /**
     * <p>Creates a Device Advisor test suite with suite definition name.</p>
     */
    suiteDefinitionName?: string;
    /**
     * <p>Creates a Device Advisor test suite with TimeStamp of when it was created.</p>
     */
    createdAt?: Date;
}
export declare namespace CreateSuiteDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSuiteDefinitionResponse) => any;
}
/**
 * <p>Sends Internal Failure Exception.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    /**
     * <p>Sends Internal Failure Exception message.</p>
     */
    message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>Sends invalid request exception.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    /**
     * <p>Sends invalid request exception message.</p>
     */
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface DeleteSuiteDefinitionRequest {
    /**
     * <p>Suite definition Id of the test suite to be deleted.</p>
     */
    suiteDefinitionId: string | undefined;
}
export declare namespace DeleteSuiteDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSuiteDefinitionRequest) => any;
}
export interface DeleteSuiteDefinitionResponse {
}
export declare namespace DeleteSuiteDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSuiteDefinitionResponse) => any;
}
export interface GetSuiteDefinitionRequest {
    /**
     * <p>Suite definition Id of the test suite to get.</p>
     */
    suiteDefinitionId: string | undefined;
    /**
     * <p>Suite definition version of the test suite to get.</p>
     */
    suiteDefinitionVersion?: string;
}
export declare namespace GetSuiteDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSuiteDefinitionRequest) => any;
}
export interface GetSuiteDefinitionResponse {
    /**
     * <p>Suite definition Id of the suite definition.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>The ARN of the suite definition.</p>
     */
    suiteDefinitionArn?: string;
    /**
     * <p>Suite definition version of the suite definition.</p>
     */
    suiteDefinitionVersion?: string;
    /**
     * <p>Latest suite definition version of the suite definition.</p>
     */
    latestVersion?: string;
    /**
     * <p>Suite configuration of the suite definition.</p>
     */
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
    /**
     * <p>Date (in Unix epoch time) when the suite definition was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>Date (in Unix epoch time) when the suite definition was last modified.</p>
     */
    lastModifiedAt?: Date;
    /**
     * <p>Tags attached to the suite definition.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetSuiteDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSuiteDefinitionResponse) => any;
}
/**
 * <p>Sends Resource Not Found Exception.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>Sends Resource Not Found Exception message.</p>
     */
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface GetSuiteRunRequest {
    /**
     * <p>Suite definition Id for the test suite run.</p>
     */
    suiteDefinitionId: string | undefined;
    /**
     * <p>Suite run Id for the test suite run.</p>
     */
    suiteRunId: string | undefined;
}
export declare namespace GetSuiteRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSuiteRunRequest) => any;
}
export declare enum SuiteRunStatus {
    CANCELED = "CANCELED",
    ERROR = "ERROR",
    FAIL = "FAIL",
    PASS = "PASS",
    PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING"
}
/**
 * <p>Gets suite run configuration.</p>
 */
export interface SuiteRunConfiguration {
    /**
     * <p>Gets the primary device for suite run.</p>
     */
    primaryDevice?: DeviceUnderTest;
    /**
     * <p>Gets test case list.</p>
     */
    selectedTestList?: string[];
}
export declare namespace SuiteRunConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuiteRunConfiguration) => any;
}
export declare enum Status {
    CANCELED = "CANCELED",
    ERROR = "ERROR",
    FAIL = "FAIL",
    PASS = "PASS",
    PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING"
}
/**
 * <p>Provides test case run.</p>
 */
export interface TestCaseRun {
    /**
     * <p>Provides test case run Id.</p>
     */
    testCaseRunId?: string;
    /**
     * <p>Provides test case run definition Id.</p>
     */
    testCaseDefinitionId?: string;
    /**
     * <p>Provides test case run definition Name.</p>
     */
    testCaseDefinitionName?: string;
    /**
     * <p>Provides test case run status.</p>
     */
    status?: Status | string;
    /**
     * <p>Provides test case run start time.</p>
     */
    startTime?: Date;
    /**
     * <p>Provides test case run end time.</p>
     */
    endTime?: Date;
    /**
     * <p>Provides test case run log Url.</p>
     */
    logUrl?: string;
    /**
     * <p>Provides test case run warnings.</p>
     */
    warnings?: string;
    /**
     * <p>Provides test case run failure result.</p>
     */
    failure?: string;
}
export declare namespace TestCaseRun {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TestCaseRun) => any;
}
/**
 * <p>Show Group Result.</p>
 */
export interface GroupResult {
    /**
     * <p>Group result Id.</p>
     */
    groupId?: string;
    /**
     * <p>Group Result Name.</p>
     */
    groupName?: string;
    /**
     * <p>Tests under Group Result.</p>
     */
    tests?: TestCaseRun[];
}
export declare namespace GroupResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupResult) => any;
}
/**
 * <p>Show each group result.</p>
 */
export interface TestResult {
    /**
     * <p>Show each group of test results.</p>
     */
    groups?: GroupResult[];
}
export declare namespace TestResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TestResult) => any;
}
export interface GetSuiteRunResponse {
    /**
     * <p>Suite definition Id for the test suite run.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>Suite definition version for the test suite run.</p>
     */
    suiteDefinitionVersion?: string;
    /**
     * <p>Suite run Id for the test suite run.</p>
     */
    suiteRunId?: string;
    /**
     * <p>The ARN of the suite run.</p>
     */
    suiteRunArn?: string;
    /**
     * <p>Suite run configuration for the test suite run.</p>
     */
    suiteRunConfiguration?: SuiteRunConfiguration;
    /**
     * <p>Test results for the test suite run.</p>
     */
    testResult?: TestResult;
    /**
     * <p>Date (in Unix epoch time) when the test suite run was started.</p>
     */
    startTime?: Date;
    /**
     * <p>Date (in Unix epoch time) when the test suite run ended.</p>
     */
    endTime?: Date;
    /**
     * <p>Status for the test suite run.</p>
     */
    status?: SuiteRunStatus | string;
    /**
     * <p>Error reason for any test suite run failure.</p>
     */
    errorReason?: string;
    /**
     * <p>The tags attached to the suite run.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetSuiteRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSuiteRunResponse) => any;
}
export interface GetSuiteRunReportRequest {
    /**
     * <p>Suite definition Id of the test suite.</p>
     */
    suiteDefinitionId: string | undefined;
    /**
     * <p>Suite run Id of the test suite run.</p>
     */
    suiteRunId: string | undefined;
}
export declare namespace GetSuiteRunReportRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSuiteRunReportRequest) => any;
}
export interface GetSuiteRunReportResponse {
    /**
     * <p>Download URL of the qualification report.</p>
     */
    qualificationReportDownloadUrl?: string;
}
export declare namespace GetSuiteRunReportResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSuiteRunReportResponse) => any;
}
export interface ListSuiteDefinitionsRequest {
    /**
     * <p>The maximum number of results to return at once.</p>
     */
    maxResults?: number;
    /**
     * <p>A token used to get the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSuiteDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSuiteDefinitionsRequest) => any;
}
/**
 * <p>Information about the suite definition.</p>
 */
export interface SuiteDefinitionInformation {
    /**
     * <p>Suite definition Id of the test suite.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>Suite name of the test suite.</p>
     */
    suiteDefinitionName?: string;
    /**
     * <p>Specifies the devices under test for the test suite.</p>
     */
    defaultDevices?: DeviceUnderTest[];
    /**
     * <p>Specifies if the test suite is intended for qualification.</p>
     */
    intendedForQualification?: boolean;
    /**
     * <p>Date (in Unix epoch time) when the test suite was created.</p>
     */
    createdAt?: Date;
}
export declare namespace SuiteDefinitionInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuiteDefinitionInformation) => any;
}
export interface ListSuiteDefinitionsResponse {
    /**
     * <p>An array of objects that provide summaries of information about the suite definitions in the list.</p>
     */
    suiteDefinitionInformationList?: SuiteDefinitionInformation[];
    /**
     * <p>A token used to get the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSuiteDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSuiteDefinitionsResponse) => any;
}
export interface ListSuiteRunsRequest {
    /**
     * <p>Lists the test suite runs of the specified test suite based on suite definition Id.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>Must be passed along with suiteDefinitionId. Lists the test suite runs of the specified test suite based on suite definition version.</p>
     */
    suiteDefinitionVersion?: string;
    /**
     * <p>The maximum number of results to return at once.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSuiteRunsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSuiteRunsRequest) => any;
}
/**
 * <p>Information about the suite run.</p>
 */
export interface SuiteRunInformation {
    /**
     * <p>Suite definition Id of the suite run.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>Suite definition version of the suite run.</p>
     */
    suiteDefinitionVersion?: string;
    /**
     * <p>Suite definition name of the suite run.</p>
     */
    suiteDefinitionName?: string;
    /**
     * <p>Suite run Id of the suite run.</p>
     */
    suiteRunId?: string;
    /**
     * <p>Date (in Unix epoch time) when the suite run was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>Date (in Unix epoch time) when the suite run was started.</p>
     */
    startedAt?: Date;
    /**
     * <p>Date (in Unix epoch time) when the suite run ended.</p>
     */
    endAt?: Date;
    /**
     * <p>Status of the suite run.</p>
     */
    status?: SuiteRunStatus | string;
    /**
     * <p>Number of test cases that passed in the suite run.</p>
     */
    passed?: number;
    /**
     * <p>Number of test cases that failed in the suite run.</p>
     */
    failed?: number;
}
export declare namespace SuiteRunInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuiteRunInformation) => any;
}
export interface ListSuiteRunsResponse {
    /**
     * <p>An array of objects that provide summaries of information about the suite runs in the list.</p>
     */
    suiteRunsList?: SuiteRunInformation[];
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSuiteRunsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSuiteRunsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the IoT Device Advisor resource.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The tags attached to the IoT Device Advisor resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface StartSuiteRunRequest {
    /**
     * <p>Suite definition Id of the test suite.</p>
     */
    suiteDefinitionId: string | undefined;
    /**
     * <p>Suite definition version of the test suite.</p>
     */
    suiteDefinitionVersion?: string;
    /**
     * <p>Suite run configuration.</p>
     */
    suiteRunConfiguration?: SuiteRunConfiguration;
    /**
     * <p>The tags to be attached to the suite run.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace StartSuiteRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartSuiteRunRequest) => any;
}
export interface StartSuiteRunResponse {
    /**
     * <p>Suite Run Id of the started suite run.</p>
     */
    suiteRunId?: string;
    /**
     * <p>Amazon resource name of the started suite run.</p>
     */
    suiteRunArn?: string;
    /**
     * <p>Date (in Unix epoch time) when the suite run was created.</p>
     */
    createdAt?: Date;
}
export declare namespace StartSuiteRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartSuiteRunResponse) => any;
}
export interface StopSuiteRunRequest {
    /**
     * <p>Suite definition Id of the test suite run to be stopped.</p>
     */
    suiteDefinitionId: string | undefined;
    /**
     * <p>Suite run Id of the test suite run to be stopped.</p>
     */
    suiteRunId: string | undefined;
}
export declare namespace StopSuiteRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopSuiteRunRequest) => any;
}
export interface StopSuiteRunResponse {
}
export declare namespace StopSuiteRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopSuiteRunResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The resource ARN of an IoT Device Advisor resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tags to be attached to the IoT Device Advisor resource.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The resource ARN of an IoT Device Advisor resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>List of tag keys to remove from the IoT Device Advisor resource.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateSuiteDefinitionRequest {
    /**
     * <p>Suite definition Id of the test suite to be updated.</p>
     */
    suiteDefinitionId: string | undefined;
    /**
     * <p>Updates a Device Advisor test suite with suite definition configuration.</p>
     */
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
}
export declare namespace UpdateSuiteDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSuiteDefinitionRequest) => any;
}
export interface UpdateSuiteDefinitionResponse {
    /**
     * <p>Suite definition Id of the updated test suite.</p>
     */
    suiteDefinitionId?: string;
    /**
     * <p>Amazon Resource name of the updated test suite.</p>
     */
    suiteDefinitionArn?: string;
    /**
     * <p>Suite definition name of the updated test suite.</p>
     */
    suiteDefinitionName?: string;
    /**
     * <p>Suite definition version of the updated test suite.</p>
     */
    suiteDefinitionVersion?: string;
    /**
     * <p>Timestamp of when the test suite was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>Timestamp of when the test suite was updated.</p>
     */
    lastUpdatedAt?: Date;
}
export declare namespace UpdateSuiteDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSuiteDefinitionResponse) => any;
}
