import { IdentitystoreClient } from "./IdentitystoreClient";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
export declare class Identitystore extends IdentitystoreClient {
    /**
     * <p>Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.</p>
     */
    describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
    describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    describeGroup(args: DescribeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves the user metadata and attributes from <code>UserId</code> in an identity store.</p>
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * <p>Lists the attribute name and value of the group that you specified in the search. We only support <code>DisplayName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>GroupId</code> and group <code>DisplayName</code> in the response.</p>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the attribute name and value of the user that you specified in the search. We only support <code>UserName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>UserId</code> and <code>UserName</code> in the response.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
}
