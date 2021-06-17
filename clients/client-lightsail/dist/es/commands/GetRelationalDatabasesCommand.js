import { __extends } from "tslib";
import { GetRelationalDatabasesRequest, GetRelationalDatabasesResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabasesCommand, serializeAws_json1_1GetRelationalDatabasesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all of your databases in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabasesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabasesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabasesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabasesCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabasesCommand(input) {
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
    GetRelationalDatabasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabasesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabasesCommand(input, context);
    };
    GetRelationalDatabasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabasesCommand(output, context);
    };
    return GetRelationalDatabasesCommand;
}($Command));
export { GetRelationalDatabasesCommand };
//# sourceMappingURL=GetRelationalDatabasesCommand.js.map