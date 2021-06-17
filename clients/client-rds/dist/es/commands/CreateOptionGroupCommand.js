import { __extends } from "tslib";
import { CreateOptionGroupMessage, CreateOptionGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateOptionGroupCommand, serializeAws_queryCreateOptionGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new option group. You can create up to 20 option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOptionGroupCommand = /** @class */ (function (_super) {
    __extends(CreateOptionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOptionGroupCommand(input) {
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
    CreateOptionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateOptionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOptionGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOptionGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOptionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateOptionGroupCommand(input, context);
    };
    CreateOptionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateOptionGroupCommand(output, context);
    };
    return CreateOptionGroupCommand;
}($Command));
export { CreateOptionGroupCommand };
//# sourceMappingURL=CreateOptionGroupCommand.js.map