import { __extends } from "tslib";
import { GetHomeRegionRequest, GetHomeRegionResult } from "../models/models_0";
import { deserializeAws_json1_1GetHomeRegionCommand, serializeAws_json1_1GetHomeRegionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
 *       services to determine the regional endpoint for calling AWS Application Discovery Service and
 *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
 *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
 *       Migration Hub home region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, GetHomeRegionCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, GetHomeRegionCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new GetHomeRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHomeRegionCommandInput} for command's `input` shape.
 * @see {@link GetHomeRegionCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHomeRegionCommand = /** @class */ (function (_super) {
    __extends(GetHomeRegionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHomeRegionCommand(input) {
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
    GetHomeRegionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubConfigClient";
        var commandName = "GetHomeRegionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHomeRegionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHomeRegionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHomeRegionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetHomeRegionCommand(input, context);
    };
    GetHomeRegionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetHomeRegionCommand(output, context);
    };
    return GetHomeRegionCommand;
}($Command));
export { GetHomeRegionCommand };
//# sourceMappingURL=GetHomeRegionCommand.js.map