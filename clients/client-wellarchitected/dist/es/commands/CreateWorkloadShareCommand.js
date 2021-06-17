import { __extends } from "tslib";
import { CreateWorkloadShareInput, CreateWorkloadShareOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateWorkloadShareCommand, serializeAws_restJson1CreateWorkloadShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a workload share.</p>
 *         <p>The owner of a workload can share it with other AWS accounts and IAM users in the same
 *             AWS Region. Shared access to a workload is not removed until the workload invitation is
 *             deleted.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
 *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkloadShareCommand = /** @class */ (function (_super) {
    __extends(CreateWorkloadShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkloadShareCommand(input) {
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
    CreateWorkloadShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "CreateWorkloadShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkloadShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkloadShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkloadShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWorkloadShareCommand(input, context);
    };
    CreateWorkloadShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWorkloadShareCommand(output, context);
    };
    return CreateWorkloadShareCommand;
}($Command));
export { CreateWorkloadShareCommand };
//# sourceMappingURL=CreateWorkloadShareCommand.js.map