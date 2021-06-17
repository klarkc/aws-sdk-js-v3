import { __extends } from "tslib";
import { ModifyHsmRequest, ModifyHsmResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyHsmCommand, serializeAws_json1_1ModifyHsmCommand } from "../protocols/Aws_json1_1";
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
 *          <p>Modifies an HSM.</p>
 *          <important>
 *             <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS
 *         CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure
 *         that your AWS CloudHSM service is configured for high availability, and consider executing this
 *         operation during a maintenance window.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ModifyHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ModifyHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new ModifyHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyHsmCommandInput} for command's `input` shape.
 * @see {@link ModifyHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyHsmCommand = /** @class */ (function (_super) {
    __extends(ModifyHsmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyHsmCommand(input) {
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
    ModifyHsmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudHSMClient";
        var commandName = "ModifyHsmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyHsmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyHsmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyHsmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyHsmCommand(input, context);
    };
    ModifyHsmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyHsmCommand(output, context);
    };
    return ModifyHsmCommand;
}($Command));
export { ModifyHsmCommand };
//# sourceMappingURL=ModifyHsmCommand.js.map