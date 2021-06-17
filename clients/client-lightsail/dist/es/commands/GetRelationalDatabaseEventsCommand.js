import { __extends } from "tslib";
import { GetRelationalDatabaseEventsRequest, GetRelationalDatabaseEventsResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseEventsCommand, serializeAws_json1_1GetRelationalDatabaseEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseEventsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseEventsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseEventsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseEventsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseEventsCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseEventsCommand(input) {
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
    GetRelationalDatabaseEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseEventsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseEventsCommand(input, context);
    };
    GetRelationalDatabaseEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseEventsCommand(output, context);
    };
    return GetRelationalDatabaseEventsCommand;
}($Command));
export { GetRelationalDatabaseEventsCommand };
//# sourceMappingURL=GetRelationalDatabaseEventsCommand.js.map