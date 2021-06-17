import { __extends } from "tslib";
import { GetRelationalDatabaseBundlesRequest, GetRelationalDatabaseBundlesResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseBundlesCommand, serializeAws_json1_1GetRelationalDatabaseBundlesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the
 *       performance specifications for a database.</p>
 *          <p>You can use a bundle ID to create a new database with explicit performance
 *       specifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseBundlesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseBundlesCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseBundlesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseBundlesCommand(input) {
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
    GetRelationalDatabaseBundlesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseBundlesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseBundlesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseBundlesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseBundlesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseBundlesCommand(input, context);
    };
    GetRelationalDatabaseBundlesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseBundlesCommand(output, context);
    };
    return GetRelationalDatabaseBundlesCommand;
}($Command));
export { GetRelationalDatabaseBundlesCommand };
//# sourceMappingURL=GetRelationalDatabaseBundlesCommand.js.map