import { __extends } from "tslib";
import { CreateDBProxyRequest, CreateDBProxyResponse } from "../models/models_0";
import { deserializeAws_queryCreateDBProxyCommand, serializeAws_queryCreateDBProxyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBProxyCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBProxyCommand = /** @class */ (function (_super) {
    __extends(CreateDBProxyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBProxyCommand(input) {
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
    CreateDBProxyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBProxyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBProxyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBProxyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBProxyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBProxyCommand(input, context);
    };
    CreateDBProxyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBProxyCommand(output, context);
    };
    return CreateDBProxyCommand;
}($Command));
export { CreateDBProxyCommand };
//# sourceMappingURL=CreateDBProxyCommand.js.map