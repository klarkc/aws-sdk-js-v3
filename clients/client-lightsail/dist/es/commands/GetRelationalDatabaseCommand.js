import { __extends } from "tslib";
import { GetRelationalDatabaseRequest, GetRelationalDatabaseResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseCommand, serializeAws_json1_1GetRelationalDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseCommand(input) {
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
    GetRelationalDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseCommand(input, context);
    };
    GetRelationalDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseCommand(output, context);
    };
    return GetRelationalDatabaseCommand;
}($Command));
export { GetRelationalDatabaseCommand };
//# sourceMappingURL=GetRelationalDatabaseCommand.js.map