import { __extends } from "tslib";
import { DescribeLunaClientRequest, DescribeLunaClientResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLunaClientCommand, serializeAws_json1_1DescribeLunaClientCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Retrieves information about an HSM client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DescribeLunaClientCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DescribeLunaClientCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new DescribeLunaClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLunaClientCommandInput} for command's `input` shape.
 * @see {@link DescribeLunaClientCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLunaClientCommand = /** @class */ (function (_super) {
    __extends(DescribeLunaClientCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLunaClientCommand(input) {
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
    DescribeLunaClientCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudHSMClient";
        var commandName = "DescribeLunaClientCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLunaClientRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLunaClientResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLunaClientCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLunaClientCommand(input, context);
    };
    DescribeLunaClientCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLunaClientCommand(output, context);
    };
    return DescribeLunaClientCommand;
}($Command));
export { DescribeLunaClientCommand };
//# sourceMappingURL=DescribeLunaClientCommand.js.map