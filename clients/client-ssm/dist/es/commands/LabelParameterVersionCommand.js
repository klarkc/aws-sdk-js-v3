import { __extends } from "tslib";
import { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/models_1";
import { deserializeAws_json1_1LabelParameterVersionCommand, serializeAws_json1_1LabelParameterVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A parameter label is a user-defined alias to help you manage different versions of a
 *    parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments
 *    the version number by one. A label can help you remember the purpose of a parameter when there
 *    are multiple versions. </p>
 *          <p>Parameter labels have the following requirements and restrictions.</p>
 *          <ul>
 *             <li>
 *                <p>A version of a parameter can have a maximum of 10 labels.</p>
 *             </li>
 *             <li>
 *                <p>You can't attach the same label to different versions of the same parameter. For example,
 *      if version 1 has the label Production, then you can't attach Production to version 2.</p>
 *             </li>
 *             <li>
 *                <p>You can move a label from one version of a parameter to another.</p>
 *             </li>
 *             <li>
 *                <p>You can't create a label when you create a new parameter. You must attach a label to a
 *      specific version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>If you no longer want to use a parameter label, then you can either delete it or move it
 *      to a different version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>A label can have a maximum of 100 characters.</p>
 *             </li>
 *             <li>
 *                <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
 *      underscores (_).</p>
 *             </li>
 *             <li>
 *                <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails
 *      to meet these requirements, then the label is not associated with a parameter and the system
 *      displays it in the list of InvalidLabels.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, LabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, LabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new LabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link LabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var LabelParameterVersionCommand = /** @class */ (function (_super) {
    __extends(LabelParameterVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function LabelParameterVersionCommand(input) {
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
    LabelParameterVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "LabelParameterVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LabelParameterVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LabelParameterVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LabelParameterVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1LabelParameterVersionCommand(input, context);
    };
    LabelParameterVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1LabelParameterVersionCommand(output, context);
    };
    return LabelParameterVersionCommand;
}($Command));
export { LabelParameterVersionCommand };
//# sourceMappingURL=LabelParameterVersionCommand.js.map