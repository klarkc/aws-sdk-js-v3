import { __extends } from "tslib";
import { CreateDatabaseRequest, CreateDatabaseResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDatabaseCommand, serializeAws_json1_1CreateDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new database in a Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatabaseCommand = /** @class */ (function (_super) {
    __extends(CreateDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatabaseCommand(input) {
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
    CreateDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatabaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDatabaseCommand(input, context);
    };
    CreateDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDatabaseCommand(output, context);
    };
    return CreateDatabaseCommand;
}($Command));
export { CreateDatabaseCommand };
//# sourceMappingURL=CreateDatabaseCommand.js.map