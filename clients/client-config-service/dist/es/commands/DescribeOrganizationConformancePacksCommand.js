import { __extends } from "tslib";
import { DescribeOrganizationConformancePacksRequest, DescribeOrganizationConformancePacksResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrganizationConformancePacksCommand, serializeAws_json1_1DescribeOrganizationConformancePacksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of organization conformance packs. </p>
 * 		       <note>
 *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
 * 			         <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable,
 * 			when you request all the organization conformance packs. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConformancePacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationConformancePacksCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConformancePacksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationConformancePacksCommand(input) {
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
    DescribeOrganizationConformancePacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeOrganizationConformancePacksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationConformancePacksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationConformancePacksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationConformancePacksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrganizationConformancePacksCommand(input, context);
    };
    DescribeOrganizationConformancePacksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrganizationConformancePacksCommand(output, context);
    };
    return DescribeOrganizationConformancePacksCommand;
}($Command));
export { DescribeOrganizationConformancePacksCommand };
//# sourceMappingURL=DescribeOrganizationConformancePacksCommand.js.map