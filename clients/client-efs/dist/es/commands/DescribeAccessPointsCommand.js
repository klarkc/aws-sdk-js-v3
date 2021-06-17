import { __extends } from "tslib";
import { DescribeAccessPointsRequest, DescribeAccessPointsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAccessPointsCommand, serializeAws_restJson1DescribeAccessPointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided.
 *       If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system.
 *       You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccessPointsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccessPointsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeAccessPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccessPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccessPointsCommand = /** @class */ (function (_super) {
    __extends(DescribeAccessPointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccessPointsCommand(input) {
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
    DescribeAccessPointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeAccessPointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccessPointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccessPointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccessPointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAccessPointsCommand(input, context);
    };
    DescribeAccessPointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAccessPointsCommand(output, context);
    };
    return DescribeAccessPointsCommand;
}($Command));
export { DescribeAccessPointsCommand };
//# sourceMappingURL=DescribeAccessPointsCommand.js.map