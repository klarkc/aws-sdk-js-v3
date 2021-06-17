import { __extends } from "tslib";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHsmCommand, serializeAws_json1_1CreateHsmCommand } from "../protocols/Aws_json1_1";
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
 *          <p>Creates an uninitialized HSM instance.</p>
 *          <p>There is an upfront fee charged for each HSM instance that you create with the
 *         <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a
 *       refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select
 *         <b>Account and Billing Support</b>.</p>
 *          <important>
 *             <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the
 *         status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be
 *         initialized when the status changes to <code>RUNNING</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, CreateHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHsmCommand = /** @class */ (function (_super) {
    __extends(CreateHsmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHsmCommand(input) {
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
    CreateHsmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudHSMClient";
        var commandName = "CreateHsmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHsmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHsmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHsmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHsmCommand(input, context);
    };
    CreateHsmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHsmCommand(output, context);
    };
    return CreateHsmCommand;
}($Command));
export { CreateHsmCommand };
//# sourceMappingURL=CreateHsmCommand.js.map