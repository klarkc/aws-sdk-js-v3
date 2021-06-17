import { __extends } from "tslib";
import { GetRelationalDatabaseBlueprintsRequest, GetRelationalDatabaseBlueprintsResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand, serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes
 *       the major engine version of a database.</p>
 *          <p>You can use a blueprint ID to create a new database that runs a specific database
 *       engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseBlueprintsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseBlueprintsCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseBlueprintsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseBlueprintsCommand(input) {
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
    GetRelationalDatabaseBlueprintsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseBlueprintsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseBlueprintsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseBlueprintsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseBlueprintsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(input, context);
    };
    GetRelationalDatabaseBlueprintsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(output, context);
    };
    return GetRelationalDatabaseBlueprintsCommand;
}($Command));
export { GetRelationalDatabaseBlueprintsCommand };
//# sourceMappingURL=GetRelationalDatabaseBlueprintsCommand.js.map