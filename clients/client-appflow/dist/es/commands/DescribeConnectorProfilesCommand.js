import { __extends } from "tslib";
import { DescribeConnectorProfilesRequest, DescribeConnectorProfilesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorProfilesCommand,
  serializeAws_restJson1DescribeConnectorProfilesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p>
 *          <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorProfilesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorProfilesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeConnectorProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorProfilesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectorProfilesCommand = /** @class */ (function (_super) {
  __extends(DescribeConnectorProfilesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeConnectorProfilesCommand(input) {
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
  DescribeConnectorProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "DescribeConnectorProfilesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeConnectorProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorProfilesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeConnectorProfilesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeConnectorProfilesCommand(input, context);
  };
  DescribeConnectorProfilesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeConnectorProfilesCommand(output, context);
  };
  return DescribeConnectorProfilesCommand;
})($Command);
export { DescribeConnectorProfilesCommand };
//# sourceMappingURL=DescribeConnectorProfilesCommand.js.map
