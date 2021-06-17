import { __extends } from "tslib";
import { CreateComputerRequest, CreateComputerResult } from "../models/models_0";
import { deserializeAws_json1_1CreateComputerCommand, serializeAws_json1_1CreateComputerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Active Directory computer object in the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateComputerCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateComputerCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateComputerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComputerCommandInput} for command's `input` shape.
 * @see {@link CreateComputerCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateComputerCommand = /** @class */ (function (_super) {
    __extends(CreateComputerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateComputerCommand(input) {
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
    CreateComputerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateComputerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateComputerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateComputerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateComputerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateComputerCommand(input, context);
    };
    CreateComputerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateComputerCommand(output, context);
    };
    return CreateComputerCommand;
}($Command));
export { CreateComputerCommand };
//# sourceMappingURL=CreateComputerCommand.js.map