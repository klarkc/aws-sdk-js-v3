import { __extends } from "tslib";
import { GetResourcePoliciesRequest, GetResourcePoliciesResponse } from "../models/models_1";
import { deserializeAws_json1_1GetResourcePoliciesCommand, serializeAws_json1_1GetResourcePoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the resource policies set on individual resources by AWS Resource Access Manager
 *       during cross-account permission grants. Also retrieves the Data Catalog resource
 *       policy.</p>
 *          <p>If you enabled metadata encryption in Data Catalog settings, and you do not have
 *       permission on the AWS KMS key, the operation can't return the Data Catalog resource
 *       policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetResourcePoliciesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourcePoliciesCommand = /** @class */ (function (_super) {
    __extends(GetResourcePoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourcePoliciesCommand(input) {
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
    GetResourcePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetResourcePoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourcePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourcePoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourcePoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResourcePoliciesCommand(input, context);
    };
    GetResourcePoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResourcePoliciesCommand(output, context);
    };
    return GetResourcePoliciesCommand;
}($Command));
export { GetResourcePoliciesCommand };
//# sourceMappingURL=GetResourcePoliciesCommand.js.map