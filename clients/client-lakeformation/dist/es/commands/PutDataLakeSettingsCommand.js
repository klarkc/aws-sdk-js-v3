import { __extends } from "tslib";
import { PutDataLakeSettingsRequest, PutDataLakeSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutDataLakeSettingsCommand, serializeAws_json1_1PutDataLakeSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p>
 *
 * 	        <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, PutDataLakeSettingsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, PutDataLakeSettingsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new PutDataLakeSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDataLakeSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataLakeSettingsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDataLakeSettingsCommand = /** @class */ (function (_super) {
    __extends(PutDataLakeSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDataLakeSettingsCommand(input) {
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
    PutDataLakeSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "PutDataLakeSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDataLakeSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDataLakeSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDataLakeSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutDataLakeSettingsCommand(input, context);
    };
    PutDataLakeSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutDataLakeSettingsCommand(output, context);
    };
    return PutDataLakeSettingsCommand;
}($Command));
export { PutDataLakeSettingsCommand };
//# sourceMappingURL=PutDataLakeSettingsCommand.js.map