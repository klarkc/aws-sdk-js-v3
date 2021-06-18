import { __extends } from "tslib";
import { DescribeConnectorEntityRequest, DescribeConnectorEntityResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorEntityCommand,
  serializeAws_restJson1DescribeConnectorEntityCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Provides details regarding the entity used with the connector, with a description of the data model for each entity.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorEntityCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorEntityCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeConnectorEntityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorEntityCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectorEntityCommand = /** @class */ (function (_super) {
  __extends(DescribeConnectorEntityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeConnectorEntityCommand(input) {
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
  DescribeConnectorEntityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "DescribeConnectorEntityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeConnectorEntityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorEntityResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeConnectorEntityCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeConnectorEntityCommand(input, context);
  };
  DescribeConnectorEntityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeConnectorEntityCommand(output, context);
  };
  return DescribeConnectorEntityCommand;
})($Command);
export { DescribeConnectorEntityCommand };
//# sourceMappingURL=DescribeConnectorEntityCommand.js.map
