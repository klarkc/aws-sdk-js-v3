import { __extends } from "tslib";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateTableCommand, serializeAws_json1_1CreateTableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new table definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTableCommand = /** @class */ (function (_super) {
    __extends(CreateTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTableCommand(input) {
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
    CreateTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTableCommand(input, context);
    };
    CreateTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTableCommand(output, context);
    };
    return CreateTableCommand;
}($Command));
export { CreateTableCommand };
//# sourceMappingURL=CreateTableCommand.js.map