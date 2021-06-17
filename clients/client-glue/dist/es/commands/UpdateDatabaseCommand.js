import { __extends } from "tslib";
import { UpdateDatabaseRequest, UpdateDatabaseResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateDatabaseCommand, serializeAws_json1_1UpdateDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing database definition in a Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDatabaseCommand = /** @class */ (function (_super) {
    __extends(UpdateDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDatabaseCommand(input) {
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
    UpdateDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDatabaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDatabaseCommand(input, context);
    };
    UpdateDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDatabaseCommand(output, context);
    };
    return UpdateDatabaseCommand;
}($Command));
export { UpdateDatabaseCommand };
//# sourceMappingURL=UpdateDatabaseCommand.js.map