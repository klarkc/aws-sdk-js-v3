import { __extends } from "tslib";
import { CreateHomeRegionControlRequest, CreateHomeRegionControlResult } from "../models/models_0";
import { deserializeAws_json1_1CreateHomeRegionControlCommand, serializeAws_json1_1CreateHomeRegionControlCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API sets up the home region for the calling account only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, CreateHomeRegionControlCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, CreateHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new CreateHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link CreateHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHomeRegionControlCommand = /** @class */ (function (_super) {
    __extends(CreateHomeRegionControlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHomeRegionControlCommand(input) {
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
    CreateHomeRegionControlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubConfigClient";
        var commandName = "CreateHomeRegionControlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHomeRegionControlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHomeRegionControlResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHomeRegionControlCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHomeRegionControlCommand(input, context);
    };
    CreateHomeRegionControlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHomeRegionControlCommand(output, context);
    };
    return CreateHomeRegionControlCommand;
}($Command));
export { CreateHomeRegionControlCommand };
//# sourceMappingURL=CreateHomeRegionControlCommand.js.map