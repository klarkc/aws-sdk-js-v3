import { __extends } from "tslib";
import { CreateHapgRequest, CreateHapgResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHapgCommand, serializeAws_json1_1CreateHapgCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Creates a high-availability partition group. A high-availability partition group is a
 *       group of partitions that spans multiple physical HSMs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, CreateHapgCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, CreateHapgCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new CreateHapgCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHapgCommandInput} for command's `input` shape.
 * @see {@link CreateHapgCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHapgCommand = /** @class */ (function (_super) {
    __extends(CreateHapgCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHapgCommand(input) {
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
    CreateHapgCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudHSMClient";
        var commandName = "CreateHapgCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHapgRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHapgResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHapgCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHapgCommand(input, context);
    };
    CreateHapgCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHapgCommand(output, context);
    };
    return CreateHapgCommand;
}($Command));
export { CreateHapgCommand };
//# sourceMappingURL=CreateHapgCommand.js.map