import { __extends } from "tslib";
import { GetEffectivePermissionsForPathRequest, GetEffectivePermissionsForPathResponse } from "../models/models_0";
import { deserializeAws_json1_1GetEffectivePermissionsForPathCommand, serializeAws_json1_1GetEffectivePermissionsForPathCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the Lake Formation permissions for a specified table or database resource located
 *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetEffectivePermissionsForPathCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetEffectivePermissionsForPathCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetEffectivePermissionsForPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePermissionsForPathCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePermissionsForPathCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEffectivePermissionsForPathCommand = /** @class */ (function (_super) {
    __extends(GetEffectivePermissionsForPathCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEffectivePermissionsForPathCommand(input) {
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
    GetEffectivePermissionsForPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "GetEffectivePermissionsForPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEffectivePermissionsForPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEffectivePermissionsForPathResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEffectivePermissionsForPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetEffectivePermissionsForPathCommand(input, context);
    };
    GetEffectivePermissionsForPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetEffectivePermissionsForPathCommand(output, context);
    };
    return GetEffectivePermissionsForPathCommand;
}($Command));
export { GetEffectivePermissionsForPathCommand };
//# sourceMappingURL=GetEffectivePermissionsForPathCommand.js.map