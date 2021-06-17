import { __extends } from "tslib";
import { GetRelationalDatabaseLogEventsRequest, GetRelationalDatabaseLogEventsResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand, serializeAws_json1_1GetRelationalDatabaseLogEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseLogEventsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseLogEventsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseLogEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseLogEventsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseLogEventsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseLogEventsCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseLogEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseLogEventsCommand(input) {
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
    GetRelationalDatabaseLogEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseLogEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseLogEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseLogEventsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseLogEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseLogEventsCommand(input, context);
    };
    GetRelationalDatabaseLogEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand(output, context);
    };
    return GetRelationalDatabaseLogEventsCommand;
}($Command));
export { GetRelationalDatabaseLogEventsCommand };
//# sourceMappingURL=GetRelationalDatabaseLogEventsCommand.js.map