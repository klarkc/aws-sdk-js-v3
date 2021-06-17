import { __extends } from "tslib";
import { CreateWorkloadInput, CreateWorkloadOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateWorkloadCommand, serializeAws_restJson1CreateWorkloadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new workload.</p>
 *         <p>The owner of a workload can share the workload with other AWS accounts and IAM users
 *             in the same AWS Region. Only the owner of a workload can delete it.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
 *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateWorkloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkloadCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkloadCommand = /** @class */ (function (_super) {
    __extends(CreateWorkloadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkloadCommand(input) {
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
    CreateWorkloadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "CreateWorkloadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkloadInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkloadOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkloadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWorkloadCommand(input, context);
    };
    CreateWorkloadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWorkloadCommand(output, context);
    };
    return CreateWorkloadCommand;
}($Command));
export { CreateWorkloadCommand };
//# sourceMappingURL=CreateWorkloadCommand.js.map