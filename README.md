# Step 1: Build static version in React
1. Build static components
2. Don't worry about state yet!
3. Use either "top down" approach or "bottom up"

> **Note:** For complex and larger project "bottom up" is easy.

Components:
- Filterable Product Table
  - Search Bar
  - Product Table
    - Product Category Row
    - ProductRow

# Step 2: Find the minimal but complete representation of UI state
>**Now, we need a STATE**

**All the pieces of data:**
1. The original list of products
2. The search text the user has entered
3. The value of the checkbox
4. The filtered list of products

**Which are not state?**
- Does it remain unchanged over time? If so, it isn't state. 
- Is it passed in from a parent via props? If so, it isn't state. 
- Can you compute it based on existing state or props in your component? If so, it definitely isn't state!

**What's left is probably state.**
- search text, checkbox is changed overtime
# Step 3: Identify where your state should live
This step is challenging
**You can figure it out by following these steps!**
- Identify every component that renders something based on that state.
- Find their closest common parent component-a component above them all in the hierarchy.

**Decide where the state should live:**
 - Often, you can put the state directly into their common parent.
- You can also put the state into some component above their common parent.
-  If you can't find a component where it makes sense to own the state.
-  create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

# Step 4: Add inverse dataflow
Pass state setters down to the components