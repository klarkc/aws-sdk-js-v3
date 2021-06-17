import { __extends } from "tslib";
import { CreateDBInstanceMessage, CreateDBInstanceResult } from "../models/models_0";
import { deserializeAws_queryCreateDBInstanceCommand, serializeAws_queryCreateDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBInstanceCommand = /** @class */ (function (_super) {
    __extends(CreateDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBInstanceCommand(input) {
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
    CreateDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "CreateDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBInstanceCommand(input, context);
    };
    CreateDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBInstanceCommand(output, context);
    };
    return CreateDBInstanceCommand;
}($Command));
export { CreateDBInstanceCommand };
//# sourceMappingURL=CreateDBInstanceCommand.js.map