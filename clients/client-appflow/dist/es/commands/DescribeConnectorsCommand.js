import { __extends } from "tslib";
import { DescribeConnectorsRequest, DescribeConnectorsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorsCommand,
  serializeAws_restJson1DescribeConnectorsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow.
 *   If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeConnectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectorsCommand = /** @class */ (function (_super) {
  __extends(DescribeConnectorsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeConnectorsCommand(input) {
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
  DescribeConnectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "DescribeConnectorsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeConnectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeConnectorsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeConnectorsCommand(input, context);
  };
  DescribeConnectorsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeConnectorsCommand(output, context);
  };
  return DescribeConnectorsCommand;
})($Command);
export { DescribeConnectorsCommand };
//# sourceMappingURL=DescribeConnectorsCommand.js.map
