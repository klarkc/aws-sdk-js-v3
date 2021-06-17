import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { CreateApplicationPresignedUrlRequest, CreateApplicationPresignedUrlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateApplicationPresignedUrlCommandInput extends CreateApplicationPresignedUrlRequest {
}
export interface CreateApplicationPresignedUrlCommandOutput extends CreateApplicationPresignedUrlResponse, __MetadataBearer {
}
/**
 * <p>Creates and returns a URL that you can use to connect to
 *             an application's extension. Currently, the only
 *             available extension is the Apache Flink dashboard.</p>
 *         <p>The IAM role or user used to call this API defines the permissions to access the
 *       extension. After the presigned URL is created, no additional permission is required to access
 *       this URL. IAM authorization policies for this API are also enforced for every HTTP request
 *       that attempts to connect to the extension. </p>
 *         <p>You    control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code>
 *         parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p>
 *         <note>
 *             <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes
 *             to be valid.
 *             If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationPresignedUrlCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationPresignedUrlCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new CreateApplicationPresignedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationPresignedUrlCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationPresignedUrlCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateApplicationPresignedUrlCommand extends $Command<CreateApplicationPresignedUrlCommandInput, CreateApplicationPresignedUrlCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: CreateApplicationPresignedUrlCommandInput;
    constructor(input: CreateApplicationPresignedUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationPresignedUrlCommandInput, CreateApplicationPresignedUrlCommandOutput>;
    private serialize;
    private deserialize;
}
