import { __extends } from "tslib";
import { DescribeWorkspaceImagesRequest, DescribeWorkspaceImagesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspaceImagesCommand, serializeAws_json1_1DescribeWorkspaceImagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes one or more specified images, if the image identifiers
 *          are provided. Otherwise, all images in the account are described. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceImagesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceImagesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceImagesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspaceImagesCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspaceImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspaceImagesCommand(input) {
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
    DescribeWorkspaceImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspaceImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspaceImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspaceImagesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspaceImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspaceImagesCommand(input, context);
    };
    DescribeWorkspaceImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspaceImagesCommand(output, context);
    };
    return DescribeWorkspaceImagesCommand;
}($Command));
export { DescribeWorkspaceImagesCommand };
//# sourceMappingURL=DescribeWorkspaceImagesCommand.js.map