import { __extends } from "tslib";
import { CreateApplicationPresignedUrlRequest, CreateApplicationPresignedUrlResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateApplicationPresignedUrlCommand, serializeAws_json1_1CreateApplicationPresignedUrlCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateApplicationPresignedUrlCommand = /** @class */ (function (_super) {
    __extends(CreateApplicationPresignedUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApplicationPresignedUrlCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateApplicationPresignedUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "CreateApplicationPresignedUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApplicationPresignedUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApplicationPresignedUrlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApplicationPresignedUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateApplicationPresignedUrlCommand(input, context);
    };
    CreateApplicationPresignedUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateApplicationPresignedUrlCommand(output, context);
    };
    return CreateApplicationPresignedUrlCommand;
}($Command));
export { CreateApplicationPresignedUrlCommand };
//# sourceMappingURL=CreateApplicationPresignedUrlCommand.js.map