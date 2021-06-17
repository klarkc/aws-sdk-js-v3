import { __extends } from "tslib";
import { GetJobManifestRequest, GetJobManifestResult } from "../models/models_0";
import { deserializeAws_json1_1GetJobManifestCommand, serializeAws_json1_1GetJobManifestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the
 *       specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes
 *       after this request has been made. To access the manifest file after 60 minutes have passed,
 *       you'll have to make another call to the <code>GetJobManifest</code> action.</p>
 *
 *          <p>The manifest is an encrypted file that you can download after your job enters the
 *         <code>WithCustomer</code> status. The manifest is decrypted by using the
 *       <code>UnlockCode</code> code value, when you pass both values to the Snow device through the
 *       Snowball client when the client is started for the first time.</p>
 *
 *
 *          <p>As a best practice, we recommend that you don't save a copy of an
 *         <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving
 *       these separately helps prevent unauthorized parties from gaining access to the Snow device
 *       associated with that job.</p>
 *
 *
 *          <p>The credentials of a given job, including its manifest file and unlock code, expire 360
 *       days after the job is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobManifestCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobManifestCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobManifestCommandInput} for command's `input` shape.
 * @see {@link GetJobManifestCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobManifestCommand = /** @class */ (function (_super) {
    __extends(GetJobManifestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobManifestCommand(input) {
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
    GetJobManifestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "GetJobManifestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobManifestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobManifestResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobManifestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobManifestCommand(input, context);
    };
    GetJobManifestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobManifestCommand(output, context);
    };
    return GetJobManifestCommand;
}($Command));
export { GetJobManifestCommand };
//# sourceMappingURL=GetJobManifestCommand.js.map