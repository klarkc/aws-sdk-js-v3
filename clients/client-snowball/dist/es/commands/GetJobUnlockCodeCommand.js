import { __extends } from "tslib";
import { GetJobUnlockCodeRequest, GetJobUnlockCodeResult } from "../models/models_0";
import { deserializeAws_json1_1GetJobUnlockCodeCommand, serializeAws_json1_1GetJobUnlockCodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
 *         <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job
 *       has been created.</p>
 *
 *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
 *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
 *       along with the manifest to the Snow device through the Snowball client when the client is started
 *       for the first time.</p>
 *
 *          <p>As a best practice, we recommend that you don't save a copy of the
 *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
 *       separately helps prevent unauthorized parties from gaining access to the Snow device associated
 *       with that job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobUnlockCodeCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobUnlockCodeCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetJobUnlockCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobUnlockCodeCommandInput} for command's `input` shape.
 * @see {@link GetJobUnlockCodeCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobUnlockCodeCommand = /** @class */ (function (_super) {
    __extends(GetJobUnlockCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobUnlockCodeCommand(input) {
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
    GetJobUnlockCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "GetJobUnlockCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobUnlockCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobUnlockCodeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobUnlockCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobUnlockCodeCommand(input, context);
    };
    GetJobUnlockCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobUnlockCodeCommand(output, context);
    };
    return GetJobUnlockCodeCommand;
}($Command));
export { GetJobUnlockCodeCommand };
//# sourceMappingURL=GetJobUnlockCodeCommand.js.map