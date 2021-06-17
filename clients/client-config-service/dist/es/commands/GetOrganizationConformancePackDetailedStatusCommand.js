import { __extends } from "tslib";
import { GetOrganizationConformancePackDetailedStatusRequest, GetOrganizationConformancePackDetailedStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand, serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetOrganizationConformancePackDetailedStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOrganizationConformancePackDetailedStatusCommand = /** @class */ (function (_super) {
    __extends(GetOrganizationConformancePackDetailedStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOrganizationConformancePackDetailedStatusCommand(input) {
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
    GetOrganizationConformancePackDetailedStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetOrganizationConformancePackDetailedStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOrganizationConformancePackDetailedStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOrganizationConformancePackDetailedStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOrganizationConformancePackDetailedStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(input, context);
    };
    GetOrganizationConformancePackDetailedStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(output, context);
    };
    return GetOrganizationConformancePackDetailedStatusCommand;
}($Command));
export { GetOrganizationConformancePackDetailedStatusCommand };
//# sourceMappingURL=GetOrganizationConformancePackDetailedStatusCommand.js.map